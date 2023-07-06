//creating a variable for css elements.
var css = document.querySelector('h3');

//creating another two variables for coloring purpose.
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

//taken a body variable 
var body = document.querySelector('#gradient');

//function declaration
function setGradient()
{
    body.style.background = 
      'linear-gradient(to right,'+ color1.value + ',' + color2.value + ')';

      css.textContent = body.style.background +";";
}
