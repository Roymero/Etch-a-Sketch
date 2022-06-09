let color = "rgb(112,112,112)" // Declaring global variables for color and opacity
let opacity = "1"


function createBoard(rows, column) {  // Function that creates the grid
    let griddyDefault = document.querySelector(".griddyDefault");
    let squares = griddyDefault.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    griddyDefault.style.gridTemplateColumns = `repeat(${column},1fr)`;
    griddyDefault.style.gridTemplateRows = `repeat(${rows},1fr)`;

    let totalBlocks = rows * column;

    for (let i = 0; i < totalBlocks; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", squareColor);
        square.style.backgroundColor = "#D8D8D8";
        square.style.opacity = '1';

        griddyDefault.insertAdjacentElement("beforeend", square);
    }

}

function eraseBoard(){

    let griddyDefault = document.querySelector(".griddyDefault");
    let squares = griddyDefault.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "#D8D8D8");

}


function changeColor(colorScheme){ // Function that changes color of squares
    color = colorScheme;
}


function squareColor() {

    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.style.opacity = opacity;

    }
    else {
        this.style.backgroundColor = color;
        this.style.opacity = opacity;
    }
}

const smol = document.getElementById('smol'); // Getting Element ID for my buttons
const med = document.getElementById('med');
const lorge = document.getElementById('lorge');

const classicButton = document.getElementById('classicButton');
const darkButton = document.getElementById('darkButton');
const randomButton = document.getElementById('randomButton');


const eraseButton = document.getElementById('eraseButton');


createBoard(32,44);


smol.addEventListener("click", ()=>{ //Adding Event listeners for my buttons
    createBoard(16,22);
    smol.classList.add('active-button');
    med.classList.remove('active-button');
    lorge.classList.remove('active-button');
    
})


med.addEventListener("click", ()=>{
    createBoard(32,44);
    smol.classList.remove('active-button');
    med.classList.add('active-button');
    lorge.classList.remove('active-button');
})

lorge.addEventListener("click", ()=>{
    createBoard(64,88);
    smol.classList.remove('active-button');
    med.classList.remove('active-button');
    lorge.classList.add('active-button');

})


classicButton.addEventListener("click", ()=>{
    changeColor("rgb(112,112,112)");
    classicButton.classList.add('active-button');
    darkButton.classList.remove('active-button');
    randomButton.classList.remove('active-button');

})

darkButton.addEventListener("click", ()=>{
    changeColor("black");
    classicButton.classList.remove('active-button');
    darkButton.classList.add('active-button');
    randomButton.classList.remove('active-button');
})


randomButton.addEventListener("click", ()=>{
    changeColor('random');
    classicButton.classList.remove('active-button');
    darkButton.classList.remove('active-button');
    randomButton.classList.add('active-button');
})


eraseButton.addEventListener("click", ()=>{
    eraseBoard();
})













