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

const softButton = document.getElementById("soft-mode");
const focusButton = document.getElementById("focus-mode");

softButton.addEventListener("click", function () {
  body.style.backgroundColor = "#f7eaff";
  body.style.color = "#303030";
  title.textContent = "Soft Mode: Enabled";
  subtitle.textContent = "the coziest coding safe haven <3";
});

focusButton.addEventListener("click", function () {
  body.style.backgroundColor = "#0f172a";
  body.style.color = "#e2e8f0";
  title.textContent = "Focus Mode: Locked In";
  subtitle.textContent = "One task. Zero drift.";
});
