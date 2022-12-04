// "use strict";
console.log("hello game devs");

const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
// console.log(score);
// console.log(startScreen);
// console.log(gameArea);
let player = { speed: 4 };
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

startScreen.addEventListener("click", Start);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
function keyDown(e) {
  e.preventDefault();
  keys[e.key] = true; // pressed key  value true
  // console.log("key down",e.key);
  console.log(keys);
}
function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false; // after pressed key  value false
  // console.log("key up",e.key);
  console.log(keys);
}
// move lines
function moveLines(){
    let lines = document.querySelectorAll('.lines')
}

function gamePlay() {
  console.log("game is  playing...");
  let car  = document.querySelector('.car')
  let road = gameArea.getBoundingClientRect() ; // get all positions of element
  console.log(road)
  if (player.start) {
      if (keys.ArrowUp && player.y >(road.top + 200) ) {   player.y -= player.speed;}
      if (keys.ArrowDown && player.y<(road.bottom-110)) {player.y += player.speed;}
      if (keys.ArrowLeft && player.x > 4 ) {player.x -= player.speed;}
      if (keys.ArrowRight && player.x <(road.width-50) ) {player.x += player.speed;}
      
      car.style.top = player.y +"px"
      car.style.left = player.x +"px"
    window.requestAnimationFrame(gamePlay);
  }
}
function Start() {
  gameArea.classList.remove("hide"); // remove hide class
  startScreen.classList.add("hide"); // add hide class to startScreen
  player.start = true;
  console.log("game started");
  window.requestAnimationFrame(gamePlay);
  for (x = 0;x<5;x++) {
      let roadLine = document.createElement('div');
      roadLine.setAttribute('class','lines');
      roadLine.style.top = (x*120)+"px";
      gameArea.appendChild(roadLine);
   
    
  }

   
  let car = document.createElement("div");
  car.setAttribute("class", "car");
  //   car.innerText = "hey i am new attribute"
  gameArea.appendChild(car);
  player.x = car.offsetLeft - 10;
  player.y = car.offsetTop - 5;
  console.log("offsetLeft", car.offsetLeft);
  console.log("offsetTop", car.offsetTop);
  console.log("offsetLeft", player.x);
  console.log("offsetTop", player.y);
}
