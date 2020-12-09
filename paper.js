class Paper{
constructor(x,y,r){
    var options={
      isStatic:false,
        restitution:0.2,   
      
       }
      this.r = r
       this.Body = Bodies.circle(x,y,r,options)
       World.add(world,options);
}
display(){
    var pos = this.body.position;
    push()
    fill("red")
    translate(pos.x,pos.y)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop()
}
}