let miniCart = document.getElementById('mini-cart');
let miniCartSection = document.getElementById('mini-cart-section')
let modalBackground = document.getElementById('modal-background');
let closeBtn = document.querySelector('a.close-btn');

if (modalBackground && closeBtn) {
    modalBackground.onclick = () => close();
    closeBtn.onclick = () => close();
}

function loadCart() {
    
    modalBackground.style.display = 'block';
   
    miniCartSection.style.display = 'block';
    
    if (window.location.href == `http://127.0.0.1:8080/src/homePage/home.html`) {
        miniCart.innerHTML = '<object style="width:100%;height:100%" type="text/html" data="../cartPage/miniCart.html" ></object>';
    }
    else {
        miniCart.innerHTML = '<object style="width:100%;height:100%" type="text/html" data="../../cartPage/miniCart.html" ></object>';
    }
}

function close() {
    miniCartSection.style.display = 'none';
    modalBackground.style.display = 'none';
}