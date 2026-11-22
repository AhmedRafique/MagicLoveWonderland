export function toggleOverlay(elementIdOrSelector, show) {
    // Accept either an element reference or a string (id, class or selector)
    let overlay = null;

    if (!elementIdOrSelector) {
        overlay = null;
    } else if (typeof elementIdOrSelector === 'object') {
        overlay = elementIdOrSelector; // already an element
    } else {
        // It's a string. If it already begins with '.' or '#' treat it as a selector.
        if (elementIdOrSelector.startsWith('#') || elementIdOrSelector.startsWith('.')) {
            try {
                overlay = document.querySelector(elementIdOrSelector);
            } catch (e) {
                console.warn('Invalid selector passed to toggleOverlay:', elementIdOrSelector);
                overlay = null;
            }
        } else {
            // Try id, then class, then fallback to generic selector
            overlay = document.getElementById(elementIdOrSelector) || document.querySelector(`.${elementIdOrSelector}`) || document.querySelector(`#${elementIdOrSelector}`) || document.querySelector(elementIdOrSelector);
        }
    }

    if (show) {
        // Hide ALL overlays first to prevent overlaps
        const overlays = document.querySelectorAll(
            '.overlay-content, .piano-overlay, .photo-gallery, ' +
            '.timeline-container, .love-letter-container, .memory-game-container, ' +
            '.love-wheel-overlay, .puzzle-overlay, .photo-puzzle-overlay, ' +
            '.gift-box-overlay, .playlist-overlay, .fairytale-overlay, ' +
            '.photo-mosaic-overlay, .mosaic-zoom-overlay, .print-note-overlay, ' +
            '#weddingTimerOverlay, #birthdayCountdownOverlay, #videoOverlay, ' +
            '#waxEnvelopeOverlay, #openWhenOverlay, #starJarOverlay, #skyLanternsOverlay, ' +
            '#polaroidWallOverlay, #slideshowOverlay, #birthdayCrownOverlay'
        );
        overlays.forEach(el => {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
        });

        // Also hide ID-based overlays
        const ids = ['weddingTimerOverlay', 'birthdayCountdownOverlay', 
                     'dailyQuestionOverlay', 'futureDreamsOverlay', 'ourWorldOverlay', 
                     'starPortraitOverlay', 'celestialOverlay', 'poemContainer',
                     'photoMosaicOverlay', 'mosaic-zoom-overlay', 'playlistOverlay', 'videoOverlay',
                     'waxEnvelopeOverlay', 'openWhenOverlay', 'starJarOverlay', 'skyLanternsOverlay',
                     'polaroidWallOverlay', 'slideshowOverlay', 'birthdayCrownOverlay'];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if(el && (!overlay || el.id !== overlay.id)) {
                el.style.display = 'none';
                el.style.opacity = '0';
                el.style.visibility = 'hidden';
            }
        });
    }

    // If overlay wasn't found, don't toggle action buttons or attempt to show a null overlay
    if (!overlay) return;

    if (show) {
        if (overlay.id === 'poemContainer') {
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'flex';
            // Ensure opacity is reset for elements using transitions
            setTimeout(() => {
                overlay.style.opacity = '1';
                overlay.style.visibility = 'visible';
                // Trap focus inside overlay for accessibility
                try { trapFocus(overlay); } catch (e) { /* ignore */ }
            }, 10);
        }
    } else {
        if (overlay.id === 'poemContainer') {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        } else {
            // Release focus trap when hiding
            try { releaseFocus(overlay); } catch (e) { /* ignore */ }
            overlay.style.display = 'none';
        }
    }

    // Toggle Action Buttons visibility only when we successfully showed/hidden an overlay
    const actionButtons = document.getElementById('actionButtonsContainer');
    if (actionButtons) {
        actionButtons.style.display = show ? 'none' : 'flex';
    }
}

