/* =========================================
   ✨ Visuals & Animations
   ========================================= */
import { loveMessages, loveReasons, nameStarMessages } from './config.js';
import { toggleOverlay, getRandomElement } from './utils.js';

let wonderlandInitiated = false;
export let proposalVisible = false;
let heartInterval, giftInterval, randomHeartInterval, petalInterval, reasonShowerInterval;
let nameConstellationModeActive = false;
let reasonStars = [];
let nameConstellation = { stars: [], lines: [] };
let hoveredStar = null;

const LETTER_MAP = {
    R: [[10,100],[10,0],[60,0],[70,10],[75,30],[70,45],[60,50],[10,50],null,[60,50],[80,100]],
    A: [[0,100],[25,0],[50,100],null,[12,60],[38,60]],
    D: [[0,0],[0,100],[50,80],[50,20],[0,0]],
    W: [[0,0],[15,100],[25,60],[35,100],[50,0]],
};

export function initiateLoveWonderland() {
    if (wonderlandInitiated) return;
    wonderlandInitiated = true;

    document.getElementById('initialContent').style.display = 'none';
    document.querySelector('.sparkle').style.display = 'block';
    document.querySelector('.moon').style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    document.querySelector('.floating-message').style.display = 'block';
    document.getElementById('actionButtonsContainer').style.display = 'flex';

    createPetals();
    document.addEventListener('mousemove', createHeartAtPosition);
    document.addEventListener('touchmove', handleTouchMove);

    heartInterval = setInterval(createRandomHeart, 800);
    randomHeartInterval = setInterval(createMessageHeart, 3000);
    giftInterval = setInterval(createGift, 10000);

    const music = document.getElementById('bg-music');
    music.volume = 0.3;
    music.play().catch(e => console.log("Audio play prevented:", e));
}

export function createPetals() {
    const petals = ['🌸', '🌹', '🍂', '💮'];
    petalInterval = setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = getRandomElement(petals);
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.animationDuration = (10 + Math.random() * 10) + 's';
        document.getElementById('animation-container').appendChild(petal);
        setTimeout(() => petal.remove(), 15000);
    }, 300);
}

export function createHeartAtPosition(e) {
    if (nameConstellationModeActive) return; 
    createHeart(e.clientX, e.clientY, false);
}

export function handleTouchMove(e) {
    if (nameConstellationModeActive) return; 
    e.preventDefault();
    for (let touch of e.touches) {
        createHeart(touch.clientX, touch.clientY, false);
    }
}

export function createRandomHeart() {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 20;
    createHeart(x, y, true);
}

export function createMessageHeart() {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 20;
    createHeart(x, y, true);
    setTimeout(() => {
        if (Math.random() < 0.7) { 
            showLoveMessage(x, window.innerHeight / 2);
        }
    }, 3000);
}

export function showLoveMessage(x, y, customMessage) {
    const message = customMessage || getRandomElement(loveMessages);
    const msgElem = document.createElement('div');
    msgElem.className = 'message';
    msgElem.textContent = message;
    msgElem.style.left = `${x}px`;
    msgElem.style.top = `${y}px`;
    document.getElementById('animation-container').appendChild(msgElem);
    setTimeout(() => {
        if (msgElem.parentNode) {
            msgElem.parentNode.removeChild(msgElem);
        }
    }, 2500);
}

export function createHeart(x, y, isRandom = false) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.getElementById('animation-container').appendChild(heart);

    heart.addEventListener('click', (e) => {
        e.stopPropagation();
        showLoveMessage(x, y);
    });

    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 6000);

    return heart;
}

export function createGift() {
    const gifts = ['💍', '💌', '🌹'];
    const gift = document.createElement('div');
    gift.className = 'gift';
    gift.textContent = getRandomElement(gifts);
    gift.style.left = `${Math.random() * window.innerWidth}px`;
    gift.style.top = `${window.innerHeight}px`;
    document.getElementById('animation-container').appendChild(gift);
    
    gift.addEventListener('click', (e) => {
        e.stopPropagation();
        showLoveMessage(parseInt(gift.style.left), parseInt(gift.style.top));
    });

    setTimeout(() => {
        if (gift.parentNode) {
            gift.parentNode.removeChild(gift);
        }
    }, 8000);
}

