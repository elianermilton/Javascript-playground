const line1 = "Welcome to my JavaScript Playground.";
const line2 = "Stick around… interesting developments are coming.";
let index = 0;

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

function typeLine2() {
    const el2 = document.getElementById("subintro");
    el2.textContent = line2.slice(0, index);
    index++;

    if (index <= line2.length) {
        setTimeout(typeLine2, 80);
    }
}
typeLine1();
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const body = document.body;

const villainButton = document.getElementById("villain-mode");
const softButton = document.getElementById("soft-mode");
const focusButton = document.getElementById("focus-mode");

villainButton.addEventListener("click", function () {
  body.style.backgroundColor = "#0b0b12";
  body.style.color = "#f2f2f2";
  title.textContent = "Villain Mode: Activated";
  subtitle.textContent = "Precision. Power. No mercy in these code blocks.";
});

softButton.addEventListener("click", function () {
  body.style.backgroundColor = "#fbeffb";
  body.style.color = "#333333";
  title.textContent = "Soft Mode: Enabled";
  subtitle.textContent = "Gentle brain, clean code, plenty of grace for typos.";
});

focusButton.addEventListener("click", function () {
  body.style.backgroundColor = "#0f172a";
  body.style.color = "#e5e7eb";
  title.textContent = "Focus Mode: Locked In";
  subtitle.textContent = "One task. One file. One unstoppable compiler of reality.";
});
