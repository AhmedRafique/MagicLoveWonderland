const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
let failures = [];

function check(title, fn) {
    try {
        fn();
        console.log("PASS: " + title);
    } catch (e) {
        console.error("FAIL: " + title + " -> " + e.message);
        failures.push({ title, error: e.message });
    }
}

// 1. JS Syntax Check
console.log("--- 1. Testing JS Syntax ---");
const jsFiles = ['Winwheel.js', 'sw.js', ...fs.readdirSync(path.join(root, 'js')).filter(f => f.endsWith('.js')).map(f => 'js/' + f)];
jsFiles.forEach(relPath => {
    check("Syntax of " + relPath, () => {
        const fullPath = path.join(root, relPath);
        const code = fs.readFileSync(fullPath, 'utf8');
        const cleanCode = code
            .replace(/import\s*[\s\S]*?from\s*['"][^'"]*['"];?/g, '// import')
            .replace(/export\s+(default\s+)?(async\s+)?(function|class|const|let|var)\s+/g, '$2$3 ')
            .replace(/export\s*\{[^}]*\};?/g, '// export');
        new Function(cleanCode);
    });
});

// 2. Asset existence check
console.log("");
console.log("--- 2. Checking Assets Referenced in config.js ---");
const configContent = fs.readFileSync(path.join(root, 'js', 'config.js'), 'utf8');

check("galleryPhotos exist in photos/ folder", () => {
    const match = configContent.match(/export const galleryPhotos = \[([\s\S]*?)\];/);
    if (!match) throw new Error("galleryPhotos array not found");
    const photos = match[1].match(/"([^"]+)"/g).map(s => s.replace(/"/g, ''));
    const missing = [];
    photos.forEach(p => {
        const full = path.join(root, 'photos', p);
        if (!fs.existsSync(full)) missing.push(p);
    });
    if (missing.length > 0) throw new Error("Missing photos in photos/: " + missing.join(', '));
});

check("timelineEvents photos exist in timeline-photos/ folder", () => {
    const match = configContent.match(/export const timelineEvents = \[([\s\S]*?)\];\s*export const dailyQuestions/);
    if (!match) throw new Error("timelineEvents array not found");
    const photos = [...match[1].matchAll(/photo:\s*"([^"]+)"/g)].map(m => m[1]);
    const missing = [];
    photos.forEach(p => {
        const full = path.join(root, 'timeline-photos', p);
        if (!fs.existsSync(full)) missing.push(p);
    });
    if (missing.length > 0) throw new Error("Missing timeline photos: " + missing.join(', '));
});

check("mapPoints photos exist", () => {
    const match = configContent.match(/export const mapPoints = \[([\s\S]*?)\];\s*export const playlistData/);
    if (!match) throw new Error("mapPoints array not found");
    const photos = [...match[1].matchAll(/photo:\s*"([^"]+)"/g)].map(m => m[1]);
    const missing = [];
    photos.forEach(p => {
        const full = path.join(root, p);
        if (!fs.existsSync(full)) missing.push(p);
    });
    if (missing.length > 0) throw new Error("Missing map point photos: " + missing.join(', '));
});

check("puzzleSurprises photo exists in photos/ folder", () => {
    const match = configContent.match(/content:\s*'([^']+\.(?:jpe?g|png|gif|webp))'/i);
    if (match) {
        const p = match[1];
        const full = path.join(root, 'photos', p);
        if (!fs.existsSync(full)) throw new Error("Missing puzzle photo: " + p);
    }
});

// 3. Audio & Video files
console.log("");
console.log("--- 3. Checking Audio/Video Files ---");
const audioFiles = ['background-music.mp3', 'celebration.mp3', 'heartbeat.mp3', 'tick.mp3', 'voice-message.mp3', 'OurStory.mp4'];
audioFiles.forEach(f => {
    check("Media file exists: " + f, () => {
        if (!fs.existsSync(path.join(root, f))) throw new Error("File not found: " + f);
    });
});

// 4. Check HTML element IDs referenced in JS files
console.log("");
console.log("--- 4. Checking DOM IDs in JS vs index.html ---");
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const idMatchesInHtml = new Set([...indexHtml.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]));

jsFiles.forEach(relPath => {
    const fullPath = path.join(root, relPath);
    const code = fs.readFileSync(fullPath, 'utf8');
    const idCalls = [...code.matchAll(/getElementById\(["']([^"']+)["']\)/g)].map(m => m[1]);
    idCalls.forEach(id => {
        check("DOM ID '" + id + "' called in " + relPath + " exists in index.html", () => {
            if (!idMatchesInHtml.has(id)) {
                throw new Error("Element #" + id + " referenced in " + relPath + " does not exist in index.html!");
            }
        });
    });
});

// 5. Check onclick handlers in index.html vs window assignments in main.js
console.log("");
console.log("--- 5. Checking HTML onclick handlers vs window.* assignments ---");
const mainJs = fs.readFileSync(path.join(root, 'js', 'main.js'), 'utf8');
const onclickCalls = [...indexHtml.matchAll(/onclick=["']([a-zA-Z0-9_]+)\(/g)].map(m => m[1]);
const uniqueOnclicks = [...new Set(onclickCalls)];

uniqueOnclicks.forEach(fnName => {
    check("onclick function '" + fnName + "' is exposed on window", () => {
        if (!mainJs.includes("window." + fnName)) {
            throw new Error("Function '" + fnName + "' called by onclick is not assigned to window in main.js!");
        }
    });
});

console.log("");
console.log("=======================================");
console.log("Total Failures: " + failures.length);
if (failures.length > 0) {
    failures.forEach(f => console.log(" - [" + f.title + "]: " + f.error));
} else {
    console.log("ALL TESTS PASSED WITH 0 FAILURES!");
}
