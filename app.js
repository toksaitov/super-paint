class Shape {
    constructor(x, y, logger) {
        this._x = x
        this._y = y
        this._fillColor = 'white'
        this._borderColor = 'black'
        this._lineWidth = 5
    }

    draw(ctx) {
        ctx.fillStyle   = this._fillColor
        ctx.strokeStyle = this._borderColor
        ctx.lineWidth   = this._lineWidth
    }

    set fillColor(value) {
        this._fillColor = value
    }

    set borderColor(value) {
        this._borderColor = value
    }

    set lineWidth(value) {
        this._lineWidth = value
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y)
        if (radius < 0) {
            throw new Error("Radius for a circle can't be negative.")
        }
        this._radius = radius
    }

    draw(ctx) {
        super.draw(ctx)
        ctx.beginPath()
        ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI)
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
        this._width = width
        this._height = height
    }

    draw(ctx) {
        super.draw(ctx)
        ctx.beginPath()
        ctx.rect(this._x - this._width / 2, this._y - this._height / 2, this._width, this._height)
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
