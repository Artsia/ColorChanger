
//generate smaller divs in the outer div with class="Container"
//generate smaller divs in conatainer by repeatively calling the createBox function

/**Create 100 boxes at random locations inside a div with the id container 
(see below). When the mouse moves over a box, the box should be removed from the 
div. When the div has one child box, pop up an alert that says, "last child!". 
Add a button to create more boxes. If the user clicks on the button, your JS code should 
generate 100 more boxes (even if you have existing boxes on the screen).
*/

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}




/**draw the box*/
function drawBox()
{

    const canvas = document.querySelector('.myCanvas');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    //fill shape with random color
    ctx.fillStyle = generateRandomColor();

    //create random points for x and y
     let x = Math.floor(Math.random()*650)
     let y = Math.floor(Math.random()*650)
     ctx.fillRect(x, y, 30, 35);
}

/*function drawBoxes()
{
    for(let i = 0; i < 100; i++)
    {
        drawBox();
    }
}*/





/**alert the user when their is one more box in the div element.
 * alert that says, "last child!
*/
function alertUser(){}

/**remove the box from the div element when mouse hovers on boxes*/
function removeBoxMouseOver(){}

/**used by button to create more boxes in the div element 
 * generate 100 more boxes in the div element
*/
function createMoreBoxes(){}


/*practice 

const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 150);

//green rec
ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);*/

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics



/**mousemove
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event*/

/**https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events*/