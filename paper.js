class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius

        World.add(world, this.body);
        this.image = loadImage("paper.png")
    }
    display(){
        
        ellipseMode(RADIUS);
    
        fill("yellow");

        //circle(this.body.position.x, this.body.position.y, this.radius);
        //image(this.image,0,0,this.radius,this.radius)
           

        var paperpos=this.body.position;
         push()
          translate(paperpos.x, paperpos.y);
           rectMode(CENTER)
            //strokeWeight(4);
             fill(255,0,255)
              imageMode(CENTER); 
             image(this.image, 0,0,this.r, this.r)
              //ellipse(0,0,this.r, this.r); pop()

        

    }       
};