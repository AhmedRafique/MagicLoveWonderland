/* =========================================
   ✨ Journey Features (Timer, Vows, Dreams)
   ========================================= */
import { toggleOverlay } from './utils.js';
import { dailyQuestions, mapPoints } from './config.js';
import { createFireworks } from './visuals.js'; // Circular import warning handled by module loading order usually, but safer if visuals doesn't depend on journey.

const WEDDING_DATE_KEY = "2026-03-28T00:00:00"; 

/* --- Wedding Timer --- */
let weddingTimerInterval;

export function startWeddingTimer() {
    const weddingDate = new Date("2026-03-28T15:00:00"); 
    const titleEl = document.getElementById('timerTitle');
    const subtitleEl = document.getElementById('timerSubtitle');
    const footerEl = document.getElementById('timerFooterMessage');
    
    if (weddingTimerInterval) clearInterval(weddingTimerInterval);

    function updateTimer() {
        const now = new Date();
        const diff = now - weddingDate;
        const isBeforeWedding = diff < 0;
        let distance = Math.abs(diff);

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (isBeforeWedding) {
            titleEl.textContent = "Counting down to our Forever!";
            subtitleEl.innerHTML = "Until we say 'I Do' 💍";
            footerEl.textContent = "I can't wait to see you in your white dress. ❤️";
            updateTimerBox(1, days, "Days");
            updateTimerBox(2, hours, "Hours");
            updateTimerBox(3, minutes, "Minutes");
            updateTimerBox(4, seconds, "Seconds");
        } else {
            titleEl.textContent = "Happily Married For:";
            let yearsMarried = now.getFullYear() - weddingDate.getFullYear();
            let monthDiff = now.getMonth() - weddingDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < weddingDate.getDate())) {
                yearsMarried--;
            }

            if (yearsMarried >= 1) {
                subtitleEl.innerHTML = `Since March 28, 2026 ❤️`;
                footerEl.textContent = "Every second with you is a blessing.";
                updateTimerBox(1, yearsMarried, "Years");
                updateTimerBox(2, days % 365, "Days");
                updateTimerBox(3, hours, "Hours");
                updateTimerBox(4, minutes, "Minutes");
            } else {
                subtitleEl.innerHTML = "Our journey as Husband & Wife";
                footerEl.textContent = "Just the beginning of our forever.";
                updateTimerBox(1, days, "Days");
                updateTimerBox(2, hours, "Hours");
                updateTimerBox(3, minutes, "Minutes");
                updateTimerBox(4, seconds, "Seconds");
            }
        }
    }

    function updateTimerBox(idx, value, label) {
        document.getElementById(`timerValue${idx}`).textContent = String(value).padStart(2, '0');
        document.getElementById(`timerLabel${idx}`).textContent = label;
    }

    updateTimer();
    toggleOverlay('weddingTimerOverlay', true);
    weddingTimerInterval = setInterval(updateTimer, 1000);
}

/* --- Vows Vault --- */
export function initVowsVault() {
    toggleOverlay('time-capsule-overlay', true);
    const inputArea = document.getElementById('vault-input-area');
    const lockedMsg = document.getElementById('vault-locked-message');
    const unlockedMsg = document.getElementById('vault-unlocked-message');
    const revealedText = document.getElementById('revealed-vows');
    
    const savedVows = localStorage.getItem('radwaWeddingVows');
    const isLocked = localStorage.getItem('radwaVowsLocked') === 'true';
    const now = new Date();
    const unlockDate = new Date(WEDDING_DATE_KEY);

    if (inputArea) inputArea.style.display = 'none';
    if (lockedMsg) lockedMsg.style.display = 'none';
    if (unlockedMsg) unlockedMsg.style.display = 'none';

    if (!isLocked) {
        if (inputArea) inputArea.style.display = 'block';
        if (savedVows) document.getElementById('time-capsule-message').value = savedVows;
    } else {
        if (now < unlockDate) {
            if (lockedMsg) lockedMsg.style.display = 'block';
        } else {
            if (unlockedMsg) unlockedMsg.style.display = 'block';
            if (revealedText) revealedText.innerHTML = savedVows ? savedVows.replace(/\n/g, '<br>') : "No vows found.";
            createFireworks(10);
        }
    }
}

export function hideTimeCapsule() {
    toggleOverlay('time-capsule-overlay', false);
}

/* --- Daily Question --- */
export function getDailyQuestion() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dailyQuestions[dayOfYear % dailyQuestions.length];
}

export function showDailyQuestion() {
    document.getElementById('dailyQuestionText').textContent = getDailyQuestion();
    toggleOverlay('dailyQuestionOverlay', true);
}

export function hideDailyQuestion() {
    toggleOverlay('dailyQuestionOverlay', false);
}

/* --- Dreams Board --- */
let futureDreams = JSON.parse(localStorage.getItem('futureDreams')) || [
    "Travel to Japan during cherry blossom season 🌸",
    "Travel to Turkey and visit CUKUR place ◀️⏺️⏺️⏺️▶️",
    "Travel to Sweden and watch the northern lights together 🌌",
    "Learn to cook a fancy Italian meal together 🍝",
    "Build a cozy blanket fort for a movie marathon 🎬",
    "Watch the sunrise from a hot air balloon 🎈",
    "Write our own story book 📖",
    "Have a picnic under the stars ✨"
];

