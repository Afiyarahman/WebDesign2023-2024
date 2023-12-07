// this function changes the content of the heading to new contentt
function myClickFunction() {
    var headingElement = document.getElementById('pageheading');
    headingElement.firstChild.nodeValue = 'New heading';
}
// this functions detects the clicking on the paragraph
function myLoadFunction_2() {
    var paragraphElement = document.getElementById('paragraph');
    paragraphElement.addEventListener('click', myClickFunction);
}

// this function detects the clicking on the heading
/*function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', myClickFunction);
}
*/


document.addEventListener('DOMContentLoaded', myLoadFunction_2);