
function AddNewItem(){

   interface Item {
      name : string,
      description: string,
      id: number,
      temp: string,
      status : 0,
      imageUrl : string,
      category : number
   };  
         var oldItems : Array<Item> = JSON.parse((window as any).localStorage.getItem('objectItems'));

         if(oldItems == null)
         {
            window.localStorage.setItem("objectItems", JSON.stringify((window as any).objectItems));
         }
      
         var file : any = document.getElementById("upload");
         var select : any = document.getElementById('selectId');
         select = select.options[select.selectedIndex].value
         
      let item : Item = {
      name : (<HTMLInputElement>document.getElementById("nameId")).value,
      description : (<HTMLInputElement>document.getElementById("DescrId")).value,
      id : oldItems.length,
      temp : select,
      status : 0,
      imageUrl : "../image/" + file.files[0].name,
      category : 0
      };

      if (item.temp == "Watches")
      {
         item.category = 1
      }
      if (item.temp == "Mobile phones")
      {
         item.category = 2
      }
      if (item.temp == "Audio")
      {
         item.category = 3
      }
      if (item.temp == "Game gadgets")
      {
         item.category = 4
      }

      
      oldItems.push(
         {
         category : item.category,
         id : item.id, 
         name: item.name, 
         description: item.description, 
         imageUrl : item.imageUrl, 
         status: item.status,
         temp : item.temp
         });

         window.localStorage.removeItem("objectItems");
         
         window.localStorage.setItem('objectItems', JSON.stringify(oldItems));
   }
     
   const AddNew = () =>{
   
      AddNewItem();
   }
    
    export {AddNew};