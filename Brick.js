class Brick {
    constructor(location, height, width, color) {

        this.location = location
        this.height = height
        this.width = width

        this.color = color
        this.points = 1
    }

    display() {
        fill(this.color)
        rect(this.location.x, this.location.y, this.height, this.width)
    }

    isCollide(ball) {
        //colide with the brick
        if (ball.location.y - ball.radius <= this.location.y + this.height &&
            ball.location.y + ball.radius >= this.location.y &&
            ball.location.x + ball.radius >= this.location.x &&
            ball.location.x - ball.radius <= this.location.x + this.width) {
            return true

        }
    }
}