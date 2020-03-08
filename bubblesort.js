var array = [];
var limit = 50, pivot=0
  	i=0, j=5;
const widthofRect = 10;

function setup(){
  createCanvas(512, 256);
  assignRandom();
  frameRate(30);
}
function assignRandom(){
  for(var i=0; i<limit; i++) {
    array[i] = random(1, 200);
  }
}
function sketch(x, y, w, h) {
  //rectMode(CENTER)
  if(x/10==pivot) {
    fill(100, 0, 230);
  }
  else if(x/10 == j) {
    fill(0, 100, 100);
  }
  else {
    fill(255, 255, 255);
  }
  rect(x, y, w, h);
}
function draw() {
  background(0);
  for(var i = 0; i<limit; i++){
    sketch(i*10, height - array[i], widthofRect, array[i] )
  }
  if(pivot<limit-1){
    sortArray();
  }
}
function sortArray() {
  if(j>=limit){
    pivot++;
    j=pivot+1;
  }
  if(array[pivot]>array[j]){
    var temp = array[j];
    array[j] = array[pivot];
    array[pivot] = temp;
  }
  j++;
}