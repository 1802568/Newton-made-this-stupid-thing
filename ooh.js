class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 500
            
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    fly() {
        this.Slingshot.bodyA = null;
      }
    display(){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.Slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}