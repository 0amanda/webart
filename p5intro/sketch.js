function setup(){
    createCanvas(innerWidth, innerHeight)

    background(200, 100, 0)
    rectMode(CENTER)
}

function draw(){
    //(x1, y1, x2, y2)
    //background(0, 200, 100)

    let red = map(mouseX, 0, width, 0, 255)

    fill(red, 0, 0)
    strokeWeight(1)
    stroke(0, 250, 0)
    rect(mouseX, mouseY, random(0, 50), random(0,50))

    text("hey", mouseX, mouseY)
}

//event listener that listens for when the page is resized
function windowResized() {
    resizeCanvas(innerWidth, innerHeight)
}