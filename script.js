const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.new-grid');
const initialGridValue = 16;


const gridCreate = (numOfGrid) => {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < numOfGrid; i++){
        const cols = document.createElement('div');
        cols.classList.add('grid-row');
        for(let j = 0; j < numOfGrid; j++){
            const gridBox = document.createElement('div');
            const widthAndHeight = 960 / numOfGrid;
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            cols.append(gridBox);
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = "black";
            })
        }
        container.appendChild(cols);
    }
}

newGridBtn.addEventListener('click', () => {

    let newGridSize = Number(prompt("Enter the dimensions you would like for your grid", ""));

    while(newGridSize > 100){
        newGridSize = Number(prompt("You must enter a number less than 100", ""));
    }
    gridCreate(newGridSize);
})

gridCreate(initialGridValue);


