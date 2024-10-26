<template>
    <div id="main">
        <canvas ref="monCanvas" height="800" width="800" id="gameBoard">
            Désolé, votre navigateur ne prend pas en charge &lt;canvas&gt;.
        </canvas>
    </div>
</template>

<script>

import Machin from './classes/machin'
import Projectile from './classes/projectile'

export default {
    name: "cyrDav",
    data: function ()  {
        return {
            canvas: null,
            time: 0,
            machin: new Machin(0, 0, 10, 100, 'red'),
            projectiles: [],
            color: ["blue", "red", "green", "yellow", "pink", "orange"],
            width: 0,
            c: "",
        }
    },
    methods:{
        animate(){
            requestAnimationFrame(this.animate)
            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.machin.draw(this.c)
            this.time += 1

            if (this.time == 2) {
                this.time = 0
                
                const projectile = new Projectile(this.machin.x, this.machin.y, 5, 2, "red")
                this.projectiles.push(projectile)

                if (this.projectiles.length == 200) this.projectiles.shift()
            }

            this.projectiles.forEach(projectile => {
                projectile.update()
                projectile.draw(this.c)
            })
        },
        main(){
            this.canvas = this.$refs.monCanvas;
            this.c = this.canvas.getContext('2d')
            
            this.canvas.height = document.getElementById("main").clientHeight
            this.canvas.width = document.getElementById("main").clientHeight

            this.machin.x =  this.canvas.width / 2
            this.machin.y = this.canvas.height / 2

            this.animate()
        }
    },
    mounted() {
        this.main()
    }
}
</script>

<style>

body{
    margin: 0;
}

html, body, #app{
    height: 100%;
    width: 100%;
}

#main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#gameBoard {
    align-self: center;
    background-color: black;
}
</style>