const loveMessages = [
    "I love you more than words can say! ❤️",
    "You are my sunshine on every cloudy day ☀️",
    "Every beat of my heart whispers your name 💓",
    "You make my world magical ✨",
    "My heart smiles when I think of you 😊",
    "You are my once in a lifetime love 💍",
    "Radwa, you complete my soul 💞",
    "With you, forever doesn't feel long enough 💫",
    "You're my dream come true 💖",
    "You are my everything 💕",
    "Your love is the best thing that ever happened to me 🌹",
    "You're the missing piece to my puzzle 🧩",
    "My favorite place is in your arms 🤗",
    "You stole my heart and I never want it back 💘",
    "Loving you is my favorite thing to do 💝",
    "You're the reason I believe in love 💑",
    "My heart skips a beat when you smile 😍",
    "You're my today and all of my tomorrows 🌅",
    "I would choose you in every lifetime ♾️",
    "Your love is my greatest treasure 💎",
    "You make ordinary moments extraordinary ✨",
    "I'm addicted to your love 💊",
    "My soul recognized yours at first sight 👁️",
    "You're the love story I always wanted to tell 📖",
    "I love you more than yesterday but less than tomorrow 📅",
    "You're my favorite hello and hardest goodbye 👋",
    "Your voice is my favorite sound 🎶",
    "You're my happy place 🏝️",
    "I love you to the moon and back 🌙",
    "You're my favorite what-if that came true ❓",
    "My heart is and always will be yours 💗",
    "You're the best decision I never made 🤔",
    "I love you more than coffee ☕ (and that's saying a lot!)",
    "You're my favorite notification 🔔",
    "You had me at hello 👋",
    "I'm completely, utterly, irrevocably in love with you 💞",
    "You're the human equivalent of a warm hug 🤗",
    "I love you more than pizza 🍕 (and that's serious!)",
    "You're my favorite place to go when my mind wanders 🧠",
    "You make my heart do backflips 🤸",
    "You're the peanut butter to my jelly 🥪",
    "I love you more than puppies love belly rubs 🐶",
    "You're my favorite notification 📲",
    "I love you more than chocolate 🍫 (and that's a lot!)",
    "You're my favorite thought 💭",
    "I love you more than weekends 📅",
    "You're the cheese to my macaroni 🧀",
    "I love you more than naps 😴 (and I really love naps)",
    "You're the password to my heart ❤️",
    "Are you a magician? Because whenever I look at you, everyone else disappears ✨",
    "I think you're suffering from a lack of Vitamin Me 😉",
    "My favorite fairytale is our love story 🏰",
    "You're my person. It's as simple and as complicated as that 👫",
    "I'm not a photographer, but I can picture us together 📸",
    "You're the 'nothing' when people ask me what I'm thinking about 😊",
    "I love you more than I love hitting the snooze button 😴",
    "You're my favorite distraction 딴짓",
    "If you were a vegetable, you'd be a cute-cumber 🥒",
    "You're the reason I check my phone every 5 seconds 📱",
    "My heart does a little happy dance when I see you 💃",
    "You're my favorite notification, always 🔔",
    "I've fallen for you and I can't get up... and I don't want to! 🥰",
    "You're the marshmallow in my hot chocolate ☕",
    "Life with you is like a party that never ends 🎉",
    "You're the highlight of my day, every day 🌟",
    "I'm so glad you're as weird as me 🤪",
    "You're my anchor in the stormy seas of life ⚓",
    "I love you a latte ☕",
    "You're the only one I want to annoy for the rest of my life 😜",
    "You're my happy pill 💊",
    "You're the sprinkles on my donut 🍩",
    "I'm wearing the smile you gave me 😄",
    "You're my favorite adventure 🗺️",
    "You're the key to my lock 🔑",
    "You're my lobster 🦞",
    "I'm hooked on you 🎣",
    "You're my sunshine, my only sunshine ☀️",
    "You're the song my heart is always singing 🎶",
    "You're my favorite work of art 🎨",
    "You're my home 🏡",
    "You're the best part of my day 💖",
    "You're my lucky charm 🍀",
    "You're my dream that came true 💭",
    "You're my missing puzzle piece 🧩",
    "You're my greatest blessing 🙏",
    "You're my one and only 🥇",
    "You're my forever and always ♾️",
    "You're my everything bagel 🥯",
    "You're the avocado to my toast 🥑",
    "You're the beat to my heart ❤️",
    "You're the stars in my sky ✨",
    "You're the calm to my storm ⛈️",
    "You're the sweet to my sour 🍬",
    "You're the light of my life 💡",
    "You're the butter to my bread 🧈",
    "You're the ink to my pen ✒️",
    "You're the icing on my cake 🎂",
    "If I had a flower for every time I thought of you, I could walk in my garden forever. 🌸",
    "You are the beautiful answer to every prayer I've ever had. 🙏",
    "You're not just my love, you're my sanity. And my favorite kind of madness. 🤪",
    "I love you more than I love finding a parking spot right by the entrance. 🚗",
    "My day is incomplete if I don't tell you I love you. So, I love you! ❤️",
    "You're the 'She said YES!' to my life's biggest question. 🎉",
    "Every love song I hear, I think of you. 🎶",
    "You're the human equivalent of a perfect, sunny day. ☀️",
    "I must have done something right to deserve you in my life. ✨",
    "You're my favorite person to do absolutely nothing with. 🛋️",
    "I love you for all that you are, all that you have been, and all you're yet to be. 💖",
    "You're my favorite notification, my favorite text, my favorite call. 📱",
    "I didn't know I was missing anything until I met you. 🧩",
    "You make me want to be a better man. You make me want to be the best man. 🏆",
    "My heart does a little '!!!' every time I see you. 😍",
    "You're the plot twist I never saw coming, and the best one of my life. 📖",
    "I love you more than a silent room after a loud day. 🤫",
    "You're my home, not a place, but a feeling. 🏡",
    "I would find you in any lifetime. ♾️",
    "You're the reason my reality is finally better than my dreams. 💭",
    "My love for you is a journey, starting at forever and ending at never. 🗺️",
    "You're the only one who can make my heart race and feel calm at the same time. 💓",
    "You are my favorite chapter, and I can't wait to write the rest of our story. 📖"
];
const loveReasons = [
    "How your nose crinkles when you laugh",
    "The way you care about tiny details",
    "Your courage inspires me daily",
    "The sound of your voice in the morning",
    "How you always know what to say",
    "Your beautiful mind and kind heart",
    "The way you make ordinary moments special",
    "Your strength in difficult times",
    "How you believe in me even when I don't",
    "Your passion for the things you love",
    "The way you look at me like I'm magic",
    "Your ability to make everyone feel welcome",
    "How you challenge me to be better",
    "Your beautiful smile that lights up rooms",
    "The way you understand me without words",
    "Your patience with my imperfections",
    "How you turn every day into an adventure",
    "Your creativity and unique perspective",
    "The way you love with your whole heart",
    "How you make the world more beautiful",
    "The way you listen, not just to reply, but to understand.",
    "Your unwavering support for my wildest dreams.",
    "How you can make me laugh even when I'm determined to be grumpy.",
    "Your incredible talent for making the best food.",
    "The way you look when you're concentrating on something you love.",
    "Your kindness to strangers.",
    "How you remember the little things I tell you.",
    "The feeling of your hand in mine.",
    "Your ability to find beauty in the simplest things.",
    "The way you're always learning and growing.",
    "Your sense of humor that perfectly matches mine.",
    "How you make me feel safe and protected.",
    "The way you're not afraid to be vulnerable with me.",
    "Your infectious enthusiasm for life.",
    "How you always give the best advice.",
    "The way you stand up for what you believe in.",
    "Your gentle and calming presence.",
    "How you make our home feel like a sanctuary.",
    "The way you're always up for an adventure, big or small.",
    "Your incredible work ethic and dedication.",
    "How you make me feel like the most important person in the world.",
    "The way you can read my mind sometimes.",
    "Your love for animals and all living things.",
    "How you're always honest with me, even when it's hard.",
    "The way you celebrate my successes as if they were your own.",
    "Your resilience in the face of challenges.",
    "How you make me a better person just by being in my life.",
    "The way you can make a boring day exciting.",
    "Your impeccable taste in music and movies.",
    "How you're always my biggest cheerleader.",
    "The way you comfort me when I'm sad.",
    "Your intelligence and the way you see the world.",
    "How you're both my best friend and my soulmate.",
    "The way you're so thoughtful and considerate of others.",
    "Your beautiful, expressive eyes.",
    "How you're always willing to try new things with me.",
    "The way you make me feel cherished and adored.",
    "Your generosity of spirit.",
    "How you always know how to make me feel better.",
    "The way you're so passionate about your hobbies.",
    "Your ability to forgive and not hold grudges.",
    "How you make me feel like I can accomplish anything.",
    "The way you're so patient and understanding.",
    "Your beautiful soul, inside and out.",
    "How you're always my rock.",
    "The way you make me feel so loved and appreciated.",
    "Your adventurous spirit.",
    "How you always put our relationship first.",
    "The way you make me feel like I'm home.",
    "Because you are you, and that's more than enough.",
    "The way you hum when you're happy.",
    "How you're fiercely protective of the people you love.",
    "Your ability to see the good in everyone.",
    "The way you make our house feel like a home.",
    "Your ambition and how you chase your dreams.",
    "How you can be both strong and gentle at the same time.",
    "The way you get excited about the little things in life.",
    "Your incredible sense of style.",
    "How you always smell so good.",
    "The way you make me feel like the luckiest person alive."
];
const nameStarMessages = [
    "For your Radiant smile that lights up my world.",
    "For your Amazing heart, so full of kindness.",
    "For your Dazzling personality that captivates me.",
    "For the Wonderful way you make me feel loved.",
    "For the Awesome adventures we share together.",
    "Because you are Resilient and strong.",
    "Because you are Admirable in every way.",
    "Because you are my Dearest friend.",
    "Because you are my greatest Wonder.",
    "Because you are Absolutely perfect for me.",
    "Your laugh is my favorite sound.",
    "You make my world a better place.",
    "You are the 'R' in my reality.",
    "You are the 'A' in my always.",
    "You are the 'D' in my destiny.",
    "You are the 'W' in my world.",
    "And 'A' for being Absolutely everything to me.",
    "My heart belongs to you.",
    "You are my dream come true.",
    "My forever and always."
];

const timelineEvents = [
    {
        date: "08 Jan 2025",
        title: "The Spark",
        description: "The moment our eyes met and my heart knew something special was beginning.",
        photo: "photo24.jpg",
        side: "left"
    },
    {
        date: "28 Jan 2025",
        title: "Coffee and Conversations",
        description: "That ordinary moment when I suddenly realized I couldn't imagine life without you.",
        photo: "photostart.jpg",
        side: "right"
    },
    {
        date: "01 Feb 2025",
        title: "I met your family",
        description: "That perfect moment when the world disappeared and it was just us.",
        photo: "photo25.jpg",
        side: "left"
    },
    {
        date: "15 Feb 2025",
        title: "Start of our Adventure Together",
        description: "When we officially become 1 soul in 2 bodies, when we decided to choose each other.",
        photo: "photo10.jpg",
        side: "right"
    },
    {
        date: "26 Feb 2025",
        title: "Buying our Jewelery",
        description: "That magical night when our hearts were bouncing, and dancing inside our bodies, and our wings could not fit inside our rooms.",
        photo: "photo22.jpg",
        side: "left"
    },
    {
        date: "17 Mar 2025",
        title: "First Place and Palace",
        description: "Buying my Engagement suit and visiting the palace where we decided to hold our Engagement photosession in, when I realized that my butterfly is much more beautiful than these butterflies.",
        photo: "photo18.jpg",
        side: "right"
    },
    {
        date: "25 Mar 2025",
        title: "My Happiest Birthday Ever",
        description: "One of the warmest moment I felt in my entire life, being with my second family.",
        photo: "photo15.jpg",
        side: "left"
    },
    {
        date: "12 Apr 2025",
        title: "I Was Yours Forever",
        description: "When my soul finally had some rest in its home, fireworks in my heart, and calmness in my mind.",
        photo: "photo3.jpg",
        side: "right"
    },
    {
        date: "2 May 2025",
        title: "First Occasion Together",
        description: "Anywhere, anytime, My heart will always be only yours.",
        photo: "photo26.jpg",
        side: "left"
    },
    {
        date: "3 May 2025",
        title: "Creating Memories Together",
        description: "You are my pride, you are my light in the darkness. You are my beautiful flower.",
        photo: "photo27.jpg",
        side: "right"
    },
    {
        date: "07 Jun 2025",
        title: "Butterfly Museum Revisited",
        description: "Returning to the place of butterflies, but this time our love had grown wings of its own, soaring higher and more beautifully than ever before.",
        photo: "IMG-20250608-WA0120.jpg",
        side: "left"
    },
    {
        date: "09 Jun 2025",
        title: "A Perfect Night Out",
        description: "A night of movies and fine dining, where every detail was as perfect as the woman sitting next to me. You make every moment feel like a scene from a classic romance.",
        photo: "IMG-20250609-WA0054.jpg",
        side: "right"
    },
    {
        date: "12 Jun 2025",
        title: "Closing One Chapter",
        description: "The end of one journey is simply the beginning of another. Watching you bravely close this chapter filled me with immense pride and excitement for what's next.",
        photo: "IMG-20250613-WA0036.jpg",
        side: "left"
    },
    {
        date: "16 Jun 2025",
        title: "A New Beginning",
        description: "You stepped into a new chapter with grace and courage. I am so incredibly proud of you and will always be your biggest supporter, cheering you on every step of the way.",
        photo: "IMG-20250630-WA0072.jpg",
        side: "right"
    },
    {
        date: "20 Jul 2025",
        title: "Building Our Nest",
        description: "Choosing the pieces that will build our home, our sanctuary. With every choice, I wasn't just seeing furniture; I was seeing our future, and it felt like I was floating on clouds.",
        photo: "IMG_20250720_202600.jpg",
        side: "left"
    }
];

