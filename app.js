const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.button');

let createGrid = function(side){
    grid = side * side;
    for(let x = 0; x < grid; x++){
        item = document.createElement("div");
        item.className = "item";
        wrapper.appendChild(item);
    }
}

createGrid(16);

let addListeners = function(){
    const items = document.querySelectorAll(".item");

    items.forEach((item)=>{
        item.addEventListener("mouseenter", ()=>{
            item.style.backgroundColor = "grey";
        })
    })
}

addListeners();

button.addEventListener("click", ()=>{
    const items = document.querySelectorAll(".item");

    items.forEach((item)=>{
        wrapper.removeChild(item);
    })
    side = prompt("Enter a grid size", 16);
    console.log(side);
    createGrid(side);
    addListeners();
})