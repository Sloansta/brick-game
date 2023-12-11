import Brick from "./Brick";

class Ball extends Brick {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.vx = 0;
        this.vy = 0;
    }

    startBall() {
        this.vx = Math.floor(Math.random() * (-25 - 25) - -25);
        this.vy = Math.floor(Math.random() * (-5 - 5) - -5);
    }

    collide(object) {
        const collidesX = this.x + this.width > object.x && this.x < object.x + object.width;

        const collidesY = this.y + this.height > object.y && this.y < object.y + object.height;

        if (collidesX && collidesY) {
            const overlapX = (this.x < object.x) ? (this.x + this.width - object.x) : (object.x + object.width - this.x);
            const overlapY = (this.y < object.y) ? (this.y + this.height - object.y) : (object.y + object.height - this.y);

            // Reverse velocity direction based on the smaller overlap
            if (overlapX < overlapY) {
                this.vx = -this.vx; // Reverse x velocity
            } else {
                this.vy = -this.vy; // Reverse y velocity
            }
        }
    }

    checkCanvasBounds(canvasWidth, canvasHeight) {
        if(this.x < 0 || this.x + this.width > canvasWidth) {
            this.vx = -this.vx;
        }

        if(this.y < 0) {
            this.vy = -this.vy;
        }

        if(this.y + this.height > canvasHeight) {
            this.vy = this.vy;
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
}

export default Ball; 