console.log( "Rock, Paper, Scissors!" )

// Generate random number between 0 and MAXNUM
let genRandInt = ( MAXNUM ) => Math.floor( Math.random() * MAXNUM );


// Generate a random choice for the computer
function getComputerChoice()
{
    const   choices = ["Rock", "Paper", "Scissors" ];
    const   arrLen  = choices.length;
    let     NDX     = genRandInt( arrLen );

    return( NDX );
}

// Get player's choice
function getPlayerChoice()
{
    let     playerChoice = parseInt( prompt( "(1) Rock, (2) Paper, or (3) Scissors?", "3") );
    // Verify that choice is valid
    if( playerChoice < 1 && playerChoice > 3)
    {
        throw new Error( "Invalid choice" );
    }
    else return( playerChoice ); // Index starts at 0
}
const computerChoice    = getComputerChoice();
const playerChoice      = getPlayerChoice();
console.log( computerChoice );
console.log( playerChoice );

// Play a game of Rock, Paper, Scissors!
function playRound( playerInput, computerInput )
{
    const choices = ["Rock", "Paper", "Scissors" ];
    
    const msg = "Player: " + choices[playerInput-1] + " || Computer: " + choices[computerInput-1];
    console.log( msg );
    if( playerInput == 1 && computerInput == 2 )
    {
        console.log( "Computer wins!" );
    }
    else if( playerInput == 1 && computerInput == 3 )
    {
        console.log( "Player wins!" );
    }
    else if( playerInput == 2 && computerInput == 1 )
    {
        console.log( "Player wins!" );
    }
    else if( playerInput == 2 && computerInput == 3 )
    {
        console.log( "Computer wins!" );
    }
    else if( playerInput == 3 && computerInput == 1 )
    {
        console.log( "Computer wins!" );
    }
    else if( playerInput == 3 && computerInput == 1 )
    {
        console.log( "Player wins!" );
    }
    else
    {
        console.log( "It's a draw" );
    }
}
playRound( playerChoice, computerChoice )
