let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_section = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function letterToWord(choice){
    if(choice ==="r")
        return "Rock";
    if(choice ==="p")
        return "Paper";
    return "Scissors";
}


function win(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(4).sub();
    const smallComputerWord = "comp".fontsize(4).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} beats ${letterToWord(computerChoice)}${smallComputerWord}. You Win!!!`; 
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),400);
}
function lost(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(4).sub();
    const smallComputerWord = "comp".fontsize(4).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} loses ${letterToWord(computerChoice)}${smallComputerWord}. You Lost!!!`; 
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),400);
}
function draw(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(4).sub();
    const smallComputerWord = "comp".fontsize(4).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} equals ${letterToWord(computerChoice)}${smallComputerWord}. It's a Draw!!!`; 
    userChoice_div.classList.add('yellow-glow');
    setTimeout(()=>userChoice_div.classList.remove('yellow-glow'),400);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click',() =>game("r"))
    paper_div.addEventListener('click',() =>game("p"))
    scissors_div.addEventListener('click',() =>game("s"))
}
main();