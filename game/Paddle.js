import Brick from "./Brick";

class Paddle extends Brick {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.mouseX = 0; // Variable to store the current mouse X position

        document.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
    }

    mouseMoveHandler(event) {
        // Update mouseX, but don't change the paddle's position directly here
        this.mouseX = event.clientX;
    }

    update(canvasWidth) {
        // Update the paddle's position based on mouseX
        this.x = this.mouseX - this.width / 2;

        // Ensure the paddle stays within the canvas boundaries
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width;
        }

    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export default Paddle;
