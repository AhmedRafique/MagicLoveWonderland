/* =========================================
   ✨ Story & Narrative
   ========================================= */
import { galleryPhotos, timelineEvents, loveLetters, poems } from './config.js';
import { toggleOverlay, getRandomElement } from './utils.js';
import { speakText, playNarration, stopNarration } from './audio.js';

/* --- Photo Gallery --- */
export function showGallery() {
    const grid = document.querySelector('.photo-grid');
    const gallery = document.querySelector('.photo-gallery');
    if (!grid || !gallery) {
        console.warn('Gallery elements not found');
        alert('Sorry, the photo gallery is not available right now.');
        return;
    }

    if (!gallery.id) gallery.id = 'photoGallery'; // Ensure it has ID

    // Fill grid safely
    try {
        grid.innerHTML = '';
        console.log('Opening gallery, photos available:', Array.isArray(galleryPhotos) ? galleryPhotos.length : 0);
        if (!Array.isArray(galleryPhotos) || galleryPhotos.length === 0) {
            grid.innerHTML = "<p style='color:white; text-align:center;'>No photos available.</p>";
        } else {
            galleryPhotos.forEach((photo, index) => {
                const item = document.createElement('div');
                item.className = 'photo-item';
                const img = new Image();
                img.src = `photos/${photo}`;
                img.alt = `Our memory ${index + 1}`;
                img.loading = 'lazy';
                img.addEventListener('load', () => {
                    // reveal or mark as loaded if needed
                    item.classList.add('loaded');
                });
                img.addEventListener('error', (e) => {
                    console.warn('Photo failed to load:', photo, e);
                    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23ff4d88"><rect width="100" height="100"/><text x="50" y="50" font-size="8" fill="white" text-anchor="middle" dominant-baseline="middle">Photo ${index+1}</text></svg>';
                });
                item.appendChild(img);
                grid.appendChild(item);
            });
        }
    } catch (err) {
        console.error('Failed to populate gallery:', err);
        grid.innerHTML = "<p style='color:white; text-align:center;'>Unable to load photos.</p>";
    }

    // Show overlay after content is ready
    toggleOverlay(gallery.id, true);

    // small accessibility: focus the grid so keyboard users can tab through
    grid.setAttribute('tabindex','-1');
    grid.focus();
}

export function hideGallery() {
    const gallery = document.querySelector('.photo-gallery');
    if(gallery) toggleOverlay(gallery.id, false);
}

/* --- Photo Mosaic (Heart) --- */
export function showPhotoMosaic() {
    const mosaicOverlay = document.getElementById('photoMosaicOverlay');
    const mosaicContainer = document.getElementById('mosaic-container');
    if (mosaicContainer) mosaicContainer.innerHTML = '';
    toggleOverlay('photoMosaicOverlay', true);
    const containerSize = 600;
    const tileSize = 20;
    const numTiles = containerSize / tileSize;
    for (let i = 0; i < numTiles; i++) {
        for (let j = 0; j < numTiles; j++) {
            const x = j * tileSize;
            const y = i * tileSize;
            const a = (x - containerSize / 2) / (containerSize / 3.5);
            const b = (y - containerSize / 2) / (containerSize / 3.5);
            if ( (Math.pow(a,2) + Math.pow(b,2) - 1)* (Math.pow(a,2) + Math.pow(b,2)-1)*(Math.pow(a,2) + Math.pow(b,2)-1) - Math.pow(a,2)*Math.pow(b,3) < 0) {
                const tile = document.createElement('div');
                tile.classList.add('mosaic-tile');
                tile.style.left = `${x}px`;
                tile.style.top = `${y}px`;
                const photo = galleryPhotos[Math.floor(Math.random() * galleryPhotos.length)];
                tile.style.backgroundImage = `url(photos/${photo})`;
                tile.addEventListener('click', () => zoomInPhoto(`photos/${photo}`));
                mosaicContainer.appendChild(tile);
            }
        }
    }
}

export function hidePhotoMosaic() {
    toggleOverlay('photoMosaicOverlay', false);
}

function zoomInPhoto(photoUrl) {
    const zoomOverlay = document.getElementById('mosaic-zoom-overlay');
    const zoomedPhoto = document.getElementById('zoomed-photo');
    if (zoomedPhoto) zoomedPhoto.src = photoUrl;
    if (zoomOverlay) zoomOverlay.style.display = 'flex';
}

export function hideZoomedPhoto() {
    const zoomOverlay = document.getElementById('mosaic-zoom-overlay');
    if (zoomOverlay) zoomOverlay.style.display = 'none';
}