const galleryPhotos = [
    "IMG-20250530-WA0043.jpg",
    "IMG-20250605-WA0062.jpg",
    "IMG-20250608-WA0120.jpg",
    "IMG-20250608-WA0184.jpg",
    "IMG-20250609-WA0054.jpg",
    "IMG-20250610-WA0056.jpg",
    "IMG-20250610-WA0059.jpg",
    "IMG-20250610-WA0060.jpg",
    "IMG-20250610-WA0079.jpg",
    "IMG-20250613-WA0036.jpg",
    "IMG-20250630-WA0035.jpg",
    "IMG-20250630-WA0072.jpg",
    "IMG-20250704-WA0020.jpg",
    "IMG-20250719-WA0016.jpg",
    "IMG_20250703_184702.jpg",
    "IMG_20250706_110051.jpg",
    "IMG_20250707_141754.jpg",
    "IMG_20250720_202600.jpg",
    "IMG_20250722_105230.jpg",
    "photo1.jpg",
    "photo10.jpg",
    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg",
    "photo15.jpg",
    "photo16.jpg",
    "photo17.jpg",
    "photo18.jpg",
    "photo19.jpg",
    "photo2.jpg",
    "photo20.jpg",
    "photo21.jpg",
    "photo22.jpg",
    "photo23.jpg",
    "photo24.jpg",
    "photo25.jpg",
    "photo26.jpg",
    "photo27.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photostart.jpg"
];

let wonderlandInitiated = false;
let poemVisible = false;
let proposalVisible = false;

let heartInterval;
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



let giftInterval;
let randomHeartInterval;
let petalInterval;
let reasonShowerInterval;

// Check if she's been here before
if (localStorage.getItem('radwaVisited')) {
    document.querySelector('h1').textContent += ' Welcome back, my love!';
} else {
    localStorage.setItem('radwaVisited', 'true');
}

function showOverlay(elementToShow) {
    // Hide all overlays first by using a common class like 'overlay-content'.
    // This makes the function more maintainable if you add new overlays.
    // You would need to add class="overlay-content" to each overlay div in your HTML.
    document.querySelectorAll('.overlay-content').forEach(el => {
        el.style.display = 'none';
    });
    // Special handling for poem container as it uses opacity for transitions
    const poemContainer = document.getElementById('poemContainer');
    if (poemContainer) {
        poemContainer.style.opacity = '0';
        poemContainer.style.visibility = 'hidden';
    }

    // Hide action buttons
    document.getElementById('actionButtonsContainer').style.display = 'none';

    // Show the target overlay
    if (elementToShow) {
        if (elementToShow.id === 'poemContainer') {
            // Show poem container with its fade effect
            elementToShow.style.opacity = '1';
            elementToShow.style.visibility = 'visible';
        } else {
            // Show other overlays by setting display
            elementToShow.style.display = 'block';
        }
    }
}

function initiateLoveWonderland() {
    if (wonderlandInitiated) return;
    wonderlandInitiated = true;

    document.getElementById('initialContent').style.display = 'none';
    document.querySelector('.sparkle').style.display = 'block';
    document.querySelector('.moon').style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    document.querySelector('.floating-message').style.display = 'block';
    document.getElementById('actionButtonsContainer').style.display = 'flex';

    // Start creating petals
    createPetals();

    // Start creating hearts on mouse/touch movement
    document.addEventListener('mousemove', createHeartAtPosition);
    document.addEventListener('touchmove', handleTouchMove);

    // Start random hearts floating up
    heartInterval = setInterval(createRandomHeart, 800);
    
    // Start showing random messages from floating hearts
    randomHeartInterval = setInterval(createMessageHeart, 3000);
    
    // Start creating gifts
    giftInterval = setInterval(createGift, 10000);

    // Try to play music (with error handling)
    const music = document.getElementById('bg-music');
    music.volume = 0.3;
    music.play().catch(e => console.log("Audio play prevented:", e));
}

function createPetals() {
    const petals = ['🌸', '🌹', '🍂', '💮'];
    petalInterval = setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.animationDuration = (10 + Math.random() * 10) + 's';
        document.getElementById('animation-container').appendChild(petal);
        setTimeout(() => petal.remove(), 15000);
    }, 300);
}

function createHeartAtPosition(e) {
    if (nameConstellationModeActive) return; // Don't create hearts in constellation view
    createHeart(e.clientX, e.clientY, false);
}

function handleTouchMove(e) {
    if (nameConstellationModeActive) return; // Don't create hearts in constellation view
    e.preventDefault();
    for (let touch of e.touches) {
        createHeart(touch.clientX, touch.clientY, false);
    }
}

function createRandomHeart() {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 20;
    createHeart(x, y, true);
}

function createMessageHeart() {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 20;
    const heart = createHeart(x, y, true);
    
    // Show message after a delay when heart is halfway up
    setTimeout(() => {
        if (Math.random() < 0.7) { // 70% chance to show message
            showLoveMessage(x, window.innerHeight / 2);
        }
    }, 3000);
}

function showLoveMessage(x, y, customMessage) {
    const message = customMessage || loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const msgElem = document.createElement('div');
    msgElem.className = 'message';
    msgElem.textContent = message;
    msgElem.style.left = `${x}px`;
    msgElem.style.top = `${y}px`;
    document.getElementById('animation-container').appendChild(msgElem);
    
    // Auto-remove after animation
    setTimeout(() => {
        if (msgElem.parentNode) {
            msgElem.parentNode.removeChild(msgElem);
        }
    }, 2500);
}

function createHeart(x, y, isRandom = false) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.getElementById('animation-container').appendChild(heart);

    // Make hearts clickable to show messages
    heart.addEventListener('click', (e) => {
        e.stopPropagation();
        showLoveMessage(x, y);
    });

    // Auto-remove after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 6000);

    return heart;
}

function createGift() {
    const gifts = ['💍', '💌', '🌹'];
    const gift = document.createElement('div');
    gift.className = 'gift';
    gift.textContent = gifts[Math.floor(Math.random() * gifts.length)];
    gift.style.left = `${Math.random() * window.innerWidth}px`;
    gift.style.top = `${window.innerHeight}px`;
    document.getElementById('animation-container').appendChild(gift);
    
    // Make gifts clickable to show messages
    gift.addEventListener('click', (e) => {
        e.stopPropagation();
        showLoveMessage(parseInt(gift.style.left), parseInt(gift.style.top));
    });

    // Auto-remove after animation
    setTimeout(() => {
        if (gift.parentNode) {
            gift.parentNode.removeChild(gift);
        }
    }, 8000);
}

function moonSurprise() {
    const flash = document.createElement('div');
    flash.className = 'flash';
    document.getElementById('animation-container').appendChild(flash);
    setTimeout(() => flash.remove(), 1000);
    // Show the name constellation view
    showNameConstellation();
}

function showProposal() {
    proposalVisible = true;
    document.getElementById('proposalContainer').style.opacity = '1';
    document.getElementById('proposalContainer').style.visibility = 'visible';
    initiateLoveWonderland();
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play().catch(e => console.log("Audio play failed:", e));
    } else {
        music.pause();
    }
}

function acceptProposal() {
// Clear background animation intervals to prevent memory leaks
clearInterval(heartInterval);
clearInterval(giftInterval);
clearInterval(randomHeartInterval);
clearInterval(petalInterval);

document.getElementById('proposalContainer').style.display = 'none';

// Create voice message heart (as before)
createVoiceHeart();

// --- Celebration Animation ---

// 1. Fireworks
createFireworks(20); // Reduced for better performance

// 2. Heart Shower (more intense)
for (let i = 0; i < 50; i++) { // Increased number of hearts
    setTimeout(() => {
        createRandomHeart();
    }, i * 100); // Faster heart generation
}

// 3. Congratulatory Message
showCelebrationMessage("She said YES! ❤️🎉");

// 4. Sound Effect
playCelebrationSound();

// (Removed the alert)
// alert("She said YES! ❤️🎉");
}

// --- Helper Functions ---

function createFireworks(numFireworks) {
for (let i = 0; i < numFireworks; i++) {
    setTimeout(() => {
        createFirework();
    }, i * 150); // Increased stagger for smoother performance
}
}

function createFirework() {
const firework = document.createElement('div');
firework.className = 'firework';
firework.style.left = Math.random() * window.innerWidth + 'px';
firework.style.top = Math.random() * window.innerHeight + 'px';
document.getElementById('animation-container').appendChild(firework);

// Create particles for the firework
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    particle.style.backgroundColor = getRandomColor();
    firework.appendChild(particle);

    // Apply animation with random direction and speed
    const angle = Math.random() * 360;
    const distance = Math.random() * 100 + 50; // Distance particles travel
    const speed = Math.random() * 1 + 0.5; // Speed of particles

    particle.style.animation = `fireworkExplode ${speed}s ease-out forwards`;
    particle.style.transform = `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`;
}

// Remove firework after animation
setTimeout(() => {
    firework.remove();
}, 1500); // Increased to match the maximum possible particle animation duration
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showCelebrationMessage(message) {
    const msgElem = document.createElement('div');
    msgElem.className = 'celebration-message';
    msgElem.textContent = message;
    document.getElementById('animation-container').appendChild(msgElem);

    // Remove message after a delay
    setTimeout(() => {
        msgElem.remove();
    }, 3000);
}

function playCelebrationSound() {
    const sound = new Audio('celebration.mp3'); // Replace with your sound file
    sound.play().catch(e => console.error("Celebration sound failed:", e));
}


function createVoiceHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💌'; // Love letter emoji
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

