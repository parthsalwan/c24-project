
var ground;
var Wall, Wall2, Wall3;
var Paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
3

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(600, 600, 1200, 20);
    Wall = new wall(755, 580, 200, 20);
	Wall2 = new wall(850, 549, 20, 80);
	Wall3 = new wall(650, 549, 20, 80);
	Paper = new paper(200,200,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 0, 255);

  ground.display();
 
  Wall.display();
  Wall2.display();
  Wall3.display();

  Paper.display()
  
 
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:4,y:-4})

}
}


