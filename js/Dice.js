var Dice = function(){


Dice.prototype.rollDice = function(){
    this.diceElement = document.createElement("li");
    
    var num = Math.floor(Math.random() *6 +1);
    
    switch(num){
        case 1: this.diceElement.setAttribute("class", "dice dice-side-one");
        this.diceElement.setAttribute("value", num);
        break;
        case 2: this.diceElement.setAttribute("class", "dice dice-side-two");
        this.diceElement.setAttribute("value", num);
        break;
        case 3: this.diceElement.setAttribute("class", "dice dice-side-three");
        this.diceElement.setAttribute("value", num);
        break;
        case 4: this.diceElement.setAttribute("class", "dice dice-side-four");
        this.diceElement.setAttribute("value", num);
        break;
        case 5: this.diceElement.setAttribute("class", "dice dice-side-five");
        this.diceElement.setAttribute("value", num);
        break;
        case 6: this.diceElement.setAttribute("class", "dice dice-side-six");
        this.diceElement.setAttribute("value", num);
        break;
    }
    this.value = num;
}

}