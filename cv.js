
// NAVIGATION

function onClickNavigationLeft(div) {

    let content = "content-latest";

    displayContent(content);
}

function onClickNavigationMiddle(div) {
    
    let content = "content-professional";

    displayContent(content);
}

function onClickNavigationRight(div) {
    
    let content = "content-forFun";

    displayContent(content);
}

function displayContent(content) {

    hideContent();

    let div = document.getElementById(content);

    div.style.display = "block";
    console.log(content+": "+div.style.display);
}

// CONTENT
function hideContent(element) {

    let elements = document.getElementsByClassName("content");

    Array.prototype.forEach.call(elements, element => {
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