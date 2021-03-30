function openCloseMenu() {

    let iClass = document.getElementById('icon');
    let dropDown = document.querySelector(".drop-nav");
    
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
        iClass.className = "fas fa-chevron-down fa-2x";

    } else {
        dropDown.style.display = "block";
        iClass.className = "fal fa-times fa-2x";
    }
}