let x = []
let y = []
let xSpeed = []
let ySpeed = []
let d;
let repulsion;


function setup() {
  createCanvas(600, 600);
  noStroke();
  fill("LightBlue")
  
  for(let i = 0; i<2; i++){
    x[i]=random(width-30);
    y[i]=random(height-30);
    xSpeed[i]=random(-5,5);
    ySpeed[i]=random(-5,5);
  }
  
  repulsion = 0;
  
}

function draw() {
  background(0,100);
  
  for(let i = 0; i < 2; i++){
    circle(x[i],y[i],30);
    x[i] = x[i] + xSpeed[i]
    y[i] = y[i] + ySpeed[i]
    
    
    if(x[i]<0){
      xSpeed[i] = random(2,6);
    }
    if(x[i]>width){
     xSpeed[i] = random(-6,-2);
    }
      if(y[i]<0){
      ySpeed[i] = random(2,6);
    }
    if(y[i]>height){
     ySpeed[i] = random(-6,-2);
    }

  
  }
  
  
    d = dist(x[0],y[0],x[1],y[1]);
    repulsion = 50/(d)

    if(x[0]<x[1]){
      xSpeed[0] = xSpeed[0]+repulsion;
      xSpeed[1] = xSpeed[1]-repulsion;
    }
    if(x[1]<x[0]){
      xSpeed[0]=xSpeed[0]-repulsion;
      xSpeed[1]=xSpeed[1]+repulsion;
    } 
    if(y[0]<y[1]){
      ySpeed[0] = ySpeed[0]+repulsion;
      ySpeed[1] = ySpeed[1]-repulsion;
    }
    if(y[1]<y[0]){
      ySpeed[0]=ySpeed[0]-repulsion;
      ySpeed[1]=ySpeed[1]+repulsion;
    } 
    
}