const openNav = () => {
   document.getElementById("mySidenav").style.width = "250px";
 }
 
 const closeNav = () => {
   document.getElementById("mySidenav").style.width = "0";
}

 window.openNav = openNav;
 window.closeNav = closeNav;

 const{clickToBuy} = require("./buttonBuyClick").default;
const { objectItems } = require("./addToLocalStorage").default
 const{addNewItem} = require("./addNewItem").default
 
 window.clickToBuy = clickToBuy;
 window.objectItems = objectItems;
 //window.localStorage.setItem("objectItems", JSON.stringify(objectItems))
 window.addNewItem = addNewItem;
 