// Define your poems as an array of objects
const poems = [
{
    title: "A Love Poem for Radwa",
    text: [
        "In fields of dreams, where love takes flight,",
        "You shine, my Radwa, a radiant light.",
        "Your eyes, like stars, in twilight's grace,",
        "A gentle smile upon your face.",
        "Your laughter echoes, a sweet refrain,",
        "Easing my heart from every pain.",
        "With every beat, my love grows strong,",
        "In your embrace, is where I belong.",
        "Through passing time, my love will be,",
        "Forever bound to you, eternally."
    ]
},
{
    title: "My Dearest Radwa",
    text: [
        "Your love's a flame, forever bright,",
        "Guiding me through the darkest night.",
        "Your smile, a sunrise, warm and true,",
        "My heart beats only, love, for you.",
        "Through laughter shared and tears we've cried,",
        "Our bond unbreakable, side by side.",
        "With every passing day, I find,",
        "My love for you, of a special kind.",
        "Forever yours, my soulmate dear,",
        "With you, my future's crystal clear."
    ]
},
{
    title: "Radwa, My Guiding Star",
    text: [
        "Like a star, you light my way,",
        "Chasing shadows far away.",
        "In your eyes, a universe I see,",
        "My Radwa, you're everything to me.",
        "Through stormy weather, you're my peace,",
        "My love for you will never cease.",
        "With every breath, I whisper low,",
        "My heart's devotion starts to grow.",
        "Forever bound, our souls entwined,",
        "A love like ours, so hard to find."
    ]
},
{
    title: "To Radwa, My Heart's Desire",
    text: [
        "You paint my world in colors bright,",
        "Filling my days with pure delight.",
        "Your touch, a spark, ignites my soul,",
        "Making me happy, making me whole.",
        "With you, each moment's a sweet embrace,",
        "A love that time cannot erase.",
        "My Radwa, you're my dream come true,",
        "My love, my life, I give to you.",
        "Eternally, my heart will stay,",
        "Forever yours, come what may."
    ]
},
{
    title: "Radwa's Embrace",
    text: [
        "In Radwa's embrace, I find my peace,",
        "A love so deep, it will never cease.",
        "Her laughter rings, a melody sweet,",
        "A rhythm that makes my heart complete.",
        "Her eyes, like pools, reflect the sky,",
        "A love so vast, it makes me fly.",
        "With every touch, a gentle spark,",
        "Igniting flames within the dark.",
        "My Radwa, my love, my guiding light,",
        "Forever with you, my future's bright."
    ]
},
{
    title: "A Symphony of Love",
    text: [
        "Our love's a symphony, a sweet refrain,",
        "A melody that washes away the pain.",
        "Each note a moment, precious and true,",
        "A testament to me and you.",
        "Your voice, a harmony, soft and clear,",
        "Whispering words I long to hear.",
        "Our hearts in rhythm, a perfect beat,",
        "A love so strong, it can't be beat.",
        "Forever playing, this song of ours,",
        "A love that blooms like fragrant flowers."
    ]
},
{
    title: "Radwa, My Everything",
    text: [
        "You are the sun that warms my day,",
        "The moon that guides me on my way.",
        "The stars that twinkle in the night,",
        "My Radwa, you're my guiding light.",
        "The air I breathe, the ground I tread,",
        "The thoughts that linger in my head.",
        "My everything, my heart's desire,",
        "A love that sets my soul on fire.",
        "Forever grateful, for all you are,",
        "My shining star, both near and far."
    ]
},
{
    title: "A Love Unending",
    text: [
        "Like the ocean's waves, our love expands,",
        "Reaching shores of distant lands.",
        "A love unending, vast and deep,",
        "Secrets our hearts forever keep.",
        "Through changing tides and stormy seas,",
        "Our love remains, a gentle breeze.",
        "A beacon bright, in darkest night,",
        "Guiding us towards the morning light.",
        "Forever bound, our souls entwined,",
        "A love like ours, so hard to find."
    ]
},
{
    title: "Radwa's Magic",
    text: [
        "In Radwa's eyes, a magic lies,",
        "A spell that captivates and mesmerizes.",
        "Her touch, a whisper, soft and light,",
        "Chasing away the darkest night.",
        "Her smile, a potion, sweet and rare,",
        "Healing wounds and banishing care.",
        "A love so potent, strong and true,",
        "My heart enchanted, forever with you.",
        "Forever under Radwa's spell,",
        "A love story, I'll always tell."
    ]
},
{
    title: "To My Beloved Radwa",
    text: [
        "My beloved Radwa, my heart's delight,",
        "You fill my world with colors bright.",
        "Your laughter dances, a joyful sound,",
        "The sweetest music can be found.",
        "Your presence, a gift, a treasure rare,",
        "A love beyond compare.",
        "With every glance, my spirit soars,",
        "To heights unknown, to distant shores.",
        "Forever yours, my love, my life,",
        "My cherished Radwa, my faithful wife."
    ]
},
{
    title: "Our Future's Tapestry",
    text: [
        "I see a future, woven bright,",
        "With threads of laughter, pure and light.",
        "Each strand a day, with you, my dear,",
        "Dispelling every doubt and fear.",
        "A tapestry of moments, bold and new,",
        "A lifetime spent, in love with you.",
        "From morning's sun to evening's grace,",
        "Our love's the pattern time can't erase."
    ]
},
{
    title: "The Quiet Moments",
    text: [
        "It's not the grand, the loud, the bold,",
        "But quiet stories, softly told.",
        "A knowing glance, a gentle hand,",
        "A language only we understand.",
        "The peaceful silence, side-by-side,",
        "Where all our deepest feelings hide.",
        "In these small moments, love is vast,",
        "A quiet magic, built to last."
    ]
},
{
    title: "Your Inner Light",
    text: [
        "Some loves are drawn to fleeting grace,",
        "A pretty smile, a lovely face.",
        "But I was captured, from the start,",
        "By the stunning beauty of your heart.",
        "Your kindness shines, a radiant gleam,",
        "Fulfilling my most cherished dream.",
        "It is your soul, so pure and true,",
        "That makes me fall in love with you."
    ]
},
{
    title: "My Compass, My North",
    text: [
        "When I am lost, and skies are grey,",
        "You are the compass showing me the way.",
        "You are the anchor in the storm,",
        "You are the fire that keeps me warm.",
        "My constant star, my truest guide,",
        "With you, I have nothing left to hide.",
        "My destination, journey's end,",
        "My love, my home, my dearest friend."
    ]
},
{
    title: "The Promise of Forever",
    text: [
        "In every sunrise, a new promise I see,",
        "A lifetime of moments, just you and me.",
        "With every heartbeat, my love grows anew,",
        "Forever and always, my heart belongs to you.",
        "Through changing seasons, our love will endure,",
        "A bond unbreakable, steadfast and pure.",
        "My dearest Radwa, my soul's true delight,",
        "You fill my world with endless light."
    ]
}
];

function showPoem() {
const poemContainer = document.getElementById('poemContainer');
const poemContent = poemContainer.querySelector('.poem-content');

// Select a random poem
const randomIndex = Math.floor(Math.random() * poems.length);
const selectedPoem = poems[randomIndex];

// Replace the entire content, including the title
poemContent.innerHTML = `<p class="poem-title">${selectedPoem.title}</p>${selectedPoem.text.map(line => `<p>${line}</p>`).join('')}`;

showOverlay(poemContainer);
}


function hidePoem() {
    const poemContainer = document.getElementById('poemContainer');
    poemContainer.style.opacity = '0';
    poemContainer.style.visibility = 'hidden';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}

function showLoveReasons() {
    document.getElementById('actionButtonsContainer').style.display = 'none';
    const closeButton = document.getElementById('closeReasonsButton');
    closeButton.style.display = 'block';
    closeButton.onclick = hideLoveReasons; // Assign correct hide function

    // Start showering reasons across the screen
    reasonShowerInterval = setInterval(createFloatingReason, 700); // A new reason appears every 0.7s
}

function createFloatingReason() {
    const reason = loveReasons[Math.floor(Math.random() * loveReasons.length)];
    const msgElem = document.createElement('div');
    msgElem.className = 'love-reason-message'; // Use the new class
    msgElem.textContent = reason;

    // Random horizontal start position and animation properties
    msgElem.style.left = `${Math.random() * 90}vw`;
    msgElem.style.setProperty('--sway', Math.random() * 2 - 1);
    msgElem.style.animationDuration = `${10 + Math.random() * 5}s`;

    document.getElementById('animation-container').appendChild(msgElem);

    // Auto-remove after animation to prevent buildup
    setTimeout(() => {
        msgElem.remove();
    }, 15000);
}

function showNameConstellation() {
    nameConstellationModeActive = true;
    document.body.classList.add('starry-night-active');
    
    // Ensure night mode is on for the effect
    if (document.body.classList.contains("day-mode")) {
        document.body.classList.remove("day-mode");
        document.body.classList.add("night-mode");
        document.getElementById("dayNightSwitch").innerHTML = "🌙 Night";
    }

    document.getElementById('actionButtonsContainer').style.display = 'none';
    const closeButton = document.getElementById('closeReasonsButton');
    closeButton.style.display = 'block';
    closeButton.onclick = hideNameConstellation; // Assign correct hide function

    document.getElementById('star-canvas').style.pointerEvents = 'auto';
    
    const instructions = document.getElementById('constellationInstructions');
    // Update instructions for this specific view
    instructions.textContent = "Hover over the stars of her name to see a secret message.";
    instructions.style.display = 'block';
}

function showGallery() {
const gallery = document.querySelector('.photo-gallery');
const grid = document.querySelector('.photo-grid');
showOverlay(gallery);
// Clear previous photos
grid.innerHTML = '';

// Add photos to gallery
galleryPhotos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    
    const img = new Image();
    img.src = `photos/${photo}`;
    img.alt = `Our memory ${index + 1}`;
    img.onerror = function() {
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23ff4d88"><rect width="100" height="100"/><text x="50" y="50" font-size="8" fill="white" text-anchor="middle" dominant-baseline="middle">Photo ${index+1}</text></svg>';
    };
    
    item.appendChild(img);
    grid.appendChild(item);
});
}

function hideGallery() {
    document.querySelector('.photo-gallery').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}
  

function showTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    const timeline = document.querySelector('.timeline');
    
    // Clear previous timeline items
    timeline.innerHTML = '';

    showOverlay(timelineContainer);
    
    // Add events to timeline
    timelineEvents.forEach(event => {
        const item = document.createElement('div');
        item.className = `timeline-item ${event.side}`;
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        content.innerHTML = `
            <div class="timeline-date">${event.date}</div>
            <h3>${event.title}</h3>
            <p class="timeline-text">${event.description}</p>
        `;
        
        // Add photo if available
        if (event.photo) {
            // Added alt text for accessibility and an onerror handler for robustness
            const imgHTML = `<img src="timeline-photos/${event.photo}" class="timeline-photo" alt="${event.title}" onerror="this.style.display='none'; this.onerror=null;">`;
            content.innerHTML += imgHTML;
        }
        
        item.appendChild(content);
        timeline.appendChild(item);
    });
}

function hideTimeline() {
    document.querySelector('.timeline-container').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}

function sendKiss() {
    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.style.position = 'fixed';
    kiss.style.fontSize = '2em';
    kiss.style.left = Math.random() * window.innerWidth + 'px';
    kiss.style.top = Math.random() * window.innerHeight + 'px';
    kiss.style.animation = 'fadeOut 2s forwards';
    document.getElementById('animation-container').appendChild(kiss);
    setTimeout(() => kiss.remove(), 2000);
}

const loveLetters = [
    "My Dearest Radwa,\n\nEvery day with you feels like a page from a beautiful story. A story I never want to end. You are the melody my heart sings, the light that guides me, and the home my soul has always searched for. I love you more than words can ever capture.\n\nForever Yours,\nAhmed Rafique",
    "My Love, My Looza,\n\nSometimes I try to find the words to describe the feeling I get when I see you smile, but I always fall short. It's a mix of pure joy, deep peace, and an overwhelming sense of 'rightness'. Being with you feels like coming home. Thank you for being my everything.\n\nWith all my love,\nAhmed Rafique",
    "To My Soulmate, My Looza,\n\nDid you know that before I met you, my world was in black and white? You came into my life and painted it with the most vibrant colors. You brought laughter, adventure, and a love so profound it reshaped my entire existence. I am eternally grateful for you.\n\nYours always,\nAhmed Rafique",
    "My Darling Radwa,\n\nI often find myself just thinking about you, replaying our conversations, remembering the look in your eyes. These are the moments that I treasure most. You are more than just my love; you are my greatest adventure and my safest harbor. I can't wait to see what the next chapter of our story holds.\n\nAll my heart,\nAhmed Rafique"
];

function showLoveLetter() {
    const letterContainer = document.querySelector('.love-letter-container');
    const letterContent = document.getElementById('letter-content');
    
    // Select a random letter from the array
    const letterText = loveLetters[Math.floor(Math.random() * loveLetters.length)];
    
    letterContent.innerHTML = ''; // Clear previous text
    showOverlay(letterContainer);
    letterContainer.style.display = 'flex'; // Use flex to center the letter

    let i = 0;
    function typeWriter() {
        if (i < letterText.length) {
            // Replace newline characters with <br> tags
            if (letterText.charAt(i) === '\n') {
                letterContent.innerHTML += '<br>';
            } else {
                letterContent.innerHTML += letterText.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 50); // Adjust typing speed here
        }
    }
    typeWriter();
}

function hideLoveLetter() {
    document.querySelector('.love-letter-container').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}

function hideLoveReasons() {
    // Stop the shower of reasons
    clearInterval(reasonShowerInterval);

    // Clean up any remaining messages on screen
    document.querySelectorAll('.love-reason-message').forEach(el => el.remove());

    document.getElementById('actionButtonsContainer').style.display = 'flex';
    document.getElementById('closeReasonsButton').style.display = 'none';
}

function hideNameConstellation() {
    nameConstellationModeActive = false;
    document.body.classList.remove('starry-night-active');
    hoveredStar = null;
    document.getElementById('actionButtonsContainer').style.display = 'flex';
    document.getElementById('closeReasonsButton').style.display = 'none';
    document.getElementById('star-canvas').style.pointerEvents = 'none';
    document.getElementById('constellationInstructions').style.display = 'none';
}

function showMemoryGame() {
    const gameContainer = document.querySelector('.memory-game-container');
    const grid = document.querySelector('.memory-grid');
    showOverlay(gameContainer);
    grid.innerHTML = ''; // Clear previous game

    // Use 8 photos for a 16-card game (4x4 grid)
    // Ensure we don't try to slice more photos than available
    const photoCount = Math.min(galleryPhotos.length, 8);
    if (photoCount < 2) {
        grid.innerHTML = "<p style='color:white; text-align:center;'>Not enough photos for a game!</p>";
        return;
    }
    const shuffled = [...galleryPhotos].sort(() => 0.5 - Math.random());
    const gamePhotos = shuffled.slice(0, photoCount);
    const cardSet = [...gamePhotos, ...gamePhotos]; // Duplicate for pairs

    // Shuffle the cards
    cardSet.sort(() => 0.5 - Math.random());

    let flippedCards = [];
    let lockBoard = false;
    let matchesFound = 0;

    cardSet.forEach(photoName => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.photo = photoName;

        card.innerHTML = `
            <div class="card-face card-front">
                <img src="photos/${photoName}" alt="Memory Photo">
            </div>
            <div class="card-face card-back">?</div>
        `;
        grid.appendChild(card);

        card.addEventListener('click', () => {
            if (lockBoard || card.classList.contains('flip') || card.classList.contains('matched')) return;

            card.classList.add('flip');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                lockBoard = true;
                // Check for match
                if (flippedCards[0].dataset.photo === flippedCards[1].dataset.photo) {
                    // It's a match!
                    flippedCards.forEach(c => c.classList.add('matched'));
                    matchesFound++;
                    flippedCards = [];
                    lockBoard = false;

                    if (matchesFound === photoCount) {
                        setTimeout(() => showCelebrationMessage("You found all the memories! ❤️"), 500);
                    }
                } else {
                    // Not a match, flip back
                    setTimeout(() => {
                        flippedCards.forEach(c => c.classList.remove('flip'));
                        flippedCards = [];
                        lockBoard = false;
                    }, 1200);
                }
            }
        });
    });
}

function hideMemoryGame() {
    document.querySelector('.memory-game-container').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}

