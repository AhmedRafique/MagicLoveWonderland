/* =========================================
   ✨ Games & Activities
   ========================================= */
import { galleryPhotos, puzzleSurprises, poems, loveLetters, loveMessages } from './config.js';
import { toggleOverlay, getRandomElement } from './utils.js';
import { showLoveMessage, createGift } from './visuals.js';
import { playSound } from './audio.js';

/* --- Gift logic: open lid, show surprise --- */
export function showGiftBox() {
    // Use toggleOverlay to hide other overlays and ensure consistent behavior
    toggleOverlay('giftBoxOverlay', true);

    const giftBoxEl = document.querySelector('.gift-box');
    if (!giftBoxEl) return;

    giftBoxEl.style.display = 'flex';
    giftBoxEl.style.cursor = 'pointer';

    // Attach click handler only once to avoid duplication and ensure it works after other overlays
    if (!giftBoxEl.dataset.clickBound) {
        giftBoxEl.addEventListener('click', () => {
            const lid = document.querySelector('.gift-lid');
            if (lid) lid.style.transform = 'rotate(-70deg) translateY(-60px)';
            setTimeout(() => {
                giftBoxEl.style.display = 'none';
                displayGiftSurprise();
                const container = document.getElementById('giftSurprise');
                if (container) container.style.display = 'block';
            }, 600);
        });
        giftBoxEl.dataset.clickBound = '1';
    }

    const giftSurprise = document.getElementById('giftSurprise');
    if (giftSurprise) giftSurprise.style.display = 'none';
    const lid = document.querySelector('.gift-lid');
    if (lid) lid.style.transform = 'none';
}

export function hideGiftBox() {
    toggleOverlay('giftBoxOverlay', false);
}

function displayGiftSurprise() {
    const container = document.getElementById('giftSurprise');
    if (!container) return;
    container.innerHTML = '';
    const choice = getRandomElement(['poem','letter','photo','puzzle','message']);
    let html = '';
    switch (choice) {
        case 'poem': {
            const poem = getRandomElement(poems);
            html += `<h3>${poem.title}</h3>`;
            html += `<div class="gift-poem">${poem.text.map(line => `<p>${line}</p>`).join('')}</div>`;
            break;
        }
        case 'letter': {
            const letter = getRandomElement(loveLetters);
            html += `<h3>💌 A Love Letter</h3>`;
            html += `<pre class="gift-letter">${letter}</pre>`;
            break;
        }
        case 'photo': {
            const photo = getRandomElement(galleryPhotos);
            html += `<h3>📷 A Secret Photo</h3>`;
            html += `<img src="photos/${photo}" alt="Gift Photo" class="gift-photo" />`;
            break;
        }
        case 'puzzle': {
            const ps = getRandomElement(puzzleSurprises);
            html += `<h3>${ps.title}</h3>`;
            if (ps.type === 'photo') {
                html += `<img src="photos/${ps.content}" alt="Gift Photo" class="gift-photo" />`;
                if (ps.caption) html += `<p class="gift-caption">${ps.caption}</p>`;
            } else {
                html += `<p>${ps.content || ps.question}</p>`;
            }
            break;
        }
        case 'message': {
            const message = getRandomElement(loveMessages);
            html += `<h3>✨ A Sweet Message</h3>`;
            html += `<p class="gift-message">${message}</p>`;
            break;
        }
    }
    html += `<div style="margin-top:12px;"><button onclick="hideGiftBox()" class="close-gift">Close</button></div>`;
    container.innerHTML = html;
}

