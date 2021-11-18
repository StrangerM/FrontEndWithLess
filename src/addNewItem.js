
function AddNewItem(){

//window.localStorage.setItem("objectItems", JSON.stringify(window.objectItems));
var oldItems = JSON.parse(window.localStorage.getItem('objectItems'));
if(oldItems == null)
{
   oldItems = window.localStorage.setItem("objectItems", JSON.stringify(window.objectItems));
}

var item = new Object();

   item.name = document.getElementById("nameId").value;
    
   item.description = document.getElementById("DescrId").value;
   item.id = oldItems.length;
   var select = document.getElementById('selectId');
   item.category = select.options[select.selectedIndex].value;
   item.status = 0;
    
   if (item.category == "Watches")
   {
      item.category = 1
   }
   if (item.category == "Mobile phones")
   {
      item.category = 2
   }
   if (item.category == "Audio")
   {
      item.category = 3
   }
   if (item.category == "Game gadgets")
   {
      item.category = 4
   }

   var file = document.getElementById("upload");

   item.imageUrl = "../image/" + file.files[0].name;

   oldItems.push(
      {
      category : item.category,
      id : item.id, 
      name: item.name, 
      description: item.description, 
      imageUrl : item.imageUrl, 
      status: item.status
      });
   window.localStorage.removeItem("objectItems", JSON.stringify(oldItems))
   
   window.localStorage.setItem('objectItems', JSON.stringify(oldItems));
}
 
const AddNew = () =>{

   AddNewItem();
}

export default {AddNew};

  