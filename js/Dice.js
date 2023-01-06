/*
*Dice är klassen för tärningar och har en variabel som är value.
*/
var Dice = function () {

    this.value = 0;

    /*
    *metoden skapar ett li element för tärningen. Rullar fram en siffra mellan 1-6 och sätter sedan en css för vilket värde det är. Sätter sedan variabeln value till det värdet.
    */
    Dice.prototype.rollDice = function () {
        this.diceElement = document.createElement("li");

        var num = Math.floor(Math.random() * 6 + 1);

        switch (num) {
            case 1: this.diceElement.setAttribute("class", "dice dice-side-one");
                break;
            case 2: this.diceElement.setAttribute("class", "dice dice-side-two");
                break;
            case 3: this.diceElement.setAttribute("class", "dice dice-side-three");
                break;
            case 4: this.diceElement.setAttribute("class", "dice dice-side-four");
                break;
            case 5: this.diceElement.setAttribute("class", "dice dice-side-five");
                break;
            case 6: this.diceElement.setAttribute("class", "dice dice-side-six");
                break;
        }
        this.value = num;
    }

    /*
    *reRoll rullar en siffra mellan 1-6 och sätter sedan css klassen till den siffran som rullats och sätter variablen value till samma siffra.
    */
    Dice.prototype.reroll = function () {
        var num = Math.floor(Math.random() * 6 + 1);
        switch (num) {
            case 1: this.diceElement.setAttribute("class", "dice dice-side-one");
                break;
            case 2: this.diceElement.setAttribute("class", "dice dice-side-two");
                break;
            case 3: this.diceElement.setAttribute("class", "dice dice-side-three");
                break;
            case 4: this.diceElement.setAttribute("class", "dice dice-side-four");
                break;
            case 5: this.diceElement.setAttribute("class", "dice dice-side-five");
                break;
            case 6: this.diceElement.setAttribute("class", "dice dice-side-six");
                break;
        }
        this.value = num;
    }

}