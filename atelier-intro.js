// =================== INTRO TYPEWRITER ===================

// Intro lines
const line1 = "Welcome to the atelier of quiet code.";
const line2 = "Settle in—soft, cozy experiments await.";

// Title lines
const titleLine = "the atelier of quiet code";
const whisperLine = "where Éliane defines her personal logic";

let index = 0;

// FIRST: intro line 1
function typeLine1() {
  const el1 = document.getElementById("intro");
  el1.textContent = line1.slice(0, index);
  index++;

  if (index <= line1.length) {
    setTimeout(typeLine1, 80);
  } else {
    index = 0;
    setTimeout(typeLine2, 300);
  }
}

// SECOND: intro line 2
function typeLine2() {
  const el2 = document.getElementById("subintro");
  el2.textContent = line2.slice(0, index);
  index++;

  if (index <= line2.length) {
    setTimeout(typeLine2, 80);
  } else {
    index = 0;
    setTimeout(typeTitleMain, 500);
  }
}

// THIRD: type “the atelier of quiet code”
function typeTitleMain() {
  const elMain = document.getElementById("title-main");
  elMain.textContent = titleLine.slice(0, index);
  index++;

  if (index <= titleLine.length) {
    setTimeout(typeTitleMain, 80);
  } else {
    index = 0;
    setTimeout(typeTitleWhisper, 300);
  }
}

// FOURTH: type “where Éliane defines her personal logic”
function typeTitleWhisper() {
  const elWhisper = document.getElementById("title-whisper");
  elWhisper.textContent = whisperLine.slice(0, index);
  index++;

  if (index <= whisperLine.length) {
    setTimeout(typeTitleWhisper, 80);
  }
}

// Start it all off
typeLine1();


// ===================== MODE SETUP =====================

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const body = document.body;

const softButton = document.getElementById("soft-mode");
const focusButton = document.getElementById("focus-mode");

// ===================== SOFT MODE =====================

softButton.addEventListener("click", function () {
  body.style.backgroundColor = "#ffe9f4";    // blush pink
  body.style.color = "#3a2a35";              // soft plum text
  title.textContent = "Soft Mode: Gentle Glow";
  subtitle.textContent = "the coziest coding safe haven <3";

  // optional: slightly larger body text for comfort
  body.style.fontSize = "1.02rem";
});

// ===================== FOCUS MODE =====================

focusButton.addEventListener("click", function () {
  body.style.backgroundColor = "#2b1833";    // deep plum / night
  body.style.color = "#fde7f5";              // pale pink text
  title.textContent = "Focus Mode: Quiet Concentration";
  subtitle.textContent = "deep focus, warm heart, no rush.";

  // keep font size normal here for crispness
  body.style.fontSize = "1rem";
});