export function moonSurprise() {
    const flash = document.createElement('div');
    flash.className = 'flash';
    document.getElementById('animation-container').appendChild(flash);
    setTimeout(() => flash.remove(), 1000);

    if (proposalVisible) {
        showProposalConstellation();
    } else {
        showNameConstellation();
    }
}

/* --- Proposal Logic --- */
export function showProposal() {
    proposalVisible = true;
    document.getElementById('proposalContainer').style.opacity = '1';
    document.getElementById('proposalContainer').style.visibility = 'visible';
    initiateLoveWonderland();
}

export function acceptProposal() {
    clearInterval(heartInterval);
    clearInterval(giftInterval);
    clearInterval(randomHeartInterval);
    clearInterval(petalInterval);

    document.getElementById('proposalContainer').style.display = 'none';
    createVoiceHeart();
    createFireworks(20); 
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createRandomHeart();
        }, i * 100); 
    }
    showCelebrationMessage("She said YES! ❤️🎉");
    playCelebrationSound();
}

export function createFireworks(numFireworks) {
    for (let i = 0; i < numFireworks; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 150); 
    }
}

export function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';
    document.getElementById('animation-container').appendChild(firework);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.backgroundColor = getRandomColor();
        firework.appendChild(particle);

        const angle = Math.random() * 360;
        const distance = Math.random() * 100 + 50; 
        const speed = Math.random() * 1 + 0.5; 

        particle.style.animation = `fireworkExplode ${speed}s ease-out forwards`;
        particle.style.transform = `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`;
    }

    setTimeout(() => {
        firework.remove();
    }, 1500); 
}

export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function showCelebrationMessage(message) {
    const msgElem = document.createElement('div');
    msgElem.className = 'celebration-message';
    msgElem.textContent = message;
    document.getElementById('animation-container').appendChild(msgElem);
    setTimeout(() => {
        msgElem.remove();
    }, 3000);
}

export function playCelebrationSound() {
    const sound = new Audio('celebration.mp3'); 
    sound.play().catch(e => console.error("Celebration sound failed:", e));
}

export function createVoiceHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💌'; 
    heart.style.position = 'fixed';
    heart.style.fontSize = '2em';
    heart.style.cursor = 'pointer';
    heart.style.left = '50%';
    heart.style.top = '30%';
    heart.style.transform = 'translateX(-50%)';
    heart.style.zIndex = '1001';
    heart.onclick = () => {
        document.getElementById('voice-message').play();
        heart.innerHTML = 'I LOVE YOU!';
        setTimeout(() => heart.remove(), 2000);
    };
    document.getElementById('animation-container').appendChild(heart);
}

export function createFloatingOrbs() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 15; i++) {
        const orb = document.createElement('div');
        orb.classList.add('floating-orb');
        const size = Math.random() * 100 + 20;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = `${Math.random() * 100}vw`;
        orb.style.top = `${Math.random() * 100}vh`;
        orb.style.animationDuration = `${Math.random() * 20 + 15}s`;
        orb.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(orb);
    }
}

export function removeFloatingOrbs() {
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach(orb => orb.remove());
}

/* --- Reasons Logic --- */
export function showLoveReasons() {
    document.getElementById('actionButtonsContainer').style.display = 'none';
    const closeButton = document.getElementById('closeReasonsButton');
    closeButton.style.display = 'block';
    closeButton.onclick = hideLoveReasons; 
    reasonShowerInterval = setInterval(createFloatingReason, 700); 
}

export function createFloatingReason() {
    const reason = getRandomElement(loveReasons);
    const msgElem = document.createElement('div');
    msgElem.className = 'love-reason-message'; 
    msgElem.textContent = reason;
    msgElem.style.left = `${Math.random() * 90}vw`;
    msgElem.style.setProperty('--sway', Math.random() * 2 - 1);
    msgElem.style.animationDuration = `${10 + Math.random() * 5}s`;
    document.getElementById('animation-container').appendChild(msgElem);
    setTimeout(() => {
        msgElem.remove();
    }, 15000);
}

