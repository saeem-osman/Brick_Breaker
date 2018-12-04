class Ball {
    constructor(paddle) {
        this.radius = 15
        this.size = this.radius * 2;
        this.location = createVector(paddle.location.x + (paddle.width / 2), (paddle.location.y - this.radius - 5))
        this.color = color(128, 0, 128)
        this.velocity = createVector(5, -5)
        this.paddle = paddle
    }
    bouncePaddle() {
        //we are within the width of the paddle 
        if (this.location.x + this.radius >= this.paddle.location.x &&
            this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {

            if (this.location.y + this.radius > this.paddle.location.y) {
                this.reverse('y');
                this.location.y = this.paddle.location.y - this.radius - 1;
                //playerScore++;
            }

        }


    }
    bounceEdge() {
        //check right edge
        if (this.location.x + this.radius >= width) {
            this.reverse('x')
        }
        else if (this.location.x - this.radius <= 0) { // check left edge
            this.reverse('x');
        } else if (this.location.y - this.radius <= 0) { //check the top
            this.reverse('y');
        }

    }


    display() {
        fill(this.color)
        ellipse(this.location.x, this.location.y, this.size, this.size);
    }

    //update method
    update() {
        this.location.add(this.velocity)
    }

    reverse(coord) {
        this.velocity[coord] *= -1
    }

} 