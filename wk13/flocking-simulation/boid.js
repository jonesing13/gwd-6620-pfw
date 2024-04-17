class Boid {
    //create position, velocity, acceleration
    constructor() {
        //2d
        this.position = createVector(width/2, height/2);
        this.velocity = p5.Vector.random2D(); // get random velocity vector
        this.acceleration = createVector();
    }

    //make the boid move
    update() {
        //position updated based on object/boid's velocity
        this.position.add(this.velocity);
        //velocity updated based on object/boid's acceleration
        this.velocity.add(this.acceleration);
    }

    //draw a point based on the pos, vel, acc created
    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}
