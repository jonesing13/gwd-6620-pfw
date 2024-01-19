function setup() {
    createCanvas(displayWidth, displayHeight);
    background("white");
}

function draw() {
    if (mouseIsPressed) {
      fill("red");
      stroke("black");
    } else {
      noFill();
      noStroke();
    }
    rect(mouseX, mouseY, 90, 120, 3);
}