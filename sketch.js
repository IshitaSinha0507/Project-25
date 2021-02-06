
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObject,paperImg;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	paperObject = new paper(200,450,70);
	dustbinObj = new dustbin(1000,650)
	
 
	
	
	
	
    
	
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  Engine.update(engine);

  groundObject.display();
  
  paperObject.display();
  
  dustbinObj.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-140});
	}
}