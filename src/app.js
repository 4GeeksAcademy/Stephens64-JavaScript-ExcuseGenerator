import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["My Dog ", "My Crazy Uncle Mike ", "The Gods ", "Some Random Dude "];
let action = ["ate ", "blew up ", "crushed ", "broke "];
let what = ["my homework ", "my phone ", "the car ", "my house"];
let when = [
  "before class ",
  "when I was sleeping and having an amazing dream ",
  "while I was working out ",
  "during second breakfast ",
  "while I was scuba diving "
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(anyArray) {
  let max = anyArray.length;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello from the console!");
  document.body.innerHTML =
    getRandom(who) + getRandom(action) + getRandom(what) + getRandom(when);
};
