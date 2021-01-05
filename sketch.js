
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree;
var ground;
var stone;
var boy;
var slingShot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var people;
var cloud;

function preload()
{
	boy=loadImage("images/boy.png");
	people=loadImage("images/people.png");
	
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(550,650);
	ground=new Ground(800,660,1600,75);
	stone=new Stone(150,500,75);
	slingShot=new SlingShot(stone.body,{x:100,y:520});
	mango1=new Mango(400,200,75);
	mango2=new Mango(500,250,75);
	mango3=new Mango(650,300,75);
	mango4=new Mango(500,150,75);
	mango5=new Mango(450,300,75);
	mango6=new Mango(600,300,75);
   mango7=new Mango(690,200,75);
   mango8=new Mango(600,200,75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  image(boy,50,445,250,250);
  image(people,1200,420,300,200);
 

  tree.display();
  ground.display();
  stone.display();
  slingShot.display();
  mango1.display();
  mango2.display();
  mango3.display();
 mango4.display();
 mango5.display();
mango6.display();
mango7.display();
mango8.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
  
  drawSprites();
  textSize(50);
  fill("black");
  textStyle("bold");
 text("MANGO HITTING GAME",400,50);
textSize(30);
fill("red");
 text("Press SpaceBar for a second Chance",950,150)
  
 
}
function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
	}
	function mouseReleased() {
	slingShot.fly();
	}
	function detectCollision(lstone,lmango) {
		var mangoBodyPosition=lmango.body.position;
	   var stoneBodyPosition=lstone.body.position;
	   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	
	   if(distance<=lstone.r+lmango.r){
    Matter.Body.setStatic(lmango.body,false);
	}
	}
	function keyPressed() {
   if(keyCode===32) {
	  Matter.Body.setPosition(stone.body,{x:150,y:500}) 
	  slingShot.attach(stone.body);
   } 

	}


