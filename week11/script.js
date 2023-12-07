function myClickFunction() {
    var headingElement = document.getElementById('pageheading');
    headingElement.firstChild.nodeValue = 'New heading';
}

function myLoadFunction() {
    var paragraphElement = document.getElementById('paragraph');
    paragraphElement.addEventListener('click', myClickFunction);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);