var balls = [];

// load color file
function preload() {
    table = loadTable("assets/neon.csv", "csv", "header");
    //soundFormats('wav');
    //bumper = loadSound("653201__gameboy__bumper-hit.wav");
} 

function setup() {
    createCanvas(720, 560);
    colorMode(HSB,360,100,100);
    angleMode(DEGREES);

    for (var i = 0; i < random(15,25); i++) {
        var b = new Ball(i); // incorporate 'i' so we can keep track of the balls individually (and they don't use their own location to say they've "collided")
        balls.push(b);
    }
}

function draw() {
    background(220, 100, 20);
    //directionalLight(0,0,0, 1, -1, -0.25);
    //crosshatch();

    // iterate thru array
    for ( var i = 0; i < balls.length; i++) {
        // call user interaction method
        balls[i].toss();
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

function mousePressed() {
    // what if mousePressed "popped" the bubble
    // and space bar?? (or something) added a new one to the array?
    fill(255, 255, 255);
    ellipse(mouseX, mouseY, random(10,25));
    //balls.show(new);
    //balls.push(new);
}

class Ball {
    // set appearance for class/ball(s)
    constructor(index) {
        this.index = index;
        this.radius = random(3, 45);
        // TODO: handle items that start touching (since they perpetually go back and forth on velocity and so never move....)
        // can i adjust this.pos to be less random so they never start touching?
        this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius));
        // set velocity to help 'move' function below
        this.vel = p5.Vector.random2D().mult(0.5); // random 2D method to create a random vector
    }
    // user interaction
    toss(px, py) {
        for (var i = 0; i < balls.length; i++) {
            var d = dist(px, py, balls[i].pos.x, balls[i].pos.y);
            if (d < this.radius ) {
                console.log("hit the bubble");
            }
        }
    }
    // change movement & color of balls when they touch
    collide() {
        for (var i = 0; i < balls.length; i++) {
            // store the distance between balls in a variable
            var d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);

            // is dist shorter than the sum of each ball's radius?
                // if yes, the balls are touching & bounce off each other
            if (d < this.radius + balls[i].radius && this.index !== i) {
                //fill(173,73,62);
                var rCol = map(sin(this.radius + frameCount), -1, 1, 360, 100);
                var gCol = map(sin(this.radius + frameCount / 3), -1, 1, 100, 360);
                var bCol = map(cos(this.radius + frameCount / 7), -1, 1, 150, 360);
        
                //stroke(rCol, gCol, bCol);
                fill(rCol, gCol, bCol);

                this.vel.x *= -1;
                this.vel.y *= -1;
                this.radius --;
                break // break out of loop whenever collision occurs
            } else {
                var rCol = map(sin(this.radius + frameCount), -1, 1, 360, 100);
                var gCol = map(sin(this.radius + frameCount / 3), -1, 1, 100, 360);
                var bCol = map(cos(this.radius + frameCount / 7), -1, 1, 150, 360);
        
                //stroke(rCol, gCol, bCol);
                fill(rCol, gCol, bCol);

                this.radius += 0.01;
            }
        }
    }
    // method to keep balls inside canvas
    contain() {
        if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
            this.vel.x *= -1;
            //bumper.play();
        }
        if (this.pos.y < this.radius || this.pos.y > height - this.radius ) {
            this.vel.y *= -1;
            //bumper.play();
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
        let h = random(180, 330); // random hue from aqua/blue/purple/pink ranges
        for (let r = this.radius; r > 0; --r) {
            ellipse(this.pos.x, this.pos.y, this.radius * 2);
        }
    }
}