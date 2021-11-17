
document.addEventListener("DOMContentLoaded", function Show(){
    var goods =  JSON.parse(window.localStorage.getItem('objectItems'));

    if(goods == null)
    {
        window.localStorage.setItem("objectItems", JSON.stringify(window.objectItems));
        goods =  JSON.parse(window.localStorage.getItem('objectItems'));
    } 
   


   
    for(let x = 0; x < goods.length; x++)
    {
        const div = document.createElement('div');
        //div.style.cssText  = "display: inline;";
        div.className = 'container__item container__item--busketImage';
     
        div.innerHTML = ` 
        
        <div class="container__item container__item--image">
            <img width="200" height="200" src="${goods[x].imageUrl}" alt="watch"/>
        </div>
        <label id ="${goods[x].id}" class="container__item container__item--category" >Category:${goods[x].category}</label>
        <label class="container__item container__item--para" >Name:${goods[x].name}</label>
        <label class="container__item container__item--para" >Description:${goods[x].description}</label>
        <button type="button" id="clickBuy${goods[x].id}" class="container__item container__item--buttonBuy" onclick="clickToBuy()">Buy</button>
        `

        document.getElementById('contentGood').appendChild(div);
    }
   
});

const ShowGoods = () =>
{
    Show();
}
export default {ShowGoods};