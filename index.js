console.log("hamburger");

// Constanten voor het selecteren van HTML-elementen
const kaasElement = document.querySelector(".kaas-btn");
const tomaatElement = document.querySelector(".tomaat-btn");
const slaElement = document.querySelector(".sla-btn");
const augurkElement = document.querySelector(".augurk-btn");
const broodjeElement = document.querySelector(".hamburger-image");
const rundElement = document.querySelector(".rund-btn");
const ketchupElement = document.querySelector(".ketchup-btn");
const toppings = ["sla", "tomaat", "kaas", "augurk", "rund", "ketchup"];

// Variabele om de status van de burger bij te houden
let burgerStatus = 0;

// Functies om afbeelding van burger te veranderen bij toevoeging van andere toppings
function veranderAfbeeldingKaas() {
  if (burgerStatus === 0) {
    broodjeElement.src = "images/kaas.png";
    burgerStatus = 1;
  } else {
    broodjeElement.src = "images/hamburgerleeg.png";
    burgerStatus = 0;
  }
}

function veranderAfbeeldingTomaat() {
  if (burgerStatus === 1) {
    broodjeElement.src = "images/tomaatkaas.png";
    burgerStatus = 2;
  } else {
    broodjeElement.src = "images/kaas.png";
    burgerStatus = 1;
  }
}

function veranderAfbeeldingSla() {
  if (burgerStatus === 2) {
    broodjeElement.src = "images/kaastomaatsla.png";
    burgerStatus = 3;
  } else {
    broodjeElement.src = "images/tomaatkaas.png";
    burgerStatus = 2;
  }
}

function veranderAfbeeldingAugurk() {
  if (burgerStatus === 3) {
    broodjeElement.src = "images/alletoppings.png";
    burgerStatus = 4;
  } else {
    broodjeElement.src = "images/kaastomaatsla.png";
    burgerStatus = 3;
  }
}

function veranderAfbeeldingRund() {
  if (burgerStatus === 4) {
    broodjeElement.src = "images/alletoppings.png";
    burgerStatus = 5;
  } else {
    broodjeElement.src = "images/alletoppingsenrund.png";
    burgerStatus = 4;
  }
}

function veranderAfbeeldingKetchup() {
  if (burgerStatus === 5) {
    broodjeElement.src = "images/alletoppingsenrund.png";
    burgerStatus = 6;
  } else {
    broodjeElement.src = "images/metketchup.png";
    burgerStatus = 5;
  }
}

// Functie om audio af te spelen
function playAudio() {
  let audioElement = new Audio("mp3/jazzmuziek.mp3");
  audioElement.play();
}

// https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio|
// https://stackoverflow.com/questions/9419263/how-to-play-audio
// https://pixabay.com/sound-effects/search/jazz/

// Event Listeners voor het klikken op knoppen
kaasElement.addEventListener("click", veranderAfbeeldingKaas);
tomaatElement.addEventListener("click", veranderAfbeeldingTomaat);
slaElement.addEventListener("click", veranderAfbeeldingSla);
augurkElement.addEventListener("click", veranderAfbeeldingAugurk);
rundElement.addEventListener("click", veranderAfbeeldingRund);
ketchupElement.addEventListener("click", veranderAfbeeldingKetchup);

// Loop door elk element in de toppings array en log het naar de console
toppings.forEach(function (topping) {
  console.log(topping);
});

// Event listener voor het klikken op de afspeelknop
document.getElementById("playButton").addEventListener("click", playAudio);

//BRONVERMELDING:
// https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.
// https://www.figma.com/community/file/1190436932512042976
// https://pixabay.com/sound-effects/search/jazz/
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
