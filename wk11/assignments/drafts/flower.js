function setup() {
    createCanvas(windowWidth, windowHeight);
    background("lightblue");
    angleMode(DEGREES);
    step = 30;
}

function draw() {
    push();
    translate(width*0.5,height*0.5);
    
    fill("lightyellow");
    for(i=0;i<360;i+=step){
        rotate(step);
        beginShape();
        curveVertex(0,0);
        curveVertex(0,0);
        // should make these amts variables
        curveVertex(width*0.17,-height*0.05);
        curveVertex(width*0.33,-height*0.05);
        curveVertex(width*0.45,0);
        curveVertex(width*0.33,height*0.05);
        curveVertex(width*0.17,height*0.05);
        curveVertex(0,0);
        curveVertex(0,0);
        endShape();
      
    }
    fill(40);
    stroke("brown");
    circle(0,0,50);
    pop();
}