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
    *   **Portrait of a Star:** A stunning animation where hundreds of stars fly into place to form a silhouette portrait of Radwa.
    *   **Explore Our World:** An interactive map displaying points of interest that represent past memories and future dreams, each with details and a photo.
    *   **Our Night Sky:** Generates an accurate, beautiful star map of the night sky from any meaningful date (e.g., the night you met).
    *   **Our Fairytale:** An animated storybook that narrates the couple's story, with an option to add new chapters.
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
    *   **Birthday Countdown:** A full-screen overlay that counts down to the next birthday and displays the current age in years, months, and days.
    *   **Piano for You:** An interactive piano where you can play your own songs or play pre-loaded songs from a songbook.
    *   **Photo Puzzle:** A jigsaw-style puzzle where you piece together a special photo.
    *   **Love Wheel:** A customizable "Spin the Wheel" game that offers various romantic prizes or activities.

*   **🚀 Our Journey Category:**
    *   **Today's Question:** Presents a unique, thought-provoking question for the couple each day.
    *   **Dream Board:** A virtual corkboard displaying future dreams and adventures. New dreams can be added and are saved locally.
    *   **The Big Question...:** A heart-pounding "Will you marry me?" prompt. Upon clicking "Yes," the screen erupts in a celebratory explosion of fireworks, a congratulatory message, and plays a special voice message.
    *   **Time Capsule:** A digital time capsule to write and seal messages for the future.

---

### 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
*   **Libraries:** Built with vanilla HTML, CSS, and JavaScript, with a little help from d3.js and d3-celestial.js for the celestial magic, and Winwheel.js for the Love Wheel.
*   **Animations:** Advanced CSS Keyframes, GSAP, and JavaScript's `requestAnimationFrame` for smooth, performant canvas animations (starry sky, portrait).
*   **Storage:** `localStorage` is used to remember a user's visit and save their "Dream Board" entries, and time capsule messages.

---

### 📂 File Structure

```
MagicLoveWonderland/
├── 📄 index.html             # The main HTML file for structure and content.
├── 🎨 style.css             # All CSS for styling, layout, and animations.
├── ✨ script.js             # The core JavaScript for all interactivity and logic.
├── 🎵 background-music.mp3   # The background audio file.
├── 🎤 voice-message.mp3      # The special voice message for the proposal.
├── celestial.min.js       # The celestial library for the star map.
├── Winwheel.js            # The library for the spinning wheel.
├── 🖼️ photos/               # Directory for all gallery and memory game images.
├── 📅 timeline-photos/       # Directory for all timeline images.
├── 📁 data/                  # Directory containing data for the celestial map.
└── 📖 README.md              # You are here!
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

Almost all personal content can be changed by editing the constant arrays at the top of the `script.js` file.

1.  **Messages & Reasons:**
    *   `loveMessages`: For the random floating messages.
    *   `loveReasons`: For the floating messages in the "Reasons I Love You" section.
    *   `nameStarMessages`: For the stars in the "RADWA" constellation.

2.  **Photos & Timeline:**
    *   `galleryPhotos`: Add your photo filenames here. Place the actual image files in the `/photos` directory.
    *   `timelineEvents`: Edit the objects in this array to build your own relationship timeline. Place the corresponding images in the `/timeline-photos` directory.

3.  **Name Constellation:**
    *   The constellation "Will you always<br>be my forever, Radwa?" now features unique, letter-specific messages on each dot.
    *   These messages are defined in the `PROPOSAL_LETTER_MESSAGES` constant within `script.js`.
    *   For other constellations (like "RADWA"), messages are drawn from `nameStarMessages`.
    *   The letter shapes are defined in the `LETTER_MAP` and `PROPOSAL_LETTER_MAP` constants. You can adjust the coordinates for different letter styles.

4.  **Piano & Songs:**
    *   The songs available in the piano feature are defined in the `songbook` object in `script.js`. You can edit the notes of existing songs or add new ones. The notes are represented as strings, with 'P' for pauses.

5.  **Music & Audio:**
    *   Replace `background-music.mp3` and `voice-message.mp3` with your own audio files.

---

### � Packaging for Gift (PWA & USB)

This project includes tools to produce a portable gift package and adds PWA support for offline use when served via HTTP.

- **PWA:** `manifest.json` and `sw.js` (service worker) are included. When the site is served over HTTP (e.g., via the included `run-local.bat`), it becomes installable and works offline.

- **Create a USB-ready ZIP:** Run the PowerShell packaging script to create a `dist/` folder and a `Gift-Magical-Love-Wonderland.zip`:

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
