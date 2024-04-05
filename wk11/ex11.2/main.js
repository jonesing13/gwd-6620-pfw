function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    const x = width / 2;
    const y = height / 2;
    const squareSideDotsCount = 8;
    noStroke();

    // create 'starburst' background
    const squareVertices = [];
    let startAngle = 45;
    for (let i = 0; i < 4; i += 1) {
        squareVertices.push({
            x: 400 * cos(startAngle),
            y: 400 * sin(startAngle),
        });
        startAngle += 360 / 4;
    }

    const square = [];
    for (let i = 0; i < 4; i += 1) {
        for (let j = 0; j < squareSideDotsCount; j += 1) {  
        const x = lerp(
            squareVertices[i].x,
            squareVertices[(i + 1) % squareVertices.length].x,
            j / squareSideDotsCount,
        );
        const y = lerp(
            squareVertices[i].y,
            squareVertices[(i + 1) % squareVertices.length].y,
            j / squareSideDotsCount,
        );
        square.push({ x, y });
        }
    }
    
    push();
    //fill in background 'starburst' pattern
    translate(x, y);
        for (let i = 0; i < square.length; i += 1) {
            push();
            noStroke();
            if (i % 2 === 0) {
                fill(236,244,243);
            } else {
                fill(177,210,211);
            }
        beginShape();
        vertex(square[i].x, square[i].y);
        vertex(0, 0);
        vertex(
            square[(i + 1) % square.length].x,
            square[(i + 1) % square.length].y,
        );
        endShape(CLOSE);
        pop();
    }
    
    // set up a grid inside the 'starburst' for additional patterns
    const innerRectSide = 520;
    const cellCount = 7;
    const grid = [];
    const pointCount = cellCount ** 2;
    const cellSide = innerRectSide / cellCount;
    const startPoint = -(cellSide * (cellCount - 1)) / 2;
    for (let rowIndex = 0; rowIndex < cellCount; rowIndex += 1) {
        for (let colIndex = 0; colIndex < cellCount; colIndex += 1) {
            grid.push({
                x: startPoint + colIndex * cellSide,
                y: startPoint + rowIndex * cellSide,
            });
        }
    }
    
    for (let rowIndex = 0; rowIndex < cellCount; rowIndex += 1) {
        for (let colIndex = 0; colIndex < cellCount; colIndex += 1) {
            const x = grid[rowIndex * cellCount + colIndex].x;
            const y = grid[rowIndex * cellCount + colIndex].y;
            const halfWidth = cellSide / 2;
            // show a different pattern on grid items that are have even column and row
            if (rowIndex % 2 === 1 && colIndex % 2 === 1) {
                push();
                fill(255,126,103); //salmon color
                rect(x, y, cellSide, cellSide)
                pop();
              
                // dark teal rectangle
                push();
                fill(0,106,113);
                rect(x + 3, y + 1, 37, 60);
                pop();
              
                // light teal rectangle
                push();
                fill(104,176,171);
                rect(x, y, 25, 40);
                pop();
              
                // offset lightest teal circle
                push();
                fill(236,244,243);
                ellipse(x + 12, y + 10, 15, 20);
                pop();
            } else { // the other grid item stylings (more used)
                noStroke();

                // show a triangle in the upper right corner of the rest of the grid spaces
                push();
                fill('rgb(215,232,231)');
                triangle(
                    x + halfWidth,
                    y + halfWidth,
                    x + halfWidth,
                    y - halfWidth,
                    x - halfWidth,
                    y - halfWidth,
                );
                pop();

                // show a triangle in the lower left corner of the rest of the grid spaces
                push();
                fill('rgb(0,106,110)');
                triangle(
                    x - halfWidth,
                    y - halfWidth,
                    x - halfWidth,
                    y + halfWidth,
                    x + halfWidth,
                    y + halfWidth,
                );
                pop();
              
                // salmon slightly opaque ellipse
                push();
                fill(255,179,142);
                ellipse(x, y, cellSide, cellSide / 1.5);
                pop();
              
                // med teal circle
                push();
                fill(104,176,171);
                circle(x + 2, y + 3, 17);
                pop();
              
                //small circle overlaying 'ray'
                push();
                fill(236,244,243);
                circle(x, y, 7);
                pop();
              
                // horizontal lightest teal line
                push();
                strokeWeight(2);
                stroke(236,244,243);
                line(x - halfWidth, y, x + halfWidth, y);
                pop();
              
                // vertical lightest teal line
                push();
                strokeWeight(2);
                stroke(236,244,243);
                line(x, y - halfWidth, x, y + halfWidth);
                pop();
                }
            }  
        }
 
    pop();
};
  
const draw = () => {
    console.log('asfdasf')
}


const makeLinearGradient = (
    ctx,
    x1,
    y1,
    x2,
    y2,
    colorStops,
    colors,
    ) => {
        const gradient = ctx.makeLinearGradient(x1, y1, x2, y2);
        colorStops.forEach((stop, i) => gradient.addColorStop(stop, colors[i]));
        ctx.fillStyle = gradient;
    return gradient;
    };
