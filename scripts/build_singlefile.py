import os, base64, re, json, urllib.request

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUT = os.path.join(ROOT, 'singlefile.html')

def read(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

# Helper to create data URIs for a file
def data_uri_for(path):
    ext = path.split('.')[-1].lower()
    if ext in ['jpg','jpeg','jfif']: mime = 'image/jpeg'
    elif ext == 'png': mime = 'image/png'
    elif ext == 'svg' or path.lower().endswith('.svg'): mime = 'image/svg+xml'
    elif ext == 'webp': mime = 'image/webp'
    elif ext == 'mp3': mime = 'audio/mpeg'
    elif ext == 'mp4': mime = 'video/mp4'
    else: mime = 'application/octet-stream'
    b = open(path, 'rb').read()
    return 'data:%s;base64,%s' % (mime, base64.b64encode(b).decode('ascii'))

# Read base files
index = read(os.path.join(ROOT, 'index.html'))
style = read(os.path.join(ROOT, 'style.css'))

# Inline CSS
index = index.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + style + '\n</style>')

# Inline local scripts (Winwheel, celestial)
for script_src in ['celestial.min.js','Winwheel.js']:
    p = os.path.join(ROOT, script_src)
    if os.path.exists(p):
        content = read(p)
        index = index.replace(f'<script defer src="{script_src}"></script>', f'<script>\n{content}\n</script>')
        index = index.replace(f'<script src="{script_src}"></script>', f'<script>\n{content}\n</script>')

