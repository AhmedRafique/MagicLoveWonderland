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

console.log("========================================");
console.log("🚀 ROUND 2: Cross-Feature & Edge Case Verification");
console.log("========================================");
console.log("");

// 1. Data Integrity Checks in config.js
console.log("--- 1. Testing Config Datasets Integrity ---");
const configContent = fs.readFileSync(path.join(root, 'js', 'config.js'), 'utf8');

check("thirtyOneLoveStars has exactly 31 items with valid content", () => {
    const match = configContent.match(/export const thirtyOneLoveStars = \[([\s\S]*?)\];\s*export const openWhenLetters/);
    if (!match) throw new Error("thirtyOneLoveStars array not found");
    const count = [...match[1].matchAll(/id:\s*(\d+)/g)].length;
    if (count !== 31) throw new Error(`Expected 31 love stars, found ${count}`);
});

check("openWhenLetters has 6 heartfelt envelopes with valid content", () => {
    const match = configContent.match(/export const openWhenLetters = \[([\s\S]*?)\];/);
    if (!match) throw new Error("openWhenLetters array not found");
    const ids = [...match[1].matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
    if (ids.length < 6) throw new Error(`Expected at least 6 open when letters, found ${ids.length}`);
});

check("Piano songbook notes syntax valid", () => {
    const match = configContent.match(/export const songbook = \{([\s\S]*?)\};\s*export const/);
    if (!match) throw new Error("songbook object not found");
    const notesMatches = [...match[1].matchAll(/notes:\s*'([^']+)'/g)].map(m => m[1]);
    notesMatches.forEach((notes, idx) => {
        const tokens = notes.split(/\s+/).filter(t => t);
        tokens.forEach(tok => {
            if (tok !== 'P' && !/^[A-G]#?\d$/.test(tok)) {
                throw new Error(`Invalid note token '${tok}' in song index ${idx}`);
            }
        });
    });
});

// 2. CSS Selectors Defined for all Overlays
console.log("");
console.log("--- 2. Checking CSS Overlay Styles ---");
const styleCss = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const expectedClasses = [
    'wax-envelope-overlay',
    'open-when-overlay',
    'star-jar-overlay',
    'sky-lanterns-overlay',
    'polaroid-wall-overlay',
    'slideshow-overlay',
    'crown-studio-overlay',
    'birthday-celebrate-btn',
    'birthday-surprise-card',
    'theme-midnight-lavender',
    'theme-warm-sunset'
];

expectedClasses.forEach(cls => {
    check(`CSS class .${cls} exists in style.css`, () => {
        if (!styleCss.includes(cls)) {
            throw new Error(`Class .${cls} is missing from style.css!`);
        }
    });
});

// 3. Overlay Mutual Exclusion in utils.js
console.log("");
console.log("--- 3. Testing Overlay Mutual Exclusion ---");
const utilsJs = fs.readFileSync(path.join(root, 'js', 'utils.js'), 'utf8');
const allOverlayIds = [
    'weddingTimerOverlay', 'birthdayCountdownOverlay', 'videoOverlay',
    'waxEnvelopeOverlay', 'openWhenOverlay', 'starJarOverlay',
    'skyLanternsOverlay', 'polaroidWallOverlay', 'slideshowOverlay',
    'birthdayCrownOverlay', 'photoMosaicOverlay', 'playlistOverlay'
];

allOverlayIds.forEach(id => {
    check(`toggleOverlay cleans up #${id}`, () => {
        if (!utilsJs.includes(id)) {
            throw new Error(`Overlay #${id} not included in toggleOverlay cleanup list!`);
        }
    });
});

// 4. Modal Close Escape Key Coverage
console.log("");
console.log("--- 4. Testing Escape Key Focus Trap Coverage ---");
check("trapFocus handles Escape key across all overlays", () => {
    if (!utilsJs.includes("e.key === 'Escape'")) {
        throw new Error("Escape key handling missing from trapFocus in utils.js!");
    }
    if (!utilsJs.includes("toggleOverlay(container, false)")) {
        throw new Error("Fallback toggleOverlay close missing on Escape key press!");
    }
});

// 5. Audio Web Audio Synthesizer Graceful Fallbacks
console.log("");
console.log("--- 5. Checking Audio Fallback Resilience ---");
const audioJs = fs.readFileSync(path.join(root, 'js', 'audio.js'), 'utf8');
check("playChime and playHarpStrum auto-resume AudioContext", () => {
    if (!audioJs.includes("audioContext.state === 'suspended'")) {
        throw new Error("AudioContext suspension check missing!");
    }
    if (!audioJs.includes("audioContext.resume()")) {
        throw new Error("AudioContext resume missing!");
    }
});

console.log("");
console.log("========================================");
console.log(`Round 2 Failures: ${failures.length}`);
if (failures.length > 0) {
    failures.forEach(f => console.log(` - [${f.title}]: ${f.error}`));
} else {
    console.log("ROUND 2 PASSED WITH 0 FAILURES!");
}