/* --- Memory Game --- */
export function showMemoryGame() {
    const gameContainer = document.querySelector('.memory-game-container');
    if(gameContainer && !gameContainer.id) gameContainer.id = 'memoryGameContainer';
    const grid = document.querySelector('.memory-grid');
    toggleOverlay(gameContainer.id, true);
    grid.innerHTML = ''; 
    const photoCount = Math.min(galleryPhotos.length, 8);
    if (photoCount < 2) {
        grid.innerHTML = "<p style='color:white; text-align:center;'>Not enough photos for a game!</p>";
        return;
    }
    const shuffled = [...galleryPhotos].sort(() => 0.5 - Math.random());
    const gamePhotos = shuffled.slice(0, photoCount);
    const cardSet = [...gamePhotos, ...gamePhotos]; 
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
                if (flippedCards[0].dataset.photo === flippedCards[1].dataset.photo) {
                    flippedCards.forEach(c => c.classList.add('matched'));
                    matchesFound++;
                    flippedCards = [];
                    lockBoard = false;
                    if (matchesFound === photoCount) {
                        setTimeout(() => alert("You found all the memories! ❤️"), 500); // Or use custom celebration
                    }
                } else {
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

export function hideMemoryGame() {
    const gameContainer = document.querySelector('.memory-game-container');
    if(gameContainer) toggleOverlay(gameContainer.id, false);
}

/* --- Puzzle --- */
let currentPuzzleSurprise = null;

export function showPuzzle() {
    currentPuzzleSurprise = getRandomElement(puzzleSurprises);
    // Use toggleOverlay so other overlays are hidden first and buttons are handled consistently
    toggleOverlay('puzzleOverlay', true);
    const secretMessageEl = document.getElementById('secretMessage');
    if (secretMessageEl) {
        secretMessageEl.style.display = 'none';
        secretMessageEl.innerHTML = '';
    }
    resetSlider();
}

export function hidePuzzle() {
    toggleOverlay('puzzleOverlay', false);
}

function resetSlider() {
    const thumb = document.getElementById('sliderThumb');
    if (!thumb) return;
    thumb.style.left = '0px';
    thumb.onmousedown = startDrag;
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
            stop();
            setTimeout(() => {
                displayPuzzleSurprise();
                document.getElementById('secretMessage').style.display = 'block';
            }, 200);
        }
    }

    function stop() {
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

function displayPuzzleSurprise() {
    const container = document.getElementById('secretMessage');
    if (!currentPuzzleSurprise) {
        container.innerHTML = "<h3>💖 Oops!</h3><p>Something went wrong, but my love for you is always right!</p>";
        return;
    }
    let html = `<h3>${currentPuzzleSurprise.title}</h3>`;
    switch (currentPuzzleSurprise.type) {
        case 'message': html += `<p class="puzzle-text">${currentPuzzleSurprise.content}</p>`; break;
        case 'compliment': html += `<p class="puzzle-text" style="font-style: italic;">${currentPuzzleSurprise.content}</p>`; break;
        case 'photo': html += `<img src="photos/${currentPuzzleSurprise.content}" alt="Secret Photo" class="puzzle-photo" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p>Secret photo is shy! But imagine my happiest smile.</p>'" >`; html += `<p class="puzzle-caption">${currentPuzzleSurprise.caption}</p>`; break;
        case 'voucher': html += `<div class="puzzle-voucher"><span class="puzzle-voucher-emoji">${currentPuzzleSurprise.emoji}</span><p>${currentPuzzleSurprise.content}</p></div>`; break;
        case 'riddle': html += `<p class="puzzle-riddle-q">${currentPuzzleSurprise.question}</p>`; html += `<p class="puzzle-riddle-a" style="display:none;">${currentPuzzleSurprise.answer}</p>`; html += `<button onclick="revealRiddleAnswer()" class="puzzle-riddle-button">Reveal Answer</button>`; break;
    }
    container.innerHTML = html;
}

window.revealRiddleAnswer = function() {
    const answerEl = document.querySelector('.puzzle-riddle-a');
    const buttonEl = document.querySelector('.puzzle-riddle-button');
    if (answerEl) answerEl.style.display = 'block';
    if (buttonEl) buttonEl.style.display = 'none';
}

/* --- Photo Puzzle --- */
let draggedPiece = null;
const puzzleGridSize = 4;

export function showPhotoPuzzle() {
    toggleOverlay('photoPuzzleOverlay', true);
    createPuzzle();
}

export function hidePhotoPuzzle() {
    toggleOverlay('photoPuzzleOverlay', false);
}

export function createPuzzle() {
    const grid = document.querySelector('.photo-puzzle-grid');
    const piecesContainer = document.querySelector('.photo-puzzle-pieces');
    const message = document.getElementById('photo-puzzle-message');
    grid.innerHTML = '';
    piecesContainer.innerHTML = '';
    message.style.display = 'none';
    const pieceSize = 100; 
    const gridSize = puzzleGridSize * pieceSize;
    grid.style.gridTemplateColumns = `repeat(${puzzleGridSize}, ${pieceSize}px)`;
    grid.style.gridTemplateRows = `repeat(${puzzleGridSize}, ${pieceSize}px)`;
    piecesContainer.style.gridTemplateColumns = `repeat(${puzzleGridSize}, ${pieceSize}px)`;
    const randomPhoto = getRandomElement(galleryPhotos);
    const imgSrc = `photos/${randomPhoto}`;
    const pieces = [];
    for (let i = 0; i < puzzleGridSize * puzzleGridSize; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.draggable = true;
        piece.dataset.index = i;
        piece.style.backgroundImage = `url(${imgSrc})`;
        piece.style.backgroundSize = `${gridSize}px ${gridSize}px`;
        const row = Math.floor(i / puzzleGridSize);
        const col = i % puzzleGridSize;
        piece.style.backgroundPosition = `-${col * pieceSize}px -${row * pieceSize}px`;
        const pieceWrapper = document.createElement('div');
        pieceWrapper.className = 'puzzle-piece-container';
        pieceWrapper.style.width = `${pieceSize}px`;
        pieceWrapper.style.height = `${pieceSize}px`;
        pieceWrapper.appendChild(piece);
        pieces.push(pieceWrapper);
        const container = document.createElement('div');
        container.className = 'puzzle-piece-container';
        container.style.width = `${pieceSize}px`;
        container.style.height = `${pieceSize}px`;
        container.dataset.index = i;
        grid.appendChild(container);
    }
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(piece => {
        piecesContainer.appendChild(piece);
    });
    addPuzzleDragDropListeners();
}

function addPuzzleDragDropListeners() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    const containers = document.querySelectorAll('.puzzle-piece-container');
    pieces.forEach(piece => {
        piece.addEventListener('dragstart', (e) => {
            draggedPiece = e.target;
            setTimeout(() => {
                e.target.style.opacity = '0.5';
            }, 0);
        });
        piece.addEventListener('dragend', (e) => {
            e.target.style.opacity = '1';
            draggedPiece = null;
        });
    });
    containers.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            container.classList.add('over');
        });
        container.addEventListener('dragleave', (e) => {
            container.classList.remove('over');
        });
        container.addEventListener('drop', (e) => {
            e.preventDefault();
            container.classList.remove('over');
            if (!draggedPiece) return;
            if (!container.hasChildNodes()) {
                container.appendChild(draggedPiece);
            } else {
                const existingPiece = container.querySelector('.puzzle-piece');
                const draggedPieceContainer = draggedPiece.parentElement;
                draggedPieceContainer.appendChild(existingPiece);
                container.appendChild(draggedPiece);
            }
            checkPuzzleSolved();
        });
    });
}

