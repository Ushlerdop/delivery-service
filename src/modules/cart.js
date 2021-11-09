const cart = () => {
    const $buttonCart = document.getElementById('cart-button');
    const $modalCart = document.querySelector('.modal-cart');
    const $closeModalCart = $modalCart.querySelector('.close');
    const $cartBody = $modalCart.querySelector('.modal-body');

    const cardItem = JSON.parse(localStorage.getItem('cart'));
    console.log(cardItem);
    function renderItems(data) {
        data.forEach(({name, price, id, count} ) => {
            const $foodRow = document.createElement('div');
            $foodRow.classList.add('food-row');
            $foodRow.innerHTML = `
                <span class="food-name">${name}</span>
                <strong class="food-price">${price} ₽</strong>
                <div class="food-counter">
                    <button class="counter-button">-</button>
                    <span class="counter">${count}</span>
                    <button class="counter-button">+</button>
                </div>
            `;
            $cartBody.append($foodRow);
        });
    }  

    $buttonCart.addEventListener('click', () => {
        $modalCart.classList.add('is-open');
    })

    $closeModalCart.addEventListener('click', () => {
        $modalCart.classList.remove('is-open');
    })

    renderItems(cardItem);
}

export default cart