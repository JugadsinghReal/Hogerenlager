console.log("main.js werkt!");

// variables
let a;
let b;
let x;
let y;

// button queryselector
const confirmed = document.querySelector(".whowon");
const higherBtn = document.querySelector(".rollbutton-1");
const lowerBtn = document.querySelector(".rollbutton-2");
const rollingBtn = document.querySelector(".rollbutton-3");
const goBtn = document.querySelector(".rollbutton-4");

// disabled when the games started and before pressing roll dice
higherBtn.disabled = true
lowerBtn.disabled = true
goBtn.disabled = true

// dobbelsteen images
let dobbelsteen1 = document.querySelector('.image1');
let dobbelsteen2 = document.querySelector('.image2');
let dobbelsteen3 = document.querySelector('.image3');
let dobbelsteen4 = document.querySelector('.image4');

// dice hidden before pressing roll dice
dobbelsteen1.style.visibility = "hidden";
dobbelsteen2.style.visibility = "hidden";
dobbelsteen3.style.visibility = "hidden";
dobbelsteen4.style.visibility = "hidden";

const results = document.querySelector(".alabel");

// random generator tussen 1 en 6
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// dobbelstenen functie
function throwDice() {
  const points = getRandomIntInclusive(1, 6);
  return points;
}

//players
let player = "speler";
let computer = "computer";

const plyElement = document.querySelector(".Speler")
const comElement = document.querySelector(".com")

// roll button
rollingBtn.addEventListener('click', function () {
  a = getRandomIntInclusive(1, 6);
  b = getRandomIntInclusive(1, 6);
  x = getRandomIntInclusive(1, 6);
  y = getRandomIntInclusive(1, 6);

  dobbelsteen1.src = 'img/' + a + '.jpg';
  dobbelsteen2.src = 'img/' + b + '.jpg';

  dobbelsteen1.style.visibility = "visible";
  dobbelsteen2.style.visibility = "visible";
  dobbelsteen3.style.visibility = "visible";
  dobbelsteen4.style.visibility = "visible";

  higherBtn.disabled = false
  lowerBtn.disabled = false
  rollingBtn.disabled = true

});

// hoger
higherBtn.addEventListener('click', function () {
  goBtn.disabled = false
  confirmed.innerHTML = "hoger gekozen"
});

// lager
lowerBtn.addEventListener('click', function () {
  goBtn.disabled = false
  confirmed.innerHTML = "lager gekozen"
});

// go button
goBtn.addEventListener('click', function () {
  // a = Math.floor(Math.random() * 6) + 1;
  x = getRandomIntInclusive(1, 6);
  y = getRandomIntInclusive(1, 6);

  dobbelsteen3.src = 'img/' + x + '.jpg';
  dobbelsteen4.src = 'img/' + y + '.jpg';

  goBtn.disabled = true
  rollingBtn.disabled = false
  higherBtn.disabled = true
  lowerBtn.disabled = true
});

//scores and credits
const pcElement = document.querySelector(".p-credits");
const ccElement = document.querySelector(".c-credits");
const psElement = document.querySelector(".p-scores");
const csElement = document.querySelector(".c-scores");
let pScore = 0;
let pCredits = 5;
let cScore = 0;
let cCredits = 5;


goBtn.addEventListener('click', function () {
  // a = Math.floor(Math.random() * 6) + 1;

  x = getRandomIntInclusive(1, 6);
  y = getRandomIntInclusive(1, 6);

  dobbelsteen3.src = 'img/' + x + '.jpg';
  dobbelsteen4.src = 'img/' + y + '.jpg';

  goBtn.disabled = true
  rollingBtn.disabled = false
  higherBtn.disabled = true
  lowerBtn.disabled = true

  //lets voor de score
  let playerscore = a + b
  let comscore = x + y

  //runGame
  if (confirmed.innerHTML == "hoger gekozen") {
    if (playerscore > comscore) {
      alert("Je hebt gewonnen!");
      pScore++
      cCredits--
      pcElement.textContent = pCredits
      psElement.textContent = pScore
      ccElement.textContent = cCredits
      csElement.textContent = cScore
    }
    else if (playerscore < comscore) {
      alert("Je hebt verloren!");
      pCredits--
      cScore++
      pcElement.textContent = pCredits
      psElement.textContent = pScore
      ccElement.textContent = cCredits
      csElement.textContent = cScore
    } else {
      alert("Niemand heeft gewonnen");
    }
  }

  if (confirmed.innerHTML == "lager gekozen")
    if (playerscore < comscore) {
      alert("Je hebt gewonnen!");
      pScore++
      cCredits--
      pcElement.textContent = pCredits
      psElement.textContent = pScore
      ccElement.textContent = cCredits
      csElement.textContent = cScore
    }
    else if (playerscore > comscore) {
      alert("Je hebt verloren!")
      pCredits--
      cScore++
      pcElement.textContent = pCredits
      psElement.textContent = pScore
      ccElement.textContent = cCredits
      csElement.textContent = cScore
    }
    else {
      alert("Niemand heeft gewonnen");
    }
  // decalre whos the winner or loser in the end
  if (pCredits == 0) {
    alert("YOU LOST NOOB")
    higherBtn.disabled = true
    lowerBtn.disabled = true
    goBtn.disabled = true
    rollingBtn.disabled = true
    confirmed.innerHTML = "refresh to restart"
  }
  else if (cCredits == 0) {
    alert("YOU ARE GOOD MAN I GIVE YOU LIKE :Thumbs up:")
    higherBtn.disabled = true
    lowerBtn.disabled = true
    goBtn.disabled = true
    rollingBtn.disabled = true
    confirmed.innerHTML = "refresh to restart"
  }

});

// decalre whos the winner or loser in the end