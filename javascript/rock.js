let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#message");
const userScore1=document.querySelector("#user-score");
const compScore1=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw");
    message.innerText="DRAW GAME ! PLAY AGAIN";
    message.style.backgroundColor="crimson";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScore1.innerText=userScore;
        console.log("YOU WIN");
        message.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="blue";

    }else{
        compScore++;
        compScore1.innerText=compScore;
        console.log("COMPUTER WIN!");
        message.innerText=`COMPUTER WIN! ${compChoice} beats  your ${userChoice}`;
        message.style.backgroundColor="purple";
    }
};

const playGame=(userChoice)=>{
console.log("user choice=",userChoice);
//generate computer choice
const compChoice=genCompChoice();
console.log("computer choice=",compChoice);


if(userChoice===compChoice){
    //draw game
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        //s or p
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock,scissor
        userWin=compChoice==="scissor"?false:true;
    }else{
      userWin=compChoice==="rock"?false:true;  
    }
showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         //console.log("choice was clicked!", userChoice);
         playGame(userChoice);
    });
});

