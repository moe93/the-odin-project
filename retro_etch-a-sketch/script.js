/* Functions
   ========================================================================== */
/*
 * 1. Generate grid
 * 2. Change color of grid element
 */

/* 1 */
function generateGrid( divSize )
{   
    // Query selectors of interest
    const container = document.querySelector('.container');

    // This will replace/remove all container elements
    container.replaceChildren();

    // Then proceed to populate it
    for( let i = 0; i < divSize**2; i++ )
    {
        let div = document.createElement('div');
        div.classList.add( 'grid-box');
        container.appendChild( div );
        // div.textContent = i+1;
    }

    // Update number of rows and columns
    const root = document.querySelector( ':root' );
    root.style.setProperty( '--grid-row-col', `${divSize}` );

    // Lastly re-attach event listener
    attachMouseoverListener()
}

/* 2 */
function colorGridElement( e )
{
    // Change background color to black
    this.style.backgroundColor = 'black';

    // Change border color to black
    this.style.borderColor = 'black';
}


/* Event listeners
   ========================================================================== */
/*
 * 1. Listen grid generator button
 * 2. Listen for mouseover event (hover)
 * 3. Prevent form refresh on submit
 */

/* 1 */
const button = document.querySelector( '.button' );
button.addEventListener( 'click', function() {
    const gridSize = document.querySelector( '.user-input' ).value;
    generateGrid( gridSize );
});
// generateGrid(256);


/* 2 */
function attachMouseoverListener()
{
    const gridElements = document.querySelectorAll( '.grid-box' );
    const gridElementsArray = Array.from( gridElements );
    gridElementsArray.forEach( gridElement => {
        gridElement.addEventListener( 'mouseover', colorGridElement )
    });
}

/* 3 */
function submitForm( e )
{
   //Preventing page refresh
   e.preventDefault();
}
//Calling a function during form submission.
const form = document.querySelector( '.user-input-form' );
form.addEventListener( 'submit', submitForm );