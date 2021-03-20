
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(slideChange) {
    showSlides(slideIndex += slideChange);
}

function currentSlide(slideChange) {
    showSlides(slideIndex = slideChange);
}

function showSlides(slideChange) {
    var index;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (slideChange > slides.length) { slideIndex = 1 }
    if (slideChange < 1) { slideIndex = slides.length }
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}