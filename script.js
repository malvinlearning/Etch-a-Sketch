const board = document.querySelector('.container');

const button = document.querySelector('.gridChange');

const colorEl = document.querySelector('.color');


let color = '#3498db';
let gridSize = 16;


button.addEventListener('click', () => {
    const userInput = prompt('What do you want the size of the grid to be?');
    Number(userInput) > 99 ? alert("Not an appropriate number.") : gridSize = Number(userInput);
    
    gridRender();
});

document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'r') { // Case-insensitive check for 'R'
      color = 'red';
    } else if (event.key.toLowerCase() === 'g') { // Case-insensitive check for 'R'
        color = 'green';
    }
  });
  


function gridRender(){
    board.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
      
        // Add event listener to change color on mouseover
        cell.addEventListener('mouseover', () => {       
          if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = color;
          }
        });
      
        board.appendChild(cell);
      }
}

gridRender();