function initializeStarrySky() {
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

        // Init generic stars for default view
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

        // Init stars for "Love Reasons" mode
        reasonStars = loveReasons.map(reason => ({
            x: Math.random() * w * 0.9 + w * 0.05, // Avoid edges
            y: Math.random() * h * 0.9 + h * 0.05,
            vx: (Math.random() - 0.5) * 0.1, // slow drift x
            vy: (Math.random() - 0.5) * 0.1, // slow drift y
            r: Math.random() * 1.5 + 1,
            baseR: Math.random() * 1.5 + 1,
            alpha: Math.random() * 0.5 + 0.3,
            dAlpha: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
            text: reason
        }));

        // Init name constellation
        initNameConstellation("RADWA", w, h);
    }

    function initNameConstellation(name, w, h) {
        let messageIndex = 0;
        nameConstellation = { stars: [], lines: [] }; // Reset
        const BASE_SIZE_VW = 10;
        const SPACING_VW = 2;
        const vw = w / 100;

        const totalWidth = (name.length * BASE_SIZE_VW + (name.length - 1) * SPACING_VW) * vw;
        const totalHeight = BASE_SIZE_VW * vw;
        const startX = (w - totalWidth) / 2;
        const startY = (h - totalHeight) / 2;

        name.split('').forEach((letter, letterIndex) => {
            const letterPoints = LETTER_MAP[letter.toUpperCase()] || [];
            const letterOffsetX = startX + letterIndex * (BASE_SIZE_VW + SPACING_VW) * vw;
            
            const points = letterPoints.map(p => {
                if (!p) return null;
                return {
                    x: letterOffsetX + (p[0] / 100) * BASE_SIZE_VW * vw,
                    y: startY + (p[1] / 100) * BASE_SIZE_VW * vw,
                };
            });

            points.forEach(point => {
                if (!point) return;
                const message = nameStarMessages[messageIndex % nameStarMessages.length];
                nameConstellation.stars.push({ x: point.x, y: point.y, r: 3.5, baseR: 3.5, alpha: 1, text: message });
                messageIndex++;
            });

            for (let i = 0; i < points.length - 1; i++) {
                const p1 = points[i];
                const p2 = points[i+1];
                if (!p1 || !p2) continue;
                nameConstellation.lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
            }
        });
    }

    function maybeShootStar() {
        // Create a shooting star randomly
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

        // Find hovered star on every frame for smooth interaction with moving stars
        let foundStar = null;
        if (nameConstellationModeActive) {
            // Prioritize checking name stars as they are the centerpiece
            for (const star of nameConstellation.stars) {
                const dist = Math.hypot(mouse.x - star.x, mouse.y - star.y);
                if (dist < star.r + 8) { // Larger hover area for name stars
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

        // Draw all stars (twinkling)
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

            // Grow/shrink hovered star
            if (nameConstellationModeActive) {
                const targetR = (s.text && s === hoveredStar) ? s.baseR * 2.5 : s.baseR;
                s.r += (targetR - s.r) * 0.1;

                // Add drifting motion
                s.x += s.vx;
                s.y += s.vy;

                // Wrap around screen edges
                if (s.x > w + s.r) s.x = -s.r;
                if (s.x < -s.r) s.x = w + s.r;
                if (s.y > h + s.r) s.y = -s.r;
                if (s.y < -s.r) s.y = h + s.r;
            }
        }

        if (nameConstellationModeActive) {
            // Draw name constellation with a gentle pulsing glow
            const pulseFactor = Math.sin(time) * 0.5 + 0.5; // Varies between 0 and 1
            ctx.save();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 + pulseFactor * 0.3})`;
            ctx.lineWidth = 5; // Increased thickness for better visibility
            ctx.shadowColor = "#ffb6d5";
            ctx.shadowBlur = 5 + pulseFactor * 7; // Glow will pulse from 5 to 12
            nameConstellation.lines.forEach(line => {
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(line.x2, line.y2);
                ctx.stroke();
            });
            // Now draw stars, they can have their own shadow properties
            nameConstellation.stars.forEach(star => {
                const isHovered = star === hoveredStar;
                const targetR = isHovered ? star.baseR * 3.5 : star.baseR;
                star.r += (targetR - star.r) * 0.1;

                ctx.beginPath();
                // Override shadow for this specific star path
                ctx.shadowBlur = isHovered ? 15 : 8;
                ctx.shadowColor = isHovered ? "#ffb6d5" : "#fff";
                ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
                ctx.fillStyle = "#fff";
                ctx.fill();
            });
            ctx.restore();

        }

        // Draw hovered text
        if (hoveredStar && nameConstellationModeActive) {
            ctx.save();
            ctx.fillStyle = "#ffb6d5"; // Text color
            ctx.font = "16px 'Georgia', serif";
            ctx.textAlign = "center";
            ctx.shadowColor = "#000";
            ctx.shadowBlur = 5;
            ctx.fillText(hoveredStar.text, hoveredStar.x, hoveredStar.y - 20);
            ctx.restore();
        }

        // Draw and update shooting star
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

// --- Playlist Data ---
const playlist = [
    // English
    { title: "All of Me - John Legend (Lyric Video)", youtubeId: "450p7goxZqg" }, // Official lyric video
    { title: "Perfect - Ed Sheeran (Official Music Video)", youtubeId: "2Vv-BfVoq4g" }, // Official video, embeddable
    { title: "Thinking Out Loud - Ed Sheeran (Lyric Video)", youtubeId: "lp-EO5I60KA" }, // Official lyric video
    { title: "Just the Way You Are - Bruno Mars (Lyric Video)", youtubeId: "LjhCEhWiKXk" }, // Official lyric video
    { title: "A Thousand Years - Christina Perri (Lyric Video)", youtubeId: "rtOvBOTyX00" }, // Official lyric video
    { title: "Say You Won't Let Go - James Arthur (Lyric Video)", youtubeId: "0yW7w8F2TVA" }, // Official lyric video
    { title: "Can't Help Falling in Love - Elvis Presley (Audio)", youtubeId: "vGJTaP6anOU" }, // Official audio
    { title: "My Heart Will Go On - Celine Dion (Audio)", youtubeId: "FHG2oizTlpY" }, // Official audio
    { title: "You Are the Reason - Calum Scott (Lyric Video)", youtubeId: "ShZ978fBl6Y" }, // Official lyric video
    { title: "Love Me Like You Do - Ellie Goulding (Lyric Video)", youtubeId: "AJtDXIazrMo" }, // Official lyric video
    { title: "I Will Always Love You - Whitney Houston (Lyric Video)", youtubeId: "3JWTaaS7LdU" }, // Official lyric video
    { title: "Everything - Michael Bublé (Lyric Video)", youtubeId: "SPUJIbXN0WY" }, // Official lyric video
    { title: "Your Song - Elton John (Lyric Video)", youtubeId: "GlPlfCy1urI" }, // Official lyric video
    { title: "Make You Feel My Love - Adele (Lyric Video)", youtubeId: "0put0_a--Ng" }, // Official lyric video
    { title: "All My Life - K-Ci & JoJo (Lyric Video)", youtubeId: "DXvMT_mVbqw" }, // Official lyric video
    { title: "Endless Love - Lionel Richie & Diana Ross (Lyric Video)", youtubeId: "JM_R1R28kLM" }, // Official lyric video
    { title: "At Last - Etta James", youtubeId: "S-cbOl96RFM" },
    { title: "Unchained Melody - The Righteous Brothers", youtubeId: "qiiyq2xrSI0" },
    { title: "I Don't Want to Miss a Thing - Aerosmith", youtubeId: "JkK8g6FMEXE" },
    { title: "Because You Loved Me - Celine Dion", youtubeId: "pHxBG2v5g4g" },
    { title: "How Deep Is Your Love - Bee Gees", youtubeId: "XpqqjU7u5Yc" },
    { title: "Endless Love - Luther Vandross & Mariah Carey", youtubeId: "JM_R1R28kLM" },
    { title: "Amazed - Lonestar", youtubeId: "x-skFgrV59A" },
    { title: "I Won't Give Up - Jason Mraz", youtubeId: "O1-4u9W-bns" },
    { title: "Bleeding Love - Leona Lewis", youtubeId: "7_weSk0BonM" },
    { title: "Back at One - Brian McKnight", youtubeId: "pR0VSg3dJvY" },
    { title: "Truly Madly Deeply - Savage Garden", youtubeId: "WQnAxOQxQIU" },
    { title: "Just the Two of Us - Bill Withers", youtubeId: "bG5N3GC-m20" },
    { title: "Iris - Goo Goo Dolls", youtubeId: "NdYWuo9OFAw" },
    { title: "You’re Still the One - Shania Twain", youtubeId: "KNZH-emehxA" },
    { title: "I Knew I Loved You - Savage Garden", youtubeId: "jjnmICxvoVY" },
    { title: "I Just Called to Say I Love You - Stevie Wonder", youtubeId: "QwOU3bnuU0k" },
    { title: "More Than Words - Extreme", youtubeId: "UrIiLvg58SY" },
    { title: "When a Man Loves a Woman - Michael Bolton", youtubeId: "r7fXg3g6bDg" },
    { title: "Hero - Enrique Iglesias", youtubeId: "koJlIGDImiU" },
    { title: "I Swear - All-4-One", youtubeId: "25rL-ooWICU" },
    { title: "If I Ain't Got You - Alicia Keys", youtubeId: "Ju8Hr50Ckwk" },
    { title: "From This Moment On - Shania Twain", youtubeId: "a-Lp2uC_1lI" },
    { title: "I Could Fall in Love - Selena", youtubeId: "lDY7k1q3bD8" },
    { title: "Vision of Love - Mariah Carey", youtubeId: "Y8HOfcYWZoo" },
    { title: "Always - Bon Jovi", youtubeId: "9BMwcO6_hyA" },
    { title: "My Girl - The Temptations", youtubeId: "6IUG-9jZD-g" },
    { title: "Let’s Stay Together - Al Green", youtubeId: "COiIC3A0ROM" },
    { title: "I Will Be Here - Steven Curtis Chapman", youtubeId: "S9gQvE5r2ew" },
    { title: "You Are So Beautiful - Joe Cocker", youtubeId: "wlDmslyGmGI" },
    { title: "I Do (Cherish You) - 98 Degrees", youtubeId: "QwOU3bnuU0k" },
    { title: "Un-break My Heart - Toni Braxton", youtubeId: "p2Rch6WvPJE" },
    { title: "Have I Told You Lately - Rod Stewart", youtubeId: "s1ysoohV_zA" },
    { title: "I’ll Make Love to You - Boyz II Men", youtubeId: "fV8vB1BB2qc" },
    { title: "You’re Beautiful - James Blunt", youtubeId: "oofSnsGkops" },
    { title: "Just the Way You Are - Billy Joel", youtubeId: "HaA3YZ6QdJU" },
    { title: "I Do - Colbie Caillat", youtubeId: "E0oyglKjbFQ" },
    { title: "Love Story - Taylor Swift", youtubeId: "8xg3vE8Ie_E" },
    { title: "Marry Me - Train", youtubeId: "ghZt2cILcCU" },
    { title: "All My Life - Linda Ronstadt & Aaron Neville", youtubeId: "w3MteyB6q0E" },
    { title: "Kiss Me - Sixpence None The Richer", youtubeId: "8N-qO3sPMjc" },
    { title: "The Power of Love - Celine Dion", youtubeId: "Y8HOfcYWZoo" },
    { title: "I’ll Stand by You - The Pretenders", youtubeId: "maAyfcO-X3k" },
    { title: "You Are the Best Thing - Ray LaMontagne", youtubeId: "vJ3xTjvj9tw" },
    { title: "I Choose You - Sara Bareilles", youtubeId: "xjE5D9cHiOk" },
    { title: "Forever and Ever, Amen - Randy Travis", youtubeId: "sgJXbIP83A8" },
    { title: "Can’t Take My Eyes Off You - Frankie Valli", youtubeId: "NGFToiLtXro" },
    { title: "When You Say Nothing at All - Ronan Keating", youtubeId: "AuJrEBtmM1Q" },
    { title: "You Make My Dreams - Hall & Oates", youtubeId: "EErSKhC0CZs" },
    { title: "Truly, Madly, Deeply - Savage Garden", youtubeId: "WQnAxOQxQIU" }
];

let currentSongIndex = 0;

function showPlaylist() {
    const overlay = document.querySelector('.playlist-overlay');
    const list = overlay.querySelector('.playlist-list');
    const titleDiv = overlay.querySelector('.playlist-song-title');
    const ytDiv = document.getElementById('playlist-youtube');
    overlay.style.display = 'flex';
    document.getElementById('actionButtonsContainer').style.display = 'none';

    // Build playlist
    list.innerHTML = '';
    playlist.forEach((song, idx) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.onclick = () => {
            window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, '_blank');
        };
        list.appendChild(li);
    });

    // Show a message instead of an embedded player
    titleDiv.innerHTML = `<span style="color:#ffb6d5;">Click any song to play it on YouTube 🎶</span>`;
    ytDiv.innerHTML = '';
}

function hidePlaylist() {
    const overlay = document.querySelector('.playlist-overlay');
    overlay.style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}
window.hidePlaylist = hidePlaylist;

// New function to get a unique love note for the day
function getDailyLoveNote() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const randomIndex = dayOfYear % loveMessages.length;
    return loveMessages[randomIndex];
}

function createFloatingOrbs() {
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

function removeFloatingOrbs() {
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach(orb => orb.remove());
}

document.addEventListener("DOMContentLoaded", function() {
    const openSurpriseBtn = document.getElementById('openSurpriseBtn');
    if (openSurpriseBtn) {
        openSurpriseBtn.addEventListener('click', initiateLoveWonderland);
    }

    initializeStarrySky();
    
    // This function robustly handles the initialization of the celestial map feature.
    // It actively waits for the external library to be ready, preventing race conditions.
    function initializeCelestialFeature() {
        const celestialButton = document.getElementById('celestialButton');
        if (!celestialButton) return;

        let attempts = 0;
        const maxAttempts = 50; // Try for 5 seconds (50 * 100ms)

        const checkInterval = setInterval(() => {
            // Check if the Celestial library is now available on the window object.
            if (typeof Celestial !== 'undefined') {
                clearInterval(checkInterval); // Stop checking.
                celestialButton.disabled = false;
                celestialButton.title = "See the stars on our special day";
                celestialButton.addEventListener('click', showCelestialMap);
            } else if (attempts++ > maxAttempts) {
                clearInterval(checkInterval); // Stop trying.
                celestialButton.title = "Star map is currently unavailable.";
                console.error("Celestial library failed to load. The 'Our Night Sky' button has been disabled.");
            }
        }, 100); // Check every 100 milliseconds.
    }

    initializeCelestialFeature();
    initializePiano();
    
    // Music button toggle
    const musicBtn = document.getElementById("musicButton");
    const bgMusic = document.getElementById("bg-music");
    let musicOn = false;
    if (musicBtn && bgMusic) {
        musicBtn.addEventListener("click", function() {
            if (musicOn) {
                bgMusic.pause();
                musicBtn.textContent = "🔇";
                musicOn = false;
            } else {
                bgMusic.play();
                musicBtn.textContent = "🔊";
                musicOn = true;
            }
        });
    }

    // Day/Night switch
    const switchBtn = document.getElementById("dayNightSwitch");
    if (switchBtn) {
        document.body.classList.add("day-mode");
        switchBtn.innerHTML = "🌞 Day";
        createFloatingOrbs(); // Create orbs on initial load (if day mode is default)

        switchBtn.onclick = function() {
            if (document.body.classList.contains("day-mode")) {
                document.body.classList.remove("day-mode");
                document.body.classList.add("night-mode");
                switchBtn.innerHTML = "🌙 Night";
                removeFloatingOrbs();
            } else {
                document.body.classList.remove("night-mode");
                document.body.classList.add("day-mode");
                switchBtn.innerHTML = "🌞 Day";
                createFloatingOrbs();
            }
        };
    }

    // Daily Love Note popup
    const dailyLoveNotePopup = document.getElementById("dailyLoveNotePopup");
    const content = dailyLoveNotePopup ? dailyLoveNotePopup.querySelector(".daily-love-note-content") : null;
    if (openSurpriseBtn && dailyLoveNotePopup && content) {
        openSurpriseBtn.addEventListener('click', function() {
            content.textContent = getDailyLoveNote();
            dailyLoveNotePopup.style.display = "flex";
        });
        // Close popup when clicking outside the note
        dailyLoveNotePopup.addEventListener("click", function(e) {
            if (e.target === this) {
                this.style.display = "none";
            }
        });
    }

    // --- Fairytale Audio Controls ---
    const playBtn = document.getElementById('fairytalePlayBtn');
    const pauseBtn = document.getElementById('fairytalePauseBtn');
    const stopBtn = document.getElementById('fairytaleStopBtn');

    if (playBtn) playBtn.addEventListener('click', playNarration);
    if (pauseBtn) pauseBtn.addEventListener('click', pauseNarration);
    if (stopBtn) stopBtn.addEventListener('click', stopNarration);

    // --- Voice Control Initialization ---
    const voiceControlBtn = document.getElementById('voiceControlBtn');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let isListening = false;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        const commands = {
            'show our photos': showGallery,
            'open gallery': showGallery,
            'close gallery': hideGallery,
            'show our story': showTimeline,
            'close story': hideTimeline,
            'tell me a poem': showPoem,
            'close the poem': hidePoem,
            'show me the reasons': showLoveReasons,
            'hide the reasons': hideLoveReasons,
            'play the memory game': showMemoryGame,
            'close the game': hideMemoryGame,
            'write a letter': showLoveLetter,
            'close the letter': hideLoveLetter,
            'show the playlist': showPlaylist,
            'hide the playlist': hidePlaylist,
            'show birthday countdown': showBirthdayCountdown,
            'hide birthday countdown': hideBirthdayCountdown,
            'ask a question': showDailyQuestion,
            'close the question': hideDailyQuestion,
            'show the dream board': showFutureDreams,
            'hide the dream board': hideFutureDreams,
            'explore our world': showOurWorld,
            'close the world': hideOurWorld,
            'show the portrait': showStarPortrait,
            'hide the portrait': hideStarPortrait,
            'show the night sky': showCelestialMap,
            'hide the night sky': hideCelestialMap,
            'open the piano': showPiano,
            'close the piano': hidePiano,
            'day mode': () => {
                if (document.body.classList.contains("night-mode")) {
                    document.getElementById("dayNightSwitch").click();
                }
            },
            'night mode': () => {
                if (document.body.classList.contains("day-mode")) {
                    document.getElementById("dayNightSwitch").click();
                }
            },
            'play music': () => {
                const music = document.getElementById('bg-music');
                if (music.paused) music.play();
            },
            'stop music': () => {
                const music = document.getElementById('bg-music');
                if (!music.paused) music.pause();
            }
        };

        voiceControlBtn.addEventListener('click', () => {
            if (isListening) {
                recognition.stop();
                return;
            }
            recognition.start();
        });

        recognition.onstart = () => {
            isListening = true;
            voiceControlBtn.classList.add('listening');
            voiceControlBtn.title = "Listening... Click to stop";
        };

        recognition.onend = () => {
            isListening = false;
            voiceControlBtn.classList.remove('listening');
            voiceControlBtn.title = "Activate Voice Control";
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            isListening = false;
            voiceControlBtn.classList.remove('listening');
            voiceControlBtn.title = "Voice control error. Try again?";
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase().trim();
            console.log('Heard:', transcript);

            for (const command in commands) {
                if (transcript.includes(command)) {
                    console.log('Executing command:', command);
                    commands[command]();
                    break; // Execute only the first matched command
                }
            }
        };

    } else {
        voiceControlBtn.style.display = 'none'; // Hide button if not supported
        console.warn("Speech Recognition not supported in this browser.");
    }
});

// Gift box functions
function showGiftBox() {
    document.getElementById('giftBoxOverlay').style.display = 'flex';
    document.querySelector('.gift-box').style.display = 'flex';
    document.getElementById('giftSurprise').style.display = 'none';
    // Reset lid position
    document.querySelector('.gift-lid').style.transform = 'none';
}

function hideGiftBox() {
    document.getElementById('giftBoxOverlay').style.display = 'none';
}

// Unwrap animation and show surprise
document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('giftBox');
    if (giftBox) {
        giftBox.onclick = function() {
            // Animate lid
            document.querySelector('.gift-lid').style.transform = 'rotate(-70deg) translateY(-60px)';
            setTimeout(function() {
                giftBox.style.display = 'none';

                // --- Surprise Categories ---
                const categories = ['poem', 'message', 'photo', 'video'];
                const chosenCategory = categories[Math.floor(Math.random() * categories.length)];

                let surpriseHTML = "";

                if (chosenCategory === 'poem') {
                    // Pick a random poem from your poems array
                    const poem = poems[Math.floor(Math.random() * poems.length)];
                    surpriseHTML = `<div style="margin-bottom:10px;font-weight:bold;color:#ff4d88;">A poem just for you:</div>
                        <div style="font-size:1.1em;">
                            <div class="poem-title" style="margin-bottom:8px;">${poem.title}</div>
                            ${poem.text.map(line => `<div>${line}</div>`).join('')}
                        </div>`;
                } else if (chosenCategory === 'message') {
                    // Pick a random message from a new array
                    const giftMessages = [
                        "You are my greatest adventure, Radwa! 💖",
                        "Every day with you is a gift I cherish.",
                        "Your love is my favorite surprise.",
                        "You make my heart smile every single day.",
                        "I am so grateful for you, always.",
                        "You are the magic in my world.",
                        "With you, every moment is special.",
                        "You are my sunshine and my stars.",
                        "I love you more than words can say.",
                        "You are my dream come true."
                    ];
                    const msg = giftMessages[Math.floor(Math.random() * giftMessages.length)];
                    surpriseHTML = `<div style="font-size:1.3em;color:#d6336c;">${msg}</div>`;
                } else if (chosenCategory === 'photo') {
                    // Pick a random photo from your galleryPhotos array
                    const photo = galleryPhotos[Math.floor(Math.random() * galleryPhotos.length)];
                    surpriseHTML = `<div style="margin-bottom:10px;font-weight:bold;color:#ff4d88;">A special memory:</div>
                        <img src="photos/${photo}" alt="A sweet memory" style="max-width:220px; border-radius:12px; box-shadow:0 0 8px #ffb6d5;">`;
                } else if (chosenCategory === 'video') {
                    // Pick randomly between your videos
                    const videos = [
                        { title: "Our special video", file: "OurStory.mp4" }
                    ];
                    const vid = videos[Math.floor(Math.random() * videos.length)];
                    surpriseHTML = `<div style="margin-bottom:10px;font-weight:bold;color:#ff4d88;">${vid.title}:</div>
                        <video controls style="max-width:220px; border-radius:12px; box-shadow:0 0 8px #ffb6d5;">
                            <source src="${vid.file}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>`;
                }

                document.querySelector('.gift-message').innerHTML = surpriseHTML;
                document.getElementById('giftSurprise').style.display = 'block';
            }, 900);
        };
    }
});

