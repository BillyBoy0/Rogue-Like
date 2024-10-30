export default class enemy {
    constructor(machin, radius, velocity, color) {
      if (Math.random() < 0.5){
        if (Math.random() < 0.5){
          this.x = machin.x * 2;
          this.y = Math.random() * machin.y * 2;
        }
        else {
          this.x = 0;
          this.y = Math.random() * machin.y * 2;  
        }
      } else {
        if (Math.random() < 0.5){
          this.x = Math.random() * machin.x * 2;
          this.y = machin.y * 2;
        }
        else {
          this.x = Math.random() * machin.x * 2;
          this.y = 0;  
        }
      }
      this.angle = Math.atan2(machin.y - this.y, machin.x - this.x)
      this.dx = Math.cos(this.angle)
      this.dy = Math.sin(this.angle)
      this.radius = radius;
      this.velocity = velocity;
      this.color = color
    }

    draw(c, text) {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      c.fillStyle = this.color;
      c.fill();
      c.beginPath();
      c.arc(this.x, this.y, this.radius - 4, 0, Math.PI, false)
      c.strokeStyle = "red";
      c.stroke();
      
      c.beginPath();
      c.arc(this.x-2, this.y-3, 2, 0, Math.PI*2, true);
      c.fillStyle = "red";
      c.fill();
      c.beginPath();
      c.arc(this.x+2, this.y-3, 2, 0, Math.PI*2, true);
      c.fillStyle = "red";
      c.fill();

      c.beginPath();
      c.moveTo(this.x, this.y + this.radius)
      c.lineTo(this.x, this.y + this.radius + 20)
      c.moveTo(this.x, this.y + this.radius + 20)
      c.lineTo(this.x + 10, this.y + this.radius + 30)
      c.moveTo(this.x, this.y + this.radius + 20)
      c.lineTo(this.x - 10, this.y + this.radius + 30)
      c.moveTo(this.x, this.y + this.radius + 10)
      c.lineTo(this.x - 10, this.y + this.radius + 10)
      c.moveTo(this.x, this.y + this.radius + 10)
      c.lineTo(this.x + 10, this.y + this.radius + 10)
      c.strokeStyle = this.color;
      c.stroke()

      if (text){
        c.font = "20px Arial"
        c.fillText("Cc c'est moi monsieur larbin", this.x + 20, this.y)
      }
    }
    
    update() {
      this.x += this.dx * this.velocity;
      this.y += this.dy * this.velocity;
    }
}