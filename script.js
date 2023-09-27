const container = document.querySelector('.container');
let numOfGrid = prompt("Enter the dimensions you would like for your grid", "");


const gridCreate = (numOfGrid) => {
    for(let i = 0; i < numOfGrid; i++){
        const cols = document.createElement('div');
        cols.classList.add('grid-row');
        for(let j = 0; j < numOfGrid; j++){
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            cols.append(gridBox);
        }
        container.appendChild(cols);
    }
}

gridCreate(numOfGrid);


