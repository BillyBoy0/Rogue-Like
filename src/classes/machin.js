export default class machin {
    constructor(x, y, radius, hp, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.hp = hp;
      this.color = color
    }

    draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        c.fillStyle = this.color;
        c.fill();
    }
}