
const clickToBuy = () =>
{
    ChangeColor();
    ChangeInnerText();
}

function ChangeColor() {

    var event : any;
    (<HTMLInputElement>document.getElementById(event.srcElement.id)).style.backgroundColor = "black";
}

function ChangeInnerText() {
    var event : any
    (<HTMLInputElement>document.getElementById(event.srcElement.id)).innerHTML = "Added";
}

export  {clickToBuy};