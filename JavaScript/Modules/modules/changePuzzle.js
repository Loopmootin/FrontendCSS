class ChangePuzzleCat {

    constructor() {
        this.changePuzzleCatElement = document.querySelector("#cat-puzzle");
        this.changePuzzleWinElement = document.querySelector("#win-puzzle");
        this.changeBackground = document.querySelectorAll(".brick img");

        this.changePuzzleCat();
        this.changePuzzleWin();
        console.log(this);
    }

    changePuzzleCat() {
        this.changePuzzleCatElement.addEventListener("click", () => {
            //alert("i love puss");
            let background = document.getElementById("background");

            this.changeBackground.forEach(element => {
                let newSrc = element.src.replace("win", "kitty");
                element.src = newSrc;
            });

            let newBg = background.src.replace("win", "kitty");
            background.src = newBg;
        });
    }

    changePuzzleWin() {
        this.changePuzzleWinElement.addEventListener("click", () => {
            //alert("i love win");
            let background = document.getElementById("background");

            this.changeBackground.forEach(element => {
                let newSrc = element.src.replace("kitty", "win");
                element.src = newSrc;
            });

            let newBg = background.src.replace("kitty", "win");
            background.src = newBg;
        });
    }
}

export default ChangePuzzleCat;