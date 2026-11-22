/* =========================================
   ✨ Journey Features (Timer, Vows, Dreams)
   ========================================= */
import { toggleOverlay } from './utils.js';
import { dailyQuestions, mapPoints, BIRTHDAY, thirtyOneLoveStars } from './config.js';
import { createFireworks } from './visuals.js';
import { playChime, playHarpStrum, triggerHaptic } from './audio.js';

const WEDDING_DATE_KEY = "2026-03-28T15:00:00"; 

/* --- Birthday Countdown --- */
let birthdayTimerInterval;

export function startBirthdayCountdown() {
    toggleOverlay('birthdayCountdownOverlay', true);
    
    if (birthdayTimerInterval) clearInterval(birthdayTimerInterval);

    function updateBdayTimer() {
        const now = new Date();
        const birthDate = new Date(BIRTHDAY.year, BIRTHDAY.month, BIRTHDAY.date);
        
        let ageYears = now.getFullYear() - birthDate.getFullYear();
        let ageMonths = now.getMonth() - birthDate.getMonth();
        let ageDays = now.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            ageDays += prevMonth.getDate();
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        document.getElementById('ageInYears').textContent = ageYears;
        document.getElementById('ageInMonths').textContent = ageMonths;
        document.getElementById('ageInDays').textContent = ageDays;

        let nextBday = new Date(now.getFullYear(), BIRTHDAY.month, BIRTHDAY.date);
        if (now.getTime() > nextBday.getTime() + 86400000) { 
            nextBday.setFullYear(now.getFullYear() + 1);
        }

        let diff = nextBday - now;
        let isToday = false;
        
        if (diff < 0) { 
            diff = 0;
            isToday = true;
        }

        const distance = diff;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (isToday) {
            document.getElementById('bdayTimerTitle').textContent = "Happy Birthday!";
            document.getElementById('bdayTimerTitle').classList.add('birthday-today-message');
        } else {
            document.getElementById('bdayTimerTitle').textContent = "Counting down to your Birthday!";
            document.getElementById('bdayTimerTitle').classList.remove('birthday-today-message');
        }

        document.getElementById('bdayTimerValue1').textContent = String(days).padStart(2, '0');
        document.getElementById('bdayTimerValue2').textContent = String(hours).padStart(2, '0');
        document.getElementById('bdayTimerValue3').textContent = String(minutes).padStart(2, '0');
        document.getElementById('bdayTimerValue4').textContent = String(seconds).padStart(2, '0');
    }

    updateBdayTimer();
    birthdayTimerInterval = setInterval(updateBdayTimer, 1000);
}

export function celebrateBirthdaySurprise() {
    createFireworks();
    try {
        const sound = new Audio('celebration.mp3');
        sound.volume = 0.6;
        sound.play().catch(() => {});
    } catch (e) {}

    createBirthdayConfetti();

    const surpriseCard = document.getElementById('birthdaySurpriseCard');
    if (surpriseCard) {
        surpriseCard.style.display = surpriseCard.style.display === 'none' ? 'block' : 'none';
        surpriseCard.scrollIntoView({ behavior: 'smooth' });
    }
}

export function blowOutBirthdayCandles() {
    const flames = document.querySelectorAll('.cake-candle-flame');
    flames.forEach(f => {
        f.style.display = 'none';
    });
    const wishMsg = document.getElementById('birthdayWishRevealed');
    if (wishMsg) {
        wishMsg.style.display = 'block';
    }
    const blowBtn = document.getElementById('blowCandlesBtn');
    if (blowBtn) {
        blowBtn.textContent = '✨ Wish Made! ✨';
        blowBtn.disabled = true;
    }
    createFireworks();
}