export function saveDreams() {
    localStorage.setItem('futureDreams', JSON.stringify(futureDreams));
}

export function renderDreams() {
    const board = document.getElementById('dreamsBoard');
    board.innerHTML = ''; 
    futureDreams.forEach(dreamText => {
        const note = document.createElement('div');
        note.className = 'dream-note';
        note.textContent = dreamText;
        note.style.setProperty('--rotation', Math.random() * 8 - 4);
        board.appendChild(note);
    });
}

export function showFutureDreams() {
    toggleOverlay('futureDreamsOverlay', true);
    renderDreams();
}

export function hideFutureDreams() {
    toggleOverlay('futureDreamsOverlay', false);
}

export function addDream() {
    const input = document.getElementById('dreamInput');
    const newDream = input.value.trim();
    if (newDream) {
        futureDreams.push(newDream);
        input.value = ''; 
        saveDreams();
        renderDreams();
    }
}

/* --- World Map --- */
export function showOurWorld() {
    toggleOverlay('ourWorldOverlay', true);
    renderMapPoints();
}

export function hideOurWorld() {
    toggleOverlay('ourWorldOverlay', false);
    document.getElementById('mapPointDetailCard').style.display = 'none';
}

export function renderMapPoints() {
    const container = document.querySelector('.world-map-background');
    container.innerHTML = ''; 
    mapPoints.forEach(point => {
        const pointEl = document.createElement('div');
        pointEl.className = `map-point ${point.type}`;
        pointEl.style.left = `${point.x}%`;
        pointEl.style.top = `${point.y}%`;
        pointEl.onclick = () => showMapPointDetails(point);
        container.appendChild(pointEl);
    });
}

export function showMapPointDetails(point) {
    const card = document.getElementById('mapPointDetailCard');
    document.getElementById('mapPointPhoto').innerHTML = `<img src="${point.photo}" alt="${point.title}" onerror="this.style.display='none'">`;
    document.getElementById('mapPointTitle').textContent = point.title;
    document.getElementById('mapPointDate').textContent = point.date;
    document.getElementById('mapPointDescription').textContent = point.description;
    card.style.display = 'block';
}

/* --- Celestial Map --- */
let celestialMapInitialized = false;

export function showCelestialMap() {
    toggleOverlay('celestialOverlay', true);
    requestAnimationFrame(generateStarMap);
}

export function hideCelestialMap() {
    toggleOverlay('celestialOverlay', false);
    const mapContainer = document.getElementById("celestial-map");
    if (mapContainer) mapContainer.innerHTML = "";
    celestialMapInitialized = false; 
}

export function generateStarMap() {
    if (typeof Celestial === 'undefined') {
        console.error("Celestial library not loaded.");
        alert("The Celestial library is missing or corrupt. The star map cannot be generated.");
        return;
    }
    const dateValue = document.getElementById('specialDate').value;
    const date = dateValue ? new Date(dateValue + 'T12:00:00Z') : new Date();
    if (celestialMapInitialized) {
        Celestial.skyview({ date: date });
    } else {
        const config = {
            width: 1024, 
            projection: "stereographic",
            transform: "equatorial", 
            location: true, 
            geopos: [30.0444, 31.2357], 
            datapath: "data/", 
            date: date,
            background: { fill: "#0a0f1b", stroke: "#ffb6d5", opacity: 1 },
            stars: {
                colors: true,
                names: true,
                style: { fill: "#ffffff", opacity: 1 },
                limit: 8, 
                size: 5
            },
            constellations: {
                names: true,
                nameStyle: { fill: "#ffb6d5", align: "center", baseline: "middle", opacity: 0.8 },
                lines: true,
                lineStyle: { stroke: "#ffb6d5", width: 1, opacity: 0.6 }
            },
            mw: {
                show: true, 
                style: { fill: "#ffffff", opacity: 0.15 }
            },
            planets: { show: false },
            horizon: { 
                show: true, 
                stroke: "#ffb6d5", 
                width: 1.0, 
                fill: "#000000",
                opacity: 0.4 
            },
            daylight: { show: true }
        };
        const mapContainer = document.getElementById("celestial-map");
        if (!mapContainer) return;
        
        if (mapContainer.clientHeight === 0) {
            mapContainer.style.height = "100%";
        }
        config.container = "celestial-map"; 
        try {
            Celestial.display(config);
            celestialMapInitialized = true; 
        } catch (e) {
            console.error("Error displaying celestial map:", e);
        }
    }
}

export function initializeCelestialFeature() {
    const celestialButton = document.getElementById('celestialButton');
    if (!celestialButton) return;
    let attempts = 0;
    const maxAttempts = 50; 
    const checkInterval = setInterval(() => {
        if (typeof Celestial !== 'undefined') {
            clearInterval(checkInterval); 
            celestialButton.disabled = false;
            celestialButton.title = "See the stars on our special day";
            celestialButton.addEventListener('click', showCelestialMap);
        } else if (attempts++ > maxAttempts) {
            clearInterval(checkInterval); 
            celestialButton.title = "Star map is currently unavailable.";
            console.error("Celestial library failed to load.");
        }
    }, 100); 
}