export function hideLoveReasons() {
    clearInterval(reasonShowerInterval);
    document.querySelectorAll('.love-reason-message').forEach(el => el.remove());
    document.getElementById('actionButtonsContainer').style.display = 'flex';
    document.getElementById('closeReasonsButton').style.display = 'none';
}

/* --- Constellation Logic --- */
export function showNameConstellation() {
    nameConstellationModeActive = true;
    document.body.classList.add('starry-night-active');
    if (document.body.classList.contains("day-mode")) {
        document.body.classList.remove("day-mode");
        document.body.classList.add("night-mode");
        document.getElementById("dayNightSwitch").innerHTML = "🌙 Night";
    }
    document.getElementById('actionButtonsContainer').style.display = 'none';
    const closeButton = document.getElementById('closeReasonsButton');
    closeButton.style.display = 'block';
    closeButton.onclick = hideNameConstellation;
    document.getElementById('star-canvas').style.pointerEvents = 'auto';
    const instructions = document.getElementById('constellationInstructions');
    instructions.textContent = "Hover over the stars of her name to see a secret message.";
    instructions.style.display = 'block';
}

export function hideNameConstellation() {
    nameConstellationModeActive = false;
    document.body.classList.remove('starry-night-active');
    hoveredStar = null;
    document.getElementById('actionButtonsContainer').style.display = 'flex';
    document.getElementById('closeReasonsButton').style.display = 'none';
    document.getElementById('star-canvas').style.pointerEvents = 'none';
    document.getElementById('constellationInstructions').style.display = 'none';
}

export function initNameConstellation(name, w, h, customLetterMap, yOffset = 0, letterMessagesMap = {}, letterMessageIndices = {}) {
    const BASE_SIZE_VW = 3.5; 
    const SPACING_VW = 1;
    const vw = w / 100;
    const letterMap = customLetterMap || LETTER_MAP;
    const totalWidth = (name.length * BASE_SIZE_VW + (name.length - 1) * SPACING_VW) * vw;
    const totalHeight = BASE_SIZE_VW * vw;
    const startX = (w - totalWidth) / 2;
    const startY = (h - totalHeight) / 2 + yOffset;

    name.split('').forEach((letter, letterIndex) => {
        if (letter === ' ') return; 
        const upperCaseLetter = letter.toUpperCase();
        const letterPoints = letterMap[upperCaseLetter] || [];
        const letterOffsetX = startX + letterIndex * (BASE_SIZE_VW + SPACING_VW) * vw;
        if (letterMessagesMap[upperCaseLetter] && letterMessageIndices[upperCaseLetter] === undefined) {
            letterMessageIndices[upperCaseLetter] = 0;
        }
        // Special-case: only treat nulls as stroke-breaks for the letter 'A' to avoid adding lines across the 'A' crossbar,
        // but preserve original "connect-all" behavior for other letters (to avoid visual regressions).
        if (upperCaseLetter === 'A') {
            let previousPoint = null;
            letterPoints.forEach(p => {
                if (!p) { previousPoint = null; return; }
                const point = {
                    x: letterOffsetX + (p[0] / 100) * BASE_SIZE_VW * vw,
                    y: startY + (p[1] / 100) * BASE_SIZE_VW * vw
                };

                // determine message for this particular star
                let message = '';
                if (letterMessagesMap[upperCaseLetter] && letterMessagesMap[upperCaseLetter].length > 0) {
                    message = letterMessagesMap[upperCaseLetter][letterMessageIndices[upperCaseLetter] % letterMessagesMap[upperCaseLetter].length];
                    letterMessageIndices[upperCaseLetter]++;
                } else {
                    if (letterMessageIndices['_fallback_'] === undefined) {
                        letterMessageIndices['_fallback_'] = 0;
                    }
                    message = nameStarMessages[letterMessageIndices['_fallback_'] % nameStarMessages.length];
                    letterMessageIndices['_fallback_']++;
                }

                nameConstellation.stars.push({ x: point.x, y: point.y, r: 2.5, baseR: 2.5, alpha: 1, text: message });

                if (previousPoint) {
                    nameConstellation.lines.push({ x1: previousPoint.x, y1: previousPoint.y, x2: point.x, y2: point.y });
                }

                previousPoint = point;
            });
        } else {
            // Original behavior: collect points and connect them in order (this preserves prior visuals for most letters)
            const starPoints = [];
            letterPoints.forEach(p => {
                if (p) {
                    starPoints.push({
                        x: letterOffsetX + (p[0] / 100) * BASE_SIZE_VW * vw,
                        y: startY + (p[1] / 100) * BASE_SIZE_VW * vw
                    });
                }
            });

            starPoints.forEach(point => {
                if (!point) return;
                let message = '';
                if (letterMessagesMap[upperCaseLetter] && letterMessagesMap[upperCaseLetter].length > 0) {
                    message = letterMessagesMap[upperCaseLetter][letterMessageIndices[upperCaseLetter] % letterMessagesMap[upperCaseLetter].length];
                    letterMessageIndices[upperCaseLetter]++;
                } else {
                    if (letterMessageIndices['_fallback_'] === undefined) {
                        letterMessageIndices['_fallback_'] = 0;
                    }
                    message = nameStarMessages[letterMessageIndices['_fallback_'] % nameStarMessages.length];
                    letterMessageIndices['_fallback_']++;
                }
                nameConstellation.stars.push({ x: point.x, y: point.y, r: 2.5, baseR: 2.5, alpha: 1, text: message });
            });

            for (let i = 0; i < starPoints.length - 1; i++) {
                const p1 = starPoints[i];
                const p2 = starPoints[i+1];
                if (!p1 || !p2) continue;
                nameConstellation.lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
            }
        }
    });
}

