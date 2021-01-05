class Stone{

    constructor(x,y,r)  {
      var options={
       'isStatic':false,
           'density':1.2,
           'restitution':0,
          'friction':1
      }  
      this.x=x
      this.y=y
     this.r=r
     this.image=loadImage("images/stone.png");
     this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
    
     World.add(world,this.body);   
    } 
   
    display() {
    var pos=this.body.position;
     push();
    translate(pos.x,pos.y);
  
   imageMode(CENTER);
    stroke("white");
    strokeWeight(3);
    fill("blue");
    image(this.image,0,0,this.r,this.r);
    pop();
        
    }
   
   }