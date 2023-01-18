

// Player choices
const buttons = document.querySelectorAll( '.button' );
const buttonsArray = Array.from( buttons );

// Reset button
const resetButton = document.querySelector( '.reset-button' );

/* Functions
   ========================================================================== */
/*
 * 1. Capture player input
 * 2. Get computer choice
 * 3. Random number (Int) generator
 */

/* 1 */
function playerChoice( e )
{
    // Generate random cjoice for computer
    const computerChoice = getComputerChoice();
    console.log( `Computer: ${computerChoice}` );
    console.log( `Player: ${this.classList[1]}` );
    
    // Get current scores
    const playerScore = document.querySelector( '.player-score' );
    const computerScore = document.querySelector( '.computer-score' );

    // Step through logic of who wins
    if( this.classList.contains("rock") )
    {
        if( computerChoice == "paper" )
        {
            console.log( 'Computer wins!' );
            computerScore.textContent = `${parseInt(computerScore.textContent)+1}`
        }
        else if( computerChoice == "scissor" )
        {
            console.log( 'Player wins!' );
            playerScore.textContent = `${parseInt(playerScore.textContent)+1}`
        }
        else
        {
            console.log( 'Draw!' );
        }
    }

    else if( this.classList.contains("paper") )
    {
        if( computerChoice == "rock" )
        {
            console.log( 'Player wins!' );
            playerScore.textContent = `${parseInt(playerScore.textContent)+1}`
        }
        else if( computerChoice == "scissor" )
        {
            console.log( 'Computer wins!' );
            computerScore.textContent = `${parseInt(computerScore.textContent)+1}`
        }
        else
        {
            console.log( 'Draw!' );
        }
    }

    else if( this.classList.contains("scissor") )
    {
        if( computerChoice == "rock" )
        {
            console.log( 'Computer wins!' );
            computerScore.textContent = `${parseInt(computerScore.textContent)+1}`
        }
        else if( computerChoice == "paper" )
        {
            console.log( 'Player wins!' );
            playerScore.textContent = `${parseInt(playerScore.textContent)+1}`
        }
        else
        {
            console.log( 'Draw!' );
        }
    }

    // Check end game conditions (first to 5)
    if( parseInt(playerScore.textContent) >= 5 )
    {
        console.log( 'PLAYER WINS GAME! 🎊🎉' );
        alert( 'PLAYER WINS GAME! 🎊🎉' );
    }
    else if( parseInt(computerScore.textContent) >= 5 )
    {
        console.log( 'COMPUTER WINS GAME! 🎊🎉' );
        alert( 'COMPUTER WINS GAME! 🎊🎉' );
    }
}

/* 2 */
function getComputerChoice()
{
    const choices = [ "rock", "paper", "scissor" ];
    return( choices[getRandomInt(choices.length)] );
}

/* 3 */
let getRandomInt = ( upperLimit ) => {
    return( Math.floor( upperLimit * Math.random() ) );
}


/* Event listeners
   ========================================================================== */
/*
 * 1. Listen for player choice
 * 2. Listen for reset score
 */

/* 1 */
buttonsArray.forEach(button => {
    button.addEventListener( 'click', playerChoice );
});

/* 2 */
resetButton.addEventListener( 'click', () => {
    // Get elements
    const playerScore = document.querySelector( '.player-score' );
    const computerScore = document.querySelector( '.computer-score' );

    // Reset elements
    playerScore.textContent = 0;
    computerScore.textContent = 0;
});


/* Rock, Paper, Scissor game logic
   ========================================================================== */
/*
 * 1. Listen for player choice
 * 2. Listen for reset score
 */

function getComputerChoice()
{
    const choices = [ "rock", "paper", "scissor" ];
    return( choices[getRandomInt(choices.length)] );
}