//This function will allow the cpu to pick randomly between 1 and 3
//These values will be assigned to rock, paper, and scissors, ascending
function randomInt(min, max) {
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


while (p<5 && c<5){
    console.log(`You:${p}  CPU:${c}`);

    player = prompt("Enter rock, paper, or scissors.");
    player = player.toUpperCase();
    console.log(player);
    if (player != "ROCK" && player != "PAPER" && player != "SCISSORS"){
        console.log("Please enter rock, paper, or scissors.");
        continue;
    }

    cpu = randomInt(1,3)
    if (cpu==1){
        cpu = "ROCK";
    }else if(cpu==2){
        cpu = "PAPER";
    }else{
        cpu="SCISSORS";
    }

    if (player == "ROCK" && cpu == "PAPER"){
        console.log("You lost the round!");
        c++;
    }else if(player == "ROCK" && cpu == "SCISSORS"){
        console.log("You won the round!");
        p++;
    }else if(player == "PAPER" && cpu == "ROCK"){
        console.log("You won the round!");
        p++;
    }else if(player == "PAPER" && cpu == "SCISSORS"){
        console.log("You lost the round!");
        c++;
    }else if(player == "SCISSORS" && cpu == "ROCK"){
        console.log("You lost the found!");
        c++;
    }else if(player=="SCISSORS" && cpu == "PAPER"){
        console.log("You won the round!");
        p++;
    }else{
        console.log("The round was a tie.");
        continue;
    }
}

console.log(`Game over. The final score was \nYou:${p}  CPU:${c}`);


