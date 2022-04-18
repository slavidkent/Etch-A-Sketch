const container = document.querySelector('.container');

// create 16x16 div
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid')
        div.classList.add(`grid-${i}-${j}`)
        container.appendChild(div);
    }
}

const grids = document.querySelectorAll('.grid')

grids.forEach(grid=>grid.addEventListener('mouseover',addPixel))

function addPixel(e){
    e.target.style.backgroundColor='black'
}