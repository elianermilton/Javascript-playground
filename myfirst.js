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
        // reset index and start typing the second line
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