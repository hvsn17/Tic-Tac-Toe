let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelectorAll(".reset");
let turn0 = true;
let newbtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg")
arr2 = [
  ["Banana", "Apple"],
  ["Mushroom", "Script"],
];
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 6],
  [6, 7, 8],
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach(box =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0==true){
            box.innerText ="0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congrats Buddy!,Winner is ${winner}`;
    msgContainer.classList.remove('hide'); 
    disableBoxes();
}

const checkWinner = () => { 
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2])
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !="" && pos2val != "" && pos3val     != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val)
        }
    }
 }
} 

newbtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);

