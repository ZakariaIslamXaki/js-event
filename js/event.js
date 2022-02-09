function clickGreen() {
    document.body.style.backgroundColor = 'Green'
}
const yellowButton = document.getElementById ('yellow-button');
yellowButton.onclick = makeYellow;

function makeYellow(){
    document.body.style.backgroundColor = 'Yellow';
}
const orangeButton = document.getElementById('orange-button');
orangeButton.onclick = function (){
    document.body.style.backgroundColor = 'Orange';
}

const pinkButton = document.getElementById('pink-button');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'hotPink';
}

const cyanButton = document.getElementById('cyan-button');
cyanButton.addEventListener('click', function (){
    document.body.style.backgroundColor = 'Cyan';
})