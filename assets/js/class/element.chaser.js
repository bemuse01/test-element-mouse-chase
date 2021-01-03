CLASS.Element.Chaser = class Chaser{
    constructor(style){
        this.style = style

        this.ix = 0
        this.iy = 0

        this.vx = 0
        this.vy = 0

        this.friction = 0.15
    }

    onMouseMove(e, util){
        const {clientX, clientY} = e 
        // this.ix = clientX / util.width
        // this.iy = clientY / util.height
        this.ix = clientX
        this.iy = clientY
        // this.style.transform = `translate(${clientX}px, ${clientY}px)`
        // console.log(this.ix, this.iy)
    }

    onAnimationFrame(util){
        // const mx = this.ix * util.width 
        // const my = this.iy * util.height
        const mx = this.ix
        const my = this.iy
        
        this.vx += (mx - this.vx) * this.friction
        this.vy += (my - this.vy) * this.friction

        // console.log(this.vx, this.vy)

        this.style.transform = `translate(${this.vx}px, ${this.vy}px)`
    }
}