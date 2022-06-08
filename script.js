
function createBoard(rows, column) {
    let griddyDefault = document.querySelector(".griddyDefault");
    let squares = griddyDefault.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    griddyDefault.style.gridTemplateColumns = `repeat(${column},1fr)`;
    griddyDefault.style.gridTemplateRows = `repeat(${rows},1fr)`;

    let totalBlocks = rows * column;

    for (let i = 0; i < totalBlocks; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", ()=> {
            square.style.backgroundColor = "rgb(112,112,112)"; 
            square.style.opacity = "1";
        });

        square.style.backgroundColor = "#D8D8D8";
        square.style.opacity = '1';

        griddyDefault.insertAdjacentElement("beforeend", square);
    }

}

const smol = document.getElementById('smol');
const med = document.getElementById('med');
const lorge = document.getElementById('lorge');


createBoard(32,44);


smol.addEventListener("click", ()=>{
    createBoard(16,22);
})


med.addEventListener("click", ()=>{
    createBoard(32,44);
})

lorge.addEventListener("click", ()=>{
    createBoard(64,88);
})
















