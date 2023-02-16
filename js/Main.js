/*
*Klassen main lägger på eventlystnare för att kunna skapa ett nytt fönster, När knappen trycks på skapar ett nytt objekt av window och kallar på createWindow med det objektet.
*Lägger sedan på DragnDrop på de nya fönsterna som har skapats.
*/
var Main = {


    init: function () {
        document.getElementById("icon-dice").addEventListener("click", function () {
            var diceWindow = new Window();
            
           
            /*
            *DragnDrop bibliotek importerad från Henrik Andersen
            */
            var drag = new DragnDrop();
            var x = drag.add(diceWindow.diceWindowWrapper, diceWindow.diceMenubarWrapper);
        });
    }
}

window.addEventListener("load", Main.init);






