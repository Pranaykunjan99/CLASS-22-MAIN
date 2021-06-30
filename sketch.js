const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var box;
var box1,box2,box3,box4;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;

  var ground_options= {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,10,ground_options);
  World.add(world,ground)
  console.log(ground)
  
  box1=new Box(100,150,50,50)
  box2=new Box(200,200,30,30)
  box3=new Box(50,50,10,10)

}

function draw() {
  background(0); 
  Engine.update(engine) 
  rectMode(CENTER)

  rect ( ground.position.x , ground.position.y ,400,10);

  box1.display()
  box2.display()
  box3.display()
  
  drawSprites();
}