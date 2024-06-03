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

// Functies om afbeelding van burger te veranderen bij het toevoegen van toppings
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
  if (burgerStatus === 4) {
    broodjeElement.src = "images/alletoppingsenrund.png";
    burgerStatus = 5;
  } else {
    broodjeElement.src = "images/metketchup.png";
    burgerStatus = 4;
  }
}

// Functie om het audiobestand af te spelen
function playAudio() {
  const audio = new Audio("mp3/jazz-loop-7163.mp3"); // Vervang 'geluid.mp3' met het pad naar je audiobestand
  audio.play();
}

// Event Listeners voor het klikken op knoppen
kaasElement.addEventListener("click", veranderAfbeeldingKaas);
tomaatElement.addEventListener("click", veranderAfbeeldingTomaat);
slaElement.addEventListener("click", veranderAfbeeldingSla);
augurkElement.addEventListener("click", veranderAfbeeldingAugurk);
rundElement.addEventListener("click", veranderAfbeeldingRund);
ketchupElement.addEventListener("click", veranderAfbeeldingKetchup);

// Event Listener voor toetsaanslagen om de achtergrondkleur van de pagina te veranderen
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.body.style.backgroundColor = "white";
  } else if (event.key === "Escape") {
    document.body.style.backgroundColor = "black";
  }
});

// Loop door de toppings array en log elk element
toppings.forEach(function (topping) {
  console.log(topping);
});

// Event listener voor het klikken op de knop
document.getElementById("playButton").addEventListener("click", playAudio);

// https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.
// https://www.figma.com/community/file/1190436932512042976
// https://pixabay.com/sound-effects/search/jazz/

// myAudioElement.addEventListener("canplaythrough", (event) => {
//   /* the audio is now playable; play it if permissions allow */
//   myAudioElement.play();
// });
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

// alert("Welkom bij deze pagina!");

// const broodjeElement = document.querySelector("#broodje");

// let broodjeStatus = false;

// function kaasKnop() {
//   if (kaasStatus === true) {
//     broodjeElement.src = "images/frame 21.png";
//     broodjeStatus = false;
//   } else {
//     broodjeElement.src = "images/kaas.png";
//     broodjeStatus = true;
//   }
// }

// broodjeElement.addEventListener("click", kaasKnop); //

// const kaasElement = document.querySelector("#bulb");

// let kaasStatus = false;

// function kaasKnop() {
//   if (kaasStatus === true) {
//     kaasElement.src = "images/tomaatkaas.png";
//     kaasStatus = false;
//   } else {
//     kaasElement.src = "images/kaas.png";
//     kaasStatus = true;
//   }
// }

// kaasElement.addEventListener("click", lichtKnop);

// document.querySelectorAll('.topping-btn').forEach(button => {
// button.addEventListener('click', () => {
// document.querySelector('.hamburger-image').src = '3075977.png'
//  })

// hamburger bakken / grill / toevoegen / hamburger})

// ----
// VRAGEN --> Is het de bedoeling dat je eerst alle functies en dan de rest doet op volgerde zoals hieronder
// const buttonKaas = document.querySelector(".kaas-btn");
// const buttonTomaat = document.querySelector(".tomaat-btn");
// const buttonSla = document.querySelector(".sla-btn");
// const buttonAugurk = document.querySelector(".augurk-btn");
// const hamburgerImage = document.querySelector(".hamburger-image");

// function veranderAfbeeldingKaas() {
//   hamburgerImage.src = "images/kaas.png";
// }
// function veranderAfbeeldingTomaat() {
//   hamburgerImage.src = "images/kaastomaat.png";
// }
// function veranderAfbeeldingSla() {
//   hamburgerImage.src = "images/frame 23.png";
// }
// function veranderAfbeeldingAugurk() {
//   hamburgerImage.src = "images/kaas.png";
// }
