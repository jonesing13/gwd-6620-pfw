var balls = [];

function setup() {
    createCanvas(720, 560);

    for (var i = 0; i < random(15,25); i++) {
        var b = new Ball(i); // incorporate 'i' so we can keep track of the balls individually (and they don't use their own location to say they've "collided")
        balls.push(b);
    }
}

function draw() {
    background(220);

    // iterate thru array
        for ( var i = 0; i < balls.length; i++) {
            // call collide method
            balls[i].collide();
            // call contain method
            balls[i].contain();
            // call move method
            balls[i].move();
            // call show method
            balls[i].show();
    }
}

class Ball {
    // set appearance for class/ball(s)
    constructor(index) {
        this.index = index;
        this.radius = random(25, 50);
        this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius));
        // set velocity to help 'move' function below
        this.vel = p5.Vector.random2D().mult(2); // random 2D method to create a random vector
    }
    // change color of balls when they're touching another ball
    collide() {
        for (var i = 0; i < balls.length; i++) {
            // store the distance between balls in a variable
            var d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);

            // is dist shorter than the sum of each ball's radius?
                // if yes, change color 
                // AND
                // bounce off
            // TODO: handle items that start touching (since they perpetually go back and forth on velocity and so never move....)
            if (d < this.radius + balls[i].radius && this.index !== i) {
                fill(300,95,55);
                this.vel.x *= -1;
                this.vel.y *= -1;
                // expand radius when elements collide 
                this.radius += 1;
                break // break out of loop whenever collision occurs
            } else {
                // getColor(floor(random(5)));
                // fill(h,s,b);
                fill(0,100,100);
                // decrease radius when element doesn't collide
                this.radius -= 0.1;
            }
        }
    }
    // method to keep balls inside canvas
    contain() {
        if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
            this.vel.x *= -1;
        }
        if (this.pos.y < this.radius || this.pos.y > height - this.radius ) {
            this.vel.y *= -1;
        }
    }
    // method to move balls
    move() {
        this.pos.add(this.vel)
    }
    // method to show ball(s)
    show() {
        noStroke();
        //fill(50); this is in 'collide' method now

        //TODO incorporate the grid of outlines and circles here
            // perhaps a smaller grid/more space around the circle and the outlines will be needed
            // perhaps could do an overlay of squares and some circles inside those original squares that move inside their containers?
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
}

//this isn't working? didn't preLoad file
function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}