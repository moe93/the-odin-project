// window.onkeydown = function( event )
// {
//   if( event.keyCode = "65" )
//   {
//     console.log( "Pressed A" );
//   }
// }

// --------------
// Create event listener for keydown event
// --------------
window.addEventListener( 'keydown', playSound );

// --------------
// Create event listener for transition event
// --------------
const keys = document.querySelectorAll( '.key' );
// Convert nodelist to array
const keysArray = Array.from( keys );
// Loop over array elements
keysArray.forEach(key => {
  key.addEventListener( 'transitionend', togglePlayingClass );
});

// Define function playSound used during event
function playSound( event )
{
  const audio = document.querySelector( `audio[data-key="${event.keyCode}"]` );
  const key = document.querySelector( `div[data-key="${event.keyCode}"]` );
  if( !audio ) return;

  // console.log( key );
  // console.log( audio );

  audio.currentTime = 0;
  key.classList.add( "playing" );
  audio.play();
}

// Define function to toggle .playing class
function togglePlayingClass( event )
{
  if( event.propertyName !== 'transform' ) return;
  event.target.classList.remove( 'playing' );
}