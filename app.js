class Shape {
    constructor(x, y) {
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

    move(dx, dy) {
        this._x += dx
        this._y += dy
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

    contains(x, y) {
        const dx = x - this._x
        const dy = y - this._y
        const length = Math.hypot(dx, dy)
        return length < this._radius
    }

    toSVG() {
        return `<circle cx="${this._x}" cy="${this._y}" r="${this._radius}" fill="${this._fillColor}" stroke="${this._borderColor}" stroke-width="${this._lineWidth}" />`
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

    contains(x, y) {
        const halfWidth = this._width * 0.5
        const halfHeight = this._height * 0.5
        return x >= this._x - halfWidth && x < this._x + halfWidth &&
               y >= this._y - halfHeight && y < this._y + halfHeight
    }

    toSVG() {
        return `<rect x="${this._x}" y="${this._y}" width="${this._width}" height="${this._height}" fill="${this._fillColor}" stroke="${this._borderColor}" stroke-width="${this._lineWidth}" />`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const w = canvas.width  = window.innerWidth
    const h = canvas.height = window.innerHeight
    setup(canvas.getContext('2d'), w, h)
});
