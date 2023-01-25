

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
    // Generate random choice for computer
    const computerChoice = getComputerChoice();
    console.log( `Computer: ${computerChoice}` );
    console.log( `Player: ${this.classList[1]}` );
    
    // Get current scores
    const playerScore = document.querySelector( '.player-score' );
    const computerScore = document.querySelector( '.computer-score' );

    // Check if winner is determined
    if( parseInt(playerScore.textContent) >= 5 )
    {
        console.log( 'PLAYER already won. Reset score!' );
        alert( 'PLAYER already won. Reset score!' );
        return 1;
    }
    else if( parseInt(computerScore.textContent) >= 5 )
    {
        console.log( 'COMPUTER already won. Reset score!' );
        alert( 'COMPUTER already won. Reset score!' );
        return 1;
    }

    // Step through logic of who wins
    reset_animation()
    if( this.classList.contains("rock") )
    {
        if( computerChoice == "paper" )
        {
            const roundWinner = 'Computer wins!'
            console.log( roundWinner );
            roundResult( roundWinner );
            computerScore.textContent = `${parseInt(computerScore.textContent)+1}`
        }
        else if( computerChoice == "scissor" )
        {
            const roundWinner = 'Player wins!'
            console.log( roundWinner );
            roundResult( roundWinner );
            playerScore.textContent = `${parseInt(playerScore.textContent)+1}`
        }
        else
        {
            const roundWinner = 'Draw!'
            console.log( roundWinner );
            roundResult( roundWinner );
        }
    }

    else if( this.classList.contains("paper") )
    {
        if( computerChoice == "rock" )
        {
            const roundWinner = 'Player wins!'
            console.log( roundWinner );
            roundResult( roundWinner );
            playerScore.textContent = `${parseInt(playerScore.textContent)+1}`
        }
        else if( computerChoice == "scissor" )
        {
            const roundWinner = 'Computer wins!'
            console.log( roundWinner );
            roundResult( roundWinner );
            computerScore.textContent = `${parseInt(computerScore.textContent)+1}`
        }
        else
        {
            const roundWinner = 'Draw!'
            console.log( roundWinner );
            roundResult( roundWinner );
        }
    }

    else if( this.classList.contains("scissor") )
    {
        if( computerChoice == "rock" )
        {
            const roundWinner = 'Computer wins!'
            console.log( roundWinner );
            roundResult( roundWinner );
            computerScore.textContent = `${parseInt(computerScore.textContent)+1}`
        }
        else if( computerChoice == "paper" )
        {
            const roundWinner = 'Player wins!'
            console.log( roundWinner );
            roundResult( roundWinner );
            playerScore.textContent = `${parseInt(playerScore.textContent)+1}`
        }
        else
        {
            const roundWinner = 'Draw!'
            console.log( roundWinner );
            roundResult( roundWinner );
        }
    }

    // Check end game conditions (first to 5)
    if( parseInt(playerScore.textContent) === 5 )
    {
        const winner = 'PLAYER WINS GAME! 🎊🎉';
        console.log( winner );
        alert( winner );
        roundResult( winner );
    }
    else if( parseInt(computerScore.textContent) === 5 )
    {
        const winner = 'COMPUTER WINS GAME! 🎊🎉';
        console.log( winner );
        alert( winner );
        roundResult( winner );
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

function roundResult( roundWinner )
{
    const txt = roundWinner;
    const crt = document.querySelectorAll('.crt-text')[0];
    crt.textContent = txt
}


/* Auxilliary functions
   ========================================================================== */
/*
 * 1. Reset the cursor/typewriter animation
 */

/* 1 */
function reset_animation() {
    var el = document.querySelector('.cursor');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }