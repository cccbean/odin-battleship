import generateCells from "./dom";
import { Ship, Gameboard, Player } from "./gameLogic";

// generateCells();

const draggables = document.querySelectorAll('.draggable');
const droppables = document.querySelectorAll('.droppable');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
    draggable.parentElement.classList.remove('disabled')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
    draggable.parentElement.classList.add('disabled')
  })
})

droppables.forEach((droppable) => {
  droppable.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    if (!droppable.classList.contains('disabled')) {
      droppable.appendChild(draggable);
    }
  })
})
