class Winwheel {
    constructor(options) {
        this.canvas = document.getElementById(options.canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.segments = options.segments || [];
        this.numSegments = this.segments.length;
        this.outerRadius = options.outerRadius || (this.canvas.width / 2);
        this.innerRadius = options.innerRadius || 0;
        this.rotationAngle = 0;
        this.animation = options.animation || {};
        this.pins = options.pins || null;
        this.lastSoundSegment = null;

        // Automatically draw initial wheel state
        this.draw();
    }

    draw() {
        if (!this.ctx || !this.canvas) return;
        this.clearCanvas();
        this.drawSegments();
        this.drawSegmentText();
        if (this.pins) {
            this.drawPins();
        }
        this.drawCenterHub();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSegments() {
        const segmentAngle = 360 / this.numSegments;
        const centerX = this.outerRadius;
        const centerY = this.outerRadius;

        for (let i = 0; i < this.numSegments; i++) {
            const startAngle = i * segmentAngle + this.rotationAngle;
            const endAngle = (i + 1) * segmentAngle + this.rotationAngle;

            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.arc(
                centerX,
                centerY,
                this.outerRadius,
                this.degToRad(startAngle),
                this.degToRad(endAngle)
            );
            this.ctx.closePath();
            this.ctx.fillStyle = this.segments[i].fillStyle || '#ff4d88';
            this.ctx.fill();
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.stroke();
        }
    }

    drawSegmentText() {
        const segmentAngle = 360 / this.numSegments;
        const centerX = this.outerRadius;
        const centerY = this.outerRadius;

        for (let i = 0; i < this.numSegments; i++) {
            this.ctx.save();
            this.ctx.translate(centerX, centerY);
            this.ctx.rotate(this.degToRad((i + 0.5) * segmentAngle + this.rotationAngle));
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 15px Arial, sans-serif';
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
            this.ctx.shadowBlur = 4;
            this.ctx.fillText(this.segments[i].text, this.outerRadius * 0.58, 0);
            this.ctx.restore();
        }
    }

    drawPins() {
        const numPins = (this.pins && this.pins.number) || 32;
        const pinRadius = (this.pins && this.pins.outerRadius) || 4;
        const pinFill = (this.pins && this.pins.fillStyle) || '#ffffff';
        const centerX = this.outerRadius;
        const centerY = this.outerRadius;
        const pinDistance = this.outerRadius - pinRadius - 2;

        const pinAngle = 360 / numPins;
        for (let i = 0; i < numPins; i++) {
            const angle = this.degToRad(i * pinAngle + this.rotationAngle);
            const x = centerX + Math.cos(angle) * pinDistance;
            const y = centerY + Math.sin(angle) * pinDistance;

            this.ctx.beginPath();
            this.ctx.arc(x, y, pinRadius, 0, 2 * Math.PI);
            this.ctx.fillStyle = pinFill;
            this.ctx.fill();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#333333';
            this.ctx.stroke();
        }
    }

    drawCenterHub() {
        const centerX = this.outerRadius;
        const centerY = this.outerRadius;
        const hubRadius = 24;

        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, hubRadius, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#ff4d88';
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, hubRadius / 2, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#ff4d88';
        this.ctx.fill();
    }

    degToRad(deg) {
        return deg * (Math.PI / 180);
    }

    startAnimation() {
        const stopAngle = Math.random() * 360;
        const duration = (this.animation && this.animation.duration) || 7;
        const spins = (this.animation && this.animation.spins) || 8;
        const startAngle = this.rotationAngle;
        const totalRotation = startAngle + (spins * 360) + stopAngle;

        this.lastSoundSegment = null;

        const onFrame = () => {
            this.draw();
            if (this.animation && this.animation.callbackSound) {
                const seg = this.getIndicatedSegment();
                if (seg && seg !== this.lastSoundSegment) {
                    this.lastSoundSegment = seg;
                    try { this.animation.callbackSound(); } catch (e) {}
                }
            }
        };

        const onFinish = () => {
            this.draw();
            const indicatedSegment = this.getIndicatedSegment();
            if (this.animation && this.animation.callbackFinished) {
                this.animation.callbackFinished(indicatedSegment);
            }
        };

        if (typeof gsap !== 'undefined' && gsap.to) {
            gsap.to(this, {
                rotationAngle: totalRotation,
                duration: duration,
                ease: 'power3.out',
                onUpdate: onFrame,
                onComplete: onFinish
            });
        } else {
            // Robust requestAnimationFrame fallback
            const startTime = performance.now();
            const animDurationMs = duration * 1000;

            const step = (time) => {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / animDurationMs, 1);
                // Cubic ease-out
                const ease = 1 - Math.pow(1 - progress, 3);
                this.rotationAngle = startAngle + (totalRotation - startAngle) * ease;
                onFrame();

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    onFinish();
                }
            };
            requestAnimationFrame(step);
        }
    }

    getIndicatedSegment() {
        if (!this.numSegments) return null;
        const finalAngle = ((this.rotationAngle % 360) + 360) % 360;
        const segmentAngle = 360 / this.numSegments;
        const relativeAngle = ((360 - finalAngle) % 360 + 360) % 360;
        const indicatedSegmentIndex = Math.floor(relativeAngle / segmentAngle) % this.numSegments;
        return this.segments[indicatedSegmentIndex];
    }
}
