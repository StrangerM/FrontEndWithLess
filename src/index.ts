  import {AddNew}  from './addNewItem';
  import {objectItems} from "./addToLocalStorage"
  import {clickToBuy} from "./buttonBuyClick"
  import {ShowGoods} from "./displayGoods"

const openNav = () => {

   (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "250px" ;
}

  const closeNav = () => {
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "0";
 }
 
  (window as any).openNav = openNav;
  (window as any).closeNav = closeNav;
  (window as any).AddNew = AddNew;
  (window as any).objectItems = objectItems;
  (window as any).clickToBuy = clickToBuy;
  (window as any).ShowGoods = ShowGoods;

  