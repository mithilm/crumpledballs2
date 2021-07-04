
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper, ground, leftside,bottom,rightside; 
function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper = new Paper (700,600, 10);
    ground = new Ground (800,680,1600,20);
    leftside = new Dustbin(1300,660, 100, 20);
    bottom = new Dustbin(1240,620,20,100);
    rightside = new Dustbin(1350,620,20,100)
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
 
    
  paper.display();

  ground.display();

  
  rightside.display();
  
  bottom.display();
  
  leftside.display();
  

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 15,y: -15})
    }
  }



