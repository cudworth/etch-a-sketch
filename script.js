function createArray(n, m){

    const body = document.querySelector("body");
    let div = document.createElement("div");
    div.classList.add('container');
    body.appendChild(div);

    for (let i = 0; i < n; i++){

        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < m; j++){

            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = i + ", " + j;
            row.appendChild(cell);
        }

        div.appendChild(row);
    }

};

createArray(27,6);