/* --- Timeline --- */
export function showTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    if(timelineContainer && !timelineContainer.id) timelineContainer.id = 'timelineContainer';
    
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    toggleOverlay(timelineContainer.id, true);
    
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
        if (event.photo) {
            const imgHTML = `<img src="timeline-photos/${event.photo}" class="timeline-photo" alt="${event.title}" onerror="this.style.display='none'; this.onerror=null;">`;
            content.innerHTML += imgHTML;
        }
        item.appendChild(content);
        timeline.appendChild(item);
    });
}

export function hideTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    if(timelineContainer) toggleOverlay(timelineContainer.id, false);
}

/* --- Poem --- */
export function showPoem() {
    const poemContent = document.querySelector('.poem-content');
    const selectedPoem = getRandomElement(poems);
    if (!poemContent) {
        console.warn('Poem content element not found');
        alert('Poem is unavailable right now.');
        return;
    }
    try {
        poemContent.innerHTML = `<p class="poem-title">${selectedPoem.title}</p>${selectedPoem.text.map(line => `<p>${line}</p>`).join('')}`;
    } catch (err) {
        console.error('Failed rendering poem', err);
        poemContent.innerHTML = `<p class="poem-title">${selectedPoem.title}</p><p>Unable to render poem at this time.</p>`;
    }
    toggleOverlay('poemContainer', true);
}

export function hidePoem() {
    toggleOverlay('poemContainer', false);
}

/* --- Love Letter --- */
export function showLoveLetter() {
    const letterContainer = document.querySelector('.love-letter-container');
    if(letterContainer && !letterContainer.id) letterContainer.id = 'loveLetterContainer';
    const letterContent = document.getElementById('letter-content');
    const letterText = getRandomElement(loveLetters);
    letterContent.innerHTML = ''; 
    toggleOverlay(letterContainer.id, true);
    
    let i = 0;
    function typeWriter() {
        if (i < letterText.length) {
            if (letterText.charAt(i) === '\n') {
                letterContent.innerHTML += '<br>';
            } else {
                letterContent.innerHTML += letterText.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 50); 
        }
    }
    typeWriter();
}

export function hideLoveLetter() {
    const letterContainer = document.querySelector('.love-letter-container');
    if(letterContainer) toggleOverlay(letterContainer.id, false);
}

/* --- Fairytale --- */
let fairytaleStory = localStorage.getItem('magicLoveWonderlandFairytale') || '';

export function showFairytale() {
    const storyTextContainer = document.getElementById('storyText');
    if (!storyTextContainer) return;
    storyTextContainer.innerHTML = fairytaleStory;
    if (fairytaleStory.length === 0) {
        continueFairytale(true);
    }
    toggleOverlay('fairytaleOverlay', true);
}

export function hideFairytale() {
    stopNarration();
    toggleOverlay('fairytaleOverlay', false);
}