// Puzzle functions
let currentPuzzleSurprise = null;

const puzzleSurprises = [
    {
        type: 'message',
        title: '💌 A Secret Note',
        content: "You've unlocked my heart... again! I love you more than all the stars in the sky."
    },
    {
        type: 'message',
        title: '🤫 My Biggest Secret',
        content: "My biggest secret is that every day, I somehow manage to fall in love with you even more."
    },
    {
        type: 'photo',
        title: '📷 A Secret Memory',
        content: 'secret_photo.jpeg',
        caption: "A secret smile, captured just for you."
    },
    {
        type: 'voucher',
        title: '🎟️ Love Voucher',
        content: 'One Uninterrupted Cuddle Session',
        emoji: '🤗'
    },
    {
        type: 'voucher',
        title: '🎟️ Love Voucher',
        content: 'One Movie Night (Your Pick!)',
        emoji: '🎬'
    },
    {
        type: 'riddle',
        title: '🤔 A Little Riddle',
        question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
        answer: "A Map! (And all my roads lead to you.)"
    },
    {
        type: 'message',
        title: '💌 A Simple Truth',
        content: "Just a reminder: you are loved, you are cherished, and you are my entire world."
    },
    {
        type: 'voucher', // A voucher more suited for your situation
        title: '🎟️ Future Fun Voucher',
        content: 'One Future Date Night, Planned Entirely by Me',
        emoji: '🗓️'
    },
    {
        type: 'compliment', // A new type of surprise!
        title: '✨ A Special Compliment',
        content: 'I am so incredibly proud of the person you are. Your strength and kindness inspire me every single day.'
    },
    {
        type: 'message',
        title: '🌟 A Little Sparkle',
        content: "You add sparkle to my everyday life. Thank you for being you!"
    }
];

function showPuzzle() {
    // Select a random surprise for this puzzle attempt
    currentPuzzleSurprise = puzzleSurprises[Math.floor(Math.random() * puzzleSurprises.length)];

    document.getElementById('puzzleOverlay').style.display = 'flex';
    document.getElementById('secretMessage').style.display = 'none';
    document.getElementById('secretMessage').innerHTML = ''; // Clear previous surprise
    resetSlider();
    document.getElementById('actionButtonsContainer').style.display = 'none';
}
function hidePuzzle() {
    document.getElementById('puzzleOverlay').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}
function resetSlider() {
    const thumb = document.getElementById('sliderThumb');
    thumb.style.left = '0px';
    thumb.onmousedown = startDrag;
    // Make sure touch events are also handled for mobile
    thumb.ontouchstart = startDrag;
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
}
function startDrag(e) {
    e.preventDefault();
    const thumb = document.getElementById('sliderThumb');
    const track = thumb.parentElement;
    const max = track.offsetWidth - thumb.offsetWidth;
    let startX = e.clientX || e.touches[0].clientX;
    let startLeft = parseInt(thumb.style.left, 10) || 0;

    function move(ev) {
        let currentX = ev.clientX || ev.touches[0].clientX;
        let dx = currentX - startX;
        let newLeft = Math.min(Math.max(startLeft + dx, 0), max);
        thumb.style.left = newLeft + 'px';
        if (newLeft >= max) {
            // Unlocked!
            stop();
            setTimeout(() => {
                displayPuzzleSurprise();
                document.getElementById('secretMessage').style.display = 'block';
            }, 200);
        }
    }

    function stop() {
        // Snap back if not unlocked
        if (parseInt(thumb.style.left, 10) < max) {
            thumb.style.left = '0px';
        }
        document.onmousemove = null;
        document.onmouseup = null;
        document.ontouchmove = null;
        document.ontouchend = null;
    }

    document.onmousemove = move;
    document.onmouseup = stop;
    document.ontouchmove = move;
    document.ontouchend = stop;
}
document.addEventListener('DOMContentLoaded', function() {
    const thumb = document.getElementById('sliderThumb');
    if (thumb) thumb.onmousedown = startDrag;
});

