var oldItems = JSON.parse(window.localStorage.getItem('objectItems')) || [];

var item = new Object();

function AddNew(){

   item.name = document.querySelector("#nameId");
   item.description = document.querySelector("#DescrId");
   item.id = oldItems.length;
   let temp = document.querySelector("#selectId");
    
   if (temp == "Watches")
   {
      item.category = 1
   }
   if (temp == "Mobile phones")
   {
      item.category = 2
   }
   if (temp == "Audio")
   {
      item.category = 3
   }
   if (temp == "Game gadgets")
   {
      item.category = 4
   }

   var file = document.getElementById("upload");

   file.addEventListener("change", function () {
      
      item.imageUrl = file.files[0].name;

   }, false);
   
   oldItems.push(item);
   window.localStorage.setItem('itemsArray', JSON.stringify(oldItems));
}
 
const addNewItem = () =>{
   AddNew();
}
export default {addNewItem};

  