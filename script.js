const result = document.querySelector('.result')
const yourScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3);
    const machineChoice = choices[randomNumber];

    // Exibir a escolha da máquina usando alert
    if (randomNumber === 0) {
        alert("Máquina escolheu: Pedra ✊");
    } else if (randomNumber === 1) {
        alert("Máquina escolheu: Papel ✋");
    } else if (randomNumber === 2) {
        alert("Máquina escolheu: Tesoura ✌️");
    }

    return machineChoice; // Retorne apenas a escolha da máquina
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Empate!";
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissor') || (human === 'scissor' && machine === 'paper')
    ) {
        humanScoreNumber++;
        yourScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você Ganhou!";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você Perdeu!";
    }
}