function checkPuzzleSolved() {
    const gridContainers = document.querySelectorAll('.photo-puzzle-grid .puzzle-piece-container');
    let solved = true;
    gridContainers.forEach(container => {
        const piece = container.querySelector('.puzzle-piece');
        if (!piece || piece.dataset.index !== container.dataset.index) {
            solved = false;
        }
    });
    if (solved) {
        const message = document.getElementById('photo-puzzle-message');
        message.textContent = "You solved it! You're amazing! ❤️";
        message.style.display = 'block';
        const grid = document.querySelector('.photo-puzzle-grid');
        grid.classList.add('solved');
    }
}

/* --- Love Wheel --- */
let theWheel;

export function showLoveWheel() {
    toggleOverlay('loveWheelOverlay', true);
    theWheel = new Winwheel({
        'canvasId': 'loveWheelCanvas',
        'numSegments': 8,
        'outerRadius': 200,
        'textFontSize': 24,
        'textFillStyle': '#ffffff',
        'textStrokeStyle': '#000000',
        'textLineWidth': 2,
        'drawText': true,
        'pointerAngle': 0,
        'segments'     : [
            {'fillStyle' : '#e67e22', 'text' : 'A Big Kiss'},
            {'fillStyle' : '#2980b9', 'text' : 'A Warm Hug'},
            {'fillStyle' : '#8e44ad', 'text' : 'A Love Poem'},
            {'fillStyle' : '#c0392b', 'text' : 'A Secret Note'},
            {'fillStyle' : '#16a085', 'text' : 'A Sweet Memory'},
            {'fillStyle' : '#f1c40f', 'text' : 'A Future Dream'},
            {'fillStyle' : '#d35400', 'text' : 'A Love Song'},
            {'fillStyle' : '#27ae60', 'text' : 'A Funny Joke'}
        ],
        'animation' : {
            'type'     : 'spinToStop',
            'duration' : 8,
            'spins'    : 10,
            'callbackFinished' : alertPrize,
            'callbackSound': playSound,
            'soundTrigger': 'pin'
        },
        'pins' : {
            'number': 32,
            'fillStyle': 'silver',
            'outerRadius': 4,
        }
    });

    // Dynamically position the pointer to point toward the wheel depending on canvas placement.
    const pointer = document.getElementById('wheel-pointer');
    const canvas = document.getElementById('loveWheelCanvas');
    const container = document.getElementById('wheel-container');
    function positionWheelPointer() {
        if (!pointer || !canvas || !container) return;
        const rect = canvas.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const canvasCenterX = rect.left + rect.width / 2;
        const viewportCenterX = window.innerWidth / 2;

        // vertical center aligned to canvas and positioned near the wheel (fixed)
        const topPos = rect.top + rect.height / 2;
        pointer.style.top = topPos + 'px';
        pointer.style.transform = 'translateY(-50%)';
        pointer.style.position = 'fixed';
        // Position pointer near the canvas but keep it within the right area of the viewport
        const desiredLeft = Math.min(rect.right + 8, window.innerWidth - 40);
        pointer.style.left = desiredLeft + 'px';
        pointer.style.right = 'auto';
        // Keep orientation unchanged
        pointer.classList.remove('flipped');
        pointer.style.borderRight = '18px solid #ffffff';
        pointer.style.borderLeft = 'none';
    }

    positionWheelPointer();
    window.addEventListener('resize', positionWheelPointer);
}

