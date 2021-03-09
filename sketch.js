const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand, stand2;
var blocks1 = [];
var blocks2 = [];
var block;

var slingshot;
var polygon;

function createBlocks(initX, initY, blocks, size) {
  let rowNumber = 0;
  var i, j;
  var colors = ["yellow", "blue", "pink", "green"];

  for (i = size; i >= 1; i = i - 2) {
    for (j = 0; j < i; j = j + 1) {
      var temp = new Block(
        initX + (j + rowNumber) * 30,
        initY - rowNumber * 40,
        30,
        40,
        colors[rowNumber]
      );
      blocks.push(temp);
    }
    rowNumber++;
  }
}

function setup() {
  createCanvas(1000, 1000);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500, 990, 1000, 20);
  stand = new Ground(400, 600, 300, 20);
  stand2 = new Ground(800, 200, 300, 20);
  block = new Block(300, 300, 20, 20);
  polygon = new Polygon(200, 300, 70, 70);
  slingshot = new SlingShot(polygon.body, { x: 200, y: 300 });
  createBlocks(340, 570, blocks1, 5);
  createBlocks(720, 170, blocks2, 7);
}

function draw() {
  background("grey");
  textSize(30);
  text(
    "Drag the Hexagonal Stone and release it to launch it towards the blocks.",
    0,
    240
  );
  Engine.update(engine);
  ground.display();
  stand.display();
  stand2.display();
  polygon.display();
  slingshot.display();

  for (let i = 0; i < blocks1.length; i++) {
    blocks1[i].display();
  }
  for (let i = 0; i < blocks2.length; i++) {
    blocks2[i].display();
  }
}

function mouseDragged() {
  if (slingshot.sling.bodyA != null)
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}
