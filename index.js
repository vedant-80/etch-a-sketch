const canvas = document.querySelector('#game-container');

/*
How to create the canvas grid:

For every row that is created, initialize a <div> with a .row class. This .row class will have a flex display
Within every row, it will have columns with the .item class. Each item will be set to flex: auto



*/

let canvasDimension = 475;
let gridSize = 16;

//creates grid
for(let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    canvas.appendChild(row);
    for (let j = 0; j < gridSize; j++){
        const col = document.createElement('div');
        col.style.height = (canvasDimension/gridSize) + 'px';
        col.classList.add('col');
        row.appendChild(col);
    }
}

const gridElements = document.querySelectorAll('.col');

for (let i = 0; i < gridElements.length; i++){
    let element = gridElements[i];
    element.addEventListener('mouseover', () => markBlack(element));
}


function markBlack(element){
    element.style.backgroundColor = 'black';
}

function randomizeColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    return [red, green, blue];
}