export function hideLoveWheel() {
    toggleOverlay('loveWheelOverlay', false);
}

export function startSpin() {
    theWheel.startAnimation();
}

function alertPrize(indicatedSegment) {
    showPrize(indicatedSegment);
}

export function showPrize(indicatedSegment) {
    const prize = indicatedSegment && indicatedSegment.text ? indicatedSegment.text : 'A Surprise';

    // Visual highlight on the wheel container
    const wheelContainer = document.getElementById('wheel-container');
    if (wheelContainer) {
        wheelContainer.classList.add('wheel-win');
        setTimeout(() => wheelContainer.classList.remove('wheel-win'), 2000);
    }

    // Show a visible result inside the overlay
    const prizeEl = document.getElementById('loveWheelPrize');
    if (prizeEl) {
        prizeEl.textContent = `You won: ${prize}`;
        prizeEl.style.display = 'block';
        prizeEl.style.opacity = '1';
        setTimeout(() => {
            prizeEl.style.opacity = '0';
            setTimeout(() => { prizeEl.style.display = 'none'; }, 500);
        }, 4000);
    }

    // Trigger the action associated with the prize using keyword matching to be robust
    const p = (prize || '').toLowerCase();
    if (p.includes('kiss')) {
        sendKiss();
    } else if (p.includes('hug')) {
        showLoveMessage(window.innerWidth/2, window.innerHeight/2, 'Sending you a big, warm hug!');
    } else if (p.includes('poem')) {
        if (window.showPoem) window.showPoem(); else alert('A Love Poem is on its way... 💌');
    } else if (p.includes('note') || p.includes('secret')) {
        if (window.showLoveLetter) window.showLoveLetter(); else alert('A Secret Note: You are my favorite.');
    } else if (p.includes('memory')) {
        if (window.showGallery) window.showGallery(); else alert('A Sweet Memory for you.');
    } else if (p.includes('dream')) {
        if (window.showFutureDreams) window.showFutureDreams(); else showLoveMessage(window.innerWidth/2, window.innerHeight/2, 'A Future Dream has been added to your board.');
    } else if (p.includes('song')) {
        if (window.showPlaylist) window.showPlaylist(); else alert('A Love Song is queued for you.');
    } else if (p.includes('joke')) {
        showLoveMessage(window.innerWidth/2, window.innerHeight/2, 'Why don\'t scientists trust atoms? Because they make up everything! 😄');
    } else {
        showLoveMessage(window.innerWidth/2, window.innerHeight/2, `You won: ${prize}`);
    }
}

/* --- Gift Box (handled above with enhanced logic) --- */
// Handled by the enhanced showGiftBox() and displayGiftSurprise() implementations earlier in this module.
export function sendKiss() {
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