function displayPuzzleSurprise() {
    const container = document.getElementById('secretMessage');
    if (!currentPuzzleSurprise) {
        container.innerHTML = "<h3>💖 Oops!</h3><p>Something went wrong, but my love for you is always right!</p>";
        return;
    }

    let html = `<h3>${currentPuzzleSurprise.title}</h3>`;

    switch (currentPuzzleSurprise.type) {
        case 'message':
            html += `<p class="puzzle-text">${currentPuzzleSurprise.content}</p>`;
            break;
        case 'compliment':
            html += `<p class="puzzle-text" style="font-style: italic;">${currentPuzzleSurprise.content}</p>`;
            break;
        case 'photo':
            html += `<img src="photos/${currentPuzzleSurprise.content}" alt="Secret Photo" class="puzzle-photo" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p>Secret photo is shy! But imagine my happiest smile.</p>'" >`;
            html += `<p class="puzzle-caption">${currentPuzzleSurprise.caption}</p>`;
            break;
        case 'voucher':
            html += `<div class="puzzle-voucher">
                        <span class="puzzle-voucher-emoji">${currentPuzzleSurprise.emoji}</span>
                        <p>${currentPuzzleSurprise.content}</p>
                     </div>`;
            break;
        case 'riddle':
            html += `<p class="puzzle-riddle-q">${currentPuzzleSurprise.question}</p>`;
            html += `<p class="puzzle-riddle-a" style="display:none;">${currentPuzzleSurprise.answer}</p>`;
            html += `<button onclick="revealRiddleAnswer()" class="puzzle-riddle-button">Reveal Answer</button>`;
            break;
    }
    container.innerHTML = html;
}

function revealRiddleAnswer() {
    const answerEl = document.querySelector('.puzzle-riddle-a');
    const buttonEl = document.querySelector('.puzzle-riddle-button');
    if (answerEl) answerEl.style.display = 'block';
    if (buttonEl) buttonEl.style.display = 'none';
}

// Add this to your script.js file

// A variable to hold our countdown timer, so we can stop it later
let birthdayCountdownInterval;

