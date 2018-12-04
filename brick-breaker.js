var playerScore = 0;
let paddle
let ball
let bricks = []

function setup() {
    createCanvas(800, 600)
    let colors = []
    colors.push(color(265, 165, 0))
    colors.push(color(135, 206, 250))
    colors.push(color(147, 112, 219))
    colors.push(color(42, 42, 42))


    paddle = new Paddle
    ball = new Ball(paddle)
    bricks = createBricks(colors)
}

function createBricks(colors) {
    const bricks = []
    const rows = 5
    const brickPerRow = 12
    const brickWidth = width / brickPerRow
    for (let row = 0; row < rows; row++) {
        for (let i = 0; i < brickPerRow; i++) {
            brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, colors[floor(random(0, colors.length))])
            bricks.push(brick)
        }
    }
    return bricks
}


function draw() {
    background(0)



    ball.bounceEdge()

    ball.update()
    ball.bouncePaddle()



    if (keyIsDown(LEFT_ARROW)) {
        paddle.move('left')
    }

    else if (keyIsDown(RIGHT_ARROW)) {
        paddle.move('right')
    }

    paddle.display()
    ball.display()
    /* bricks.forEach(brick => {
        brick.display()
        brick.collide(ball)
    }) */
    for (let i = bricks.length - 1; i >= 0; i--) {
        const brick = bricks[i]
        brick.display()
        if (brick.isCollide(ball)) {
            ball.reverse()
            bricks.splice(i, 1);
            playerScore += brick.points
        }

    }

    textSize(32)
    fill(255)
    text(playerScore, width - 50, 50)
    text('Score:', width - 150, 50)


}