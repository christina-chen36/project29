class Block {
  constructor(x, y, width, height, color) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: false,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    fill(this.color);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
