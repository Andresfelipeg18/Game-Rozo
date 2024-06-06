const btnRock = document.getElementById('btn-rock');
const btnPaper= document.getElementById('btn-paper');
const btnscissor = document.getElementById('btn-Scissor');
const tittleUser = document.getElementById('tittle-User')
const tittleCpu = document.getElementById('tittle-Cpu')
const userChoiceImg = document.getElementById('user-choice-img');
const cpuChoiceImg = document.getElementById('cpu-choice-img');
const userCounter = document.getElementById('user-counter'); 
const cpuCounter = document.getElementById('cpu-counter');
const resultTitle = document.getElementById('result');
const reloadButton = document.getElementById('reload');


let userWins = 0;
let cpuWins = 0;

btnRock.addEventListener("click", userPlayRock);
btnPaper.addEventListener("click", userPlaypaper);
btnscissor.addEventListener("click", userPlayScissor);
reloadButton.addEventListener('click', reset);


function reset(){
    userWins = 0;
    cpuWins = 0;
    
    userCounter.textContent = userWins;
    cpuCounter.textContent = cpuWins;
    resultTitle.textContent = "Game Result";
    tittleUser.textContent = "TU";
    tittleCpu.textContent = "MAQUINA";
    userChoiceImg.src = "imagenes/papel.png";
    cpuChoiceImg.src = "imagenes/papel.png";
};


function userPlayRock() {
    let userChoice = "rock";
    tittleUser.textContent = "Elegiste roca"
    tittleUser.classList.remove('tittle-User')
    tittleCpu.classList.remove('tittle-Cpu')
    userChoiceImg.src = "imagenes/piedra.png";
    let cpuChoice = updateCpuChoice();
    updateGameResult(userChoice, cpuChoice);

};

function userPlaypaper() {
    let userChoice = "paper";
    tittleUser.textContent = "Elegiste papel"
    tittleUser.classList.remove('tittle-User')
    tittleCpu.classList.remove('tittle-Cpu')
    userChoiceImg.src = "imagenes/papel.png";
    let cpuChoice = updateCpuChoice();
    updateGameResult(userChoice, cpuChoice);

};
function userPlayScissor() {
    let userChoice = "scissors";
    tittleUser.textContent = "Elegiste tijeras"
    tittleUser.classList.remove('tittle-User')
    tittleCpu.classList.remove('tittle-Cpu')
    userChoiceImg.src = "imagenes/tijera.png";
    let cpuChoice = updateCpuChoice();
    updateGameResult(userChoice, cpuChoice);
};

function updateCpuChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let cpuChoice;
    if (randomNumber === 0) {
        cpuChoice = "rock";
        tittleCpu.textContent = "Maquina eligio roca";
        cpuChoiceImg.src = "imagenes/piedra.png";
    } else if (randomNumber === 1) {
        cpuChoice = "paper";
        tittleCpu.textContent = "Maquina eligio papel";
        cpuChoiceImg.src = "imagenes/papel.png";
    } else {
        cpuChoice = "scissors";
        tittleCpu.textContent = "Maquina eligio tijeras";
        cpuChoiceImg.src = "imagenes/tijera.png";
    }

    return cpuChoice;
};

function updateGameResult(userChoice, cpuChoice) {
    if (userWins < 3 && cpuWins < 3) {
        if (userChoice === cpuChoice) {
            resultTitle.textContent = "¡EMPATE!";
        } else if (
            (userChoice === "rock" && cpuChoice === "scissors") ||
            (userChoice === "paper" && cpuChoice === "rock") ||
            (userChoice === "scissors" && cpuChoice === "paper")
        ) {
            resultTitle.textContent = "¡GANASTE!";
            userWins++;
        } else {
            resultTitle.textContent = "¡PERDISTE!";
            cpuWins++;
        }
        userCounter.textContent = userWins;
        cpuCounter.textContent = cpuWins;
    }
    
    if (userWins === 3 || cpuWins === 3) {
        if (userWins === 3) {
            Swal.fire({
                title: "FELICIDADES , !GANASTE!",
                width: 600,
                padding: "3em",
                color: "#716a#ff00e0dd",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
            });
        } else {
            Swal.fire({
                title: " PERDISTE",
                width: 600,
                padding: "3em",
                color: "##ff00e0",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
            });
        }

       
    }
};


function getRandomNumber(min, max) {
  return Math.floor(Math.random) * (max - min + 1) + min;
};

