var tomImage,jerryImage;
var backgroundimg;
var catImage1,catImage2,catImage3 ;
var mouses1,mouses2,mouses3 ;

function preload() {
    //load the images here
    backgroundimg=loadImage("images/garden.png")
    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=LoadAnimation("images/cat4.png");
    mouses1=loadAnimation("images/cat1.png");
    mouses2=loadAnimation("images/ mouses2.png","images/MOUSES3.png");
    mouses3=LoadAnimation("images/ mouses4.png");

    S
    
    
    



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(backgroundimg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
