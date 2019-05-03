import ChangePuzzleCat from './modules/changePuzzle.js';

/* RANDOM PLACE BRICKS */
let placeRandom = document.querySelectorAll(".brick img");

placeRandom.forEach(element => {
    let randomNumberY = Math.floor((Math.random() * 400) + 1);
    let randomNumberX = Math.floor((Math.random() * 10) + 1);
    
    let randomNumberZ = Math.floor((Math.random() * 10) + 1);

    element.style.top = 0;
    element.style.left = -30 + "%";

    element.style.zIndex = randomNumberZ;

    element.style.transform = "translate(" + randomNumberX + "%," + randomNumberY + "%)";
});


/* CHANGE BACKGROUND IMAGE */
let changePuzzleCat = new ChangePuzzleCat();


/* HELP BUTTON */
let helpButton = document.getElementById("help-button");
let background = document.getElementById("background");

helpButton.addEventListener('mousedown', function () {

    background.style.display = "block";
}, true);

helpButton.addEventListener('mouseup', function () {

    background.style.display = "none";
}, true);


/* NO MOVE */
let noClick = document.getElementById("no-click");
noClick.addEventListener('mouseover', funnyButton);

function funnyButton() {
    noClick.style.position = "absolute";
    noClick.style.left = Math.random() * 100 + "px";
    noClick.style.top = Math.random() * 100 + "px";
};


/* MOVE BRICKS */
let move = document.querySelectorAll(".brick img");

move.forEach(element => {

    // MOVE A BRICK
    if (element) {

        let mousePosition;
        let offset = [0, 0];
        let isDown = false;

        element.addEventListener('mousedown', function (e) {

            isDown = true;
            offset = [
                element.offsetLeft - e.clientX,
                element.offsetTop - e.clientY
            ];

        }, true);

        document.addEventListener('mouseup', function () {

            isDown = false;
        }, true);

        document.addEventListener('mousemove', function (event) {

            event.preventDefault();
            if (isDown) {

                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };

                element.style.left = (mousePosition.x + offset[0]) + 'px';
                element.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);
    }
});