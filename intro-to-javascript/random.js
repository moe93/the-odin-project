console.log( "Hello world!" )
console.log( 23 + 97 )
console.log( (4 + 6 + 9) / 77 ) // =~ 0.24675

function add7( input )
{
    const cte = 7;
    let value = parseInt( input )

    if ( value < 0 || value > 10 )
    {
        alert( "Value NOT within range. Aborting!!!" )
        return( 0 );
    }
    else
    {
        return ( value + cte );
    } 
}
let result = add7( prompt("Enter a number from 1 to 10", "1") );
alert( result )


let multiplyNums = ( num1, num2 ) => {
    return ( parseInt(num1) * parseInt(num2) );
} 
let num1 = prompt( "First  number?", "1" );
let num2 = prompt( "Second number?", "1" );
alert( multiplyNums( num1, num2 ) );


function capitalize( inputStr )
{
    inputStr = inputStr.toLowerCase();
    const firstLetter   = inputStr.charAt( 0 );
    const slicedStr     = inputStr.slice( 1 );

    return( firstLetter.toUpperCase() + slicedStr );
}
let inputStr = prompt( "Enter a random word to capitalize", "bALegdAh" );
alert( capitalize( inputStr ) )


function lastLetter( inputStr )
{
    const lastChar = inputStr.slice( -1 );
    return( lastChar );
}
inputStr = prompt( "Enter a random word to extract last letter", "BalEGDaH" );
alert( lastLetter( inputStr ) );