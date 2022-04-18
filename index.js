// create 16x16 div
const container = document.querySelector('.container');
const gridResDisplay = document.querySelector('#grid-res-display')
generateGrids();

// reset grid event
const clearGridsBtn = document.querySelector('#clear-button');
// behavior
clearGridsBtn.addEventListener('click', clearGrids);

// generate grids 16x16 also accept argument
function generateGrids(gridsPerRow = 16) {
    container.innerHTML = '';
    for (let i = 0; i < gridsPerRow; i++) {
        for (let j = 0; j < gridsPerRow; j++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            div.classList.add(`grid-${i}-${j}`);
            div.style.width = `${100 / gridsPerRow}%`;
            div.style.backgroundColor='white'
            container.appendChild(div);
        }
    }
    gridResDisplay.children[0].textContent = `${gridsPerRow} x ${gridsPerRow}`
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => grid.addEventListener('mouseover', addPixel));
}

function addPixel(e) {
    e.target.style.backgroundColor = 'black';
}
function clearGrids() {
    let gridsPerRow = prompt('What size of canvas You wish to paint on? Default=16 Max=100', 16);
    generateGrids(processUserInput(gridsPerRow));
}

function processUserInput(input) {
    let inputNum = parseInt(input);
    console.log(typeof inputNum);
    if (isNaN(inputNum) || inputNum > 100 || inputNum <= 0) {
        alert('Please enter a valid number');
        return 16;
    }
    return inputNum;
}
