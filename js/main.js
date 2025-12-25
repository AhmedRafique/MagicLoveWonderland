/* =========================================
   ✨ Magic Love Wonderland - Main Entry Point
   ========================================= */

// 1. IMPORT UTILITIES & DATA
import { toggleOverlay, showOverlay, showCategory, showMainCategories } from './utils.js';
import { loveMessages } from './config.js';

// 2. IMPORT FEATURES FROM MODULES
// We import every function used by an HTML 'onclick' event here
import { 
    initiateLoveWonderland, moonSurprise, showLoveReasons, hideLoveReasons,
    hideNameConstellation, replayProposalConstellation, showStarPortrait, hideStarPortrait,
    initializeStarrySky, createFloatingOrbs, removeFloatingOrbs,
    showProposal, acceptProposal
} from './visuals.js';

import {
    showGallery, hideGallery, showTimeline, hideTimeline,
    showPoem, hidePoem, showLoveLetter, hideLoveLetter,
    showFairytale, hideFairytale, continueFairytale,
    showPhotoMosaic, hidePhotoMosaic, hideZoomedPhoto
} from './story.js';

import {
    showMemoryGame, hideMemoryGame, showPuzzle, hidePuzzle,
    showLoveWheel, hideLoveWheel, startSpin,
    showPhotoPuzzle, hidePhotoPuzzle, showGiftBox, hideGiftBox, sendKiss
} from './games.js';

import {
    startWeddingTimer, initVowsVault, hideTimeCapsule,
    showDailyQuestion, hideDailyQuestion, showFutureDreams, hideFutureDreams, addDream,
    showOurWorld, hideOurWorld, showCelestialMap, hideCelestialMap, initializeCelestialFeature
} from './journey.js';
import { addFairytaleChapter } from './story.js';
import { toggleRecording, saveRecordedSong, playOurSong } from './audio.js';

import {
    toggleMusic, showPlaylist, hidePlaylist,
    showPiano, hidePiano, initializePiano, showSong, playSong,
    playNarration, pauseNarration, stopNarration, triggerHeartbeat
} from './audio.js';


/* =========================================
   🌍 GLOBAL WINDOW ASSIGNMENTS
   =========================================
   (Required so HTML buttons can see these functions)
   ========================================= */

// Navigation & Utilities
window.toggleOverlay = toggleOverlay;
window.showOverlay = showOverlay;
window.showCategory = showCategory;
window.showMainCategories = showMainCategories;

// Visuals & Proposal
window.initiateLoveWonderland = initiateLoveWonderland;
window.moonSurprise = moonSurprise;
window.showLoveReasons = showLoveReasons;
window.hideLoveReasons = hideLoveReasons;
window.hideNameConstellation = hideNameConstellation;
window.replayProposalConstellation = replayProposalConstellation;
window.showStarPortrait = showStarPortrait;
window.hideStarPortrait = hideStarPortrait;
window.showProposal = showProposal;
window.acceptProposal = acceptProposal;
window.sendKiss = sendKiss;

// Story
window.showGallery = showGallery;
window.hideGallery = hideGallery;
window.showTimeline = showTimeline;
window.hideTimeline = hideTimeline;
window.showPoem = showPoem;
window.hidePoem = hidePoem;
window.showLoveLetter = showLoveLetter;
window.hideLoveLetter = hideLoveLetter;
window.showFairytale = showFairytale;
window.hideFairytale = hideFairytale;
window.continueFairytale = continueFairytale;
window.showPhotoMosaic = showPhotoMosaic;
window.hidePhotoMosaic = hidePhotoMosaic;
window.hideZoomedPhoto = hideZoomedPhoto;

// Games
window.showMemoryGame = showMemoryGame;
window.hideMemoryGame = hideMemoryGame;
window.showPuzzle = showPuzzle;
window.hidePuzzle = hidePuzzle;
window.showLoveWheel = showLoveWheel;
window.hideLoveWheel = hideLoveWheel;
window.startSpin = startSpin;
window.showPhotoPuzzle = showPhotoPuzzle;
window.hidePhotoPuzzle = hidePhotoPuzzle;
window.showGiftBox = showGiftBox;
window.hideGiftBox = hideGiftBox;

// Journey (Wedding Timer, Vows, Map)
window.startWeddingTimer = startWeddingTimer;
window.initVowsVault = initVowsVault; // This opens the Vows Vault
window.hideTimeCapsule = hideTimeCapsule;
window.showDailyQuestion = showDailyQuestion;
window.hideDailyQuestion = hideDailyQuestion;
window.showFutureDreams = showFutureDreams;
window.hideFutureDreams = hideFutureDreams;
window.addDream = addDream;
window.showOurWorld = showOurWorld;
window.hideOurWorld = hideOurWorld;
window.showCelestialMap = showCelestialMap;
window.hideCelestialMap = hideCelestialMap;
window.generateStarMap = () => { /* Redundant wrapper if needed by HTML */ showCelestialMap(); };

