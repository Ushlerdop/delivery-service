const cart = () => {
    const $buttonCart = document.getElementById('cart-button');
    const $modalCart = document.querySelector('.modal-cart');
    const $closeModalCart = $modalCart.querySelector('.close');
    const $cartBody = $modalCart.querySelector('.modal-body');
    const $buttonSend = $modalCart.querySelector('.button-primary');
    const $buttonCancel = $modalCart.querySelector('.clear-cart');

    function incrementCount(id) {
        const cartArray = JSON.parse(localStorage.getItem('cart'));

        console.log(cartArray);
        console.log(id);

        cartArray.map((item) => {
            if (item.id === id) {
                item.count++;
            }

            /* return item; */
        })

        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);
    }
    
    function decrementCount(id) {
        const cartArray = JSON.parse(localStorage.getItem('cart'));

        console.log(cartArray);
        console.log(id);

        cartArray.map((item) => {
            if (item.id === id) {
                item.count <= 0 ? item.count = 0 : item.count--;
            }
            /* return item; */
        })
        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);
    }

    function renderItems(data) {
        $cartBody.innerHTML = '';
        data.forEach(({name, price, id, count} ) => {
            const $foodRow = document.createElement('div');
            $foodRow.classList.add('food-row');
            $foodRow.innerHTML = `
                <span class="food-name">${name}</span>
                <strong class="food-price">${price} ₽</strong>
                <div class="food-counter">
                    <button class="counter-button btn-dec" data-index="${id}">-</button>
                    <span class="counter">${count}</span>
                    <button class="counter-button btn-inc" data-index="${id}">+</button>
                </div>
            `;

            $cartBody.append($foodRow);
        });
    }

    function resetCart() {
        $cartBody.innerHTML = '';
        localStorage.removeItem('cart');
        $modalCart.classList.remove('is-open');

    }
    /*-----------ДЕЛЕГИРОВАНИЕ ОБРАБОТЧИКА СОБЫТИЙ. ОДИН ОБРАБОТЧИК НА ТЕЛЕ КОРЗИНЫ, ВМЕСТО ОБРАБОТЧИКА НА КАЖДОЙ!!! КНОПКЕ - и + ------*/
    $cartBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-inc')) {
            incrementCount(e.target.dataset.index);
        } else if (e.target.classList.contains('btn-dec')) {
            decrementCount(e.target.dataset.index);
        }
    })
    //https://jsonplaceholder.typicode.com/posts
    $buttonSend.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart');

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: cartArray,
        }).then(response => {
            if (response.ok) {
                resetCart();
            }
        })
        .catch( e => console.error(e));
    })

    $buttonCancel.addEventListener('click', () => {
        $cartBody.innerHTML = '';
        localStorage.removeItem('cart');
        $modalCart.classList.remove('is-open');
    })

    $buttonCart.addEventListener('click', () => {
        const cartIsEmpty = !localStorage.getItem('cart');        
        if (cartIsEmpty) {
            $cartBody.innerHTML = '';
            const $emptyCartMessage = document.createElement('div');
            $emptyCartMessage.innerHTML = 'Ваша корзина пуста. Вернитесь в меню и выберите что-нибудь на ваш вкус :)';
            $cartBody.append($emptyCartMessage);
        }
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