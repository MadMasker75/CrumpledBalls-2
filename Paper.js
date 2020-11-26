class Paper{
    constructor(x,y,r){
        var options = {
             isStatic:false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body= Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x, paperpos.y); 
        rectMode(CENTER);  
        strokeWeight(0);
        fill("white"); 
        ellipse(0,0,this.r, this.r); 
        pop();
        bspr.x=paperpos.x;
        bspr.y=paperpos.y;
      }
}   