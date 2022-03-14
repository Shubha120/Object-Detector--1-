image1 = "";

function setup(){
canvas = createCanvas(650,450);
canvas.center();
}

function preload(){
image1 = loadImage("dog_cat.jpg");
} 

function draw(){
image(image1, 0,0,650,450);
fill("red");
text("Dog", 50,80);
noFill();
stroke("red");
rect(30, 60, 450,350);
}