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
 const{AddNew} = require("./addNewItem").default
 const{ShowGoods} = require("./displayGoods").default
 
 window.clickToBuy = clickToBuy;
 window.objectItems = objectItems;
 window.ShowGoods = ShowGoods;

 //window.localStorage.setItem("objectItems", JSON.stringify(objectItems));

 //window.localStorage.removeItem("objectItems", JSON.stringify(objectItems))
 //window.localStorage.removeItem('itemsArray', JSON.stringify(window.objectItems));
 window.AddNew = AddNew;
 