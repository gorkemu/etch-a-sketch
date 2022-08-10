const board = document.querySelector('.board');

createBoard = (size) => {

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {

        let square = document.createElement('div');
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "#aa8cab";

        board.appendChild(square);
    };
};

changeSize = (input) => {
    if (input >= 10 && input <= 100) {
        createBoard(input);
        resetBoard();
    }
    else {
        alert("Enter a number between 10 and 100");
    };
};


const newSize = document.getElementById("newSize");
newSize.addEventListener('change', (e) => {
    changeSize(e.target.value);
})


const reset = document.querySelector("#reset");
reset.addEventListener('click', resetBoard);

function resetBoard() {

    let val = document.getElementById('newSize').value;
    let square = board.children;
    for (let i = 0; i < val * val; i++) {
        square[i].style.backgroundColor = "#aa8cab";
    }
};

createBoard(16);