function createBirthdayConfetti() {
    const container = document.getElementById('animation-container');
    if (!container) return;
    const items = ['🎈', '🎂', '✨', '💖', '👑', '🎉', '🍰', '⭐'];
    for (let i = 0; i < 35; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'birthday-confetti-particle';
        confetti.textContent = items[Math.floor(Math.random() * items.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-30px';
        confetti.style.fontSize = (Math.random() * 1.5 + 1.2) + 'em';
        confetti.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5500);
    }
}

/* --- Married Life Timer --- */
let weddingTimerInterval;

export function startWeddingTimer() {
    const weddingDate = new Date("2026-03-28T15:00:00"); 
    const titleEl = document.getElementById('timerTitle');
    const subtitleEl = document.getElementById('timerSubtitle');
    const footerEl = document.getElementById('timerFooterMessage');
    
    if (weddingTimerInterval) clearInterval(weddingTimerInterval);

    function updateTimer() {
        const now = new Date();
        const distance = Math.max(0, now - weddingDate);

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let yearsMarried = now.getFullYear() - weddingDate.getFullYear();
        let monthDiff = now.getMonth() - weddingDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < weddingDate.getDate())) {
            yearsMarried--;
        }

        titleEl.textContent = "💍 Happily Married For:";
        subtitleEl.innerHTML = "Since March 28, 2026 — Husband & Wife Forever ✨";
        footerEl.textContent = "Every single second as your husband is the greatest blessing of my life. ❤️";

        if (yearsMarried >= 1) {
            updateTimerBox(1, yearsMarried, "Years");
            updateTimerBox(2, days % 365, "Days");
            updateTimerBox(3, hours, "Hours");
            updateTimerBox(4, minutes, "Minutes");
        } else {
            updateTimerBox(1, days, "Days");
            updateTimerBox(2, hours, "Hours");
            updateTimerBox(3, minutes, "Minutes");
            updateTimerBox(4, seconds, "Seconds");
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

/* --- Married Status --- */
export function showMarriageVows() {}
export function hideMarriageVows() {}

export const initVowsVault = showMarriageVows;
export const hideTimeCapsule = hideMarriageVows;

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

/* --- 31 Things I Love About Radwa (Glowing Star Jar) --- */
export function showStarJar() {
    toggleOverlay('starJarOverlay', true);
    renderStarJar();
}

export function hideStarJar() {
    toggleOverlay('starJarOverlay', false);
}

function getOpenedStars() {
    try {
        return JSON.parse(localStorage.getItem('radwaOpenedStars') || '[]');
    } catch (e) {
        return [];
    }
}

function renderStarJar() {
    const jarGrid = document.getElementById('starJarGrid');
    const counterEl = document.getElementById('starJarCounter');
    if (!jarGrid) return;

    const opened = getOpenedStars();
    if (counterEl) {
        counterEl.textContent = `${opened.length} of ${thirtyOneLoveStars.length} Stars Unfolded`;
    }

    jarGrid.innerHTML = '';
    thirtyOneLoveStars.forEach(item => {
        const isOpened = opened.includes(item.id);
        const star = document.createElement('div');
        star.className = `star-jar-item ${isOpened ? 'star-opened' : 'star-glowing'}`;
        star.innerHTML = `
            <span class="star-icon">${isOpened ? '🌟' : '⭐'}</span>
            <span class="star-number">#${item.id}</span>
        `;
        star.onclick = () => openStar(item.id);
        jarGrid.appendChild(star);
    });
}

export function openStar(starId) {
    const star = thirtyOneLoveStars.find(s => s.id === starId);
    if (!star) return;

    playChime();
    triggerHaptic('light');

    const opened = getOpenedStars();
    if (!opened.includes(starId)) {
        opened.push(starId);
        localStorage.setItem('radwaOpenedStars', JSON.stringify(opened));
        renderStarJar();

        if (opened.length === thirtyOneLoveStars.length) {
            createFireworks();
        }
    }

    const modal = document.getElementById('starDetailModal');
    const body = document.getElementById('starDetailBody');
    if (modal && body) {
        body.innerHTML = `
            <div class="star-detail-header">
                <span class="star-detail-badge">Star #${star.id} of 31</span>
                <h3>${star.title}</h3>
            </div>
            <p class="star-detail-text">"${star.text}"</p>
            <div class="star-detail-sign">Forever with you, Radwa ❤️</div>
        `;
        modal.style.display = 'flex';
    }
}

export function closeStarDetailModal() {
    const modal = document.getElementById('starDetailModal');
    if (modal) modal.style.display = 'none';
}

/* --- Floating Sky Lanterns Release --- */
export function showSkyLanterns() {
    toggleOverlay('skyLanternsOverlay', true);
}

export function hideSkyLanterns() {
    toggleOverlay('skyLanternsOverlay', false);
}

export function releaseSkyLantern() {
    const input = document.getElementById('skyLanternInput');
    const wishText = input ? input.value.trim() : '';
    const finalWish = wishText || "May our love shine brighter than all the stars in the sky! 🏮❤️";

    playHarpStrum();
    triggerHaptic('medium');

    const sky = document.getElementById('skyLanternsSky');
    if (!sky) return;

    const lantern = document.createElement('div');
    lantern.className = 'floating-sky-lantern';
    lantern.style.left = (Math.random() * 60 + 20) + '%';
    lantern.innerHTML = `
        <div class="lantern-body">
            <div class="lantern-flame"></div>
            <div class="lantern-text">${finalWish}</div>
        </div>
    `;

    sky.appendChild(lantern);
    if (input) input.value = '';

    setTimeout(() => {
        lantern.remove();
    }, 12000);
}