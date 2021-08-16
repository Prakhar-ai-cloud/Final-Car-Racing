var canvas, backgroundImage;
var obstacle , obstacleImage , obstacleGroup;
var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var carSound , slidingSound
var form, player, game;
var bronze_img , silver_img , gold_img
var passedFinish;
var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  obstacleImage = loadImage("images/f1.png")
  carSound = loadSound("sound/car.mp3")
  slidingSound = loadSound("sound/sliding.mp3")
  bronze_img = loadImage("images/bronze.png")
  silver_img = loadImage("images/silver.png")
  gold_img = loadImage("images/gold.png")
}

function setup(){
  canvas = createCanvas(displayWidth -100 , displayHeight - 110);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacleGroup=createGroup();
  xSet = false;
  game = new Game();
  game.getState();
  game.start();

  for(var i = 0 ; i<5 ; i++){
    var w = random(200,950);
    var h = random (-height*4 , height-300);
  obstacle=createSprite(w,h);
  obstacle.addImage(obstacleImage);
  obstacleGroup.add(obstacle);
  }

}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers===0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }

   if(finishedPlayers===4){
     game.update(2);
   }
   
   if (gameState === 2 && finishedPlayers===4) {
    game.displayRanks();
   }}
 
  