export function showOverlay(elementToShow, displayType = 'block') {
    // Hide all overlays first
    document.querySelectorAll(
        '.overlay-content, .piano-overlay, .photo-gallery, .timeline-container, ' +
        '.love-letter-container, .memory-game-container, .love-wheel-overlay, ' +
        '.puzzle-overlay, .photo-puzzle-overlay, .gift-box-overlay, .playlist-overlay, ' +
        '.fairytale-overlay, .photo-mosaic-overlay, .mosaic-zoom-overlay, .print-note-overlay, ' +
        '#weddingTimerOverlay, #birthdayCountdownOverlay, #videoOverlay, ' +
        '#waxEnvelopeOverlay, #openWhenOverlay, #starJarOverlay, #skyLanternsOverlay, ' +
        '#polaroidWallOverlay, #slideshowOverlay, #birthdayCrownOverlay'
    ).forEach(el => {
        el.style.display = 'none';
        el.style.opacity = '0';
        el.style.visibility = 'hidden';
    });

    // Ensure poem container is hidden if present
    const poemContainer = document.getElementById('poemContainer');
    if (poemContainer) {
        poemContainer.style.opacity = '0';
        poemContainer.style.visibility = 'hidden';
    }

    if (!elementToShow) return;

    let el;
    if (typeof elementToShow === 'string') {
        el = document.getElementById(elementToShow) || document.querySelector(`.${elementToShow}`) || document.querySelector(elementToShow);
    } else {
        el = elementToShow;
    }

    if (!el) return;

    const actionButtons = document.getElementById('actionButtonsContainer');
    if (actionButtons) actionButtons.style.display = 'none';

    if (el.id === 'poemContainer') {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.display = 'block';
    } else {
        el.style.display = displayType;
        // Give time for transitions to take effect
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            try { trapFocus(el); } catch (e) {}
        }, 10);
    }
}

export function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function showCategory(categoryName) {
    const container = document.getElementById('actionButtonsContainer');
    if (!container) return;
    
    container.style.opacity = '0'; 
    setTimeout(() => {
        document.getElementById('mainCategories').style.display = 'none';
        const categoryToShow = document.getElementById(categoryName + 'Category');
        if (categoryToShow) categoryToShow.style.display = 'flex';
        document.getElementById('backToCategories').style.display = 'block';
        container.style.opacity = '1'; 
    }, 200); 
}

// Focus trap helpers
const _focusTrapMap = new WeakMap();

export function trapFocus(container) {
    if (!container) return;
    const focusableString = 'a[href], area[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(container.querySelectorAll(focusableString)).filter(el => el.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const previous = document.activeElement;

    function keyHandler(e) {
        if (e.key === 'Tab') {
            if (focusable.length === 0) {
                e.preventDefault();
                return;
            }
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        } else if (e.key === 'Escape') {
            // Try to close overlay if possible by finding a close button inside
            const closeBtn = container.querySelector(
                '.close-gallery, .close-mosaic, .close-poem, #closePoemButton, ' +
                '.close-timeline, .close-game, .close-puzzle, .close-gift, ' +
                '.close-photo-puzzle, .close-wheel, .close-playlist, .close-countdown, ' +
                '.close-question, .close-dreams, .close-world, .close-portrait, ' +
                '.close-celestial, .close-piano, .close-fairytale, ' +
                '.close-video, [class*="close-"], button[aria-label="Close"]'
            );
            if (closeBtn) {
                closeBtn.click();
            } else {
                toggleOverlay(container, false);
            }
        }
    }

    container.addEventListener('keydown', keyHandler);
    // Store the handler so it can be removed later
    _focusTrapMap.set(container, { keyHandler, previous });

    // Focus the container or the first focusable element
    if (first) {
        first.focus();
    } else {
        container.setAttribute('tabindex', '-1');
        container.focus();
    }
}

export function releaseFocus(container) {
    if (!container) return;
    const data = _focusTrapMap.get(container);
    if (!data) return;
    container.removeEventListener('keydown', data.keyHandler);
    _focusTrapMap.delete(container);
    // Restore focus to previous element if present
    if (data.previous && data.previous.focus) data.previous.focus();
}

// Accessibility: announce a short message to assistive technologies via aria-live region
export function announceLive(message, priority = 'polite') {
    if (!message) return;
    const id = priority === 'assertive' ? 'a11y-live-assertive' : 'a11y-live';
    let live = document.getElementById(id);
    if (!live) {
        live = document.createElement('div');
        live.id = id;
        live.setAttribute('aria-live', priority === 'assertive' ? 'assertive' : 'polite');
        live.setAttribute('aria-atomic', 'true');
        live.className = 'sr-only';
        document.body.appendChild(live);
    }
    // Setting textContent twice in quick succession helps some ATs notice the change
    live.textContent = '';
    setTimeout(() => { live.textContent = message; }, 50);
} 

export function showMainCategories() {
    const container = document.getElementById('actionButtonsContainer');
    if (!container) return;

    container.style.opacity = '0'; 
    setTimeout(() => {
        document.querySelectorAll('#actionButtonsContainer .button-row').forEach(el => {
            if (el.id !== 'mainCategories') el.style.display = 'none';
        });
        document.getElementById('mainCategories').style.display = 'flex';
        document.getElementById('backToCategories').style.display = 'none';
        container.style.opacity = '1'; 
    }, 200); 
}