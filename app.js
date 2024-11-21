const container = document.getElementById("container");

let n = 16;

const btn = document.querySelector("#new");
btn.addEventListener("click", () => {
    n = parseInt(prompt("Enter new grid side size (e.g., 16 for 16x16):"), 10);

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    if (n > 100) {
        alert("Please enter a lower grid side size.");
        return;
    }

    container.innerHTML = "";

    createGrid(n);
});

function createGrid(gridSize) {
    const totalCells = gridSize * gridSize;
    for (let i = 0; i < totalCells; i++) {
        const div = document.createElement("div");
        div.classList.add("box");

        div.style.width = `${600 / gridSize}px`;
        div.style.height = `${600 / gridSize}px`;
        div.style.backgroundColor = "white";
        div.style.opacity = "0";

        div.addEventListener("mouseenter", () => {
            const currentOpacity = parseFloat(div.style.opacity);

            div.style.opacity = Math.min(currentOpacity + 0.1, 1);
        });

        container.appendChild(div);
    }
}

createGrid(n);
