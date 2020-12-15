const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  var canvas = createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;
  
  var groundOption={
    isStatic:true
  }

  ground=Bodies.rectangle(200,350,400,50,groundOption);
  World.add(world,ground);

  var ballOption={
      restitution:5.0
  }

  ball=Bodies.circle(200,200,20,ballOption);
  World.add(world,ball);
}

function draw() {
  background("black"); 

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}