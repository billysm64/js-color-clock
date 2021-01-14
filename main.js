let number = 4579;
let hexStr = number.toString(16);
console.log(hexStr);

const dateToday = new Date();

//Converts single-digit numbers to numbers with 0 at the beginning, converts all numbers regardless of that to strings. Conversion back to numbers will happen later.
function addZeros(unit) {
  if (unit.toString().length < 2) {
    return "0" + unit.toString();
  } else {
    return unit.toString();
  };
};

//initial time

// let currentTime = addZeros(new Date().getHours()) + ":" + addZeros(new Date().getMinutes()) + ":" + addZeros(new Date().getSeconds());
// console.log(currentTime)
// let clockDisplay = document.querySelector(".clock-display");
// console.log(clockDisplay.textContent)
// clockDisplay.textContent = currentTime;

//converts to hexadecimal
function toHex(unit) {
  return addZeros(Number(unit).toString(16))
}

function whenMouseOver(a, b, c) {
  document.querySelector(".clock-display").textContent = "" + toHex(a) + ":" + toHex(b) + ":" + toHex(c);
}

setInterval(function(){
  //updates the time constantly here
  let hours = addZeros(new Date().getHours());
  let minutes = addZeros(new Date().getMinutes());
  let seconds = addZeros(new Date().getSeconds()); //new Date has to be set every time because if we don't, the date will not change. Using it outside the function in another function, and calling that function, will still make it remain stagnant.
  let currentTime = hours + ":" + minutes + ":" + seconds;
  let clockDisplay = document.querySelector(".clock-display");
  clockDisplay.textContent = currentTime;
  console.log(currentTime);
  let secondsPercent = (seconds / 60) * 100;
  let barPercent = (secondsPercent * 14) / 100; //See math below this function for shown work; will show the percentage of 14 based on the percentage of 60
  document.querySelector(".clock-progress-bar").style.width=`${barPercent}rem`;; //change width of progress bar
  console.log(`Hours: ${toHex(hours)}`);
  console.log(`Minutes: ${toHex(minutes)}`);
  console.log(`Seconds: ${toHex(seconds)}`);
  //create hexadecimal value
  let hexString = "#" + toHex(hours) + toHex(minutes) + toHex(seconds);
  document.querySelector(".clock").style.background = hexString;
  console.log(hexString);
  // document.querySelector(".clock-display").addEventListener("onmouseenter", whenMouseOver(hours, minutes, seconds)); // Will not work, for some reason displays hex value at clock all the time...
}, 1000);

/*
30 / 60 * 100 = 50% of 60
x / 14 * 100 = 50% of 14



30/60 = x/14
(((seconds*14)/60) = 7) / 14) * 100
420/60

50/100 = x/14
(50*14)/100

*/



//
// window.setInterval(displayTime());
