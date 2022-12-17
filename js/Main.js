var Main = (function(){

this.init = function(){
    document.getElementById("icon-dice").addEventListener("click", diceWindow.createWindow );
}

var diceWindow = new Window();
window.addEventListener("load", this.init);

})();