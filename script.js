const container = document.querySelector(".container");
let number = 16;
let gridSquare; document.querySelector(".gridsquare")
let cells = parseInt(prompt("How many cells?"))
createGrid();


if (cells < 2 || cells > 100) {
    alert("You need to enter a value from 2 to 100")
    cells = parseInt(prompt("How many cells?"))
}

function createGrid() {
    for (i = 0; i < (cells * cells); i++) {
gridSquare = document.createElement("div");
gridSquare.classList.add("gridsquare");
gridSquare.style.width = 600/cells-2 + "px"
gridSquare.style.height = 600/cells-2 + "px"
container.appendChild(gridSquare);
gridSquare.addEventListener ("mouseover", (x) => {
     {
    x.target.style.backgroundColor = "black"; 
}
})
}
}

const pink = document.getElementById("pink");
const purple = document.querySelector("#purple");
const psych = document.querySelector("#psych");
const shades = document.querySelector("#shades");
const buttons = document.querySelector(".buttons");



buttons.addEventListener("click", () => {
    if (pink.addEventListener("click")) {
        gridSquare.style.backgroundColor = "pink";
    }
    
})





