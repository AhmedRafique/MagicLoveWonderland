/* =========================================
   ✨ Audio & Music
   ========================================= */
import { playlistData, songbook } from './config.js';
import { toggleOverlay } from './utils.js';

let audioContext;
let isRecording = false;
let recordedSong = [];
let ourSong = JSON.parse(localStorage.getItem('ourSong')) || [];

export function toggleMusic() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById("musicButton");
    if (music.paused) {
        music.play().catch(e => console.log("Audio play failed:", e));
        musicBtn.textContent = "🔊";
    } else {
        music.pause();
        musicBtn.textContent = "🔇";
    }
}

/* --- Playlist --- */
export function showPlaylist() {
    const overlay = document.querySelector('.playlist-overlay') || document.getElementById('playlist-overlay');
    if (!overlay) {
        console.warn('Playlist overlay not found');
        return;
    }

    toggleOverlay(overlay, true);

    const list = overlay.querySelector('.playlist-list');
    if (!list) {
        console.warn('Playlist list element not found inside overlay');
        return;
    }

    list.innerHTML = '';
    if (!Array.isArray(playlistData) || playlistData.length === 0) {
        list.innerHTML = "<li>No songs available.</li>";
    } else {
        playlistData.forEach((song, idx) => {
            const li = document.createElement('li');
            li.textContent = song.title;
            li.onclick = () => {
                window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, '_blank');
            };
            list.appendChild(li);
        });
    }

    const ytDiv = document.getElementById('playlist-youtube');
    if(ytDiv) ytDiv.innerHTML = '';
}

export function hidePlaylist() {
    toggleOverlay('playlist-overlay', false);
}

/* --- Piano --- */
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

const secretMelody = ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4'];
let playedNotes = [];

export function showPiano() {
    toggleOverlay('pianoOverlay', true);
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    document.addEventListener('keydown', handleKeyDown);
}

export function hidePiano() {
    toggleOverlay('pianoOverlay', false);
    playedNotes = []; 
    const messageEl = document.getElementById('piano-message');
    if (messageEl) {
        messageEl.style.display = 'none';
    }
    document.removeEventListener('keydown', handleKeyDown);
}

export function initializePiano() {
    const piano = document.querySelector('.piano');
    if (!piano) return;
    piano.innerHTML = ''; 
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
            key.style.left = `${(whiteKeyIndex * 50) - 15}px`;
        } else {
            whiteKeyIndex++;
        }
    });
    piano.style.width = `${whiteKeyIndex * 50}px`;
    piano.addEventListener('click', handleKeyClick);
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
        e.preventDefault(); 
        playNote(note);
        playedNotes.push(note);
        checkMelody();
    }
}

function playNote(note) {
    if (!audioContext || !notes[note]) return;
    if (isRecording) {
        recordedSong.push(note);
    }
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.type = 'triangle'; 
    oscillator.frequency.setValueAtTime(notes[note], audioContext.currentTime);
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.05); 
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.75); 
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1); 
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 200);
    }
}

function checkMelody() {
    if (playedNotes.length > secretMelody.length) {
        playedNotes = playedNotes.slice(playedNotes.length - secretMelody.length);
    }
    if (playedNotes.join(',') === secretMelody.join(',')) {
        const messageEl = document.getElementById('piano-message');
        if (messageEl) {
            messageEl.textContent = "You found the secret melody! It's the song of my heart for you. ❤️";
            messageEl.style.display = 'block';
        }
        setTimeout(() => {
            playedNotes = [];
            if (messageEl) {
                messageEl.style.display = 'none';
            }
        }, 5000);
    }
}

export function showSong(songId) {
    const song = songbook[songId];
    if (song) {
        document.getElementById('song-title').innerHTML = `${song.title} <button class="play-song-btn" onclick="playSong('${songId}')">▶️ Play</button>`;
        document.getElementById('song-notes').textContent = song.notes;
    }
}

export async function playSong(songId) {
    const song = songbook[songId];
    if (!song) return;
    const notesArray = song.notes.replace(/\|/g, '').split(/\s+/).filter(n => n);
    const noteDuration = 300; 
    const pauseDuration = 100; 
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
    if(playButton) playButton.disabled = false;
}

// --- Recording & Our Song helpers ---
export function toggleRecording() {
    isRecording = !isRecording;
    const recordBtn = document.getElementById('record-our-song');
    const saveBtn = document.getElementById('save-our-song');
    if (isRecording) {
        recordedSong = [];
        if (recordBtn) recordBtn.classList.add('recording');
        if (saveBtn) saveBtn.disabled = true;
    } else {
        if (recordBtn) recordBtn.classList.remove('recording');
        if (saveBtn) saveBtn.disabled = false;
    }
} 

export function saveRecordedSong() {
    if (!recordedSong || recordedSong.length === 0) {
        alert('No notes recorded yet. Play some notes first.');
        return;
    }
    ourSong = recordedSong.slice();
    localStorage.setItem('ourSong', JSON.stringify(ourSong));
    const playBtnOurSong = document.getElementById('play-our-song');
    if (playBtnOurSong) playBtnOurSong.disabled = false;
    alert('Your song has been saved ❤️');
}

export async function playOurSong(song) {
    if (!song || song.length === 0) return;
    const noteDuration = 300;
    for (const note of song) {
        if (note === 'P') {
            await new Promise(resolve => setTimeout(resolve, noteDuration));
        } else {
            playNote(note);
            await new Promise(resolve => setTimeout(resolve, noteDuration));
        }
    }
}

export function playSound() {
    let audio = new Audio('tick.mp3');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

export function triggerHeartbeat() {
    const heartbeatSound = document.getElementById('heartbeat-sound');
    document.body.classList.add('heartbeat-pulse');
    heartbeatSound.play();
    setTimeout(() => {
        document.body.classList.remove('heartbeat-pulse');
        heartbeatSound.pause();
        heartbeatSound.currentTime = 0;
    }, 5000); 
}

/* --- Narration --- */
let fairytaleUtterance = null;
let fairytaleVoice = null;

export function speakText(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const narrationText = text.replace(/Radwa/gi, 'Rah-dwah').replace(/Ahmed/gi, 'Ah-mad');
    fairytaleUtterance = new SpeechSynthesisUtterance(narrationText);
    fairytaleUtterance.voice = fairytaleVoice; 
    fairytaleUtterance.rate = 0.9;
    fairytaleUtterance.pitch = 1;
    window.speechSynthesis.speak(fairytaleUtterance);
}

export function playNarration() {
    if (window.speechSynthesis.paused && fairytaleUtterance) {
        window.speechSynthesis.resume();
    } else {
        const storyEl = document.getElementById('storyText');
        if (storyEl) {
            speakText(storyEl.innerText);
        }
    }
}

export function pauseNarration() {
    window.speechSynthesis.pause();
}

export function stopNarration() {
    window.speechSynthesis.cancel();
}