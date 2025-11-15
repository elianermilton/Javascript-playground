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

