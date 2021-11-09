const cart = () => {
    const $buttonCart = document.getElementById('cart-button');
    const $modalCart = document.querySelector('.modal-cart');
    const $closeModalCart = $modalCart.querySelector('.close');
    const $cartBody = $modalCart.querySelector('.modal-body');

    function renderItems(data) {
        $cartBody.innerHTML = '';
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
        console.log(JSON.parse(localStorage.getItem('cart')));
        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')));            
        }
        $modalCart.classList.add('is-open');
    })

    $closeModalCart.addEventListener('click', () => {
        $modalCart.classList.remove('is-open');

    })
}

export default cart