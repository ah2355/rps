function computerPlay()
{
    let x = parseInt(Math.random()*10);

    if(x % 2 ==0)
    {
        return 'Rock';
    }
    else if(x % 3==0)
    {
        return 'Paper';
    }
    return 'Scissors';

}

function playRound(playerSelection, computerSelection)
{
    let playerChoice = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    console.log(playerChoice);

    if(playerChoice==='Rock' && computerSelection==='Paper')
    {
        return 'You Lose! Paper beats Rock';
    }
    else if(playerChoice==='Rock' && computerSelection==='Scissors')
    {
        return 'You Win! Rock beats Scissors';
    }
    else if(playerChoice === 'Paper' && computerSelection==='Scissors')
    {
        return 'You Lose! Scissors beat Paper';
    }
    else if(playerChoice === 'Paper' && computerSelection==='Rock')
    {
        return 'You Win! Paper beats Rock';
    }
    else if(playerChoice ==='Scissors' && computerSelection==='Paper')
    {
    return 'You Win! Scissors beats Paper';
    }
    else if(playerChoice==='Scissors' && computerSelection==='Rock')
    {
        return 'You Lose! Rock beats Scissors';
    }
    return 'It\'s a tie You both have ' + playerChoice + 's'; 
}

function verifyWinner(playerSelection,computerSelection)
{
    let playerChoice = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    

    if(playerChoice==='Rock' && computerSelection==='Paper')
    {
        return 0;
    }
    else if(playerChoice==='Rock' && computerSelection==='Scissors')
    {
        return 1;
    }
    else if(playerChoice === 'Paper' && computerSelection==='Scissors')
    {
        return 0;
    }
    else if(playerChoice === 'Paper' && computerSelection==='Rock')
    {
        return 1;
    }
    else if(playerChoice ==='Scissors' && computerSelection==='Paper')
    {
    return 1;
    }
    else if(playerChoice==='Scissors' && computerSelection==='Rock')
    {
        return 0;
    }
    return 2; 

}

function game()
{
    let playerScore = 0;
    let computerScore =0;

    for(let i=0; i < 5;i++)
    {
        let round = i + 1;
        const message = prompt('What do you wanna play? ');
        const computerChoice =  computerPlay();
    
        console.log('Round' + round);
        console.log(playRound(message,computerChoice));
        if(verifyWinner(message,computerChoice)===0)
        {
            computerScore++;
        }
        else if(verifyWinner(message,computerChoice)===1)
        {
            playerScore++;
        }
    }

    if(playerScore > computerScore)
    {
        return 'Game Over! You Win!!!';
    }
    else if(computerScore > playerScore)
    {
        return 'Game Over! You Lose!';
    }
    else
    {
        return ' Game Over! You Tied!';
    }
}

console.log(game());