// --- Helper function to calculate detailed age ---
function calculateDetailedAge(birthDate) {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // If days are negative, borrow from the previous month
    if (days < 0) {
        months--;
        // Get the last day of the previous month
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // If months are negative, borrow from years
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}

// --- Birthday Countdown Functions ---

function showBirthdayCountdown() {
    const overlay = document.getElementById('birthdayCountdownOverlay');
    // Use 'flex' to easily center the content, as defined in the CSS below
    if (!overlay) return; // Safety check in case HTML is missing
    overlay.style.display = 'flex';
    document.getElementById('actionButtonsContainer').style.display = 'none'; // Hide the main buttons
    startBirthdayCountdown();
}

function hideBirthdayCountdown() {
    const overlay = document.getElementById('birthdayCountdownOverlay');
    if (!overlay) return;
    overlay.style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex'; // Show the main buttons again
    // This is important to stop the countdown from running in the background
    clearInterval(birthdayCountdownInterval);
}

function startBirthdayCountdown() {
    // !!! IMPORTANT !!!
    // Replace with Radwa's actual birth date in YYYY, MM-1, DD format.
    // Note: Month is 0-indexed (0=Jan, 1=Feb, ..., 10=Nov, 11=Dec)
    const birthDate = new Date(1998, 10, 25); // Example: November 25, 1998

    // --- Age in Years, Months, Days Calculation ---
    const today = new Date();
    const age = calculateDetailedAge(birthDate);

    const ageParts = [];
    if (age.years > 0) {
        ageParts.push(`<span class="age-value">${age.years}</span> ${age.years === 1 ? 'year' : 'years'}`);
    }
    if (age.months > 0) {
        ageParts.push(`<span class="age-value">${age.months}</span> ${age.months === 1 ? 'month' : 'months'}`);
    }
    // Always include days
    ageParts.push(`<span class="age-value">${age.days}</span> ${age.days === 1 ? 'day' : 'days'}`);

    let ageString = "";
    if (ageParts.length > 1) {
        const lastPart = ageParts.pop();
        ageString = ageParts.join(', ') + `, and ${lastPart}`;
    } else {
        ageString = ageParts[0] || "";
    }
    document.getElementById('ageInDays').innerHTML = ageString;

    // --- Countdown Calculation ---
    const currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    // If her birthday has already passed this year, set the countdown for next year's birthday
    if (today > nextBirthday) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    // Function to update the timer every second
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = nextBirthday - now;

        // If the countdown is over, display a birthday message!
        if (distance < 0) {
            document.querySelector('#birthdayCountdownOverlay .countdown-timer').innerHTML = "<h3 class='birthday-today-message'>Happy Birthday, my love! 🎉</h3>";
            clearInterval(birthdayCountdownInterval);
            return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements, adding a '0' if the number is less than 10
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown(); // Run once immediately so it doesn't start blank
    birthdayCountdownInterval = setInterval(updateCountdown, 1000); // Update every second
}

// --- Category Navigation Functions ---

function showCategory(categoryName) {
    const container = document.getElementById('actionButtonsContainer');
    container.style.opacity = '0'; // Start fading out

    setTimeout(() => {
        // Hide main categories view
        document.getElementById('mainCategories').style.display = 'none';

        // Show the selected category's buttons
        const categoryToShow = document.getElementById(categoryName + 'Category');
        if (categoryToShow) {
            categoryToShow.style.display = 'flex';
        }

        // Show the back button
        document.getElementById('backToCategories').style.display = 'block';

        container.style.opacity = '1'; // Fade back in with new content
    }, 200); // This should match the CSS transition duration
}

function showMainCategories() {
    const container = document.getElementById('actionButtonsContainer');
    container.style.opacity = '0'; // Start fading out

    setTimeout(() => {
        // Hide all sub-category button rows
        const subcategories = document.querySelectorAll('#actionButtonsContainer .button-row');
        subcategories.forEach(el => {
            if (el.id !== 'mainCategories') el.style.display = 'none';
        });

        document.getElementById('mainCategories').style.display = 'flex';
        document.getElementById('backToCategories').style.display = 'none';

        container.style.opacity = '1'; // Fade back in with new content
    }, 200); // This should match the CSS transition duration
}

// --- Daily Question Feature ---

const dailyQuestions = [
    "What's a small thing that happened today that made you smile?",
    "If we could go anywhere in the world right now, where would you want to go?",
    "What song is currently stuck in your head?",
    "What's one of your favorite memories of us?",
    "If you could have any superpower for a day, what would it be and why?",
    "What's a new hobby you'd love for us to try together?",
    "What's one thing you're really proud of this week?",
    "Describe your perfect, relaxing evening.",
    "What's a movie you could watch over and over again?",
    "What's one dream you have for our future?",
    "What's the best compliment you've ever received?",
    "If you could talk to your younger self, what's one piece of advice you'd give?",
    "What's something you're looking forward to this month?",
    "What's a simple pleasure that always makes your day better?",
    "What's a skill you'd love to learn?",
    "What's a book or story that has stayed with you?",
    "What's one thing I do that always makes you laugh?",
    "If our love story was a movie, what would its title be?",
    "What's one adventure you want us to have together?",
    "What are you most grateful for today?"
];

function getDailyQuestion() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    // Use the day of the year to get a consistent question for the day
    return dailyQuestions[dayOfYear % dailyQuestions.length];
}

function showDailyQuestion() {
    document.getElementById('dailyQuestionText').textContent = getDailyQuestion();
    document.getElementById('dailyQuestionOverlay').style.display = 'flex';
    document.getElementById('actionButtonsContainer').style.display = 'none';
}

function hideDailyQuestion() {
    document.getElementById('dailyQuestionOverlay').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}

// --- Future Dreams Feature ---

// Load dreams from localStorage or use a default set
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

function saveDreams() {
    localStorage.setItem('futureDreams', JSON.stringify(futureDreams));
}

function renderDreams() {
    const board = document.getElementById('dreamsBoard');
    board.innerHTML = ''; // Clear the board first

    futureDreams.forEach(dreamText => {
        const note = document.createElement('div');
        note.className = 'dream-note';
        note.textContent = dreamText;
        // Add a random rotation for the sticky note effect
        note.style.setProperty('--rotation', Math.random() * 8 - 4);
        board.appendChild(note);
    });
}

function showFutureDreams() {
    document.getElementById('futureDreamsOverlay').style.display = 'flex';
    document.getElementById('actionButtonsContainer').style.display = 'none';
    renderDreams();
}

function hideFutureDreams() {
    document.getElementById('futureDreamsOverlay').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}

function addDream() {
    const input = document.getElementById('dreamInput');
    const newDream = input.value.trim();

    if (newDream) {
        futureDreams.push(newDream);
        input.value = ''; // Clear the input
        saveDreams();
        renderDreams();
    }
}

// --- Our World Map Feature ---

const mapPoints = [
    {
        x: 20, y: 30, type: 'memory',
        title: "The Spark",
        date: "08 Jan 2025",
        description: "The place where it all began. The moment our eyes met and my heart knew its journey was starting with you.",
        photo: "timeline-photos/photo24.jpg"
    },
    {
        x: 75, y: 45, type: 'memory',
        title: "Our First Adventure",
        date: "15 Feb 2025",
        description: "When we decided to choose each other, officially becoming one soul in two bodies. Our adventure started here.",
        photo: "timeline-photos/photo10.jpg"
    },
    {
        x: 40, y: 65, type: 'memory',
        title: "The Butterfly Museum",
        date: "07 Jun 2025",
        description: "Surrounded by beauty, but all I could see was you. Our love had grown wings of its own.",
        photo: "timeline-photos/IMG-20250608-WA0120.jpg"
    },
    {
        x: 60, y: 15, type: 'dream',
        title: "Northern Lights in Sweden",
        date: "Our Future",
        description: "One day, we'll stand under the dancing sky, wrapped in a blanket, watching the aurora together.",
        photo: "photos/future_aurora.jfif"
    }//,
    //{
    //    x: 85, y: 70, type: 'dream',
    //    title: "Our Home",
    //    date: "Our Future",
    //    description: "A little place filled with laughter, love, and the smell of your favorite cooking. Our own sanctuary.",
    //    photo: "photos/future_home.jpg" // NOTE: PENDING
    //}
];

function showOurWorld() {
    document.getElementById('ourWorldOverlay').style.display = 'flex';
    document.getElementById('actionButtonsContainer').style.display = 'none';
    renderMapPoints();
}

function hideOurWorld() {
    document.getElementById('ourWorldOverlay').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
    document.getElementById('mapPointDetailCard').style.display = 'none';
}

function renderMapPoints() {
    const container = document.querySelector('.world-map-background');
    container.innerHTML = ''; // Clear existing points

    mapPoints.forEach(point => {
        const pointEl = document.createElement('div');
        pointEl.className = `map-point ${point.type}`;
        pointEl.style.left = `${point.x}%`;
        pointEl.style.top = `${point.y}%`;
        pointEl.onclick = () => showMapPointDetails(point);
        container.appendChild(pointEl);
    });
}

function showMapPointDetails(point) {
    const card = document.getElementById('mapPointDetailCard');
    document.getElementById('mapPointPhoto').innerHTML = `<img src="${point.photo}" alt="${point.title}" onerror="this.style.display='none'">`;
    document.getElementById('mapPointTitle').textContent = point.title;
    document.getElementById('mapPointDate').textContent = point.date;
    document.getElementById('mapPointDescription').textContent = point.description;
    card.style.display = 'block';
}

// --- Star Portrait Feature ---

let portraitAnimationId = null;
let portraitStars = [];

function showStarPortrait() {
    document.getElementById('starPortraitOverlay').style.display = 'flex';
    document.getElementById('actionButtonsContainer').style.display = 'none';
    initAndAnimatePortrait();
}

function hideStarPortrait() {
    document.getElementById('starPortraitOverlay').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
    if (portraitAnimationId) {
        cancelAnimationFrame(portraitAnimationId);
        portraitAnimationId = null;
    }
}

function initAndAnimatePortrait() {
    const canvas = document.getElementById('portrait-canvas');
    const ctx = canvas.getContext('2d');
    const overlay = document.getElementById('starPortraitOverlay');
    canvas.width = overlay.clientWidth;
    canvas.height = overlay.clientHeight;

    portraitStars = []; // Clear previous stars

    const img = new Image();
    // IMPORTANT: Create 'radwa_portrait.png' in your 'photos' folder.
    // For best performance, use a smaller image (e.g., 500x500px) with a transparent background.
    // A high-contrast silhouette is ideal.
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

        // Draw image to get pixel data
        ctx.drawImage(img, startX, startY, drawWidth, drawHeight);
        const imageData = ctx.getImageData(startX, startY, drawWidth, drawHeight);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear after getting data

        const targetPoints = [];
        // OPTIMIZATION: Increased pixelStep to sample fewer points, making it much faster.
        const pixelStep = 7;

        for (let y = 0; y < imageData.height; y += pixelStep) {
            for (let x = 0; x < imageData.width; x += pixelStep) {
                // Get the pixel's color and alpha components.
                const i = (y * imageData.width + x) * 4;
                const r = imageData.data[i];
                const g = imageData.data[i + 1];
                const b = imageData.data[i + 2];
                const a = imageData.data[i + 3];

                // OPTIMIZATION: Check brightness to skip black/dark spots.
                // A pixel is part of the portrait if it's not transparent AND not too dark.
                const brightness = r + g + b;
                if (a > 128 && brightness > 60) { // Brightness threshold (e.g., > 60) avoids pure black.
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
                speed: Math.random() * 0.05 + 0.04, // Increased base speed for faster formation
                alpha: 0,
                radius: Math.random() * 2 + 1.5 // Increased radius for a clearer, fuller portrait
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

function animatePortrait() {
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

function showCelestialMap() {
    document.getElementById('celestialOverlay').style.display = 'flex';
    document.getElementById('actionButtonsContainer').style.display = 'none';
    // Wait for the next animation frame to ensure the overlay is visible
    // and has dimensions before we try to draw the map.
    requestAnimationFrame(generateStarMap);
}

// Flag to check if the celestial map has been initialized
let celestialMapInitialized = false;

function hideCelestialMap() {
    document.getElementById('celestialOverlay').style.display = 'none';
    document.getElementById('actionButtonsContainer').style.display = 'flex';
    // Clear the map content when hiding to free up resources.
    const mapContainer = document.getElementById("celestial-map");
    if (mapContainer) mapContainer.innerHTML = "";
    celestialMapInitialized = false; // Reset the flag so the map is re-initialized next time
}

function generateStarMap() {
    if (typeof Celestial === 'undefined') {
        console.error("Celestial library not loaded. Make sure celestial.min.js and its D3.js v3 dependencies are correct.");
        alert("The Celestial library is missing or corrupt. The star map cannot be generated.");
        return;
    }

    const dateValue = document.getElementById('specialDate').value;
    const date = dateValue ? new Date(dateValue + 'T12:00:00Z') : new Date();

    if (celestialMapInitialized) {
        // If map is already displayed, just update the date and redraw.
        // The skyview function is the correct way to do this for location-based maps.
        Celestial.skyview({ date: date });
    } else {
        // This is the first time, so we need to initialize the map with a full configuration.
        const config = {
            width: 1024, // Set to a larger value for more detail
            projection: "stereographic",
            transform: "equatorial", // This is the coordinate system of the data
            location: true, // This enables location-based features
            geopos: [30.0444, 31.2357], // [lat, lon] for Cairo, Egypt
            // By removing 'center', the map will now center on the zenith for the given time/location
            datapath: "data/", // Path to data files
            date: date,
            background: { fill: "#0a0f1b", stroke: "#ffb6d5", opacity: 1 },
            stars: {
                colors: true,
                names: true,
                style: { fill: "#ffffff", opacity: 1 },
                limit: 8, // Increased from 6 to show more stars
                size: 5
            },
            constellations: {
                names: true,
                nameStyle: { fill: "#ffb6d5", align: "center", baseline: "middle", opacity: 0.8 },
                lines: true,
                lineStyle: { stroke: "#ffb6d5", width: 1, opacity: 0.6 }
            },
            mw: {
                show: true, // Show the Milky Way band.
                style: { fill: "#ffffff", opacity: 0.15 }
            },
            planets: { show: false },
            // Show horizon and daylight for a more dynamic view
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
        if (!mapContainer) {
            console.error("The '#celestial-map' container was not found.");
            return;
        }
        if (mapContainer.clientHeight === 0) {
            mapContainer.style.height = "100%";
        }
        config.container = "celestial-map"; // Add container ID for initialization
        try {
            Celestial.display(config);
            celestialMapInitialized = true; // Set the flag
        } catch (e) {
            console.error("Error displaying celestial map:", e);
            alert("There was an error generating the star map. Please try again later.");
        }
    }
}


// --- Piano Feature ---
let audioContext;
const notes = {
    'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81,
    'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00,
    'A#3': 233.08, 'B3': 246.94,
    'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63,
    'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00,
    'A#4': 466.16, 'B4': 493.88,
    'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25,
    'F5': 698.46, 'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00,
    'A#5': 932.33, 'B5': 987.77,
    'C6': 1046.50, 'C#6': 1108.73, 'D6': 1174.66, 'D#6': 1244.51, 'E6': 1318.51,
    'F6': 1396.91, 'F#6': 1479.98, 'G6': 1567.98, 'G#6': 1661.22, 'A6': 1760.00,
    'A#6': 1864.66, 'B6': 1975.53, 'C7': 2093.00
};

const keyMap = {
    'z': 'C3', 's': 'C#3', 'x': 'D3', 'd': 'D#3', 'c': 'E3',
    'v': 'F3', 'g': 'F#3', 'b': 'G3', 'h': 'G#3', 'n': 'A3',
    'j': 'A#3', 'm': 'B3',
    'a': 'C4', 'w': 'C#4', 's': 'D4', 'e': 'D#4', 'd': 'E4',
    'f': 'F4', 't': 'F#4', 'g': 'G4', 'y': 'G#4', 'h': 'A4',
    'u': 'A#4', 'j': 'B4',
    'k': 'C5', 'o': 'C#5', 'l': 'D5', 'p': 'D#5', ';': 'E5',
    "'": 'F5', '[': 'F#5', ']': 'G5',
    'q': 'C6', '2': 'C#6', 'w': 'D6', '3': 'D#6', 'e': 'E6',
    'r': 'F6', '5': 'F#6', 't': 'G6', '6': 'G#6', 'y': 'A6',
    '7': 'A#6', 'u': 'B6', 'i': 'C7'
};


const songbook = {
    'ode-to-joy': {
        title: 'Ode to Joy',
        notes: 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 P E4 D4 D4 E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 D4 C4 C4 D4 D4 E4 C4 D4 E4 F4 E4 C4 D4 E4 F4 E4 D4 C4 D4 G3'
    },
    'baa-baa-black-sheep': {
        title: 'Baa Baa Black Sheep',
        notes: 'C4 C4 G4 G4 A4 A4 G4 P F4 F4 E4 E4 D4 D4 C4 P G4 G4 F4 F4 E4 E4 D4 P G4 G4 F4 F4 E4 E4 D4 P C4 C4 G4 G4 A4 A4 G4 P F4 F4 E4 E4 D4 D4 C4'
    },
    'chopsticks': {
        title: 'Chopsticks',
        notes: 'F4 G4 F4 G4 F4 G4 F4 G4 F4 G4 F4 G4 E4 G4 E4 G4 E4 G4 E4 G4 E4 G4 E4 G4 D4 B4 D4 B4 D4 B4 D4 B4 D4 B4 D4 B4 C4 C5 C4 C5 C4 C5'
    },
    'brother-john': {
        title: 'Brother John',
        notes: 'C4 D4 E4 C4 P C4 D4 E4 C4 P E4 F4 G4 P E4 F4 G4 P G4 A4 G4 F4 E4 C4 P G4 A4 G4 F4 E4 C4 P C4 G3 C4 P C4 G3 C4'
    },
    'mary-had-a-little-lamb': {
        title: 'Mary Had a Little Lamb',
        notes: 'E4 D4 C4 D4 E4 E4 E4 P D4 D4 D4 P E4 G4 G4 P E4 D4 C4 D4 E4 E4 E4 P E4 D4 D4 E4 D4 C4'
    },
    'twinkle-twinkle': {
        title: 'Twinkle Twinkle Little Star',
        notes: 'C4 C4 G4 G4 A4 A4 G4 P F4 F4 E4 E4 D4 D4 C4 P G4 G4 F4 F4 E4 E4 D4 P G4 G4 F4 F4 E4 E4 D4 P C4 C4 G4 G4 A4 A4 G4 P F4 F4 E4 E4 D4 D4 C4'
    },
    'happy-birthday': {
        title: 'Happy Birthday',
        notes: 'G4 G4 A4 G4 C5 B4 P G4 G4 A4 G4 D5 C5 P G4 G4 G5 E5 C5 B4 A4 P F5 F5 E5 C5 D5 C5'
    },
    'fur-elise': {
        title: 'Für Elise',
        notes: 'E5 D#5 E5 D#5 E5 B4 D5 C5 A4 P C4 E4 A4 B4 P E4 G#4 B4 C5 P E5 D#5 E5 D#5 E5 B4 D5 C5 A4 P C4 E4 A4 B4 P E4 C5 B4 A4 P B4 C5 D5 E5 P G4 F5 E5 D5 P C5 E4 D4 C4 B3'
    },
    'turkish-march': {
        title: 'Turkish March',
        notes: 'A5 B5 C#6 A5 B5 C#6 P E6 D#6 C#6 B5 A5 G#5 F#5 E5 P F#5 G#5 A5 G#5 F#5 E5 D#5 E5 P F#5 G#5 A5 B5 C#6 B5 A5 G#5 P A5 B5 C#6 B5 A5 G#5 P A5 B5 C#6 B5 A5 G#5 F#5 E5 D#5 C#5 B4 A4 G#4 F#4 E4 F#4 G#4 A4 B4 C#5 D#5 E5 F#5 G#5 A5'
    },
    'our-song': {
        title: 'Our Song (A Masterpiece for Radwa)',
        notes: 'C4 G4 E4 G4 P C5 G4 E4 G4 P F4 C5 A4 F4 P D5 B4 G4 D4 P C5 G5 E5 G5 P F5 D5 B4 G4 P A4 F5 D5 B4 P G4 E5 C5 A4 P C4 G4 E4 G4 P C5 G4 E4 G4 P F4 C5 A4 F4 P D5 B4 G4 D4 P C5 G5 E5 G5 P F5 D5 B4 G4 P A4 F5 D5 B4 P G4 E5 C5 A4 P C4 G4 E4 G4 C5'
    },
    'canon-in-d': {
        title: 'Canon in D',
        notes: 'F#5 E5 D5 C#5 B4 A4 B4 C#5 P D5 E5 F#5 G5 F#5 E5 D5 P C#5 B4 C#5 D5 E5 D5 C#5 B4 A4 P A4 G4 F#4 E4 D4 C#4 D4 E4'
    },
    'river-flows-in-you': {
        title: 'River Flows in You',
        notes: 'F#4 A4 C#5 P E4 A4 C#5 P D4 A4 C#5 P C#4 A4 C#5 P A4 C#5 E5 A5 G#5 A5 G#5 A5 E5 A5 D5 P A4 C#5 E5 A5 G#5 A5 G#5 A5 E5 A5 D5'
    }
};

const secretMelody = ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4'];
let playedNotes = [];


function showPiano() {
    console.log("showPiano called");
    const overlay = document.getElementById('pianoOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        document.getElementById('actionButtonsContainer').style.display = 'none';
        // Initialize AudioContext on user interaction
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        document.addEventListener('keydown', handleKeyDown);
    }
}

function hidePiano() {
    const overlay = document.getElementById('pianoOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.getElementById('actionButtonsContainer').style.display = 'flex';
        playedNotes = []; // Reset progress
        const messageEl = document.getElementById('piano-message');
        if (messageEl) {
            messageEl.style.display = 'none';
        }
        document.removeEventListener('keydown', handleKeyDown);
    }
}

function playNote(note) {
    if (!audioContext || !notes[note]) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'triangle'; // A softer, more pleasant tone than sine
    oscillator.frequency.setValueAtTime(notes[note], audioContext.currentTime);

    // Piano-like envelope: sharp attack, then decay
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.05); // Quick attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.75); // Slower decay

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1); // Let the note ring a bit longer

    // Visual feedback
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 200);
    }
}

function handleKeyClick(e) {
    const note = e.target.dataset.note;
    if (note) {
        playNote(note);
        playedNotes.push(note);
        checkMelody();
    }
}

function handleKeyDown(e) {
    const note = keyMap[e.key];
    if (note) {
        e.preventDefault(); // Prevent default browser action for keys like 'space' or '/'
        playNote(note);
        playedNotes.push(note);
        checkMelody();
    }
}

function checkMelody() {
    // If playedNotes is longer than secretMelody, trim it
    if (playedNotes.length > secretMelody.length) {
        playedNotes = playedNotes.slice(playedNotes.length - secretMelody.length);
    }

    if (playedNotes.join(',') === secretMelody.join(',')) {
        const messageEl = document.getElementById('piano-message');
        if (messageEl) {
            messageEl.textContent = "You found the secret melody! It's the song of my heart for you. ❤️";
            messageEl.style.display = 'block';
        }
        // Reset after a delay so they can play again
        setTimeout(() => {
            playedNotes = [];
            if (messageEl) {
                messageEl.style.display = 'none';
            }
        }, 5000);
    }
}

function initializePiano() {
    const piano = document.querySelector('.piano');
    if (!piano) return;

    piano.innerHTML = ''; // Clear existing keys

    const octaves = [3, 4, 5, 6];
    const allNotes = [];
    octaves.forEach(octaveNum => {
        const octaveNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        octaveNotes.forEach(noteName => {
            allNotes.push(noteName + octaveNum);
        });
    });
    allNotes.push('C7');

    let whiteKeyIndex = 0;
    allNotes.forEach(note => {
        const key = document.createElement('div');
        const isBlack = note.includes('#');
        key.className = `key ${isBlack ? 'black' : 'white'}`;
        key.dataset.note = note;
        
        const keyText = document.createElement('span');
        keyText.textContent = note;
        key.appendChild(keyText);

        piano.appendChild(key);

        if (isBlack) {
            // Position black key relative to the previous white key
            key.style.left = `${(whiteKeyIndex * 50) - 15}px`;
        } else {
            whiteKeyIndex++;
        }
    });

    piano.style.width = `${whiteKeyIndex * 50}px`;
    piano.addEventListener('click', handleKeyClick);
}



function showSong(songId) {
    const song = songbook[songId];
    if (song) {
        document.getElementById('song-title').innerHTML = `${song.title} <button class="play-song-btn" onclick="playSong('${songId}')">▶️ Play</button>`;
        document.getElementById('song-notes').textContent = song.notes;
    }
}

async function playSong(songId) {
    const song = songbook[songId];
    if (!song) return;

    const notesArray = song.notes.replace(/\|/g, '').split(/\s+/).filter(n => n);
    const noteDuration = 300; // ms per note
    const pauseDuration = 100; // ms between notes

    // Disable play button
    const playButton = document.querySelector('.play-song-btn');
    if(playButton) playButton.disabled = true;

    for (const note of notesArray) {
        if (note === 'P') {
            await new Promise(resolve => setTimeout(resolve, noteDuration));
        } else {
            playNote(note);
            await new Promise(resolve => setTimeout(resolve, noteDuration + pauseDuration));
        }
    }

    // Re-enable play button
    if(playButton) playButton.disabled = false;
}

// --- Fairytale Narration ---
let fairytaleUtterance = null;
let fairytaleVoice = null;

// Load voices and select a soothing one
window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    const preferredVoices = [
        'Google UK English Female',
        'Microsoft Zira Desktop - English (United States)',
        'Samantha',
        'Google US English',
        'Tessa'
    ];
    
    fairytaleVoice = voices.find(v => preferredVoices.includes(v.name));

    if (!fairytaleVoice) {
        fairytaleVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.includes('Female')) || 
                         voices.find(voice => voice.lang === 'en-GB' && voice.name.includes('Female')) ||
                         voices.find(voice => voice.lang.startsWith('en-')) ||
                         voices[0];
    }
    console.log("Selected fairytale voice:", fairytaleVoice ? fairytaleVoice.name : "None");
};

function speakText(text) {
    if (!window.speechSynthesis) return;
    if (!fairytaleVoice) {
        setTimeout(() => speakText(text), 100);
        return;
    }
    window.speechSynthesis.cancel();

    // Phonetic replacements for narration
    const narrationText = text.replace(/Radwa/gi, 'Rah-dwah').replace(/Ahmed/gi, 'Ah-mad');

    fairytaleUtterance = new SpeechSynthesisUtterance(narrationText);
    fairytaleUtterance.voice = fairytaleVoice;
    fairytaleUtterance.rate = 0.9;
    fairytaleUtterance.pitch = 1;
    window.speechSynthesis.speak(fairytaleUtterance);
}

function playNarration() {
    if (window.speechSynthesis.paused && fairytaleUtterance) {
        window.speechSynthesis.resume();
    } else {
        const storyEl = document.getElementById('storyText');
        if (storyEl) {
            speakText(storyEl.innerText);
        }
    }
}

function pauseNarration() {
    window.speechSynthesis.pause();
}

function stopNarration() {
    window.speechSynthesis.cancel();
}


// --- Modified Fairytale Logic ---
let fairytaleStory = localStorage.getItem('magicLoveWonderlandFairytale') || '';

function showFairytale() {
    const overlay = document.getElementById('fairytaleOverlay');
    const storyTextContainer = document.getElementById('storyText');
    if (!overlay || !storyTextContainer) return;
    
    storyTextContainer.innerHTML = fairytaleStory;
    
    if (fairytaleStory.length === 0) {
        continueFairytale(true);
    }
    
    showOverlay(overlay);
}

function hideFairytale() {
    stopNarration();
    const overlay = document.getElementById('fairytaleOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
    document.getElementById('actionButtonsContainer').style.display = 'flex';
}

function continueFairytale(shouldAutoPlay = false) {
    const continueBtn = document.getElementById('continueStoryBtn');
    const storyTextContainer = document.getElementById('storyText');
    if (!continueBtn || !storyTextContainer) return;

    continueBtn.disabled = true;
    continueBtn.textContent = 'The magic is happening...';

    const mockApiCall = new Promise((resolve) => {
        setTimeout(() => {
            const chapters = [
                "<p>Once upon a time, in a wonderland shimmering with magic and love, a hero named Ahmed discovered his greatest treasure, a radiant princess named Radwa. Their story was written in the stars, waiting to be told.</p>",
                "<p>One sunny afternoon, as petals of cherry blossoms danced in the wind, Ahmed knew he had to create a world that reflected the beauty he saw in Radwa's eyes. And so, with a heart full of love, he began to build this very wonderland, a testament to a love that felt like magic.</p>",

                // The Beginning of Their Love Story (Timeline Events in chronological order)
                "<p>Their story began with a spark, a moment when their eyes met and a special journey began. It was like the first star appearing in the twilight sky, promising a universe of possibilities.</p>", // Timeline: The Spark (08 Jan 2025)
                "<p>Soon, coffee and conversations became their favorite pastime, where ordinary moments transformed into extraordinary memories. It was then that the hero realized he couldn't imagine a life without his princess.</p>", // Timeline: Coffee and Conversations (28 Jan 2025)
                "<p>A significant chapter unfolded when the hero met the princess's family, a perfect moment where the world seemed to disappear, leaving only the two of them in a bubble of pure happiness.</p>", // Timeline: I met your family (01 Feb 2025)
                "<p>Their adventure truly began when they officially became one soul in two bodies, choosing each other to embark on a shared destiny. This was the start of their grand journey together.</p>", // Timeline: Start of our Adventure Together (15 Feb 2025)
                "<p>A magical night followed, filled with hearts bouncing and dancing, as they chose their symbols of eternal love. Their wings could not be contained, soaring with joy.</p>", // Timeline: Buying our Jewelery (26 Feb 2025)
                "<p>The hero prepared for their engagement, visiting a grand palace, only to realize that his princess, his butterfly, was far more beautiful than any earthly splendor.</p>", // Timeline: First Place and Palace (17 Mar 2025)
                "<p>The hero's happiest birthday ever was a moment of warmth, surrounded by his second family, a testament to the love and belonging they had found.</p>", // Timeline: My Happiest Birthday Ever (25 Mar 2025)
                "<p>On a day etched in their hearts, the hero's soul found its true home. Fireworks of joy erupted within him, and a profound calmness settled in his mind, knowing he was hers forever.</p>", // Timeline: I Was Yours Forever (12 Apr 2025)
                "<p>Their first occasion together solidified a simple truth: anywhere, anytime, their hearts would always belong only to each other.</p>", // Timeline: First Occasion Together (2 May 2025)
                "<p>Creating memories together became an art, with each shared moment adding to the masterpiece of their love. The princess was his pride, his light, his beautiful flower.</p>", // Timeline: Creating Memories Together (3 May 2025)
                "<p>Returning to the Butterfly Museum, their love had grown its own wings, soaring higher and more beautifully than ever before, a symbol of their evolving bond.</p>", // Timeline: Butterfly Museum Revisited (07 Jun 2025)
                "<p>A perfect night out, filled with movies and fine dining, felt like a scene from a classic romance. Every detail was perfect, especially with the princess by his side.</p>", // Timeline: A Perfect Night Out (09 Jun 2025)
                "<p>Closing one chapter was merely the beginning of another. The hero watched his princess bravely step into a new phase, filled with immense pride and excitement for what's next.</p>", // Timeline: Closing One Chapter (12 Jun 2025)
                "<p>A new beginning dawned, marked by grace and courage. The hero pledged his unwavering support, cheering her on every step of the way, as they embraced what was next.</p>", // Timeline: A New Beginning (16 Jun 2025)
                "<p>Building their nest, choosing each piece for their home, was more than just furnishing a space. It was about building their sanctuary, their future, and it felt like floating on clouds.</p>", // Timeline: Building Our Nest (20 Jul 2025)
                "<p>Even in the quietest evenings, just the two of them, lost in conversation and comfort, they found perfect moments, proving that love thrives in simplicity.</p>", // Timeline: A Quiet Evening (22 Jul 2025)
                "<p>Dreaming together became a shared adventure, planning their future one aspiration at a time. Every shared dream brought them closer, weaving a tapestry of hope.</p>", // Timeline: Dreaming Together (01 Aug 2025)
                "<p>The princess's laughter was the hero's favorite sound, a melody that filled his world with joy, a constant reminder of the happiness she brought into his life.</p>", // Timeline: Laughter and Joy (10 Aug 2025)

                // Deepening Connection & Shared Experiences
                "<p>Their photo gallery held countless beautiful moments, each image a captured memory, a testament to their shared journey and the love that shone through every frame.</p>", // Our Photos
                "<p>The Star Portrait revealed the princess as a constellation of virtues, her inner light shining brightly, a true star in the hero's universe.</p>", // Portrait of a Star
                "<p>Exploring their world, they marked significant places on a map, each point a memory or a dream, a testament to where they had been and where they longed to go together.</p>", // Explore Our World
                "<p>Under the celestial map, they traced the stars of their special night, seeing their names written in the constellations, a cosmic affirmation of their bond.</p>", // Our Night Sky
                "<p>Love and poems flowed freely, with verses dedicated to the princess, each word a brushstroke painting the depth of the hero's affection.</p>", // Love & Poems (general)
                "<p>A special poem, crafted just for her, spoke of fields of dreams and radiant light, capturing the essence of her beauty and the profound impact she had on his soul.</p>", // A Poem for You
                "<p>The hero found countless reasons to love her, each one a floating message, showering her with appreciation for every detail, every strength, every kindness.</p>", // Reasons I Love You
                "<p>A heartfelt letter, typed out with care, conveyed the unspoken depths of his love, a tangible piece of his soul shared with his beloved princess.</p>", // A Letter For You
                "<p>Their playlist was the soundtrack to their love, a collection of songs that spoke of their journey, their feelings, and the harmony they found together.</p>", // Our Playlist
                "<p>On the piano, they played their song, a melody unique to them, a harmonious blend of their spirits, creating music only their hearts could truly understand.</p>", // Play Our Song

                // Playful Moments & Surprises
                "<p>Their time together was filled with playful moments, like the Memory Lane Game, where shared laughter and rediscovered memories strengthened their bond.</p>", // Memory Game
                "<p>A secret puzzle, once unlocked, revealed hidden messages and delightful surprises, just like the layers of joy they discovered in their relationship.</p>", // Secret Puzzle
                "<p>Gifts, both big and small, were exchanged, each one a symbol of their affection, a tangible expression of the magic they shared.</p>", // Gift

                // Future & Commitment
                "<p>Daily questions sparked deeper conversations, revealing new facets of their personalities and strengthening their understanding of each other, one thoughtful answer at a time.</p>", // Today's Question
                "<p>Their dream board was a canvas of their future, filled with aspirations and adventures yet to come, a visual representation of their shared hopes and desires.</p>", // Dream Board
                "<p>Counting down to her special day, the hero felt the anticipation of celebrating the princess, a reminder of the joy she brought into his life.</p>", // Birthday Countdown
                "<p>And then came the big question, a moment suspended in time, where the hero's heart poured out its deepest desire, awaiting the answer that would change their lives forever.</p>", // The Big Question

                // Conclusion
                "<p>The fairytale itself was a living, breathing story, unfolding with each new chapter, narrated by the hero's heart, a tale of magic, love, and endless possibilities.</p>", // Our Fairytale
                "<p>As the seasons changed, so did the colors of their wonderland, but the one thing that remained constant was the light in each other's eyes—a north star in an ever-changing world.</p>",
                "<p>And so, their story continues, a never-ending fairytale written not with ink, but with moments of joy, acts of kindness, and a love that is, and always will be, legendary.</p>",
                "<p>Every day was a new verse, every shared glance a chorus, in the beautiful song of their life together. Their love, a beacon, shone ever brighter, illuminating the path for all who dared to dream.</p>"
            ];
            
            let currentChapterCount = (fairytaleStory.match(/<p>/g) || []).length;
            
            if (currentChapterCount >= chapters.length) {
                fairytaleStory = ''; 
                currentChapterCount = 0;
            }
            
            resolve(chapters[currentChapterCount]);
        }, 2000);
    });

    mockApiCall.then(newChapter => {
        if (fairytaleStory.length === 0) {
            storyTextContainer.innerHTML = '';
        }
        
        fairytaleStory += newChapter;
        storyTextContainer.innerHTML = fairytaleStory;
        localStorage.setItem('magicLoveWonderlandFairytale', fairytaleStory);
        
        const contentElement = document.querySelector('#fairytaleOverlay .fairytale-content');
        if (contentElement) {
            contentElement.scrollTop = contentElement.scrollHeight;
        }

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChapter;
        const newChapterText = tempDiv.textContent || tempDiv.innerText || "";
        
        if (shouldAutoPlay) {
            playNarration();
        } else {
            speakText(newChapterText);
        }

        continueBtn.disabled = false;
        continueBtn.textContent = 'Continue the Story...';
    });
}