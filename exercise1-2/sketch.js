let Font1
let Font2
let loadedFont

async function setup () {
Font1 = await loadFont ("assets/Oswald-VariableFont_wght.ttf");
Font2 = await loadFont ("assets/Asimovian-Regular.ttf");
createCanvas(600,600)
loadedFont = Font1
}

function draw() {
    background(0)
    textFont(Font1)
    textFont (Font2)
    stroke (255,17,200)
    strokeWeight (3)
    textSize(25)
    textAlign (CENTER)
    textFont (loadedFont)
    text ("Hello World", 100,100)
}

function keyPressed () {
if (key === 'f' && loadedFont === Font1){
    loadedFont = Font2
} else if (key === 'f' && loadedFont === Font2){
    loadedFont = Font1
}
}