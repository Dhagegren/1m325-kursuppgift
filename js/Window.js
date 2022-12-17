var Window = function(){


this.createWindow = function(){
    this.diceWindowWrapper = document.createElement("div");
    this.diceWindowWrapper.setAttribute("class", "dice-window-wrapper");
    document.getElementById("page-content-wrapper").appendChild(this.diceWindowWrapper);


    this.diceMenubarWrapper = document.createElement("div");
    this.diceMenubarWrapper.setAttribute("class", "dice-menubar-wrapper");
    this.diceWindowWrapper.appendChild(this.diceMenubarWrapper);

    this.close = document.createElement("div");
    this.close.setAttribute("class", "close");
    this.diceMenubarWrapper.appendChild(this.close);

    this.diceToolbarWrapper = document.createElement("div");
    this.diceToolbarWrapper.setAttribute("class", "dice-toolbar-wrapper");
    this.diceWindowWrapper.appendChild(this.diceToolbarWrapper);

    this.ulList = document.createElement("ul");
    this.diceToolbarWrapper.appendChild(this.ulList);

    this.add = document.createElement("li");
    this.add.setAttribute("class", "add");
    this.ulList.appendChild(this.add);

    this.remove = document.createElement("li");
    this.remove.setAttribute("class", "remove");
    this.ulList.appendChild(this.remove);

    this.roll = document.createElement("li");
    this.roll.setAttribute("class", "roll");
    this.ulList.appendChild(this.roll);

    this.emptyLi = document.createElement("li");
    this.ulList.appendChild(this.emptyLi);

    this.toolbarCounter = document.createElement("ul");
    this.toolbarCounter.setAttribute("class", "dice-toolbar-counter-wrapper");
    this.emptyLi.appendChild(this.toolbarCounter);

    for ( let i=0; i<5; i++){
        this.liZero=document.createElement("li");
        this.liZero.setAttribute("class", "zero");
        this.toolbarCounter.appendChild(this.liZero);
    }

    this.diceContentWrapper = document.createElement("div");
    this.diceContentWrapper.setAttribute("class", "dice-content-wrapper");
    this.diceWindowWrapper.appendChild(this.diceContentWrapper);

    this.diceUl = document.createElement("ul");
    this.diceContentWrapper.appendChild(this.diceUl);

}


} 





