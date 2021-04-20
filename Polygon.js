class Polygon{
    constructor(x, y,r) {
        this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(x, y, this.r-20);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
      }
}