
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1
var ground
var box1,box2,box3


function preload()
{
	
}

function setup() {
	 createCanvas(800, 700);
	
	 
	 

} 	 
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,665,800,10);

	p1= new Paper(50,450,20)


	box1=new Box(450,610,20,100);
	
   

	box2=new Box(350,610,20,100);
   
	
 
	box3=new Box(400,650,100,20);
	

	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
 box1.display();
 box2.display();
 box3.display();
 p1.display();
 ground.display();
  drawSprites();

}