def fetch_url(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    return urllib.request.urlopen(req, timeout=15).read().decode('utf-8')

# Fetch the full jsPDF library from CDN and inline it (replacing the local loader stub)
jspdf_url = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js'
jspdf_content = None
try:
    print('Fetching full jsPDF library from', jspdf_url)
    jspdf_content = fetch_url(jspdf_url)
except Exception as e:
    print('Failed to fetch jsPDF from CDN:', e)
    # Fallback: read the local loader as-is
    local_jspdf = os.path.join(ROOT, 'js', 'libs', 'jspdf.umd.min.js')
    if os.path.exists(local_jspdf):
        jspdf_content = read(local_jspdf)

if jspdf_content:
    # Replace the local loader script tag with the full library
    index = index.replace(
        '<script src="js/libs/jspdf.umd.min.js"></script>',
        '<script>\n' + jspdf_content + '\n</script>'
    )

# Fetch and inline CDN scripts (d3, gsap)
cdn_replacements = {
    'https://d3js.org/d3.v3.min.js': 'd3.v3.min.js',
    'https://d3js.org/d3.geo.projection.v0.min.js': 'd3.geo.projection.v0.min.js',
    'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js': 'gsap.min.js',
}
for url, localname in cdn_replacements.items():
    try:
        print('Fetching', url)
        txt = fetch_url(url)
        index = index.replace(f'<script defer src="{url}"></script>', f'<script>\n{txt}\n</script>')
        index = index.replace(f'<script src="{url}"></script>', f'<script>\n{txt}\n</script>')
    except Exception as e:
        print('Failed to fetch', url, e)

# Build mapping of local assets to data URIs (images, audio)
asset_map = {}
# Directories to include
for dir_name in ['photos', 'timeline-photos', 'icons']:
    dir_path = os.path.join(ROOT, dir_name)
    if os.path.isdir(dir_path):
        for fn in os.listdir(dir_path):
            full = os.path.join(dir_path, fn)
            if os.path.isfile(full):
                asset_map[fn] = data_uri_for(full)
# Also include root-level assets we may want inlined
for root_asset in ['background-music.mp3','voice-message.mp3','celebration.mp3','heartbeat.mp3','tick.mp3']:
    p = os.path.join(ROOT, root_asset)
    if os.path.exists(p):
        asset_map[root_asset] = data_uri_for(p)

# Bundle module JS by concatenating files in dependency order and stripping imports/exports
js_order = ['js/config.js','js/utils.js','js/audio.js','js/story.js','js/games.js','js/visuals.js','js/journey.js','js/print.js','js/main.js']
module_parts = []
for js in js_order:
    path = os.path.join(ROOT, js)
    if os.path.exists(path):
        code = read(path)
        # If this is config.js, replace photo filenames with data URIs from asset_map
        if js.endswith('config.js'):
            for filename, dataurl in asset_map.items():
                # Replace occurrences of "filename" or 'filename' with the data URL literal
                code = code.replace('"' + filename + '"', '"' + dataurl + '"')
                code = code.replace("'" + filename + "'", '"' + dataurl + '"')
        # remove import lines (including multi-line imports and trailing comments)
        code = re.sub(r"^\s*import\s+(?:[^;]*?)\s+from\s+['\"].+?['\"];?[^\n]*\n", '', code, flags=re.M | re.S)
        # remove export keywords
        code = re.sub(r"\bexport\b\s+", '', code)
        module_parts.append(code)
# Read small JSON data files into embedded_data_dict to bypass CORS on file://
data_dir = os.path.join(ROOT, 'data')
embedded_data_dict = {}
if os.path.isdir(data_dir):
    for fn in os.listdir(data_dir):
        if fn.endswith('.json'):
            p = os.path.join(data_dir, fn)
            # Embed if smaller than 1.5 MB
            if os.path.getsize(p) < 1500000:
                with open(p, 'r', encoding='utf-8') as f:
                    try:
                        embedded_data_dict['data/' + fn] = json.load(f)
                    except json.JSONDecodeError:
                        print('Failed to parse', fn)

override_code = """
// --- D3 JSON proxy for offline data ---
const __embedded_data = %s;
const __orig_d3_json = window.d3 ? window.d3.json : null;
if (window.d3) {
    window.d3.json = function(url, callback) {
        if (__embedded_data[url]) {
            setTimeout(function() { callback(null, __embedded_data[url]); }, 0);
        } else {
            if (__orig_d3_json) return __orig_d3_json(url, callback);
        }
    };
}
""" % (json.dumps(embedded_data_dict))

module_parts.insert(0, override_code)
module_code = '\n'.join(module_parts)

# Safety patches for runtime image usage: when code constructs paths like `photos/${photo}` or `timeline-photos/${event.photo}`
# replace those occurrences so they fall back to data URIs when the data URL is present in the variable
module_code = module_code.replace("img.src = `photos/${photo}`", "img.src = (photo && photo.startsWith && photo.startsWith('data:')) ? photo : ('photos/' + photo);")
module_code = module_code.replace("const imgHTML = `<img src=\"timeline-photos/${event.photo}\" class=\"timeline-photo\" alt=\"${event.title}\" onerror=\"this.style.display='none'; this.onerror=null;\">`", "let photoSrc = (event.photo && event.photo.startsWith && event.photo.startsWith('data:')) ? event.photo : ('timeline-photos/' + event.photo); const imgHTML = `<img src=\"${photoSrc}\" class=\"timeline-photo\" alt=\"${event.title}\" onerror=\"this.style.display='none'; this.onerror=null;\">`")
module_code = module_code.replace("tile.style.backgroundImage = `url(photos/${photo})`", "const tileSrc = (photo && photo.startsWith && photo.startsWith('data:')) ? photo : ('photos/' + photo); tile.style.backgroundImage = 'url(' + tileSrc + ')';")

# Use a regular script (NOT type="module") so the file works when opened via file:// protocol.
# ES modules are blocked by CORS on file:// URLs, which prevents ALL JavaScript from running.
# Wrap in an IIFE to avoid polluting the global scope with internal variables,
# but explicitly assign functions to window so HTML onclick handlers still work.
index = index.replace('<script type="module" src="./js/main.js"></script>', '<script>\n(function(){\n' + module_code + '\n})();\n</script>')

# Inline manifest (convert to data URL and update link), and inline referenced icon files
manifest_path = os.path.join(ROOT, 'manifest.json')
if os.path.exists(manifest_path):
    manifest_raw = read(manifest_path)
    try:
        manifest_obj = json.loads(manifest_raw)
        # Inline icon files as data URLs if present
        icons = manifest_obj.get('icons', [])
        new_icons = []
        for ic in icons:
            src = ic.get('src')
            icon_path = os.path.join(ROOT, src.lstrip('/'))
            if os.path.exists(icon_path):
                ic['src'] = data_uri_for(icon_path)
            new_icons.append(ic)
        manifest_obj['icons'] = new_icons
        manifest_str = json.dumps(manifest_obj)
        manifest_dataurl = 'data:application/json;base64,' + base64.b64encode(manifest_str.encode('utf-8')).decode('ascii')
        # Replace link href
        index = re.sub(r'href=["\']/?manifest\.json["\']', 'href="' + manifest_dataurl + '"', index)
    except Exception as e:
        print('Manifest inline failed:', e)

# Small cleanup: remove service worker registration that references absolute /sw.js when running from file://
index = re.sub(r"navigator\.serviceWorker\.register\(['\"]/?sw\.js['\"]\)", "/* SW registration left as-is; requires HTTP */ navigator.serviceWorker.register('sw.js')", index)

# Write out singlefile
with open(OUT, 'w', encoding='utf-8') as f:
    f.write(index)

print('Single-file HTML written to', OUT)
