
  
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var botRect, LSRect, RSRect;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	botSprite=createSprite(350, height-60, 200,30);
	botSprite.shapeColor=color(255,0,0)
	LSRect=createSprite(250,height-95,20,100);
	LSRect.shapeColor=color(255,0,0)
	RSRect=createSprite(450,height-95,20,100);
	RSRect.shapeColor=color(255,0,0)
    
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//boxBody= Bodies.circle(width/2,400,5,{restitution:0,isStaic:true})
	//World.add(world,boxBody)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, height-600 , {isStatic:true} );
	World.add(world, ground);
	 
	// create a bottom  rectangle
	//botRect = Bodies.rectangle(width/4, 150, width, 50 , {isStatic:true} );
	//World.add(world, botRect);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);  
  }
}






