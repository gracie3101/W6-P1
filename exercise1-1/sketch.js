const phrase ="Lorem ipsum dolor sit amet"

function setup () {
    createCanvas (600,600)
}

function draw () {
    background (0,0,255)
    rectMode(CORNER)
    fill (255)
    textAlign(RIGHT, BOTTOM)
    textSize(65)
    text (phrase,280,-10,300,600)
}