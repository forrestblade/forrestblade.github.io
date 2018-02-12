var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            //grab color
            var clickedColor = this.style.backgroundColor;
            //compare color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try AGAIN!";
            }
        });
    }
}

function setUpModeButtons() {
    // body...
    for (var i = modeButtons.length - 1; i >= 0; i--) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

for (var i = modeButtons.length - 1; i >= 0; i--) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = squares.length - 1; i >= 0; i--) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#4E8975";
};

resetButton.addEventListener("click", function() {
    reset();
});


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = num - 1; i >= 0; i--) {
        arr.push(randomColor());
    }
    return arr;
};

function randomColor() {
    var ranNumber1 = Math.floor(Math.random() * 256);
    var ranNumber2 = Math.floor(Math.random() * 256);
    var ranNumber3 = Math.floor(Math.random() * 256);
    return "rgb(" + ranNumber1 + ", " + ranNumber2 + ", " + ranNumber3 + ")";
}