// =================== INTRO TYPEWRITER ===================

// Soft intro lines
const line1 = "Welcome to the atelier of quiet code.";
const line2 = "Settle in—soft, cozy experiments await.";

// Title lines
const titleLine = "the atelier of quiet code";
const whisperLine = "where Éliane defines her personal logic";

let index = 0;  // shared typing counter

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
  const elMain = document.getElem

