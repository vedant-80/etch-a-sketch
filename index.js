const canvas = document.querySelector('#game-container');

/*
How to create the canvas grid:

For every row that is created, initialize a <div> with a .row class. This .row class will have a flex display
Within every row, it will have columns with the .item class. Each item will be set to flex: auto



*/
console.log('hello');
let canvasDimension = 475;
let gridSize = 16;

for(let i = 0; i < gridSize; i++){
    //create a div with class row+i
    const row = document.createElement('div');
    row.classList.add('row');
    canvas.appendChild(row);
    console.log('row ' + i + ' created');
    for (let j = 0; j < gridSize; j++){
        const col = document.createElement('div');
        col.style.height = (canvasDimension/gridSize) + 'px';
        col.classList.add('col');
        row.appendChild(col);
        console.log('column created')
    }
}

const gridElements = document.querySelectorAll('.col');



function randomizeColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    return [red, green, blue];
}