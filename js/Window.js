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
    this.ulList.appendChild(this.add);

    this.remove.setAttribute("class", "remove");
    this.remove.addEventListener("click", this.removeDice.bind(this));
    this.ulList.appendChild(this.remove);

    this.roll.setAttribute("class", "roll");
    this.roll.addEventListener("click", this.diceReRoll.bind(this));
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

Window.prototype.closeWindow = function () {
    this.diceWindowWrapper.remove();
}


Window.prototype.addDice = function () {
    if(this.diceArr.length <40){
    var dice = new Dice();
    dice.rollDice(dice);
    this.diceArr.push(dice);
    this.diceUl.appendChild(dice.diceElement);
    
    }
}
Window.prototype.removeDice = function (){
    var dies = document.getElementsByClassName("dice");
    var last = dies[dies.length -1];
    last.parentNode.removeChild(last);
    this.diceArr.pop(); 

 }

 Window.prototype.diceReRoll = function (){
    for(i=0; i<this.diceArr.length; i++){
        var num = Math.floor(Math.random() *6 +1);
      

    switch(num){
        case 1: this.diceArr[i].diceElement.setAttribute("class", "dice dice-side-one");
        break;
        case 2: this.diceArr[i].diceElement.setAttribute("class", "dice dice-side-two");
        break;
        case 3: this.diceArr[i].diceElement.setAttribute("class", "dice dice-side-three");
        break;
        case 4: this.diceArr[i].diceElement.setAttribute("class", "dice dice-side-four");
        break;
        case 5: this.diceArr[i].diceElement.setAttribute("class", "dice dice-side-five");
        break;
        case 6: this.diceArr[i].diceElement.setAttribute("class", "dice dice-side-six");
        break;
    }
    this.value = num;

    }



    //detta funkar inte, borde gå att räkna ihop poängen med värdet men kan inte kalla på funktionen där det behövs.
    Window.prototype.countPoints = function(){
        for(i=0; i<this.diceArr.length; i++){
            var bög =   this.diceArr[i].value;
            console.log(this.diceArr[i].value);
            var hets =0;
            hets += bög;
    
          }
     
    }


    

 }










