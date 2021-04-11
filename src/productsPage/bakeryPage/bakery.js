import { cardDetails } from '../cardDetails.js';
import { cart } from '../../cartPage/cart.js';

(async function () {

    let productCards = document.getElementById('products');

    await fetch('../../../server/products/index.get.json')
        .then(response => response.json())
        .then(cardData => {
            productCards.innerHTML = `
                ${cardData.slice(5, 9).map(cardDetails).join("")}
            `;
        });

    cart(5, 9);

})();