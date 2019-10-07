
let fadeInSpeed = "fast";
let overlay;

$(document).ready(function () {

    /** NAVIGATION */

    $("#header-latest").click(function () {

        let content = "content-latest";

        hideContent(content);
    });

    $("#header-professional").click(function () {

        let content = "content-professional";

        hideContent(content);
    });

    $("#header-contains").click(function () {

        let content = "content-contains";

        hideContent(content);
    });

    $("#header-docs").click(function () {

        let content = "content-documents";

        hideContent(content);
    });

    $("#ecube").click(function () {

        overlay = event.target.id;

        overlayOn();
    });

    $("#overlay").click(function () {

        overlayOff();
    });
});

// CONTENT
function hideContent(content) {

    let elements = document.getElementsByClassName("content");

    Array.prototype.forEach.call(elements, element => {

        element.style.display = "none";
    });

    $("#" + content).fadeIn(fadeInSpeed);
}

// OVERLAY
function overlayOn(clickedElementId) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById(overlay).style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById(overlay).style.display = "none";
} 