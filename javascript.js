//create a div element under the container div
//const container = document.querySelector('.grid');
//const div = document.createElement('div');
//div.textContent = 'I am a div';
//container.appendChild(div);

const gridContainer = document.querySelector('.grid');
const resizeButton = document.querySelector('.resize');
const clearbutton = document.querySelector('.reset');

function createGrid(size) {
    gridContainer.innerHTML = '';

    const itemSize = 960 /size;

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        row.style.height = `${itemSize}px`;

        for (let j = 0; j < size; j++) {
            const item = document.createElement('div');
            item.classList.add('grid-item');
            item.style.width = `${itemSize}px`;
            item.style.height = `${itemSize}px`;
            row.appendChild(item);
        }

        gridContainer.appendChild(row);
    }
    attachHoverEvents();
}
createGrid(16);

//q create an alert that when button with class resize is clicked it will resize the grid
resizeButton.addEventListener('click', () => {
    const newSize = prompt('Enter a new size between 1 and 100');
    if (newSize === null) {
        return;
    }
    if (newSize < 1 || newSize > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    createGrid(newSize);
});

//change the color of the grid when the mouse hovers over it
function attachHoverEvents(){
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        //q randomize the color of the grid
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.backgroundColor = `#${randomColor}`;
    });
});
}

clearbutton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.style.backgroundColor = 'white';
    });
    createGrid(16);
}
);