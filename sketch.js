 var bgImage ;
 var bobby ;
 var gameState = 0 ;
 var pc;
 var Karl;
 var suzie;
 var value;
 var radio;
 
 function preload(){
 bgImage=loadImage("image/screen.png");

}

function setup () {
createCanvas(800,600)
button = createButton('get ready and go');
button.position(200,400);
button.mousePressed(startGame);
 
}
function startGame(){
  gameState=1;
  button.hide();
  background("white");
  bobby = createSprite (500,400,120,100);
  pc = createSprite (300,400,120,100);
 
  
 



}


function draw () {
  
  if (gameState===0){
   background(bgImage);
  }
  
  if (gameState===1){
    background("green");
    textFont("Arial");
    textSize(20);
    text ("hi i am bobby",500,300);

    button1 = createButton('Choose Karl');
button1.position(300,450);
button1.mousePressed(karlChosen);


button2 = createButton('Choose Susie');
button2.position(450,450);
button2.mousePressed(suzieChosen);
drawSprites();
    /* radio = createRadio();
   radio.option('Karl');
   radio.option('suzie');
   radio.style('width', '60px');
   */
  }
 
  
   
 
 
 
  
  
 
 console.log(gameState)
 
  if (gameState===2){
    background ("white");
    button2.hide();
    bobby.visible=false;

    textFont("Arial");
    textSize(20);
    text ("hi i am karl and i will help you by getting you the cheepest offers but  ",250,300);
    
  }

  if (gameState===3){
    background ("pink");
    button1.hide();
    pc.visible=false;
    textFont("Arial");
    textSize(20);
    text ("hi i am suzie ",500,300);
    
  }

  

  


}

function karlChosen(){
  
    gameState=2;
  
  
   
}

function suzieChosen(){
 
    gameState=3;
  
  
    
}