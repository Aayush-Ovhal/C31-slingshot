class Ball{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r);
        World.add(world,this.body);
        this.r = r;

        this.trajectory = [];
    }

    
    display(){
        const pos = this.body.position;
        const angle = this.body.angle;

        push();
        translate(pos.x,pos.y);

        rotate(angle);
        fill("red");
        rectMode(CENTER);
        circle(0,0,this.r);

        pop();

    }

    }
    