export function continueFairytale(shouldAutoPlay = false) {
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
                "<p>Their story began with a spark, a moment when their eyes met and a special journey began. It was like the first star appearing in the twilight sky, promising a universe of possibilities.</p>", 
                "<p>Soon, coffee and conversations became their favorite pastime, where ordinary moments transformed into extraordinary memories. It was then that the hero realized he couldn't imagine a life without his princess.</p>", 
                "<p>A significant chapter unfolded when the hero met the princess's family, a perfect moment where the world seemed to disappear, leaving only the two of them in a bubble of pure happiness.</p>", 
                "<p>Their adventure truly began when they officially became one soul in two bodies, choosing each other to embark on a shared destiny. This was the start of their grand journey together.</p>", 
                "<p>A magical night followed, filled with hearts bouncing and dancing, as they chose their symbols of eternal love. Their wings could not be contained, soaring with joy.</p>", 
                "<p>The hero prepared for their engagement, visiting a grand palace, only to realize that his princess, his butterfly, was far more beautiful than any earthly splendor.</p>", 
                "<p>The hero's happiest birthday ever was a moment of warmth, surrounded by his second family, a testament to the love and belonging they had found.</p>", 
                "<p>On a day etched in their hearts, the hero's soul found its true home. Fireworks of joy erupted within him, and a profound calmness settled in his mind, knowing he was hers forever.</p>", 
                "<p>Their first occasion together solidified a simple truth: anywhere, anytime, their hearts would always belong only to each other.</p>", 
                "<p>Creating memories together became an art, with each shared moment adding to the masterpiece of their love. The princess was his pride, his light, his beautiful flower.</p>", 
                "<p>Returning to the Butterfly Museum, their love had grown its own wings, soaring higher and more beautifully than ever before, a symbol of their evolving bond.</p>", 
                "<p>A perfect night out, filled with movies and fine dining, felt like a scene from a classic romance. Every detail was perfect, especially with the princess by his side.</p>", 
                "<p>Closing one chapter was merely the beginning of another. The hero watched his princess bravely step into a new phase, filled with immense pride and excitement for what's next.</p>", 
                "<p>A new beginning dawned, marked by grace and courage. The hero pledged his unwavering support, cheering her on every step of the way, as they embraced what was next.</p>", 
                "<p>Building their nest, choosing each piece for their home, was more than just furnishing a space. It was about building their sanctuary, their future, and it felt like floating on clouds.</p>", 
                "<p>Even in the quietest evenings, just the two of them, lost in conversation and comfort, they found perfect moments, proving that love thrives in simplicity.</p>", 
                "<p>Dreaming together became a shared adventure, planning their future one aspiration at a time. Every shared dream brought them closer, weaving a tapestry of hope.</p>", 
                "<p>The princess's laughter was the hero's favorite sound, a melody that filled his world with joy, a constant reminder of the happiness she brought into his life.</p>", 
                "<p>Their photo gallery held countless beautiful moments, each image a captured memory, a testament to their shared journey and the love that shone through every frame.</p>", 
                "<p>The Star Portrait revealed the princess as a constellation of virtues, her inner light shining brightly, a true star in the hero's universe.</p>", 
                "<p>Exploring their world, they marked significant places on a map, each point a memory or a dream, a testament to where they had been and where they longed to go together.</p>", 
                "<p>Under the celestial map, they traced the stars of their special night, seeing their names written in the constellations, a cosmic affirmation of their bond.</p>", 
                "<p>Love and poems flowed freely, with verses dedicated to the princess, each word a brushstroke painting the depth of the hero's affection.</p>", 
                "<p>A special poem, crafted just for her, spoke of fields of dreams and radiant light, capturing the essence of her beauty and the profound impact she had on his soul.</p>", 
                "<p>The hero found countless reasons to love her, each one a floating message, showering her with appreciation for every detail, every strength, every kindness.</p>", 
                "<p>A heartfelt letter, typed out with care, conveyed the unspoken depths of his love, a tangible piece of his soul shared with his beloved princess.</p>", 
                "<p>Their playlist was the soundtrack to their love, a collection of songs that spoke of their journey, their feelings, and the harmony they found together.</p>", 
                "<p>On the piano, they played their song, a melody unique to them, a harmonious blend of their spirits, creating music only their hearts could truly understand.</p>", 
                "<p>Their time together was filled with playful moments, like the Memory Lane Game, where shared laughter and rediscovered memories strengthened their bond.</p>", 
                "<p>A secret puzzle, once unlocked, revealed hidden messages and delightful surprises, just like the layers of joy they discovered in their relationship.</p>", 
                "<p>Gifts, both big and small, were exchanged, each one a symbol of their affection, a tangible expression of the magic they shared.</p>", 
                "<p>Daily questions sparked deeper conversations, revealing new facets of their personalities and strengthening their understanding of each other, one thoughtful answer at a time.</p>", 
                "<p>Their dream board was a canvas of their future, filled with aspirations and adventures yet to come, a visual representation of their shared hopes and desires.</p>", 
                "<p>Counting down to her special day, the hero felt the anticipation of celebrating the princess, a reminder of the joy she brought into his life.</p>", 
                "<p>And then came the big question, a moment suspended in time, where the hero's heart poured out its deepest desire, awaiting the answer that would change their lives forever.</p>", 
                "<p>The fairytale itself was a living, breathing story, unfolding with each new chapter, narrated by the hero's heart, a tale of magic, love, and endless possibilities.</p>", 
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

export function addFairytaleChapter(newChapter) {
    if (!newChapter || !newChapter.trim()) {
        alert('Please write a chapter before saving.');
        return;
    }
    const newChapterHTML = `<p>${newChapter.trim()}</p>`;
    fairytaleStory += newChapterHTML;
    localStorage.setItem('magicLoveWonderlandFairytale', fairytaleStory);
    const storyTextContainer = document.getElementById('storyText');
    if (storyTextContainer) storyTextContainer.innerHTML = fairytaleStory;
    const addChapterContainer = document.getElementById('add-chapter-container');
    const addChapterBtn = document.getElementById('add-chapter-btn');
    if (addChapterContainer) addChapterContainer.style.display = 'none';
    if (addChapterBtn) addChapterBtn.style.display = 'block';
}
