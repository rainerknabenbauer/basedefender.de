
let fadeInSpeed = "fast";
let overlay = "ecube";

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

    $("#header-documents").click(function () {

        let content = "content-documents";

        hideContent(content);
    });

    $("#ecube").click(function () {

        overlay = "ecube";

        overlayOn();
    });

    $("#icamsystems").click(function () {

        overlay = "icamsystems";

        overlayOn();
    });

    $("#lmx").click(function () {

        overlay = "lmx";

        overlayOn();
    });

    $("#einsupershop").click(function () {

        overlay = "einsupershop";

        overlayOn();
    });

    $("#bachelor").click(function () {

        overlay = "bachelor";

        overlayOn();
    });

    $("#overlay").click(function () {

        removeJobOverlay();
    });
});

// CONTENT
function hideContent(content) {

    removeJobOverlay();

    let elements = document.getElementsByClassName("content");

    Array.prototype.forEach.call(elements, element => {

        element.style.display = "none";
    });

    $("#" + content).fadeIn(fadeInSpeed);
}

// OVERLAY
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById(overlay + "-description").style.display = "block";
}

function removeJobOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById(overlay + "-description").style.display = "none";
} 