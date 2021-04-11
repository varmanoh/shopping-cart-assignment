export const cardDetails = (card) => `
    <div class="card">
        <div class="card-heading">
            <h2>${card.name}</h2>
        </div>
        <div class="card-contents d-flex">
            <img src="../../..${card.imageURL}" alt="fruits" class="product-img">
            <div class="card-details">
                <p class="card-text">
                    ${card.description}
                </p>
                <button class="app-btn buy-btn">Buy Now @ Rs.${card.price}</button>
                <div class="buy-button-desktop">
                    <span class="rate">MRP Rs.${card.price}</span>
                    <button class="app-btn buy-btn-desktop">Buy Now</button>
                </div>
            </div>
        </div>
        <button class="app-btn buy-btn-tablet">Buy Now @ Rs.${card.price}</button>
    </div>
`;
