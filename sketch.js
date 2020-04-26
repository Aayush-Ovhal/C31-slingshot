const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;

var ground1,ground2,boxes,boxesl,ball,sling;

var boxes = [];
var boxes3 = [];
var boxes5 = [];

function setup(){

    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground1 =  new Ground(400,395,800,5);
    ground2 = new Ground(600,300,300,20);
    ground3 = new Ground(800,200,10,800);

    ball = new Ball(125,235,50);
    
    sling = new Sling(ball.body,{x:125,y:235});

    for( let i = 0; i <6; i++){
      // console.log(i);
       boxes[i] = new Boxes(560+i,250,30,30);
    }

    boxes2 = new Boxes(590,240,300,20);
    boxes4 = new Boxes(590,200,300,20);

    for(let a = 0; a < 16; a++){
      boxes3[a] = new Boxes(585+a,200,15,50);
    }

    for(let b = 0; b < 16; b++){
      boxes5[b] = new Boxes(585+b,150,15,15);
    }

}

function draw(){
    background(0); 
    Engine.update(engine);

    ground2.display();
    ground1.display();

    ball.display();
    sling.display();

    for( i = 1;i <6 ; i++){
      boxes[i].display();
    }

    for( a = 0; a < 16; a++){
      boxes3[a].display();
    }
    
    for(let b = 0; b < 16; b++){
      boxes5[b].display();
    }

    boxes2.display();
    boxes4.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
    sling.fly();
  
  }
  
  function keyPressed(){
    if(keyCode === 32){
        sling.attach(ball.body);
    }
  }
