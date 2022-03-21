const DEFAULT_SIZE = 16;

//Make a mousedown flag so that coloring only happens when the mouse is clicked AND hovering
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Button EventListener
const button = document.querySelector(".button");
button.addEventListener("click", resetGrid);

let currentColor = "grey";

function changeColor(e) {
    console.log(mouseDown);
    console.log(e.type);
    if(e.type === 'mouseover' && !mouseDown){return}
    e.target.style.backgroundColor=currentColor;
}

function setupGrid(size){
    const grid = document.querySelector(".grid");
    for(let i = 0; i < size * size; i++){
        const box = document.createElement("div");
        box.className = "box";
        grid.appendChild(box);

        box.addEventListener("mouseover", changeColor);
        box.addEventListener("click", changeColor);
    }
}

function resetGrid(){
    const boxes = document.querySelectorAll(".box");
    const grid = document.querySelector(".grid");
    boxes.forEach((box)=>{grid.removeChild(box);})
    setupGrid(DEFAULT_SIZE);
}

window.onload = () =>{
    setupGrid(DEFAULT_SIZE);
}