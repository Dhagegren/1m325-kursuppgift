/*
*Window klassen skapar alla html element när den kallas på.
*/
var Window = function () {

    this.diceWindowWrapper = document.createElement("div");
    this.diceMenubarWrapper = document.createElement("div");
    this.closeBtn = document.createElement("div");
    this.diceToolbarWrapper = document.createElement("div");
    this.ulList = document.createElement("ul");
    this.add = document.createElement("li");
    this.remove = document.createElement("li");
    this.roll = document.createElement("li");
    this.emptyLi = document.createElement("li");
    this.toolbarCounter = document.createElement("ul");
    this.diceContentWrapper = document.createElement("div");
    this.diceContentWrapper = document.createElement("div");
    this.diceUl = document.createElement("ul");

}

/* 
*Lägger till klasser och appendar alla html element till det window objekt som har skapats.
*@returns {html} - skapar html och skickar tillbaka till objektet
*/
Window.prototype.createWindow = function () {

    this.diceWindowWrapper.setAttribute("class", "dice-window-wrapper");
    document.getElementById("page-content-wrapper").appendChild(this.diceWindowWrapper);


    this.diceMenubarWrapper.setAttribute("class", "dice-menubar-wrapper");
    this.diceWindowWrapper.appendChild(this.diceMenubarWrapper);


    this.closeBtn.setAttribute("class", "close");
    this.closeBtn.addEventListener("click", this.closeWindow.bind(this));
    this.diceMenubarWrapper.appendChild(this.closeBtn);


    this.diceToolbarWrapper.setAttribute("class", "dice-toolbar-wrapper");
    this.diceWindowWrapper.appendChild(this.diceToolbarWrapper);

    this.diceToolbarWrapper.appendChild(this.ulList);

    this.add.setAttribute("class", "add");
    this.add.addEventListener("click", this.addDice.bind(this));

    this.add.addEventListener("click", this.countPoints.bind(this));
    this.add.addEventListener("click", this.addSound.bind(this));
    this.ulList.appendChild(this.add);

    this.remove.setAttribute("class", "remove");
    this.remove.addEventListener("click", this.removeDice.bind(this));
    this.remove.addEventListener("click", this.countPoints.bind(this));
    this.ulList.appendChild(this.remove);

    this.roll.setAttribute("class", "roll");
    this.roll.addEventListener("click", this.diceReRoll.bind(this));
    this.roll.addEventListener("click", this.countPoints.bind(this));
    this.ulList.appendChild(this.roll);

    this.ulList.appendChild(this.emptyLi);

    this.toolbarCounter.setAttribute("class", "dice-toolbar-counter-wrapper");
    this.emptyLi.appendChild(this.toolbarCounter);

    for (let i = 0; i < 5; i++) {
        this.liZero = document.createElement("li");
        this.liZero.setAttribute("class", "zero");
        this.toolbarCounter.appendChild(this.liZero);
    }


    this.diceContentWrapper.setAttribute("class", "dice-content-wrapper");
    this.diceWindowWrapper.appendChild(this.diceContentWrapper);


    this.diceContentWrapper.appendChild(this.diceUl);
    this.diceArr = [];
}


/*
*Nollställer räknaren. Tar ut värdet från alla tärningar, omvandlar värdet till en textsträng och sätter en korrekt css.
*/
Window.prototype.countPoints = function () {
    for (let i = 0; i < this.toolbarCounter.children.length; i++) {
        this.toolbarCounter.children[i].setAttribute("class", "zero");
    }

    let letters = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let points = 0;
    let index = 4;

    for (let i = 0; i < this.diceArr.length; i++) {
        points += parseInt(this.diceArr[i].value);
    }
    var pointsString = Array.from(String(points));
    pointsString.reverse();
    for (let i = 0; i < pointsString.length; i++) {
        let result = pointsString[i].replace(/\b\d\b/g, m => letters[m]);
        this.toolbarCounter.children[index].setAttribute("class", result);
        index--;
    }

}

/*
*Tar väck diceWindowWrapper och tar därmed väck rutan från fönstret
*/
Window.prototype.closeWindow = function () {
    this.diceWindowWrapper.remove();
}

/*
*Kollar om diceArr är mindre än 40 och om det får plats mer tärningar. Om det finns plats skapas ett nytt tärningsobjekt, kallar på rollDice för att ge den ett värde. 
*Pushar in tärningen i diceArr och appendar elementet till listan för tärningar.
*/
Window.prototype.addDice = function () {
    if (this.diceArr.length < 40) {
        var dice = new Dice();
        dice.rollDice(dice);
        this.diceArr.push(dice);
        this.diceUl.appendChild(dice.diceElement);
    }
}

/*
*Skapar this.last vilket hämtar det sista indexet från this.diceArr. Tar väck elementet och tar väck objektet från diceArr
*/
Window.prototype.removeDice = function () {
    this.last = this.diceArr[this.diceArr.length - 1];
    this.last.diceElement.parentNode.removeChild(this.last.diceElement);
    this.diceArr.pop();
}

/*
*Skapar ett HTMLAudioElement och spelar upp ljudet när funktionen kallas.
*/
Window.prototype.addSound = function () {
    new Audio(this.src = "wav/add.wav").play();
}

/*
*Går igenom alla tärningar i diceArr och kallar på reRoll som ger alla tärningar ett nytt värde
*/
Window.prototype.diceReRoll = function () {
    for (let i = 0; i < this.diceArr.length; i++) {
        this.diceArr[i].reroll();
    }
}










