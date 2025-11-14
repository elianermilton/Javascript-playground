const text = "Welcome to my first JavaScript Playground.";
let index = 0;

function typeIntro() {
    const introElement = document.getElementById("intro");
    introElement.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeIntro, 80);
    }
}

typeIntro();