var firstPage = false;

const clickToBuy = () =>
{
    ChangeColor();
    ChangeInnerText();
    status = true;

}

function ChangeColor() {
    document.getElementById("clickBuy").style.backgroundColor = "yellow";
}

function ChangeInnerText(params) {
    document.getElementById("clickBuy").innerHTML = "Added";
}

export default {clickToBuy};
