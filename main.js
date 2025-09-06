//Counter Program
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;


increaseBtn.onclick = function (){
  count ++;
  countLabel.textContent = count;
}
resetBtn.onclick = function (){
  count = 0;
  countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
  count --;
  countLabel.textContent = count;
}


//CLOCK 
function updateClock(){
  
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
} 

updateClock();
setInterval(updateClock, 1000);


//calculator 

const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}
function clearDisplay(){
  display.value ="";
}
function calculate(){
  display.value = message =("imissyou");  
}
function eraseOne(){
  display.value = display.value.slice(0, -1);
}