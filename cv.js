
// NAVIGATION

function onClickNavigationLeft(div) {

    displayContent(div);
}

function onClickNavigationMiddle(div) {
    
    displayContent(div);
}

function onClickNaviationLeft(div) {
    
    displayContent(div);
}

function displayContent(div) {

    hideContent();

    div.style.display = "block";
    div.textContent = "klicked";
}

// CONTENT
function hideContent(element) {

    let elements = document.getElementsByClassName("content");

    elements.array.forEach(element => {
        element.style.display = "none";
    });
}



function firstDiv(div) {

    div.textContent = "foobar";
}

function recover(div) {
    div.textContent = "recover";
}

function onSecondDivClick(div) {
    div.parentElement.style.backgroundColor = "red";
}