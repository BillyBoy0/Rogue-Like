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
import Enemy from './classes/enemy'

export default {
    name: "cyrDav",
    data: function ()  {
        return {
            canvas: null,
            time: 0,
            machin: new Machin(0, 0, 10, 100, 'red'),
            projectiles: [],
            enemies: [],
            color: ["blue", "red", "green", "yellow", "pink", "orange"],
            width: 0,
            c: "",
        }
    },
    methods:{
        spawnEnnemies(){
            setInterval(() => {
                this.enemies.push(new Enemy(this.machin, "cc", 10, 2, "blue"))
            }, 1000)
        },
        animate(){
            requestAnimationFrame(this.animate)
            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.machin.draw(this.c)
            this.time += 1

            if (this.time == 20) {
                this.time = 0

                let angle
                if (this.enemies.length == 0) angle = 0
                else angle = (this.enemies[0].angle + Math.PI) + ((Math.random() * 0.2) - 0.2)

                const projectile = new Projectile(this.machin.x, this.machin.y, 5, 2, "red", angle)
                this.projectiles.push(projectile)

                if (this.projectiles.length == 200) this.projectiles.shift()
            }

            this.projectiles.forEach(projectile => {
                projectile.update()
                projectile.draw(this.c)
            })

            this.enemies.forEach((enemy, index, object) => {
                enemy.update()
                let text = false
                if (this.time % 60 < 30) text = true
                enemy.draw(this.c, text)
                if ((Math.abs(enemy.x - this.machin.x) < this.machin.radius) && (Math.abs(enemy.y - this.machin.y) < this.machin.radius)){
                    object.splice(index, 1);
                }

                this.projectiles.forEach((proj, indexProj) => {
                    const dist = Math.hypot(proj.x - enemy.x, proj.y - enemy.y)
                    if (dist - enemy.radius - proj.radius < 1) {
                        this.enemies.splice(index, 1)
                        this.projectiles.splice(indexProj, 1)
                    }
                })
            })
        },
        main(){
            this.canvas = this.$refs.monCanvas;
            this.c = this.canvas.getContext('2d')
            
            this.canvas.height = document.getElementById("main").clientHeight
            this.canvas.width = document.getElementById("main").clientHeight

            this.machin.x =  this.canvas.width / 2
            this.machin.y = this.canvas.height / 2

            this.spawnEnnemies()
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
    background-color: #111;
}
</style>