export function replayProposalConstellation() {
    showProposalConstellation();
}

export function showProposalConstellation() {
    nameConstellation = { stars: [], lines: [] };
    nameConstellationModeActive = true;
    document.body.classList.add('starry-night-active');
    if (document.body.classList.contains("day-mode")) {
        document.body.classList.remove("day-mode");
        document.body.classList.add("night-mode");
        document.getElementById("dayNightSwitch").innerHTML = "🌙 Night";
    }
    document.getElementById('actionButtonsContainer').style.display = 'none';
    const closeButton = document.getElementById('closeReasonsButton');
    closeButton.style.display = 'block';
    closeButton.onclick = hideNameConstellation;
    document.getElementById('star-canvas').style.pointerEvents = 'auto';
    const instructions = document.getElementById('constellationInstructions');
    instructions.textContent = "Will you always be my forever, Radwa?"; 
    instructions.style.display = 'block';
    const PROPOSAL_LETTER_MAP = {
        W: [[0,0],[15,100],[25,60],[35,100],[50,0]],
        I: [[0,0],[0,100]],
        L: [[0,0],[0,100],[50,100]],
        Y: [[0,0],[25,50],[50,0],null,[25,50],[25,100]],
        O: [[0,0],[50,0],[50,100],[0,100],[0,0]],
        U: [[0,0],[0,80],[25,100],[50,80],[50,0]],
        A: [[0,100],[25,0],[50,100],null,[12,60],[38,60]],
        S: [[50,0],[0,0],[0,50],[50,50],[50,100],[0,100]],
        B: [[0,0],[0,100],[30,100],[50,80],[30,50],[50,20],[30,0],[0,0],null,[0,50],[30,50]],
        E: [[50,0],[0,0],[0,50],[50,50],[0,50],[0,100],[50,100]],
        M: [[0,100],[0,0],[25,50],[50,0],[50,100]],
        F: [[50,0],[0,0],[0,100],null,[0,50],[30,50]],
        R: [[10,100],[10,0],[60,0],[70,10],[75,30],[70,45],[60,50],[10,50],null,[60,50],[80,100]],
        V: [[0,0],[25,100],[50,0]],
        D: [[0,0],[0,100],[50,80],[50,20],[0,0]],
        '?': [[0,20],[25,0],[50,20],[25,40],[25,60],null,[25,80],[25,100]]
    };
    const PROPOSAL_LETTER_MESSAGES = {
        W: ["Wonderful", "Warm", "Wise", "Whimsical", "Wholehearted"],
        I: ["Incredible", "Inspiring", "Important", "Irresistible", "Illuminating"],
        L: ["Lovely", "Luminous", "Loyal", "Lively", "Laughing"],
        Y: ["Youthful", "Yearning", "You're my everything", "Yes, forever!", "Yummy (just kidding, mostly!)"],
        O: ["Outstanding", "Optimistic", "Original", "Open-hearted", "One-of-a-kind"],
        U: ["Unique", "Understanding", "Uplifting", "Unforgettable", "Ultimate"],
        A: ["Amazing", "Adorable", "Affectionate", "Angelic", "Alluring"],
        S: ["Sweet", "Sparkling", "Sincere", "Stunning", "Supportive"],
        B: ["Beautiful", "Brilliant", "Blissful", "Bright", "Breathtaking"],
        E: ["Elegant", "Enchanting", "Ethereal", "Exquisite", "Everlasting"],
        M: ["Magical", "Marvelous", "Magnificent", "Mesmerizing", "Mine"],
        F: ["Fantastic", "Fabulous", "Faithful", "Flourishing", "Forever"],
        R: ["Radiant", "Resilient", "Remarkable", "Romantic", "Ravishing"],
        V: ["Vibrant", "Valuable", "Vivacious", "Victorious", "Visionary"],
        D: ["Dazzling", "Delightful", "Devoted", "Dreamy", "Divine"],
        '?': ["Questioning no more", "Quizzical about our future", "Quintessential love", "Quite simply, I love you", "Quick to say yes!"]
    };
    nameConstellation = { stars: [], lines: [] };
    const vw = window.innerWidth / 100;
    const BASE_SIZE_VW_CONST = 3.5; 
    const dynamicLineHeight = BASE_SIZE_VW_CONST * vw; 
    const spacing = 10; 
    const totalHeightOfThreeLines = (dynamicLineHeight * 3) + (spacing * 2);
    const initialYOffset = -totalHeightOfThreeLines / 2 + dynamicLineHeight / 2; 
    const letterMessageIndices = {};
    initNameConstellation("WILL YOU ALWAYS", window.innerWidth, window.innerHeight, PROPOSAL_LETTER_MAP, initialYOffset - dynamicLineHeight - spacing, PROPOSAL_LETTER_MESSAGES, letterMessageIndices);
    initNameConstellation("BE MY FOREVER,", window.innerWidth, window.innerHeight, PROPOSAL_LETTER_MAP, initialYOffset, PROPOSAL_LETTER_MESSAGES, letterMessageIndices);
    initNameConstellation("RADWA?", window.innerWidth, window.innerHeight, PROPOSAL_LETTER_MAP, initialYOffset + dynamicLineHeight + spacing, PROPOSAL_LETTER_MESSAGES, letterMessageIndices);
    instructions.innerHTML = "Will you always<br>be my forever,<br>Radwa?";
}

