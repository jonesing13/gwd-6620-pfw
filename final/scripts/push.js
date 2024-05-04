var balls = [];

function preload() {
    soundFormats('wav');

    ballPop = loadSound('./assets/545200__theplax__pop-2.wav');
    ballAdd = loadSound('./assets/523423__andersmmg__bloop.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight - 210);
    colorMode(HSB,360,100,100);
    angleMode(DEGREES);

    for (var i = 0; i < random(15, 25); i++) {
        var b = new Ball(i); // incorporate 'i' so we can keep track of the balls individually (and they don't use their own location to say they've "collided")
        balls.push(b);
    }
}

function draw() {
    background('white');
    //directionalLight(0,0,0, 1, -1, -0.25);
    //crosshatch();

    // iterate thru array
    console.log(balls.length)
    for ( var i = 0; i < balls.length; i++) {
        // call collide method
        balls[i].collide();
        // call contain method
        balls[i].contain();
        // call detect method
        //balls[i].detect();
        // call move method
        balls[i].move();
        // call show method
        balls[i].show();
    }

    // ?? show message when no bubbles left
    if ( balls.length === 0 ) {
        textColor('white');
        text('You\'re not a quitter,\n', 200, 400);
        fill('white');
        var resetButton = createButton('Press shift!', 250, 500);
        resetButton.mousePressed(pageReset);
    }
}

function pageReset() {
    window.location.reload(true);
}

function mousePressed() {
    // what if mousePressed "popped" the bubble
    for ( var i = 0; i < balls.length; i++) {
        // call detect method w/ mouse data for px and py
        balls[i].detect(mouseX, mouseY, balls);
    }
}

function keyPressed() {
    // add a new ball to the array by creating a new instance of the class here (rather than a fn in the class itself)
    if(keyCode === SHIFT) {
        balls.push(new Ball(balls.length));
        ballAdd.play();
        console.log(balls);
    }
}

class Ball {
    // set appearance for class/ball(s)
    constructor(index) {
        this.index = index;
        this.radius = random(5, 75);
        this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius));
        // set velocity to help 'move' function below
        this.vel = p5.Vector.random2D().mult(0.5); // random 2D method to create a random vector
    }

    // change movement, color, & size of balls when they touch
    collide() {
        for (var i = 0; i < balls.length; i++) {
            // store the distance between balls in a variable
            var d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);

            // is dist shorter than the sum of each ball's radius?
                // if yes, the balls are touching & bounce off each other
            if (d < this.radius + balls[i].radius && this.index !== i) {
                //fill(173,73,62);
                var rCol = map(sin(this.radius * 4), -1, 1, 300, 30);
                var gCol = map(sin(this.radius * 0.5 ), -1, 1, 30, 250);
                var bCol = map(cos(this.radius * 2 ), -1, 1, 50, 200 );
                //stroke(rCol, gCol, bCol);
                fill(rCol, gCol, bCol);

                // change direction after collision
                this.vel.x *= -1;
                this.vel.y *= -1;
                // shrink radius when balls touch
                this.radius -= 0.5;
                break // break out of loop whenever collision occurs
            } else {
                var rCol = map(sin(this.radius * 4 ), -1, 1, 300, 30);
                var gCol = map(sin(this.radius * 0.5 ), -1, 1, 30, 250);
                var bCol = map(cos(this.radius * 2 ), -1, 1, 50, 200);
                //stroke(rCol, gCol, bCol);
                fill(rCol, gCol, bCol);

                // grow radius when ball is not touching
                this.radius += 0.01;
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
    // mousePressed detect if you "hit" a button
    detect(px, py, ballList) {
        var d = dist(px, py, this.pos.x, this.pos.y); 
        // console.log({d})
        // since we're already looping thru the balls in the mousePressed fn and calling detect on each ball, we don't need to run the loop again
        if ( d < this.radius ) {
            // remove single item from the array
            ballList.splice(this.index, 1);
            ballList.forEach((ball, i) => {
                ball.index = i;
            })
            ballPop.play();
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