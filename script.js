//This function will allow the cpu to pick randomly between 1 and 3
//These values will be assigned to rock, paper, and scissors, ascending
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}

/* The following variables are the counters for the player and cpu,
and will be the conditions for the loop to end, and the game to end.
*/

let p = 0
let c = 0
let player
let cpu

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

let scoreTracker = document.getElementById("scoreTracker");
let gameOver = document.getElementById("gameOver");

let buttons = document.querySelector('.buttons');

let roundMessage = document.getElementById("roundMessage");

//Variable for each button, to assign hover event
let gameButtons = document.getElementsByClassName("btn");




//Button hover event
Array.from(gameButtons).forEach(function(x){
    x.addEventListener('mouseover',(e)=>{
        x.style.backgroundColor = "rgb("+e.offsetX+","
        +e.offsetY+",0)";
    });
    x.addEventListener('mousedown',(e)=>{
        x.classList.add("btnClick");
    });
    x.addEventListener('mouseup',(e)=>{
        x.classList.remove("btnClick");
    })
});


//Listen for button click, run game with respective button value
rockBtn.addEventListener('click', ()=>{
    player="ROCK"
    console.log(player);
    playRound(player);
});
paperBtn.addEventListener('click', ()=>{
    player="PAPER"
    console.log(player);
    playRound(player);
});
scissorsBtn.addEventListener('click', ()=>{
    player="SCISSORS"
    console.log(player);
    playRound(player);
});




//Generate CPU play 
function getCPUSelection(){    
    cpu = getRandomInt(1,3)
    if (cpu==1){
        cpu = "ROCK";
        return cpu;
    }else if(cpu==2){
        cpu = "PAPER";
        return cpu;
    }else{
        cpu="SCISSORS";
        return cpu;
    }
}

//Screen to show when game ends, ask if play again
function gameOverScreen(){
    buttons.style.display = "none";

    //Insert play again button
    let playAgainBtn = document.createElement('button');
    playAgainBtn.className = "btn";
    playAgainBtn.textContent = "Play again";
    gamecontainer.insertBefore(playAgainBtn, gamecontainer.firstChild);

    playAgainBtn.addEventListener('click', ()=>{
        buttons.style.display = "flex";
        playAgainBtn.style.display = "none";
        roundMessage.textContent = "";
        c=0;
        p=0;
        scoreTracker.textContent = `The current score is
        CPU: ${c} You: ${p}`;
    })
}

//Check score to see if game is over and update score on page
function checkScore(){
    if(c==5){
        scoreTracker.textContent = `You lose!
        The final score is CPU:${c} YOU:${p}`;
        gameOverScreen();
        c=0;
        p=0;
        return;
    }else if(p==5){
        scoreTracker.textContent = `You win!
        The final score is CPU:${c} YOU:${p}`;
        gameOverScreen();
        c=0;
        p=0;
        return;
    }
    scoreTracker.textContent = `The current score is CPU:${c} YOU:${p}`;

}
//Play round
function playRound(playerSelection){   
    let CPUSelection = getCPUSelection();

    if (playerSelection == "ROCK" && CPUSelection == "PAPER"){
        roundMessage.textContent = "You lost the round!";
        ++c;
        checkScore();
    }else if(playerSelection == "ROCK" && CPUSelection == "SCISSORS"){
        roundMessage.textContent = "You won the round!";
        ++p;
        checkScore();
    }else if(playerSelection == "PAPER" && CPUSelection == "ROCK"){
        roundMessage.textContent = "You won the round!";
        ++p;
        checkScore();
    }else if(playerSelection == "PAPER" && CPUSelection == "SCISSORS"){
        roundMessage.textContent = "You lost the round!";
        ++c;
        checkScore();
    }else if(playerSelection == "SCISSORS" && CPUSelection == "ROCK"){
        roundMessage.textContent = "You lost the round!";
        ++c;
        checkScore();
    }else if(playerSelection=="SCISSORS" && CPUSelection == "PAPER"){
        roundMessage.textContent = "You won the round!";
        ++p;
        checkScore();
    }else if(playerSelection==CPUSelection){
        roundMessage.textContent = "The round was a tie.";
        checkScore();
    }
    
}






// console.log(`Game over. The final score was \nYou:${p}  CPU:${c}`);

/*
Three buttons:
ROCK, PAPER, SCISSORS

When the player clicks one, listen for a 'click' event,  and run a
function that assigns respective value to the player selection variable.

We also have a function that, when called, returns a value for the
CPU play.

Now, we have two values .
*/