export function initializeStarrySky() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    let time = 0;
    let mouse = { x: -100, y: -100 };
    let genericStars = [];
    let starsLayer2 = [];
    let starsLayer3 = [];
    const numGenericStars = 500;
    let shootingStar = null;

    function init() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        genericStars = [];
        for (let i = 0; i < numGenericStars; i++) {
            genericStars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.2 + 0.5,
                alpha: Math.random(),
                dAlpha: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1)
            });
        }
        starsLayer2 = [];
        for (let i = 0; i < 100; i++) {
            starsLayer2.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 0.8 + 0.2,
                alpha: Math.random() * 0.5,
                dAlpha: (Math.random() * 0.01 + 0.002) * (Math.random() < 0.5 ? 1 : -1)
            });
        }
        starsLayer3 = [];
        for (let i = 0; i < 50; i++) {
            starsLayer3.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 0.5 + 0.1,
                alpha: Math.random() * 0.3,
                dAlpha: (Math.random() * 0.005 + 0.001) * (Math.random() < 0.5 ? 1 : -1)
            });
        }
        reasonStars = loveReasons.map(reason => ({
            x: Math.random() * w * 0.9 + w * 0.05, 
            y: Math.random() * h * 0.9 + h * 0.05,
            vx: (Math.random() - 0.5) * 0.1, 
            vy: (Math.random() - 0.5) * 0.1, 
            r: Math.random() * 1.5 + 1,
            baseR: Math.random() * 1.5 + 1,
            alpha: Math.random() * 0.5 + 0.3,
            dAlpha: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
            text: reason
        }));
        initNameConstellation("RADWA", w, h);
    }

    function maybeShootStar() {
        if (!shootingStar && Math.random() < 0.05) {
            shootingStar = {
                x: Math.random() * w * 0.7,
                y: Math.random() * h * 0.5,
                len: Math.random() * 80 + 100,
                speed: Math.random() * 8 + 10,
                angle: Math.PI / 4 + Math.random() * Math.PI / 8,
                alpha: 1
            };
        }
    }

    window.addEventListener('resize', init);
    canvas.addEventListener('mousemove', (e) => {
        if (!nameConstellationModeActive) return;
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseout', () => {
        hoveredStar = null;
        mouse.x = -100;
        mouse.y = -100;
    });

    function draw() {
        time += 0.02;
        ctx.clearRect(0, 0, w, h);
        let foundStar = null;
        if (nameConstellationModeActive) {
            for (const star of nameConstellation.stars) {
                const dist = Math.hypot(mouse.x - star.x, mouse.y - star.y);
                if (dist < star.r + 8) { 
                    foundStar = star;
                    break;
                }
            }
            hoveredStar = foundStar;
        }
        for (let s of starsLayer3) {
            ctx.save();
            ctx.globalAlpha = s.alpha;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.restore();
            s.alpha += s.dAlpha;
            if (s.alpha <= 0.1 || s.alpha >= 0.3) s.dAlpha *= -1;
        }
        for (let s of starsLayer2) {
            ctx.save();
            ctx.globalAlpha = s.alpha;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.restore();
            s.alpha += s.dAlpha;
            if (s.alpha <= 0.2 || s.alpha >= 0.5) s.dAlpha *= -1;
        }
        const starsToDraw = nameConstellationModeActive ? reasonStars : genericStars;
        for (let s of starsToDraw) {
            ctx.save();
            ctx.globalAlpha = s.alpha;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
            ctx.fillStyle = "#fff";
            ctx.shadowBlur = s === hoveredStar ? 12 : 6;
            ctx.shadowColor = s === hoveredStar ? "#ffb6d5" : "#fff";
            ctx.fill();
            ctx.restore();
            s.alpha += s.dAlpha;
            if (s.alpha <= 0.2 || s.alpha >= 1) s.dAlpha *= -1;
            if (nameConstellationModeActive) {
                const targetR = (s.text && s === hoveredStar) ? s.baseR * 2.5 : s.baseR;
                s.r += (targetR - s.r) * 0.1;
                s.x += s.vx;
                s.y += s.vy;
                if (s.x > w + s.r) s.x = -s.r;
                if (s.x < -s.r) s.x = w + s.r;
                if (s.y > h + s.r) s.y = -s.r;
                if (s.y < -s.r) s.y = h + s.r;
            }
        }
        if (nameConstellationModeActive) {
            const pulseFactor = Math.sin(time) * 0.5 + 0.5; 
            ctx.save();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 + pulseFactor * 0.3})`;
            ctx.lineWidth = 5; 
            ctx.shadowColor = "#ffb6d5";
            ctx.shadowBlur = 5 + pulseFactor * 7; 
            nameConstellation.lines.forEach(line => {
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(line.x2, line.y2);
                ctx.stroke();
            });
            nameConstellation.stars.forEach(star => {
                const isHovered = star === hoveredStar;
                const targetR = isHovered ? star.baseR * 3.5 : star.baseR;
                star.r += (targetR - star.r) * 0.1;
                ctx.beginPath();
                ctx.shadowBlur = isHovered ? 15 : 8;
                ctx.shadowColor = isHovered ? "#ffb6d5" : "#fff";
                ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
                ctx.fillStyle = "#fff";
                ctx.fill();
            });
            ctx.restore();
        }
        if (hoveredStar && nameConstellationModeActive) {
            ctx.save();
            ctx.fillStyle = "#ffb6d5"; 
            ctx.font = "16px 'Georgia', serif";
            ctx.textAlign = "center";
            ctx.shadowColor = "#000";
            ctx.shadowBlur = 5;
            ctx.fillText(hoveredStar.text, hoveredStar.x, hoveredStar.y - 20);
            ctx.restore();
        }
        if (shootingStar) {
            ctx.save();
            ctx.globalAlpha = shootingStar.alpha;
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.shadowColor = "#fff";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(
                shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.len,
                shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.len
            );
            ctx.stroke();
            ctx.restore();
            shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
            shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
            shootingStar.alpha -= 0.02;
            if (
                shootingStar.x > w ||
                shootingStar.y > h ||
                shootingStar.alpha <= 0
            ) {
                shootingStar = null;
            }
        } else {
            maybeShootStar();
        }
        requestAnimationFrame(draw);
    }
    init();
    draw();
}

/* --- Star Portrait --- */
let portraitAnimationId = null;
let portraitStars = [];

export function showStarPortrait() {
    toggleOverlay('starPortraitOverlay', true);
    initAndAnimatePortrait();
}

export function hideStarPortrait() {
    toggleOverlay('starPortraitOverlay', false);
    if (portraitAnimationId) {
        cancelAnimationFrame(portraitAnimationId);
        portraitAnimationId = null;
    }
}

export function initAndAnimatePortrait() {
    const canvas = document.getElementById('portrait-canvas');
    const ctx = canvas.getContext('2d');
    const overlay = document.getElementById('starPortraitOverlay');
    canvas.width = overlay.clientWidth;
    canvas.height = overlay.clientHeight;
    portraitStars = []; 
    const img = new Image();
    img.src = 'photos/radwa_portrait.png';
    img.onload = () => {
        const imgWidth = img.width;
        const imgHeight = img.height;
        const aspectRatio = imgWidth / imgHeight;
        let drawWidth = canvas.width * 0.8;
        let drawHeight = drawWidth / aspectRatio;
        if (drawHeight > canvas.height * 0.8) {
            drawHeight = canvas.height * 0.8;
            drawWidth = drawHeight * aspectRatio;
        }
        const startX = (canvas.width - drawWidth) / 2;
        const startY = (canvas.height - drawHeight) / 2;
        ctx.drawImage(img, startX, startY, drawWidth, drawHeight);
        const imageData = ctx.getImageData(startX, startY, drawWidth, drawHeight);
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        const targetPoints = [];
        const pixelStep = 7;
        for (let y = 0; y < imageData.height; y += pixelStep) {
            for (let x = 0; x < imageData.width; x += pixelStep) {
                const i = (y * imageData.width + x) * 4;
                const r = imageData.data[i];
                const g = imageData.data[i + 1];
                const b = imageData.data[i + 2];
                const a = imageData.data[i + 3];
                const brightness = r + g + b;
                if (a > 128 && brightness > 60) { 
                    targetPoints.push({ x: startX + x, y: startY + y });
                }
            }
        }
        targetPoints.forEach(point => {
            portraitStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                targetX: point.x,
                targetY: point.y,
                speed: Math.random() * 0.05 + 0.04, 
                alpha: 0,
                radius: Math.random() * 2 + 1.5 
            });
        });
        animatePortrait();
    };
    img.onerror = () => {
        ctx.fillStyle = 'white';
        ctx.font = '20px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText("Could not load 'radwa_portrait.png'", canvas.width / 2, canvas.height / 2);
    };
}

export function animatePortrait() {
    const canvas = document.getElementById('portrait-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let allInPlace = true;
    portraitStars.forEach(star => {
        if (star.alpha < 1) star.alpha += 0.05;
        const dx = star.targetX - star.x;
        const dy = star.targetY - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 1) {
            star.x += dx * star.speed;
            star.y += dy * star.speed;
            allInPlace = false;
        } else {
            star.x = star.targetX;
            star.y = star.targetY;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowColor = `rgba(255, 182, 213, ${star.alpha * 0.7})`;
        ctx.shadowBlur = 8;
        ctx.fill();
    });
    ctx.shadowBlur = 0;
    if (!allInPlace) {
        portraitAnimationId = requestAnimationFrame(animatePortrait);
    }
}