var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

//var particles = [];
var plinkos = [];
var divisions = [];
var scoreArr = []
var particle;

var divisionHeight = 300;
var score = 0;
var chance = 0;
var gameState = "play";

function preload(){
  hitting = loadSound("sounds/hitting2.mp3")
  hitting2 = loadSound("sounds/hitting.mp3")
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 5);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  for (var j = 30; j <= width - 50; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 30; j <= width - 50; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(20);
  //text("Score : "+score,20,30);
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
   
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/


   if(particle!=null)
   {

    if(particle.body.position.y>15 && particle.body.position.y<17){
      hitting2.play()
    }

    if(particle.body.position.y>85 && particle.body.position.y<88){
      hitting2.play()
    }

    if(particle.body.position.y>165 && particle.body.position.y<170){
      hitting2.play()
    }

    if(particle.body.position.y>225 && particle.body.position.y<230){
      hitting2.play()
    }
     particle.display();
   
     if(particle.body.position.y>760)
     {
       if(particle.body.position.x<300)
       {
         score=score+500;
         //particles=null;
         /*if(chance===5)
         {
           gameState="end";
         }*/
       }
      
   
       if(particle.body.position.x>301&&particle.body.position.x<600)
       {
          score=score+100;
         // particles=null;
         /* if(chance===5)
          {
            gameState="end";
          }*/
       }
   
       if(particle.body.position.x>601&&particle.body.position.x<900)
       {
         score=score+200;
        // particles=null;

       }
       particle=null;
       if(chance===5)
       {
         gameState="end";
       }
     }



    // isTouching(particle,plinkos);
   }

   if(gameState === "end"){
     push()
     textSize(30)
    text("        Game Over \nPress space to Restart",260,300)
    pop()
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    fill("yellow");
  }

  push();
fill("orange")
  text("500", 23, 530);
  text("500", 103, 530);
  text("500", 183, 530);
  text("500", 263, 530);
  text("100", 343, 530);
  text("100", 423, 530);
  text("100", 503, 530);
  text("200", 583, 530);
  text("200", 663, 530);
  text("200", 743, 530);
  pop();
  push();
  textSize(30);
  text("Score : " + score, 20, 30);
  pop();
  //  particle.display()


}


function mousePressed() {
  if (gameState==="play") {
    particle = new Particle(mouseX, 10, 10, 10);
    chance = chance+1;
    //if(particle!=null)
    //hitting.play();
  }
}

function keyPressed(){
  if(keyCode === 32 && gameState === "end"){
    chance = 0;
    score=0;
    gameState = "play"
   
  }

}