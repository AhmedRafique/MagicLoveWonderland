class Winwheel {
    constructor(options) {
        this.canvas = document.getElementById(options.canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.segments = options.segments;
        this.numSegments = this.segments.length;
        this.outerRadius = options.outerRadius;
        this.innerRadius = options.innerRadius || 0;
        this.rotationAngle = 0;
        this.animation = options.animation;
    }

    draw() {
        this.clearCanvas();
        this.drawSegments();
        this.drawSegmentText();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSegments() {
        const segmentAngle = 360 / this.numSegments;
        for (let i = 0; i < this.numSegments; i++) {
            const startAngle = i * segmentAngle;
            const endAngle = (i + 1) * segmentAngle;
            this.ctx.beginPath();
            this.ctx.moveTo(this.outerRadius, this.outerRadius);
            this.ctx.arc(
                this.outerRadius,
                this.outerRadius,
                this.outerRadius,
                this.degToRad(startAngle + this.rotationAngle),
                this.degToRad(endAngle + this.rotationAngle)
            );
            this.ctx.closePath();
            this.ctx.fillStyle = this.segments[i].fillStyle;
            this.ctx.fill();
            this.ctx.stroke();
        }
    }

    drawSegmentText() {
        const segmentAngle = 360 / this.numSegments;
        for (let i = 0; i < this.numSegments; i++) {
            this.ctx.save();
            this.ctx.translate(this.outerRadius, this.outerRadius);
            this.ctx.rotate(this.degToRad((i + 0.5) * segmentAngle + this.rotationAngle));
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = 'white';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText(this.segments[i].text, this.outerRadius / 2, 10);
            this.ctx.restore();
        }
    }

    degToRad(deg) {
        return deg * (Math.PI / 180);
    }

    startAnimation() {
        const stopAngle = Math.random() * 360;
        const duration = this.animation.duration;
        const spins = this.animation.spins;
        const totalRotation = spins * 360 + stopAngle;

        gsap.to(this, {
            rotationAngle: totalRotation,
            duration: duration,
            ease: 'power3.out',
            onUpdate: () => {
                this.draw();
            },
            onComplete: () => {
                const indicatedSegment = this.getIndicatedSegment();
                if (this.animation.callbackFinished) {
                    this.animation.callbackFinished(indicatedSegment);
                }
            },
        });
    }

    getIndicatedSegment() {
        const finalAngle = this.rotationAngle % 360;
        const segmentAngle = 360 / this.numSegments;
        const indicatedSegmentIndex = Math.floor((360 - finalAngle) / segmentAngle);
        return this.segments[indicatedSegmentIndex];
    }
}