let miniCart = document.getElementById('mini-cart');
let miniCartSection = document.getElementById('mini-cart-section')
let modalBackground = document.getElementById('modal-background');
let closeBtn = document.querySelector('a.close-btn');

if(modalBackground) {
    modalBackground.addEventListener('click', close);
}

if(closeBtn) {
    closeBtn.addEventListener('click', close);
}

function loadCart() {
    
    modalBackground.style.display = 'block';
   
    miniCartSection.style.display = 'block';
    miniCart.innerHTML = '<object style="width:100%;height:100%" type="text/html" data="../../cartPage/miniCart.html" ></object>';
}

function close() {
    miniCartSection.style.display = 'none';
    modalBackground.style.display = 'none';
}