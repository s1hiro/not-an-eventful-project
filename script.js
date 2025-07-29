let aquaBtn = document.getElementById("aqua");
let tealBtn = document.getElementById("teal");
let pinkBtn = document.getElementById("pink");
let purpleBtn = document.getElementById("purple");
let colorlessBtn = document.getElementById("colorless");
let colorDisplay = document.getElementById("color-display");
let toggleDisplayBtn = document.getElementById("show");

function handleClicked(clickedButton) {
    const computedStyle = getComputedStyle(clickedButton);
    const backgroundColor = computedStyle.getPropertyValue("background-color");
    const buttonText = clickedButton.innerText;

    colorDisplay.style.backgroundColor = backgroundColor;
    colorDisplay.innerText = buttonText;
}

function toggleDivVisibility() {
    if (colorDisplay.style.display === "none") {
        colorDisplay.style.display = "flex"; // Show the div
        toggleDisplayBtn.innerText = "hide"
    } else {
        colorDisplay.style.display = "none"; // Hide the div
        toggleDisplayBtn.innerText = "show"
    }
}

aquaBtn.addEventListener("click", function() { handleClicked(aquaBtn); });
tealBtn.addEventListener("click", function() { handleClicked(tealBtn); });
pinkBtn.addEventListener("click", function() { handleClicked(pinkBtn); });
purpleBtn.addEventListener("click", function() { handleClicked(purpleBtn); });
colorlessBtn.addEventListener("click", function() { handleClicked(colorlessBtn); });
toggleDisplayBtn.addEventListener("click", toggleDivVisibility);