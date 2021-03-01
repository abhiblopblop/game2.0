var background1,background2, background1Img,background2Img;
var bike,bikeImg;
var edges;
var crashImg,barImg,coneImg,policeImg;
var obstacleGroup
var Gamestate
var Gamecounter
var Level
var peopleGroup
var jetcount = 0;

function preload(){

  background1Img = loadImage("road.png");
  bikeImg = loadImage("bike.png")
  barImg = loadImage("barricade.png");
  crashImg = loadImage("car crash.png");
  coneImg = loadImage("traffic cone.png");
  policeImg = loadImage("police car1.png");
  person1 = loadImage("people1.png");
  person2 = loadImage("people2.png");
  person3 = loadImage("people3.png");
  person4 = loadImage("people4.png");
  person5 = loadImage("people5.png");
  background2Img = loadImage("cloud.png")
  missileImg = loadImage("missile.png")
  helicopterImg = loadImage("helicopter.png")
  planeImg = loadImage("jet (2).png")
  manImg = loadImage("man.gif");

}

function setup() {
  createCanvas(600,800);
  background1 = createSprite(300, 400, 50, 50);
  background1.addImage("road",background1Img);
  background1.scale = 1.85;

  background2 = createSprite(300, 400, 50, 50);
  background2.addImage("clouds",background2Img);
  background2.scale = 4.5
  background2.visible = false
  
  edges= createEdgeSprites();
  obstacleGroup = new Group()
  peopleGroup = new Group()
  missileGroup = new Group()
  jetGroup = new Group()
  
  bike = createSprite(400, 700, 50, 50);
  bike.addImage("bikeImg", bikeImg)
  bike.scale =0.28;
  bike.debug = true
  bike.setCollider("rectangle",0,0,40,250)
  
  helicopter = createSprite(540, 400, 50, 50)
  helicopter.addImage("helicopterImg", helicopterImg)
  helicopter.scale = 0.3
  helicopter.visible = false
  
  man = createSprite(bike.x,bike.y);
  man.addImage("manImg",manImg);
  man.visible = false;

  Gamestate = "play"
  Gamecounter = 0
  Level = 1
  
}

function draw() {
  background(0);  
if(Level === 1){

 level1() ;
 console.log(Gamecounter)

}
if(Level === 1.5){

        level15() ;
        console.log(Gamecounter)
       
       }
       
if(Level === 2){

        level2() ;
        console.log(Gamecounter)
       
}

}




