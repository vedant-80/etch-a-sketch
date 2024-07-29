const canvas = document.querySelector('#game-container');
const clearBtn = document.querySelector('.clear-canvas');
const slider = document.querySelector('.slider');
var gridElements = document.querySelectorAll('.col');
const colorChoice = document.querySelector('#color-select')
/*
How to create the canvas grid:

For every row that is created, initialize a <div> with a .row class. This .row class will have a flex display
Within every row, it will have columns with the .item class. Each item will be set to flex: auto



*/

let canvasDimension = 475;
let gridSize = document.getElementsByClassName('.slider').value;

//Creates new grid whenever dimension slider value changes
slider.addEventListener('change', () => createGrid(Number(slider.value)));

//Clears canvas on click
clearBtn.addEventListener('click', clearCanvas);
createGrid(16);






function createGrid(gridSize){
    /*
    Function: createGrid

    Input:
        - gridSize: a Number that describes how many grid blocks make up each axis

    Output:
        - deletes the previous existing grid and creates a new grid that marks grid blocks that are hovered over
        - void return type
    */

    //Deletes grid
    gridElements = document.querySelectorAll('.col');
    if(gridElements.length > 0){
        deleteCanvas();
    }
    //Creates grid by row and column
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
        for (let j = 0; j < gridSize; j++){
            const col = document.createElement('div');
            col.style.height = (canvasDimension/gridSize) + 'px';
            col.classList.add('col');
            //Adds marking capability when mouse goes over a grid block
            col.addEventListener('mouseover', () => markBlack(col));
            row.appendChild(col);
        }
    }
    
}
//Initializes the grid



function clearCanvas(){
    /*
    Function: clearCanvas

    Input: None

    Output:
        - Changes style of every grid block to have a white background
        - Void return type
    */
    gridElements = document.querySelectorAll('.col');
    for (let i = 0; i < gridElements.length; i++){
        let element = gridElements[i];
        element.style.backgroundColor = 'white';
    }
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

function deleteCanvas(){
    /*
    Function: deleteCanvas

    Inputs: None

    Output: 
        - deletes every row and column from HTML
        - Void return type
    */
    for (let i = 0; i < gridElements.length; i++){
        let element = gridElements[i];
        element.remove();
    }
    let rows = document.querySelectorAll('.row');
    rows.forEach(element => {
        element.remove();
    });
}