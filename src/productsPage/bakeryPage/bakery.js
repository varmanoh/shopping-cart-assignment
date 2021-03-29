import {cardDetails} from '../cardDetails.js';

(async function () {

    let productCards = document.getElementById('products');

    await fetch('../../../server/products/index.get.json')
        .then(response => response.json())
        .then(cardData => {
            productCards.innerHTML = `
                ${cardData.slice(5, 9).map(cardDetails).join("")}
            `;
        });

})();