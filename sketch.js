const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var box1,box2,box3,box4,box5,box7,box8,box9, box10,ground,polygon;
function setup() {
  createCanvas(2000,600);
  

  engine = Engine.create();
  world = engine.world;
// level 3
  box1 = new Box (330,235,30,40)
  box2 = new Box (360,235,30,40)
  box3 = new Box (390,235,30,40)
  box4 = new Box (420,235,30,40)
  box5 = new Box (450,235,30,40)

// level 2
box7 = new Box (360,195,30,40)
  box8 = new Box (390,195,30,40)
  box9 = new Box (420,195,30,40)

  // top
  box10 = new Box (390,155,30,40)

  //polygon = new Polygon(50,200,20)


  
  

  ground= new Ground (780,490,300,20)

}

function draw() {
  background("black");  
  Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ground.display();
  //polygon.display()
  

  drawSprites();
}