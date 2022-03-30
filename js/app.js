function makePicture(eventDetails){
    console.log(eventDetails);
    enterprise.innerHTML = `<img src="https://ca.startrek.com/sites/default/files/images/2019-01/81374713d991042a0e18865aa693cc24.jpg">`;
}
let enterprise = document.getElementById('enterprise');
enterprise.addEventListener('mouseover', makePicture);

function turnBack(eventDetails){
    console.log(eventDetails);
    enterpriseOut.innerHTML = 'USS Enterprise NCC 1701<h1>Hover over me!</h1>';
}
let enterpriseOut = document.getElementById('enterprise');
enterpriseOut.addEventListener('mouseout', turnBack);

function clickShip(eventDetails){
    console.log(eventDetails);
    ship.innerHTML = `<img src="https://www.smallartworks.ca/Gallery/Klingon/Klingon1.JPG">`;
}
let ship = document.getElementById('ship');
ship.addEventListener('click', clickShip);

function pressSpacebar(spacebar){
    console.log(spacebar);
    textContent = `${space.key}`;
    spaceship.innerHTML=`<img src="https://i.pinimg.com/originals/f3/85/de/f385ded3390b57c4afe3a40ec03c0b7a.jpg">`
}

let space = document.getElementById('space');
let spaceship = document.getElementById('spaceship');
space.addEventListener('keypress', pressSpacebar);