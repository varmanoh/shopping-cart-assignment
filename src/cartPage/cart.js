export let cart = async (x = '', y = '') => {

    let cartSpan = document.querySelectorAll('.cart-items');
    let cartsButton = document.querySelectorAll('button.buy-btn');
    let cartsButtonTablet = document.querySelectorAll('button.buy-btn-tablet');
    let cartsButtonDesktop = document.querySelectorAll('button.buy-btn-desktop');

    let products = await fetch('../../../server/products/index.get.json')
        .then(response => response.json())
        .then(fetchedData => fetchedData.slice(x, y));

    for (let index = 0; index < cartsButtonDesktop.length; index++) {
        cartsButtonDesktop[index].onclick = function () {
            cartNumbers(products[index]);
            totalCost(products[index]);
        };
    }

    for (let index = 0; index < cartsButtonTablet.length; index++) {
        cartsButtonTablet[index].onclick = function () {
            cartNumbers(products[index]);
            totalCost(products[index]);
        };
    }

    for (let index = 0; index < cartsButton.length; index++) {
        cartsButton[index].onclick = function () {
            cartNumbers(products[index]);
            totalCost(products[index]);
        };
    }

    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');

        if (productNumbers) {
            for (let index = 0; index < cartSpan.length; index++) {
                cartSpan[index].textContent = `${productNumbers} Item`;
            }
        }
    }

    function cartNumbers(product) {
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);

        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            for (let index = 0; index < cartSpan.length; index++) {
                cartSpan[index].textContent = `${productNumbers + 1} Items`;
            }
        } else {
            localStorage.setItem('cartNumbers', 1);
            for (let index = 0; index < cartSpan.length; index++) {
                cartSpan[index].textContent = `1 Item`;
            }
        }

        setItems(product);

    }

    function setItems(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if (cartItems) {
            if (cartItems[product.sku] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.sku]: product
                }
            }
            if (!cartItems[product.sku].inCart) {
                cartItems[product.sku].inCart = 1;
            } else {
                cartItems[product.sku].inCart += 1;
            }
        } else {
            product.inCart = 1;
            cartItems = {
                [product.sku]: product
            }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

    }

    function totalCost(product) {
        let cartCost = localStorage.getItem('totalCost');
        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem('totalCost', cartCost + product.price);
        } else {
            localStorage.setItem('totalCost', product.price);
        }
    }

    function displayCart() {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let cartCost = localStorage.getItem('totalCost');

        let itemContainer = document.getElementById('items-section');
        let offerDetail = document.getElementById('offer-detail');
        let checkoutSection = document.querySelector('.checkout-section');
        let emptyCartDiv = document.querySelector('.checkout-btn-empty');

        if (offerDetail && checkoutSection) {
            offerDetail.style.display = 'none';
            checkoutSection.style.display = 'none';
        }

        if (cartItems && itemContainer) {
            itemContainer.innerHTML = '';
            emptyCartDiv.style.display = 'none';
            offerDetail.style.display = 'flex';
            checkoutSection.style.display = 'block';
            checkoutSection.innerHTML = `
                <p>Promo code can be applied on payment page</p>
                <a class="app-btn checkout-btn">
                    <span>Proceed to Checkout</span>
                    <span>Rs.${cartCost}</span>
                </a>
            `;

            Object.values(cartItems).map(item => {
                itemContainer.innerHTML += `
                    <div class="items">
                        <img src="../..${item.imageURL}" alt="${item.sku}" class="item-img">
                        
                        <div class="item-contents">
                            <div class="items-heading">
                                <h2>${item.name}</h2>
                            </div>
    
                            <div class="item-details">
                                <div class="item-quantity">
                                    <button class="app-btn cart-btn sub">-</button>
                                        <span class="item-qnty">${item.inCart}</span> 
                                    <button class="app-btn cart-btn add">+</button>
                                    <span class="item-qnty">X</span> Rs.${item.price}
                                </div>
    
                                <div class="item-rate">
                                    <span class="rate">Rs.${item.inCart * item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            });

            let subtractBtn = document.querySelectorAll('button.cart-btn.sub');
            for (let index = 0; index < subtractBtn.length; index++) {
                subtractBtn[index].onclick = function () {

                    //------------------- kinda works -------------------//
                    let cartObj = Object.values(cartItems)[index];
                    cartObj.inCart -= 1;

                    if (cartObj.inCart <= 0) {
                        localStorage.removeItem(cartObj);
                    }
                    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

                    let cartCost = localStorage.getItem('totalCost');
                    if (cartCost != null) {
                        cartCost = parseInt(cartCost);
                        localStorage.setItem('totalCost', cartCost - cartObj.price);
                    }
                    displayCart();
                    // console.log(cartObj);
                };
            }

            let addBtn = document.querySelectorAll('button.cart-btn.add');

            for (let index = 0; index < addBtn.length; index++) {
                addBtn[index].onclick = function () {
                    //------------------- kinda works -------------------//
                    let cartObj = Object.values(cartItems)[index];
                    cartObj.inCart += 1;

                    localStorage.setItem('productsInCart', JSON.stringify(cartItems))

                    totalCost(cartObj);
                    // cartNumbers(cartObj);
                    displayCart();
                    // console.log(cartObj);
                };
            }

        }
    }

    onLoadCartNumbers();
    displayCart();
};