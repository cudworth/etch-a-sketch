function createCellArray(n, m){

    const cell_size = getCellSize(n, m);

    let body = document.querySelector("body");

    let bezel = document.createElement("div");
    bezel.id = "bezel";

    const screen = document.createElement("div");
    screen.id = "screen";
    execFunctionOnEvent(screen, "mouseleave", mouseUp);

    bezel.appendChild(screen);

    body.appendChild(bezel);

    for (let i = 0; i < n; i++){

        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < m; j++){

            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add("fill_000")
            cell.setAttribute("style", `width: ${cell_size};height: ${cell_size}`);
            cell.id = i + "," + j;
            execFunctionOnEvent(cell, "mousedown", mouseDown);
            execFunctionOnEvent(cell, "mouseup", mouseUp);
            execFunctionOnEvent(cell, "mousedown", darkenNode);
            execFunctionOnEvent(cell, "mouseover", darkenNode);
            row.appendChild(cell);
        }

        screen.appendChild(row);
    }

};

function mouseUp(){mouse_down = false};

function mouseDown(){mouse_down = true};

function darkenNode(node){

    if (!mouse_down) return;

    classes = node.classList

    for (let i = 0; i < classes.length; i++) {

        switch(classes[i]){
            case "fill_000":
                node.classList.add("fill_033");
                node.classList.remove("fill_000");
                break;

            case "fill_033":
                node.classList.add("fill_066");
                node.classList.remove("fill_033");
                break;

            case "fill_066":
                node.classList.add("fill_100");
                node.classList.remove("fill_066");
                break;
        
            }
        }
};

function execFunctionOnEvent(element, event, function_to_exec){
    element.addEventListener(event, function (e) {
        function_to_exec(e.target);
    });
};

function removeNode(selector){
    const node = document.querySelector(selector);
    node.parentNode.removeChild(node);
};

function getCellSize(n, m){
    const max_width = (2 / 3) * window.innerWidth / m;
    const max_height = (2 / 3) * window.innerHeight / n;
    return Math.min(max_width, max_height) + "px";
};

button = document.querySelector("#shake");
button.addEventListener("click", function (e) {
    removeNode("#bezel");
    let grid_size = prompt("How many squares per side (1 - 100)?");
    if (!Number(grid_size)) grid_size = 16;
    grid_size = Math.max(1, Math.min(100, grid_size));
    const cell_size = getCellSize(grid_size, grid_size);
    createCellArray(grid_size, grid_size);
});

let mouse_down = false;

createCellArray(16, 16); // Create starting array, 16 cells x 16 cells