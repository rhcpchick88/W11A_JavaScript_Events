//made an event to change the text to picture upon hovering, I used two functions one for hovering over and one for when the mouse stops hovering.
function makePicture(eventDetails){
    console.log(eventDetails);
    enterprise.innerHTML = `<img src="https://ca.startrek.com/sites/default/files/images/2019-01/81374713d991042a0e18865aa693cc24.jpg">`;
}
let enterprise = document.getElementById('enterprise');
enterprise.addEventListener('mouseover', makePicture);  //hovering over shows a picture

function turnBack(eventDetails){ 
    console.log(eventDetails);
    enterpriseOut.innerHTML = 'USS Enterprise NCC 1701<h1>Hover over me!</h1>';
}
let enterpriseOut = document.getElementById('enterprise');
enterpriseOut.addEventListener('mouseout', turnBack); //stop hovering returns to the original text

//made an event to click the button and show a pic where the button was clicked
function clickShip(eventDetails){
    console.log(eventDetails);
    ship.innerHTML = `<img src="https://www.smallartworks.ca/Gallery/Klingon/Klingon1.JPG">`;
}
let ship = document.getElementById('ship');
ship.addEventListener('click', clickShip);

//made an event when the spacebar is pressed in the input, it shows a picture of a ship below.
function pressSpacebar(spacebar){
    console.log(spacebar);
    textContent = `${space.key}`;  //indicating that the inner text of the input will have to be the space key
    spaceship.innerHTML=`<img src="https://i.pinimg.com/originals/f3/85/de/f385ded3390b57c4afe3a40ec03c0b7a.jpg">`
}
//using a second variable to change the html of a blank h3 tag, the function above achieves two things at once - 
//an event trigger when spacebar is pressed, and therefore changing the inner html of the h3.

let space = document.getElementById('space');
let spaceship = document.getElementById('spaceship');
space.addEventListener('keypress', pressSpacebar);