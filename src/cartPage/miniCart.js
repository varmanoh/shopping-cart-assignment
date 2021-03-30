let miniCart = document.getElementById('mini-cart');
let modalBackground = document.getElementById('modal-background');

if(modalBackground) {
    modalBackground.addEventListener('click', close);
}

function loadCart() {
    
    modalBackground.style.display = 'block';
   
    miniCart.style.display = 'flex';
    miniCart.innerHTML = '<object style="width:100%;" type="text/html" data="../../cartPage/miniCart.html" ></object>';
}

function close() {
    miniCart.style.display = 'none';
    modalBackground.style.display = 'none';
}