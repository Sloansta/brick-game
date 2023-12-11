import Ball from './game/Ball.js';
import Paddle from './game/Paddle.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const clear = () => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const resizeCanvas = () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    clear(); 
}

resizeCanvas();
const playerPaddle = new Paddle(canvas.width / 2, canvas.height - 50, 150, 20);
const ball = new Ball(canvas.width / 2, canvas.height / 2, 20, 20);
ball.startBall();
const gameLoop = () => {
    clear(); // Clear the canvas for the new frame
    playerPaddle.update(canvas.width);
    ball.update();
    ball.collide(playerPaddle);
    ball.checkCanvasBounds(canvas.width, canvas.height);
    playerPaddle.draw(ctx);
    ball.draw(ctx);
    requestAnimationFrame(gameLoop); // Schedule the next frame
}

gameLoop();

window.addEventListener('resize', resizeCanvas);
