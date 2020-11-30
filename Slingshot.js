class SlingShot{
    constructor(bodyA, pointB ){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("red");
            push()
            if(pointA.x > 225){
                stroke("yellow");
                strokeWeight(2);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            else{
                stroke("yellow");
                strokeWeight(4);
                line(pointA.x, pointA.y , pointB.x, pointB.y);
            }
            pop()
        }


    }
    
}