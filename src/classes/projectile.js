export default class projectile {
    constructor(x, y, radius, velocity, color, angle) {
      this.x = x;
      this.y = y;
      this.angle = angle
      this.dx = Math.cos(this.angle)
      this.dy = Math.sin(this.angle)
      this.radius = radius;
      this.velocity = velocity;
      this.color = color
    }

    draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        c.fillStyle = this.color;
        c.fill();
    }
    
    update() {
      this.x += this.dx*this.velocity;
      this.y += this.dy*this.velocity;
    }
}