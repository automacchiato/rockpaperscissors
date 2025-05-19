function play (playerChoice) {
    const choices = ['Rock','Paper','Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice){
        result = `It's a draw! You both picked ${playerChoice}.`;
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
    }

    document.getElementById('result').textContent = result;
}

function reset(){
    document.getElementById('result').textContent = '';
}