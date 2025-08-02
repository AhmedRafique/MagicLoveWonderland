✨ Magic Love Wonderland ✨
=========================

A deeply personal and interactive web experience designed to celebrate love through a collection of magical, animated features. This project transforms a simple webpage into an immersive wonderland, perfect for anniversaries, proposals, or just as a special surprise for Radwa.

---

### 🎬 Live Demo & Preview

**(It is highly recommended to add a live demo link or an animated GIF here to showcase the project's dynamic nature!)**

<!-- Example: ![Magic Love Wonderland Preview](https://example.com/path/to/your/preview.gif) -->

---

### 🚀 Features

This application is packed with a variety of unique and interactive modules:

*   **💖 Main Wonderland:**
    *   **Dynamic Welcome:** A personalized welcome message for a returning visitor (using `localStorage`).
    *   **Daily Love Note:** A unique, heartfelt message is presented to the user each day upon entry.
    *   **Interactive Background:** A living background with floating hearts, falling petals, and sparkling effects that respond to mouse movement.
    *   **Day/Night Mode:** A beautiful toggle that switches between a warm day-themed gradient and a serene, animated night sky.

*   **🌌 "Why I Love You" Starry Night Sky:**
    *   An artistic and serene mode with a beautiful night sky background.
    *   **Constellation of Love:** Each star represents a unique reason for love, revealing a poetic sentence on hover.
    *   **Her Name in the Stars:** A centerpiece constellation forms the name "RADWA", with each star holding its own special message.
    *   **Dynamic Sky:** Features gently drifting stars, a pulsing name constellation, and random shooting stars for added magic.

*   **💍 The Proposal:**
    *   A heart-pounding "Will you marry me?" prompt.
    *   Upon clicking "Yes", the screen erupts in a **celebratory explosion of fireworks**, a heart shower, a congratulatory message, and a special voice message.

*   **💌 Interactive Surprises:**
    *   **Poem Unveiling:** Displays a random, beautifully formatted love poem from a large, customizable collection.
    *   **Our Story Timeline:** A vertical, scrollable timeline showcasing key moments of a relationship with dates, descriptions, and photos.
    *   **Photo Gallery:** A responsive grid gallery that dynamically loads and displays cherished photos.
    *   **Memory Game:** A classic card-matching game using the couple's photos to test their memory lane.
    *   **Typing Love Letter:** A full-screen, elegant love letter that appears with a classic typewriter effect.
    *   **Secret Puzzle:** A "slide-to-unlock" puzzle that reveals a hidden, romantic message.
    *   **Gift Box:** A clickable gift box that unwraps to reveal a random surprise: a poem, a special message, a photo, or even a video.

*   **🎶 Music & Sound:**
    *   **Background Music:** Looping, ambient background music with an easy-to-use toggle button.
    *   **Curated Playlist:** An overlay that presents a list of meaningful songs, with links to listen on YouTube.

---

### 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
*   **Animations:** CSS Keyframes and JavaScript's `requestAnimationFrame` for smooth canvas animations.
*   **No frameworks, no libraries, just pure magic!**

---

### 📂 File Structure

The project is organized into a clear and simple structure:

```
MagicLoveWonderland/
├── 📄 index.html             # The main HTML file for structure and content.
├── 🎨 style.css             # All CSS for styling, layout, and animations.
├── ✨ script.js             # The core JavaScript for all interactivity and logic.
├── 🎵 background-music.mp3   # The background audio file.
├── 🎤 voice-message.mp3      # The special voice message for the proposal.
├── 🖼️ photos/               # Directory for all gallery and memory game images.
├── 📅 timeline-photos/       # Directory for all timeline images.
└── 📖 README.md              # You are here!
```

---

### 🔧 Setup & Customization

This project is designed to be easily personalized. No complex setup is required.

#### Basic Setup

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the Project Directory**: 
   ```bash
   cd MagicLoveWonderland
   ```
3. **Open `index.html` in your web browser** to see the magic happen!

#### Personalizing the Content

Almost all personal content can be changed by editing the constant arrays at the top of the `script.js` file.

1.  **Messages & Reasons:**
    *   `loveMessages`: For the random floating messages.
    *   `loveReasons`: For the interactive stars in the "Reasons I Love You" sky.
    *   `nameStarMessages`: For the stars in the "RADWA" constellation.

2.  **Photos & Timeline:**
    *   `galleryPhotos`: Add your photo filenames here. Place the actual image files in the `/photos` directory.
    *   `timelineEvents`: Edit the objects in this array to build your own relationship timeline. Place the corresponding images in the `/timeline-photos` directory.

3.  **Name Constellation:**
    *   In `script.js`, find the `initNameConstellation("RADWA", w, h)` call. You can change the name here.
    *   The letter shapes are defined in the `LETTER_MAP` constant. You can adjust the coordinates for different letter styles.

4.  **Music & Audio:**
    *   Replace `background-music.mp3` and `voice-message.mp3` with your own audio files.

---

### 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

### 📜 License

Copyright (c) 2025 AhmedRafique - All Rights Reserved.

This project is proprietary and closed source. You may view the code and its output for preview purposes only. You may not copy, modify, distribute, or use the code in any way.
