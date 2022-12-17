var Main = (function(){





this.init = function(){
    document.getElementById("icon-dice").addEventListener("click", function(){
        var diceWindow = new Window();
        diceWindow.createWindow(diceWindow);
    });   
   }


})();
window.addEventListener("load", this.init);






