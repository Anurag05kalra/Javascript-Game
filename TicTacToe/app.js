let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count=0;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame = ()=>{
    turnO=true;
    count=0;
    enableBox();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
  
    if(turnO){
        box.innerText="O";
        turnO = false;
    }else{
         box.innerText="X";
         turnO=true;
    }
    box.disabled = true;
    count++;
  let iswinner = checkWinner();

  if(count==9 && !iswinner){
    gameDraw();
  }
 });
});
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const showWinner = (winner)=>{
 msg.innerText = `Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;

        if(pattern1!="" && pattern2!="" && pattern3!=""){
            if(pattern1===pattern2 && pattern2===pattern3){
                showWinner(pattern1);
                return true;
            }
        }
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);