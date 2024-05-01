var balls = [];

function setup() {
    createCanvas(700, 500);
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
    console.log(balls.length)
    for ( var i = 0; i < balls.length; i++) {
        // call addNew method
        // balls[i].addNew();
        // call collide method
        balls[i].collide();
        // call contain method
        balls[i].contain();
        // // call detect method
        // balls[i].detect(balls);
        // call move method
        balls[i].move();
        // call show method
        balls[i].show();
    }
}

function mousePressed() {
    // what if mousePressed "popped" the bubble
    for ( var i = 0; i < balls.length; i++) {
        // call detect method
        // this needed the mouse data for px and py
        balls[i].detect(mouseX, mouseY, balls);
    }
    
}

function keyPressed() {
    // and space bar?? (or something) added a new one to the array?
    // I'd say we want to create a new instance of the class here and not on the class itself
    if(keyCode === SHIFT) {
        balls.push(new Ball(balls.length + 1))
        console.log(balls)
    }
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

    // change movement & color of balls when they touch
    collide() {
        for (var i = 0; i < balls.length; i++) {
            // store the distance between balls in a variable
            var d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);

            // is dist shorter than the sum of each ball's radius?
                // if yes, the balls are touching & bounce off each other
            if (d < this.radius + balls[i].radius && this.index !== i) {
                //fill(173,73,62);
                var rCol = map(sin(this.radius * 4), -1, 1, 330, 200);
                var gCol = map(sin(this.radius * 0.5 ), -1, 1, 200, 330);
                var bCol = map(cos(this.radius * 2 ), -1, 1, 150, 240 );
        
                //stroke(rCol, gCol, bCol);
                fill(rCol, gCol, bCol);

                this.vel.x *= -1;
                this.vel.y *= -1;
                this.radius -= 0.5;
                break // break out of loop whenever collision occurs
            } else {
                var rCol = map(sin(this.radius * 4 ), -1, 1, 330, 200);
                var gCol = map(sin(this.radius * 0.5 ), -1, 1, 200, 330);
                var bCol = map(cos(this.radius * 2 ), -1, 1, 150, 240);
        
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
    // mousePressed detect if you "hit" a button
    detect(px, py, ballList) {
        var d = dist(px, py, this.pos.x, this.pos.y); 
        // console.log({d})
        // since we're already looping thru the balls in the mousePressed fn and calling detect on each ball, we don't need to run the loop again
        if ( d < this.radius ) {
            ballList.splice(this.index, 1);
            console.log("you hit the ball at position: ", this.index, {d});
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
        for (let r = this.radius; r > 0; --r) {
            ellipse(this.pos.x, this.pos.y, this.radius * 2);
        }
    }
}