var Dice = function(){


Dice.prototype.rollDice = function(){
    this.diceElement = document.createElement("li");
    
    var num = Math.floor(Math.random() *6 +1);
    
    switch(num){
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