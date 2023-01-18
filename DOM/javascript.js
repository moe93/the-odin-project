
// Appending a DOM element to the webpage
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'I have added this through my .js file.';

container.appendChild(content);

// Manipulating already existeng elements
const defered_text = document.querySelector('.defered-text');
defered_text.textContent = 'The website should say this AFTER the javascript has loaded.';

// Deleteing elements
const to_delete = document.querySelector('.to-delete');
to_delete.remove();

// Create a parent node (element rught under <body></body>)
const parent_node = document.createElement( 'parent-node' );
parent_node.classList.add( 'parent-node' );
document.body.appendChild( parent_node )

// Change styling using js
const styled_text = document.createElement('p');
styled_text.classList.add( 'styled-text' );
styled_text.textContent = 'Very stylish text from JS. So RAD!';
parent_node.appendChild(styled_text);
// styled_text.style['background-color'] = 'red';
// styled_text.style.cssText = 'padding: 0;';
styled_text.setAttribute( 'style', 'color: green; font-size: 30px; background-color: black;' );

// Adding event listeners
function alertFunction_1()
{
    alert( "Method 1" );
}
function alertFunction_2()
{
    alert( "Method 2" );
}

const button_1 = document.querySelector( '.button-1' );
const button_2 = document.querySelector( '.button-2' );
const button_3 = document.querySelector( '.button-3' );
button_1.onclick = alertFunction_1;
button_2.addEventListener( 'click', alertFunction_2 );
button_3.addEventListener( 'click', () =>
{
    alert('Method 3');
} );