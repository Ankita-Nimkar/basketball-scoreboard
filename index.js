const homeDisplay = document.querySelector(".display-home");
const homeBtn1 = document.querySelector(".btn-home-1");
const homeBtn2 = document.querySelector(".btn-home-2");
const homeBtn3 = document.querySelector(".btn-home-3");
const guestDisplay = document.querySelector(".display-guest");
const guestBtn1 = document.querySelector(".btn-guest-1");
const guestBtn2 = document.querySelector(".btn-guest-2");
const guestBtn3 = document.querySelector(".btn-guest-3");

let totalHome = 0;
let totalGuest = 0;
function addOneHome() {
  totalHome += 1;
  console.log(totalHome);
  showHomeDisplay();
  winner();
}
function addTwoHome() {
  totalHome += 2;
  console.log(totalHome);
  showHomeDisplay();
  winner();
}
function addThreeHome() {
  totalHome += 3;
  console.log(totalHome);
  showHomeDisplay();
  winner();
}

function addOneGuest() {
  totalGuest += 1;
  console.log(totalGuest);
  showGuestDisplay();
  winner();
}
function addTwoGuest() {
  totalGuest += 2;
  console.log(totalGuest);
  showGuestDisplay();
  winner();
}
function addThreeGuest() {
  totalGuest += 3;
  console.log(totalGuest);
  showGuestDisplay();
  winner();
}

function showHomeDisplay() {
  homeDisplay.textContent = totalHome;
}

function showGuestDisplay() {
  guestDisplay.textContent = totalGuest;
}

function reset() {
  totalGuest = 0;
  totalHome = 0;
  guestDisplay.classList.remove("winner");
  homeDisplay.classList.remove("winner");
  showHomeDisplay();
  showGuestDisplay();
}

function winner() {
  if (totalHome > totalGuest) {
    console.log("hi");
    homeDisplay.classList.add("winner");
    guestDisplay.classList.remove("winner");
  } else if (totalHome < totalGuest) {
    guestDisplay.classList.add("winner");
    homeDisplay.classList.remove("winner");
  } else {
    homeDisplay.classList.remove("winner");
    guestDisplay.classList.remove("winner");
  }
}

// timer
const timerDisplay = document.querySelector(".timer--display");
const fourteneBtn = document.querySelector(".fourteneBtn");
const twentyfourBtn = document.querySelector(".twentyfourBtn");
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
let myVar;
let count;
function twentyfourSec() {
  timerDisplay.textContent = 24;
  count = 25;
}
function fourteneSec() {
  timerDisplay.textContent = 14;
  count = 15;
}

function startTimer() {
  myVar = setInterval(myTimer, 1000);

  function myTimer() {
    if (count > 0) {
      count--;
      timerDisplay.textContent = count;
    } else return;
  }
}
function stop() {
  clearInterval(myVar);
}
