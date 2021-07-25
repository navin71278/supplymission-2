var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
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
	
   wall1=createSprite(200,600,20,110);
   wall1.shapeColor="magenta";
   wall2=createSprite(400,600,20,110);
   wall2.shapeColor="magenta";
   wall3=createSprite(300,650,200,20);
   wall3.shapeColor="magenta";
   

   

	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="black";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("skyblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}



function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody,false);
  }

  else if(keyCode === RIGHT_ARROW){
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0};
	  Matter.Body.translate(packageBody, translation)
  } 

  else if(keyCode === LEFT_ARROW){
	  helicopterSprite.x=helicopterSprite.x-20;
	  translation={x:-20,y:0};
	  Matter.Body.translate(packageBody,translation)
  }
}



