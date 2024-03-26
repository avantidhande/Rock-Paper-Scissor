let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
const options=['rock','paper','scissors'];
const randInx=Math.floor(Math.random()*3);
return options[randInx];
}

const drawGame=()=>{
console.log("Game was Draw");
msg.innerText="Game was Draw.Play Again";
}

const showWinnner=(userWin,userChoice,compChoice)=>{
        if(userWin){
                userScore++;
                userScorePara.innerHTML=userScore;
                msg.innerText=`You win!Your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor="green";
        }else{
                compScore++;
                compScorePara.innerHTML=compScore;
                msg.innerText=`You lost ${compChoice} beats your ${userChoice}`;
                msg.style.backgroundColor="red";
        }
}

const playGame=(userChoice)=>{
console.log("user choice = ",userChoice);
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);

if(userChoice===compChoice){
drawGame();
}else{
        let userWin=true;
        if(userChoice==='rock'){
                // remaining paper and scissors
                userWin=compChoice==='paper'?false:true;        
        }else if(userChoice==='paper'){
                // remaining rock, scissors
                userWin=compChoice==='scissors'?false:true;       
        }else{
                // rock, paper
                userWin=compChoice==='rock'?false:true;      
        }
        showWinnner(userWin,userChoice,compChoice);
}
};



choices.forEach((choice)=>{        
        choice.addEventListener("click",() => {
            const userChoice=choice.getAttribute("id");
           playGame(userChoice);

        });
});


// 31:00    