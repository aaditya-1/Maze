var x = 0;
var y = 10;
var s = 20;

var fslash;
var bslash;



function setup() {
createCanvas(windowWidth, windowHeight);  
background(0);
}




function draw() {

  
  //  resizeCanvas(windowWidth, windowHeight);
  // background(0);
    
    
    
    stroke(255);
    strokeWeight(2);
    // x = x + 40;
  if(random(0,1) < 0.5){

  line(x,y, x + s,y + s);

  }else{

 
  line(x,y + s,x + s,y);


  
}
x = x + 20;

if(x > width ){

  x = 0;
  y = y + s;

}






  }

