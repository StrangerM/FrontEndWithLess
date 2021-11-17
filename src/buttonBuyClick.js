
const clickToBuy = () =>
{
    ChangeColor();
    ChangeInnerText();
}

function ChangeColor() {
    document.getElementById("clickBuy").style.backgroundColor = "black";
}

function ChangeInnerText(params) {
    document.getElementById("clickBuy").innerHTML = "Added";
}

export default {clickToBuy};
