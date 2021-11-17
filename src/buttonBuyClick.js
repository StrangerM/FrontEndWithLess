
const clickToBuy = () =>
{
    ChangeColor();
    ChangeInnerText();
}

function ChangeColor() {
    document.getElementById(event.srcElement.id).style.backgroundColor = "black";
}

function ChangeInnerText(params) {
    document.getElementById(event.srcElement.id).innerHTML = "Added";
}

export default {clickToBuy};
