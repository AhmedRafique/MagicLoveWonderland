import { galleryPhotos, timelineEvents } from './config.js';

// Generate a compact JPEG data URL for an image URL (supports data: URIs and relative paths)
function loadImageToCanvas(url, maxWidth = 800, quality = 0.8) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            try {
                const ratio = img.width > maxWidth ? (maxWidth / img.width) : 1;
                const canvas = document.createElement('canvas');
                canvas.width = Math.round(img.width * ratio);
                canvas.height = Math.round(img.height * ratio);
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0,0,canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve({ dataUrl, width: canvas.width, height: canvas.height });
            } catch (err) { reject(err); }
        };
        img.onerror = (e) => { reject(e); };
        img.src = url;
    });
}

async function ensureJsPDF() {
    if (window.jspdf && window.jspdf.jsPDF) return window.jspdf.jsPDF;
    // Try dynamic import of CDN
    try {
        await import('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js');
        if (window.jspdf && window.jspdf.jsPDF) return window.jspdf.jsPDF;
    } catch (e) {
        console.warn('Failed to import jsPDF from CDN', e);
    }
    throw new Error('jsPDF is not available');
}

export async function generateBooklet(options = {}) {
    const opts = Object.assign({ maxPhotos: 12, imgWidth: 800, quality: 0.8, filename: 'Love-Booklet.pdf' }, options);

    let jsPDFClass;
    try {
        jsPDFClass = await ensureJsPDF();
    } catch (e) {
        alert('PDF generation is not available. Please ensure you have an internet connection or that jsPDF is included.');
        return;
    }

    const doc = new jsPDFClass({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const pageW = 210, pageH = 297, margin = 15;

    // 1) Cover
    doc.setFontSize(24);
    doc.setTextColor(214,51,108);
    doc.text('Our Love Booklet', pageW/2, 50, { align: 'center' });
    doc.setFontSize(14);
    doc.setTextColor(60,60,60);
    doc.text('A little world of memories', pageW/2, 65, { align: 'center' });
    doc.setFontSize(12);
    const noteAuthor = 'Ahmed Rafique';
    doc.text(`By ${noteAuthor}`, pageW/2, 75, { align: 'center' });
    doc.setDrawColor(214,51,108);
    doc.setLineWidth(0.6);
    doc.line(margin, 92, pageW - margin, 92);

    // 2) Gift Note / Poem
    doc.addPage();
    doc.setFontSize(16);
    doc.setTextColor(214,51,108);
    doc.text('Gift Note', margin, 22);
    doc.setFontSize(11);
    doc.setTextColor(30,30,30);
    const printNoteBody = document.querySelector('.print-note-body');
    const noteText = printNoteBody ? printNoteBody.innerText.trim() : 'My dearest...';
    const wrapped = doc.splitTextToSize(noteText, pageW - margin*2);
    doc.text(wrapped, margin, 36);

    // 3) Timeline summary (first few events)
    if (typeof timelineEvents !== 'undefined' && Array.isArray(timelineEvents) && timelineEvents.length > 0) {
        doc.addPage();
        doc.setFontSize(16);
        doc.setTextColor(214,51,108);
        doc.text('Our Timeline', margin, 22);
        doc.setFontSize(11);
        let y = 36;
        const perPage = 6;
        for (let i = 0; i < Math.min(timelineEvents.length, 18); i++) {
            const ev = timelineEvents[i];
            const title = `${ev.date} — ${ev.title}`;
            const text = ev.description;
            const wrappedTitle = doc.splitTextToSize(title, pageW - margin*2);
            const wrappedText = doc.splitTextToSize(text, pageW - margin*2);
            if (y + (wrappedText.length + wrappedTitle.length)*6 > pageH - margin) {
                doc.addPage(); y = 22;
            }
            doc.setFontSize(12); doc.setTextColor(60,60,60); doc.text(wrappedTitle, margin, y); y += 6 + (wrappedTitle.length*6);
            doc.setFontSize(10); doc.setTextColor(30,30,30); doc.text(wrappedText, margin, y); y += 8 + (wrappedText.length*6);
            if (ev.photo && ev.photo.length > 0) {
                try {
                    const psrc = ev.photo.startsWith('data:') ? ev.photo : ('timeline-photos/' + ev.photo);
                    const img = await loadImageToCanvas(psrc, opts.imgWidth, opts.quality);
                    const mmPerPx = 25.4/96; // approximate px to mm conversion
                    const imgWmm = Math.min((img.width * mmPerPx), pageW - margin*2);
                    const imgHmm = (img.height * imgWmm) / img.width;
                    if (y + imgHmm > pageH - margin) { doc.addPage(); y = 22; }
                    doc.addImage(img.dataUrl, 'JPEG', margin, y, imgWmm, imgHmm);
                    y += imgHmm + 8;
                } catch (e) { /* ignore */ }
            }
        }
    }

    // 4) Photos (first N from galleryPhotos)
    if (typeof galleryPhotos !== 'undefined' && Array.isArray(galleryPhotos) && galleryPhotos.length > 0) {
        const photosToUse = galleryPhotos.slice(0, opts.maxPhotos);
        for (let i = 0; i < photosToUse.length; i++) {
            const photo = photosToUse[i];
            try {
                const src = photo.startsWith('data:') ? photo : ('photos/' + photo);
                const img = await loadImageToCanvas(src, opts.imgWidth, opts.quality);
                // Show 1 photo per page (could do 2 per page but keep simple)
                doc.addPage();
                const mmPerPx = 25.4/96;
                const imgWmm = Math.min((img.width * mmPerPx), pageW - margin*2);
                const imgHmm = (img.height * imgWmm) / img.width;
                // center image vertically and horizontally
                const x = (pageW - imgWmm)/2;
                let y = (pageH - imgHmm)/2;
                if (y < margin) y = margin;
                doc.addImage(img.dataUrl, 'JPEG', x, y, imgWmm, imgHmm);
            } catch (e) {
                console.warn('Failed to include photo in PDF', photo, e);
            }
        }
    }

    // Finish and save
    try {
        doc.save(opts.filename);
    } catch (e) {
        console.error('Failed to save PDF', e);
        alert('PDF generation failed: ' + e.message);
    }
}
