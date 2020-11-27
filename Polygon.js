class Polygon{
    constructor(x,y,radius){
       
        this.body =  Bodies.circlr(x,y,radius);

    this.width = width;
    this.height = height;
    World.add(world, this.body);

}

display(){
    var pos = this.body.position
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.radius,this.radius)
}

}
