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
            '.gift-box-overlay, .playlist-overlay, .fairytale-overlay'
        );
        overlays.forEach(el => {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
        });

        // Also hide ID-based overlays
        const ids = ['time-capsule-overlay', 'weddingTimerOverlay', 'dailyQuestionOverlay', 
                     'futureDreamsOverlay', 'ourWorldOverlay', 'starPortraitOverlay', 
                     'celestialOverlay', 'poemContainer'];
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
            }, 10);
        }
    } else {
        if (overlay.id === 'poemContainer') {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        } else {
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
        '.overlay-content, .piano-overlay, .photo-gallery, .timeline-container, .love-letter-container, .memory-game-container, .love-wheel-overlay, .puzzle-overlay, .photo-puzzle-overlay, .gift-box-overlay, .playlist-overlay, .fairytale-overlay'
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

    // Hide action buttons while overlay is shown (only when we have a real overlay to show)
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