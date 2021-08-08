
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.3,
		friction:0.133,
		density:1.2
	}

	var ground_options = {
		isStatic:true ,
		restitution:0.01
	}
	

	//Create the Bodies Here
	fill("red")
	ball = Bodies.circle(100,100,50,ball_options);
	World.add(world,ball);

	fill("red")
	ground = Bodies.rectangle(0,680,50,1000,ground_options);
	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,50)

  rect(ground.position.x,ground.position.y,5000,50)

  
  
  drawSprites();
 
}



