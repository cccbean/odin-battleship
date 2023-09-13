const generateCells = () => {
  const gameboardDiv = document.querySelectorAll('.gameboard');
  gameboardDiv.forEach((gameboard) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell')
        cellDiv.dataset.coord = `${j},${9 - i}`;
        gameboard.appendChild(cellDiv);
      }
    }
  })
}

export default generateCells;