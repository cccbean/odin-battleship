(()=>{"use strict";var e=document.querySelectorAll(".draggable"),t=document.querySelectorAll(".droppable");e.forEach((function(e){e.addEventListener("dragstart",(function(){e.classList.add("dragging"),e.parentElement.classList.remove("disabled")})),e.addEventListener("dragend",(function(){e.classList.remove("dragging"),e.parentElement.classList.add("disabled")}))})),t.forEach((function(e){e.addEventListener("dragover",(function(t){t.preventDefault();var a=document.querySelector(".dragging");e.classList.contains("disabled")||e.appendChild(a)}))}))})();