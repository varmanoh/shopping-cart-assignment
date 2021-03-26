(async function () {
    //--------------- fetching products category --------------//

    let productCategories = document.getElementById('product-category-cards');

    const filteredData = (categoryBanner) => `
        <div class="category-cards">
            <img src="../..${categoryBanner.imageUrl}" alt="${categoryBanner.name}" class="category-img">
            <div class="category-text">
                <strong class="category-heading">${categoryBanner.name}</strong>
                <p>${categoryBanner.description}</p>
                <a href="../productsPage/fruitsPage/fruits.html" class="app-btn btn-category">Explore ${categoryBanner.key}</a>
            </div>
        </div>
    `;

    const categoryCard = (categoryBanner) => 
        categoryBanner.order > 0 ? filteredData(categoryBanner) : '';

    await fetch('../../server/categories/index.get.json')
        .then(response => response.json())
        .then(categoryCards => {
            productCategories.innerHTML = `
                ${categoryCards.sort((a, b) => a.order - b.order).map(categoryCard).join('')}
            `;
        });


    //--------------- fetching carousel img ----------------//
    let banners = document.getElementById('banners');

    const bannerImage = (banner) => `
        <div class="mySlides fade">
            <img src="../..${banner.bannerImageUrl}" alt="${banner.bannerImageAlt}" class="carousel-img">
        </div>
    `;

    await fetch('../../server/banners/index.get.json')
        .then(response => response.json())
        .then(imgData => {
            banners.innerHTML = `
                ${imgData.map(bannerImage).join("")}
            `;
        });

   
    //----------------------- carousel -------------------logic for dot and button needs to be connected-----//
    let slideIndex = 1;
    let index;
    let dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    dots.forEach(el => el.addEventListener('click', event => currentSlide(event.target.getAttribute("data-el"))));

    function plusSlides(slideChange) {
        // console.log('plusSlideChange before ' + slideChange);
        // console.log('plusslideIndex before ' + slideIndex);
        showSlides(slideIndex += slideChange);
        // console.log('plusslide after ' + slideIndex);
        // console.log('plusSlideChange after ' + slideChange);
    }


    function currentSlide(slideChange) {
        showSlides(slideIndex = slideChange);
        // console.log('dot ' + slideIndex);
    }

    function showSlides(slideChange) {
        let slides = document.getElementsByClassName("mySlides");

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

})();

