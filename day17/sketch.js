function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background (0)
    rectMode(CENTER)
}

function draw(){
    background(0)
    fill(255, 0, 255, 100)
    stroke(map(mouseX, 0, width, 0, 255), 180, 127)
    strokeWeight(3);
    
    push();
    // translate(mouseX - width/2, mouseY - height/2)

   

    // rotateX(map(mouseX, 0, width, 0, TWO_PI))
    // rotateY(map(mouseX, 0, width, 0, TWO_PI))

    rotateX(frameCount / 10)
    rotateY(frameCount / 10)

   scale(map(mouseX, 0, width, 0.1, 2))
   

    box(width/4, height/4, 50)
    pop();



}

function windowResized(){
    resizeCanvas (windowWidth, windowHeight);

    background (0)

    rect(random(width), random(height))

    console.log(width, height)
}
