class Boxes{

    constructor(x,y,width,height){
    
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.visiblity = 225;
        World.add(world,this.body);
    
    }
    
    display(){
    
        var pos = this.body.position;
    
       
    
       if(this.body.speed < 7){
        rectMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255));
        rect(pos.x,pos.y,this.width,this.height); 
    } 
    else{
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity - 1;
      tint(225,this.visiblity);
      pop();
    }
    
      }
    
    }