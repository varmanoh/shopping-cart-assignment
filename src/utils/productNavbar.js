function openCloseMenu() {
    let myHamburgerButton = document.querySelector(".drop-nav");
    if (myHamburgerButton.style.display === "block") {
        myHamburgerButton.style.display = "none";
    } else {
        myHamburgerButton.style.display = "block";
    }
}