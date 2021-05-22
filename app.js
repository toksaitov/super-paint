class Shape {
    constructor(x, y, logger) {
        this.x = x
        this.y = y
        this.fillColor = 'white'
        this.borderColor = 'black'
        this.lineWidth = 5
    }

    draw(ctx) {
        ctx.fillStyle = this.fillColor
        ctx.strokeStyle = this.borderColor
        ctx.lineWidth = this.lineWidth
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y)
        if (radius < 0) {
            throw new Error("Radius for a circle can't be negative.")
        }
        this.radius = radius
    }

    draw(ctx) {
        super.draw(ctx)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
    }
}

class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y)
        if (width < 0) {
            throw new Error("Width for a rect. can't be negative.")
        }
        if (height < 0) {
            throw new Error("Height for a rect. can't be negative.")
        }
        this.width = width
        this.height = height
    }

    draw(ctx) {
        super.draw(ctx)
        ctx.beginPath()
        ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
        ctx.fill()
        ctx.stroke()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const w = canvas.width  = window.innerWidth
    const h = canvas.height = window.innerHeight
    setup(canvas.getContext('2d'), w, h)
});
