var canvas;
var music;
var box,base1,base2,base3,base4

function preload(){
    music = loadSound("music.mp3");
    back=loadImage("download.jfif")
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different sur

    //create box sprite and give velocity
box=createSprite(random(20,720),300,50,50)
base1=createSprite(70,550,100,40)
base2=createSprite(200,550,100,40)
base3=createSprite(330,550,100,40)
base4=createSprite(460,550,100,40)
base5=createSprite(590,550,100,40)
base6=createSprite(720,550,100,40)
up1=createSprite(70,50,100,40)
up2=createSprite(200,50,100,40)
up3=createSprite(330,50,100,40)
up4=createSprite(460,50,100,40)
up5=createSprite(590,50,100,40)
up6=createSprite(720,50,100,40)
up=createSprite(400,0,800,2)
down=createSprite(400,600,800,2)
rightd=createSprite(0,300,2,600)
leftd=createSprite(800,300,2,600)


//base2=createSprite(230,500,100,20)
stroke("black")
strokeWeight(10)
box.shapeColor="white"
base1.shapeColor="red"
base2.shapeColor="orange"
base3.shapeColor="yellow"
base4.shapeColor="green"
base5.shapeColor=rgb(17, 225, 231)
base6.shapeColor=rgb(255, 17, 208)
up6.shapeColor="black"
up5.shapeColor=rgb(135, 54, 0)
up4.shapeColor=rgb(163, 180, 180)
up3.shapeColor=rgb(40, 232, 14)
up2.shapeColor=rgb(39, 39, 195)
up1.shapeColor=rgb(165, 105, 189)
up.shapeColor=rgb(235, 245, 251)
down.shapeColor=rgb(235, 245, 251)
leftd.shapeColor=rgb(235, 245, 251)
rightd.shapeColor=rgb(235, 245, 251)

}

function draw() {
    background(rgb(235, 245, 251));
    //create edgeSprite
   // createEdgeSprites(edges);
    createEdgeSprites();
    
if(keyDown("LEFT_ARROW")){
    box.x=box.x-5
}
if(keyDown("RIGHT_ARROW")){
    box.x=box.x+5
}
if(keyDown("UP_ARROW")){
    box.y=box.y-5
}
if(keyDown("DOWN_ARROW")){
    box.y=box.y+5
}

//box.velocityX=10

collide(box,base1)
collide(box,base2)
collide(box,base3)
collide(box,base4)
collide(box,base5)
collide(box,base5)
collide(box,up1)
collide(box,up2)
collide(box,up3)
collide(box,up4)
collide(box,up5)
collide(box,up6)

if(collide(box,base1)||collide(box,base2)){
    music.play();
}
//box.x=mouseX
//box.y=mouseY
console.log(canvas.width-box.x)

    //add condition to check if box touching surface and make it box
    box.collide(up)
    box.collide(down)
    box.collide(leftd)
    box.collide(rightd)
console.log(width-box.x,box.x-width,width-box.width/2,box.width/2)

    drawSprites();
    
}
function collide(ob1,ob2){
    if(ob1.x-ob2.x<=ob1.width/2+ob2.width/2&&ob2.x-ob1.x<=ob1.width/2+ob2.width/2&&
        ob1.y-ob2.y<=ob1.height/2+ob2.height/2&&ob2.y-ob1.y<=ob1.height/2+ob2.height/2){
        ob1.shapeColor=ob2.shapeColor
    }
}