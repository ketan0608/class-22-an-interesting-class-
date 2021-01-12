var canvas;
var music;
var w1,w2,w3,w4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(780,600);

    //create 4 different surfaces
w4 = createSprite(10,593,250,20);
w4.shapeColor="red";
w3 = createSprite(260,593,250,20);
w3.shapeColor="yellow";
w2 = createSprite(460,593,250,20);
w2.shapeColor="green";
w1 = createSprite (660,593,250,20);
w1.shapeColor="pink";
    //create box sprite and give velocity
box = createSprite(random(20,750),550,20,20);
box.shapeColor="blue";

createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    box.bounceOff(edges);
    box.bounceOff(w4);
    box.bounceOff(w3);
    box.bounceOff(w2);
    box.bounceOff(w1);
    //create edgeSprite
if(w4.isTouching(box)&&box.bounceOff(w4)){
    box.shapeColor="red";
}
if(w3.isTouching(box)&&box.bounceOff(w3)){
    box.shapeColor="yellow";
}
if(w2.isTouching(box)&&box.bounceOff(w2)){
    box.shapeColor="green";
}
if(w1.isTouching(box)&&box.bounceOff(w1)){
    box.shapeColor="pink";
}

    //add condition to check if box touching surface and make it box



    drawSprites();

}