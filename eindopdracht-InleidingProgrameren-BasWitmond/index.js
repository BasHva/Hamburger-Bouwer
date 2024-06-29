console.log("hamburger");

// Constanten voor het selecteren van HTML-elementen
const kaasElement = document.querySelector(".kaas-btn");
const rundElement = document.querySelector(".rund-btn");
const ketchupElement = document.querySelector(".ketchup-btn");
const broodjeElement = document.getElementById("broodje");

// Variabele houd huidige toppings bij
let toppings = {
  kaas: false,
  rund: false,
  ketchup: false,
};

// Functie om afbeelding broodje aan te passen basis van huidige toppings
function updateHamburgerImage() {
  let imageName = "hamburgerleeg.png";

  if (toppings.kaas && toppings.rund && toppings.ketchup) {
    imageName = "alletoppings.png";
  } else if (toppings.kaas && toppings.rund) {
    imageName = "kaasrund.png";
  } else if (toppings.kaas && toppings.ketchup) {
    imageName = "kaasketchup.png";
  } else if (toppings.rund && toppings.ketchup) {
    imageName = "rundketchup.png";
  } else if (toppings.kaas) {
    imageName = "kaas.png";
  } else if (toppings.rund) {
    imageName = "rund.png";
  } else if (toppings.ketchup) {
    imageName = "ketchup.png";
  }

  broodjeElement.src = "images/" + imageName;
}

// Event listener voor klikken op de buttons
kaasElement.addEventListener("click", function () {
  toppings.kaas = !toppings.kaas; // Toggle de kaas topping
  updateHamburgerImage(); // Update afbeelding van broodje
});

rundElement.addEventListener("click", function () {
  toppings.rund = !toppings.rund;
  updateHamburgerImage();
});

ketchupElement.addEventListener("click", function () {
  toppings.ketchup = !toppings.ketchup;
  updateHamburgerImage();
});

// Functie om audio af te spelen
function playAudio() {
  let audioElement = new Audio("mp3/jazzmuziek.mp3");
  audioElement.play();
}

document.getElementById("playButton").addEventListener("click", playAudio);

//BRONVERMELDING:
// https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.
// https://www.figma.com/community/file/1190436932512042976
// https://pixabay.com/sound-effects/search/jazz/
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals / https://www.javascripttutorial.net/javascript-if-else/
