
$(document).ready(function(){
    
    /** NAVIGATION */

    let fadeInSpeed = "fast";

    $( "#navigationLeft" ).click(function() {

        let content = "content-latest";

        hideContent(content);

        $( "#"+content ).fadeIn(fadeInSpeed);
    });

    $( "#navigationMiddle" ).click(function() {

        let content = "content-professional";

        hideContent(content);

        $( "#"+content ).fadeIn(fadeInSpeed);
    });

    $( "#navigationRight" ).click(function() {

        let content = "content-forFun";

        hideContent(content);

        $( "#"+content ).fadeIn(fadeInSpeed);
    });
 });

// CONTENT
function hideContent(element) {

    let elements = document.getElementsByClassName("content");

    Array.prototype.forEach.call(elements, element => {
    
        element.style.display = "none";
        
    });
}