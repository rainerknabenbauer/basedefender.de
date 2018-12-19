function firstDiv(div) {

    div.textContent = "foobar";
}

function recover(div) {
    div.textContent = "recover";
}

function onSecondDivClick(div) {
    div.parentElement.style.backgroundColor = "red";
}