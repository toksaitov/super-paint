class Shape {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        this.isSelected = false
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }
}

class Circle extends Shape {
    constructor(x, y, color, radius) {
        super(x, y, color)

        this.radius = radius
    }

    contains(x, y) {
        const dx = x - this.x
        const dy = y - this.y
        return Math.hypot(dx, dy) <= this.radius
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        if (this.isSelected) {
            ctx.strokeStyle = 'white'
            ctx.setLineDash([3])
            ctx.lineWidth = 3
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
            ctx.stroke()
        }
    }

    toSVG() {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`
    }
}

class Rectangle extends Shape {
    constructor(x, y, color, width, height) {
        super(x, y, color)

        this.width = width
        this.halfWidth = width * 0.5
        this.height = height
        this.halfHeight = height * 0.5
    }

    contains(x, y) {
        return x >= this.x - this.halfWidth  && x < this.x + this.halfWidth &&
               y >= this.y - this.halfHeight && y < this.y + this.halfHeight
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.rect(this.x - this.halfWidth, this.y - this.halfHeight, this.width, this.height)
        ctx.fill()
        if (this.isSelected) {
            ctx.strokeStyle = 'white'
            ctx.setLineDash([3])
            ctx.lineWidth = 3
            ctx.beginPath()
            ctx.rect(this.x - this.halfWidth, this.y - this.halfHeight, this.width, this.height)
            ctx.stroke()
        }
    }

    toSVG() {
        return `<rect x="${this.x - this.halfWidth}" y="${this.y - this.halfHeight}" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }
}
