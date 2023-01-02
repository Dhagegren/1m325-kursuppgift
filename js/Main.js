var Main = (function(){



this.init = function(){
    document.getElementById("icon-dice").addEventListener("click", function(){
        var diceWindow = new Window();
        diceWindow.createWindow(diceWindow);

	 var drag = new DragnDrop();
     var x = drag.add(diceWindow.diceWindowWrapper, diceWindow.diceMenubarWrapper);
    });
     
   }

})();
window.addEventListener("load", this.init);






