✨ Magic Love Wonderland ✨
=========================

A deeply personal and interactive web experience designed as a digital wonderland to celebrate love. This project, built for Radwa, is packed with magical, animated features, games, and shared memories, making it perfect for anniversaries, proposals, or a special surprise.

---

### 🎬 Live Demo & Preview

**(It is highly recommended to add a live demo link or an animated GIF here to showcase the project's dynamic nature!)**

<!-- Example: ![Magic Love Wonderland Preview](https://example.com/path/to/your/preview.gif) -->

---

### 🚀 Features

This application is navigated through a central, two-tiered menu and is packed with a variety of unique modules:

*   **✨ Core Experience:**
    *   **Daily Love Note:** A unique, heartfelt message is presented in a popup each day upon entry.
    *   **Day/Night Mode:** A beautiful toggle that switches between a warm, vibrant day theme with an animated, multi-color gradient and floating orbs, and a serene, animated night sky with drifting stars.
    *   **Interactive Background:** A living background with floating hearts and falling petals.
    *   **Music & Sound:** Looping, ambient background music with an easy-to-use toggle button.
    *   **Voice Control:** Interact with the wonderland using voice commands for hands-free navigation and feature activation.

*   **📖 Our Story Category:**
    *   **Photo Gallery:** A responsive grid gallery that dynamically loads and displays cherished photos.
    *   **Our Story Timeline:** A vertical, scrollable timeline showcasing key moments of the relationship with dates, descriptions, and photos.
    *   **Our Movie (Theater):** A dedicated cinema theater overlay streaming `OurStory.mp4` with custom playback controls.
    *   **Portrait of a Star:** A stunning animation where hundreds of stars fly into place to form a silhouette portrait of Radwa.
    *   **Explore Our World:** An interactive map displaying points of interest that represent past memories and future dreams, each with details and a photo.
    *   **Our Night Sky:** Generates an accurate, beautiful star map of the night sky from any meaningful date (e.g., the night you met).
    *   **Our Fairytale:** An animated storybook that narrates the couple's story with speech synthesis narration controls and an option to add new chapters.
    *   **Photo Mosaic Heart:** A beautiful mosaic of cherished photos that forms a heart shape. Click on any tile to zoom in on the photo.


*   **❤️ Love & Poems Category:**
    *   **A Poem for You:** Displays a random, beautifully formatted love poem from a large, customizable collection.
    *   **Reasons I Love You:** A full-screen animation where reasons for love float across the screen.
    *   **A Letter For You:** A full-screen, elegant love letter that appears with a classic typewriter effect.
    *   **Starlit Proposal Replay:** Replays the magical constellation proposal animation.

*   **🎲 Our Time (Fun & Games) Category:**
    *   **Memory Game:** A classic card-matching game using the couple's photos to test their memory lane.
    *   **Secret Puzzle:** A "slide-to-unlock" puzzle that reveals a hidden, romantic message.
    *   **Gift Box:** A clickable, animated gift box that unwraps to reveal a random surprise: a poem, a special message, a photo, or a video.
    *   **Our Playlist:** An overlay that presents a curated list of meaningful songs, with links to listen on YouTube.
    *   **Birthday Countdown & Celebration:** A full-screen overlay that counts down to her next birthday and displays her current age in years, months, and days. Features an interactive **"Celebrate Birthday Now!"** mode with fireworks, birthday confetti, and an animated birthday cake with blow-out candles that reveal a loving birthday wish.
    *   **Piano for You:** An interactive piano where you can play your own songs or play pre-loaded songs from a songbook.
    *   **Photo Puzzle:** A jigsaw-style puzzle where you piece together a special photo.
    *   **Love Wheel:** A customizable "Spin the Wheel" game that offers various romantic prizes or activities.

*   **🚀 Our Journey Category:**
    *   **Today's Question:** Presents a unique, thought-provoking question for the couple each day.
    *   **Dream Board:** A virtual corkboard displaying future dreams and adventures. New dreams can be added and are saved locally.
    *   **The Big Question...:** A heart-pounding "Will you marry me?" proposal replay. Upon clicking "Yes," the screen erupts in fireworks, a congratulatory message, and plays Ahmed's proposal voice message.
    *   **Our Marriage Vows:** A sacred parchment keepsake displaying our eternal vows made on March 28, 2026.

---

### 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
*   **Libraries:** Built with vanilla HTML, CSS, and JavaScript, with a little help from d3.js and d3-celestial.js for the celestial magic, and Winwheel.js for the Love Wheel.
*   **Animations:** Advanced CSS Keyframes, GSAP, and JavaScript's `requestAnimationFrame` for smooth, performant canvas animations (starry sky, portrait).
*   **Storage:** `localStorage` is used to remember a user's visit and save their "Dream Board" entries and personal vows.

---

### 📂 File Structure

```
MagicLoveWonderland/
├── 📄 index.html              # The main HTML file for structure and content.
├── 🎨 style.css               # All CSS for styling, layout, and animations.
├── 📂 js/                     # JavaScript modules:
│   ├── main.js                # Entry point – initialisation, PWA, voice control.
│   ├── config.js              # All customisable data (messages, photos, timeline…).
│   ├── utils.js               # Overlay management, focus trapping, a11y helpers.
│   ├── visuals.js             # Canvas animations, constellations, star portrait.
│   ├── story.js               # Gallery, timeline, poems, fairytale, mosaic.
│   ├── games.js               # Memory game, puzzle, gift box, photo puzzle, wheel.
│   ├── audio.js               # Music toggle, piano, playlist, narration.
│   ├── journey.js             # Married life timer, our marriage vows, dreams, world map, celestial.
│   ├── print.js               # PDF booklet generation via jsPDF.
│   └── libs/
│       └── jspdf.umd.min.js   # jsPDF loader (fetches full library from CDN).
├── 🎵 background-music.mp3    # The background audio file.
├── 🎤 voice-message.mp3       # The special voice message for the proposal.
├── 🎵 celebration.mp3         # Celebration sound effect.
├── 🎵 heartbeat.mp3           # Heartbeat sound effect.
├── 🎵 tick.mp3                # Wheel tick sound.
├── 🎬 OurStory.mp4            # Video asset.
├── celestial.min.js           # The celestial library for the star map.
├── Winwheel.js                # The library for the spinning wheel.
├── 🖼️ photos/                  # Directory for all gallery and memory game images.
├── 📅 timeline-photos/        # Directory for all timeline images.
├── 📁 data/                   # Directory containing data for the celestial map.
├── 📁 icons/                  # PWA icons (SVG and PNG).
├── 📁 scripts/                # Build utilities (singlefile bundler, icon generator).
├── manifest.json              # PWA manifest.
├── sw.js                      # Service worker for offline support.
└── 📖 README.md               # You are here!
```

---

### 🔧 Setup & Customization

This project is designed to be easily personalized. No complex setup is required.

#### Basic Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the Project Directory**:
    ```bash
    cd MagicLoveWonderland
    ```
3.  **Open `index.html` in your web browser** to see the magic happen!

#### Personalizing the Content

Almost all personal content can be changed by editing the constant arrays in the `js/config.js` file.

1.  **Messages & Reasons:**
    *   `loveMessages`: For the random floating messages.
    *   `loveReasons`: For the floating messages in the "Reasons I Love You" section.
    *   `nameStarMessages`: For the stars in the "RADWA" constellation.

2.  **Photos & Timeline:**
    *   `galleryPhotos`: Add your photo filenames here. Place the actual image files in the `/photos` directory.
    *   `timelineEvents`: Edit the objects in this array to build your own relationship timeline. Place the corresponding images in the `/timeline-photos` directory.

3.  **Name Constellation:**
    *   The constellation "Will you always<br>be my forever, Radwa?" now features unique, letter-specific messages on each dot.
    *   These messages are defined in the `PROPOSAL_LETTER_MESSAGES` constant within `js/visuals.js`.
    *   For other constellations (like "RADWA"), messages are drawn from `nameStarMessages` in `js/config.js`.
    *   The letter shapes are defined in the `LETTER_MAP` and `PROPOSAL_LETTER_MAP` constants. You can adjust the coordinates for different letter styles.

4.  **Piano & Songs:**
    *   The songs available in the piano feature are defined in the `songbook` object in `js/config.js`. You can edit the notes of existing songs or add new ones. The notes are represented as strings, with 'P' for pauses.

5.  **Music & Audio:**
    *   Replace `background-music.mp3` and `voice-message.mp3` with your own audio files.

---

### � Packaging for Gift (PWA & USB)

This project includes tools to produce a portable gift package and adds PWA support for offline use when served via HTTP.

- **PWA:** `manifest.json` and `sw.js` (service worker) are included. When the site is served over HTTP (e.g., via the included `run-local.bat`), it becomes installable and works offline.

- **Create a USB-ready ZIP:** Run the PowerShell packaging script to create a `dist/` folder and a `Gift-Magical-Love-Wonderland.zip`:

- **Export a PDF Booklet:** The app includes an "Export Booklet (PDF)" action in the Gift Note overlay that compiles a printable A4 booklet (cover, gift note, timeline, and selected photos) using jsPDF.

### Manual Verification — PDF Booklet
1.  Open `index.html` in a browser (or serve via `run-local.bat` for full PWA behavior).
2.  Click the **Gift Note** (🖨️) button to open the Print Note overlay.
3.  Click **Export Booklet (PDF)** — a file named `Love-Booklet.pdf` should download.
4.  Open the PDF and verify: cover page, gift note content, a short timeline, and several photos (one per page). If images do not appear, ensure you have an active internet connection (used to fetch jsPDF library when not inlined).

If you want automated verification, consider adding a simple Playwright/Cypress test that loads the page, clicks the button, and confirms a download was created (left as optional future work).
```powershell
# From project root in PowerShell (Windows)
.\package-gift.ps1
```

The script creates `dist/` with a `run-local.bat` (Windows) and `run-local.sh` (macOS/Linux) helper that starts a local HTTP server and opens the site at `http://localhost:5500`.

- **Quick local server:** You can also run `run-local.bat` directly in the project root to start a local server if you have Python or Node installed.

---

### �📜 License

Copyright (c) 2025 AhmedRafique - All Rights Reserved.

This project is proprietary and closed source. You may view the code and its output for preview purposes only. You may not copy, modify, distribute, or use the code in any way.