// Audio
window.showPlaylist = showPlaylist;
window.hidePlaylist = hidePlaylist;
window.showPiano = showPiano;
window.hidePiano = hidePiano;
window.showSong = showSong;
window.playSong = playSong;
window.playNarration = playNarration;
window.pauseNarration = pauseNarration;
window.stopNarration = stopNarration;
// Recording / Our Song (exposed for button hooks)
window.toggleRecording = toggleRecording;
window.saveRecordedSong = saveRecordedSong;
window.playOurSong = playOurSong;


/* =========================================
   🚀 INITIALIZATION (Run on Load)
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Welcome Message Logic
    if (localStorage.getItem('radwaVisited')) {
        const header = document.querySelector('h1');
        if (header) header.textContent += ' Welcome back, my love!';
    } else {
        localStorage.setItem('radwaVisited', 'true');
    }

    // 2. Button Listeners (Non-inline)
    const openSurpriseBtn = document.getElementById('openSurpriseBtn');
    if (openSurpriseBtn) openSurpriseBtn.addEventListener('click', initiateLoveWonderland);

    const musicBtn = document.getElementById("musicButton");
    if (musicBtn) musicBtn.addEventListener("click", toggleMusic);

    const vaultBtn = document.getElementById('time-capsule-btn');
    if (vaultBtn) vaultBtn.addEventListener('click', initVowsVault);

    const floatingMessage = document.querySelector('.floating-message');
    if (floatingMessage) floatingMessage.addEventListener('click', triggerHeartbeat);

    // Fairytale add/save
    const addChapterBtn = document.getElementById('add-chapter-btn');
    const addChapterContainer = document.getElementById('add-chapter-container');
    const newChapterText = document.getElementById('new-chapter-text');
    const saveChapterBtn = document.getElementById('save-chapter-btn');
    if (addChapterBtn && addChapterContainer) addChapterBtn.addEventListener('click', () => { addChapterContainer.style.display = 'block'; addChapterBtn.style.display = 'none'; });
    if (saveChapterBtn && newChapterText) saveChapterBtn.addEventListener('click', () => { addFairytaleChapter(newChapterText.value); newChapterText.value = ''; });

    // Our Song - recording & saving
    const recordBtn = document.getElementById('record-our-song');
    const saveSongBtn = document.getElementById('save-our-song');
    const playOurSongBtn = document.getElementById('play-our-song');
    if (recordBtn) recordBtn.addEventListener('click', toggleRecording);
    if (saveSongBtn) saveSongBtn.addEventListener('click', saveRecordedSong);
    if (playOurSongBtn) {
        playOurSongBtn.disabled = (window.localStorage && JSON.parse(localStorage.getItem('ourSong') || '[]').length === 0);
        playOurSongBtn.addEventListener('click', () => { const s = JSON.parse(localStorage.getItem('ourSong') || '[]'); playOurSong(s); });
    }

    // Save vows button inside time capsule
    const saveTimeCapsuleBtn = document.getElementById('save-time-capsule-btn');
    if (saveTimeCapsuleBtn) saveTimeCapsuleBtn.addEventListener('click', () => {
        const message = document.getElementById('time-capsule-message').value.trim();
        if (!message) { alert('Please write your vows first!'); return; }
        localStorage.setItem('radwaWeddingVows', message);
        localStorage.setItem('radwaVowsLocked', 'true');
        initVowsVault();
        alert('Your vows have been sealed ❤️');
    });

    // 3. Initialize Systems
    initializeStarrySky();
    initializePiano();
    initializeCelestialFeature(); // Helper to check if D3 library loaded

    // 4. Daily Love Note Popup
    const dailyLoveNotePopup = document.getElementById("dailyLoveNotePopup");
    const content = dailyLoveNotePopup ? dailyLoveNotePopup.querySelector(".daily-love-note-content") : null;
    
    // Function to get unique daily note based on date
    const getDailyLoveNote = () => {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 0);
        const diff = today - startOfYear;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        return loveMessages[dayOfYear % loveMessages.length];
    };

    if (openSurpriseBtn && dailyLoveNotePopup && content) {
        openSurpriseBtn.addEventListener('click', () => {
            content.textContent = getDailyLoveNote();
            dailyLoveNotePopup.style.display = "flex";
        });
        dailyLoveNotePopup.addEventListener("click", (e) => {
            if (e.target === dailyLoveNotePopup) dailyLoveNotePopup.style.display = "none";
        });
    }

    // 5. Day/Night Switch Logic
    const switchBtn = document.getElementById("dayNightSwitch");
    if (switchBtn) {
        document.body.classList.add("day-mode");
        switchBtn.innerHTML = "🌞 Day";
        createFloatingOrbs(); 

        switchBtn.onclick = () => {
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

    // 6. Voice Control Setup
    setupVoiceControl();

    // 7. Welcome overlay (show only on first run)
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const openWelcomeBtn = document.getElementById('openWelcomeBtn');
    if (welcomeOverlay && !localStorage.getItem('mlwSeenWelcome')) {
        welcomeOverlay.style.display = 'flex';
        if (openWelcomeBtn) openWelcomeBtn.addEventListener('click', () => {
            welcomeOverlay.style.display = 'none';
            localStorage.setItem('mlwSeenWelcome','true');
        });
    } else if (welcomeOverlay) {
        welcomeOverlay.style.display = 'none';
    }

    // 8. Print note controls
    const printNoteBtn = document.getElementById('printNoteBtn');
    const printNoteOverlay = document.getElementById('printNoteOverlay');
    const printNowBtn = document.getElementById('printNowBtn');
    const closePrintNoteBtn = document.getElementById('closePrintNoteBtn');
    if (printNoteBtn && printNoteOverlay) {
        printNoteBtn.addEventListener('click', () => { printNoteOverlay.style.display = 'flex'; });
    }
    if (closePrintNoteBtn && printNoteOverlay) closePrintNoteBtn.addEventListener('click', () => { printNoteOverlay.style.display = 'none'; });
    if (printNowBtn) printNowBtn.addEventListener('click', () => {
        const content = document.querySelector('.print-note-body').innerHTML;
        const w = window.open('', '_blank');
        w.document.write('<html><head><title>Print Gift Note</title><style>body{font-family:Arial,Helvetica,sans-serif;padding:30px;color:#333}</style></head><body>' + content + '</body></html>');
        w.document.close();
        w.focus();
        w.print();
        w.close();
    });
});

// Register service worker for PWA if supported
let __deferredInstallPrompt = null;
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(reg => {
            console.log('Service worker registered with scope:', reg.scope);
        }).catch(err => {
            console.warn('Service worker registration failed:', err);
        });
    });
}

// PWA install prompt handler
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67+ from automatically showing the prompt
    e.preventDefault();
    __deferredInstallPrompt = e;
    const floatingBtn = document.getElementById('installBtn');
    const banner = document.getElementById('installBanner');
    const installNow = document.getElementById('installNowBtn');
    const dismiss = document.getElementById('installDismissBtn');

    if (floatingBtn) {
        floatingBtn.style.display = 'block';
        floatingBtn.addEventListener('click', async () => {
            floatingBtn.style.display = 'none';
            try {
                __deferredInstallPrompt.prompt();
                await __deferredInstallPrompt.userChoice;
            } catch (err) {
                console.warn('Install prompt failed', err);
            }
            __deferredInstallPrompt = null;
        }, { once: true });
    }

    if (banner) {
        banner.classList.remove('hidden');
        if (installNow) installNow.addEventListener('click', async () => {
            banner.classList.add('hidden');
            if (!__deferredInstallPrompt) return;
            try {
                __deferredInstallPrompt.prompt();
                await __deferredInstallPrompt.userChoice;
            } catch (err) {
                console.warn('Install prompt failed', err);
            }
            __deferredInstallPrompt = null;
        }, { once: true });
        if (dismiss) dismiss.addEventListener('click', () => { banner.classList.add('hidden'); }, { once: true });
    }
});

window.addEventListener('appinstalled', (evt) => {
    console.log('PWA installed');
    const toast = document.createElement('div');
    toast.className = 'install-toast';
    toast.textContent = 'App installed ❤️';
    document.body.appendChild(toast);
    setTimeout(()=> toast.classList.add('show'), 50);
    setTimeout(()=> { toast.classList.remove('show'); setTimeout(()=> toast.remove(),300); }, 3000);
});


/* =========================================
   🎤 VOICE CONTROL LOGIC
   ========================================= */
function setupVoiceControl() {
    const voiceControlBtn = document.getElementById('voiceControlBtn');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let isListening = false;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        // Command Dictionary
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
            
            // Wedding/Birthday Timer
            'show wedding timer': () => { toggleOverlay('weddingTimerOverlay', true); startWeddingTimer(); },
            'show the big day': () => { toggleOverlay('weddingTimerOverlay', true); startWeddingTimer(); },
            'close wedding timer': () => toggleOverlay('weddingTimerOverlay', false),
            'show birthday countdown': () => { toggleOverlay('weddingTimerOverlay', true); startWeddingTimer(); }, 
            
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
            
            // System Controls
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

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            console.log("Voice Command Recognized:", transcript);
            
            // Check against commands
            for (const command in commands) {
                if (transcript.includes(command)) {
                    commands[command]();
                    break;
                }
            }
        };
    } else {
        if(voiceControlBtn) voiceControlBtn.style.display = 'none';
        console.warn("Speech Recognition not supported in this browser.");
    }
}