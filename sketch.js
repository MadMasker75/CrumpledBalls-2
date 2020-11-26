const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var recta,rec,rectan;
var bspr,bsprIm;
var dus,dusIm;

function preload()
{
	bsprIm = loadImage("paper.png");
	dusIm = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	recta = createSprite(270, 580, 20, 150, {isStatic:true});
	recta.shapeColor = "white";

	rec = createSprite(470, 580, 20, 150, {isStatic:true});
    rec.shapeColor = "white";

	rectan = createSprite(370,650,140,20, {isStatic:true});
	rectan.shapeColor = "white";

	dus = createSprite(645,580,200,100);
	dus.addImage(dusIm);
	dus.scale = 0.5 ;	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,200,20);
	ground = new Ground(600,670,1200,20);

	leftone = Bodies.rectangle(580, 580, 20, 150, {isStatic:true});
	World.add(world, leftone);

	rightone = Bodies.rectangle(715,580,20,150, {isStatic:true});
	World.add(world, rightone);

	downone = Bodies.rectangle(645,650,140,20, {isStatic:true});
	World.add(world, downone);

	Engine.run(engine);
 
	bspr = createSprite(100,200,30,30,{isStatic:false});
	bspr.addImage(bsprIm);
	bspr.scale = 0.3 ;
	
}

function draw() {
  rectMode(CENTER);
  background("white");

  ball.display();
  ground.display();

  recta.x= leftone.position.x;
  recta.y= leftone.position.y;

  rec.x= rightone.position.x;
  rec.y= rightone.position.y;

  rectan.x= downone.position.x;
  rectan.y= downone.position.y;
  
  drawSprites(); 

    ball.depth = dus.depth;
    dus.depth = dus.depth + 1;	
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});
	   
	 }
   }

   /*What I should do is :-
	   Try to add Paper animation to the Ball
	   */