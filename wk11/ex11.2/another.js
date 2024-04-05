function draw() {
    createCanvas(windowWidth, windowHeight)
    background(220);
    frameRate(2);
    const instance = 50
    const halfWidth = windowWidth / 2
    const halfHeight = windowHeight / 2
    
    
    for (let i = 0; i < instance; i += instance/5) {
        let x = random(width);
        let y = random(height);
        let size = random(1, 100);
        let r = random(255);
        let g = random(255);
        let b = random(255);
        fill(r, g, b);
        triangle(x, size, x, y + size, x + size, y + size);
        for (let j = 0; j < instance; j += instance) {
            let r1 = random(255);
            let g1 = random(255);
            let b1 = random(255);
            fill(r1,g1,b1);
            ellipse(x-instance, y-instance, random(width), random(height));
            let r2 = random(255);
            let g2 = random(255);
            let b2 = random(255);
            fill(r2,g2,b2);
            rect(x+instance, y+instance, random(width), random(height))
        }
    }   
}






/*function setup () {
    creatCanvas(600, 600)
    background(255);
    const instance = 35;

}

function draw() {
    fill=(0)
    triangle (0, 0, 0, 5 , 5,  0);
    /*
    for( let i = 0; i < windowWidth; i+=instance ) {
        let r = random(255);
        let g = random(255);
        let b = random(255);
        
    }
    */


/*
*/