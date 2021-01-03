new Vue({
    el: '#wrap',
    data(){
        return{
            object: {
                element: {}
            },
            style: {
                chaser: {transform: 'translate(0, 0)'}
            },
            util: {
                width: innerWidth,
                height: innerHeight
            }
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        // init
        init(){
            this.createElement()

            window.addEventListener('mousemove', this.onMouseMove, false)
            window.addEventListener('resize', this.onWindowResize, false)

            this.animate()
        },


        // element
        createElement(){
            this.createChaser()
        },


        // chaser
        createChaser(){
            // this.object.element.chaser = new CLASS.Element.Chaser(this.util)
            // const chaser = document.querySelector('#chaser')
            OBJECT.Element.Chaser = new CLASS.Element.Chaser(this.style.chaser)
        },


        // event
        onWindowResize(){
            this.util.width = window.innerWidth
            this.util.height = window.innerHeight
        },
        onMouseMove(e){
            OBJECT.Element.Chaser.onMouseMove(e, this.util)
        },


        // render
        render(){
            OBJECT.Element.Chaser.onAnimationFrame(this.util)
        },
        animate(){
            this.render()
            requestAnimationFrame(this.animate)
        }
    }
})