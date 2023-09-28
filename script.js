const container = document.querySelector(".container");
let number = 16;
let gridSquare; 
let cells = 16;
let colorPicked = "black"
let gridCells = true;



if (cells < 2 || cells > 100) {
    alert("You need to enter a value from 2 to 100")
    cells = parseInt(prompt("How many cells?"))
}

let click = false;
container.addEventListener ("click", changeCursor) 

function changeCursor(){
    if(!click) {
        click = true
        
    }
    else if (click) {
        click = false;
    };
}


function createGrid() {
    for (i = 0; i < (cells * cells); i++) {
gridSquare = document.createElement("div");
gridSquare.classList.add("gridsquare");
gridSquare.style.width = 600/cells-2 + "px"
gridSquare.style.height = 600/cells-2 + "px"
container.appendChild(gridSquare);
if (!gridCells) {
    gridSquare.style.border = "0px";
};
gridSquare.addEventListener("mouseover", draw);
gridSquare.addEventListener ("mousedown", (x) => { x.target.style.backgroundColor = colorPicked; })
 
   
   
}
return container.appendChild}
createGrid();

function draw() {
    if (click) {
        this.style.backgroundColor = colorPicked;
    } 
}

//download drawing
const save = document.getElementById("save");
save.addEventListener("click", setDownloadDrawing);

function setDownloadDrawing() {
    window.scrollTo(0, 0);
    
    
        html2canvas(container)
        .then(function(canvas) {
            downloadDrawing(canvas);
    });

}

function downloadDrawing(canvas) {
    const fileName = "mydrawing";
    const link = document.createElement("a");
    link.download = fileName + ".png";
    console.log(canvas);
    canvas.toBlob(function (blob) {
        console.log(blob);
        link.href = URL.createObjectURL(blob);
        link.click();
    });
}





const pink = document.querySelector("#pink");
const purple = document.querySelector("#purple");
const psych = document.querySelector("#psych");
const shades = document.querySelector("#shades");
const buttons = document.querySelectorAll(".colors");



pink.addEventListener("click", () => {
    colorPicked = "pink";
    
    
       
})

purple.addEventListener("click", () => {
    colorPicked = "rgb(203, 116, 253)";
   
       
})

psych.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorPicked = "#" + randomColor;
    
       
})

shades.addEventListener("click", () => {
    colorPicked = "black";
    
})

//clear button
const clear = document.getElementById("clear");
let grids = document.querySelectorAll("gridSquares");

clear.addEventListener("click", clearGrid);

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid()
}


//direction pad
const plusIcon = document.querySelector("#plusicon");
const minusIcon = document.querySelector("#minusicon");
const rubberIcon = document.querySelector("#rubbericon");
const gridIcon = document.querySelector("#gridicon");

plusIcon.addEventListener("click", ()=> {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    if (cells<60) {
    cells = cells * 2;
    createGrid();
    }

    else if(cells>=60) {
        alert("You have reached the maximum amount of grids");
        createGrid();
    }
       
})

minusIcon.addEventListener("click", ()=> {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    if (cells>20) {
        cells = cells / 2;
        createGrid();
    }
    else if (cells>4) {
        cells = cells - 4;
        createGrid();
    }
    else if (cells===4) {
        cells = cells - 2;
        createGrid();
    }

    else {
        alert("you can't make you drawing smaller");
        createGrid();
    }
})

rubberIcon.addEventListener("click", () => {
    colorPicked = "white";
})


gridIcon.addEventListener("click",()  => {
        if (gridCells) {gridCells = false;
        clearGrid(); }
        else if (!gridCells) {
            gridCells = true;
            clearGrid();
        }
    })








