// disableboxes
// enableboxes
// forEach
// addElement
// disabled
// ClassList
// Remove
// Hide
// pattern


let container = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let new_btn = document.querySelector(".new_btn");

let boxs = document.querySelector(".box");
let reset = document.querySelector(".reset_btn");


let turnO = true;

console.log(turnO);

let winPetterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    container.classList.add("hide");
};


boxs.forEach((box) => {

    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWin()
    })
})


const disabledboxes = () => {
    boxs.forEach((box) => {
        box.disabled = true
    });
};


const enableboxes = () => {
    boxs.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
    });
};


const showWinner = (winner) => {
    msg.innerHTML = `Player ${winner} wins!`;
    container.classList.remove("hide");
    disabledboxes()
}


const checkWin = () => {
    for (let pattern of winPetterns){
        let pos1val = boxs[pattern[0]].innerHTML;
        let pos2val = boxs[pattern[1]].innerHTML;
        let pos3val = boxs[pattern[2]].innerHTML;

        if (pos1val !== '' && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val)
            return;
        }
    }
};

new_btn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


