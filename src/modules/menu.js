const menu = () => {
    const $cardsMenu = document.querySelector('.cards-menu');
    const $restaurantTitle = document.querySelector('.restaurant-title');
    const $rating = document.querySelector('.card-info .rating');
    const $price = document.querySelector('.card-info .price');
    const $category = document.querySelector('.card-info .category');

    function addToCart (cardItem) {
        const cartArray = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : 
        [];

        let checkTheSame = cartArray.findIndex((element) => element.id === cardItem.id);
        
        if (checkTheSame === -1) {
            cartArray.push(cardItem);
        } else {
            ++cartArray[checkTheSame].count;
        }

        localStorage.setItem('cart', JSON.stringify(cartArray));
    }

    function renderItems (data, place) {
        data.forEach( ({description, id, image, name, price}) => {
            const $divCard = document.createElement('div');
            $divCard.classList.add('card');
            $divCard.innerHTML = `
                <img src="${image}" alt="${name}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">${name}</h3>
                    </div>
                    <!-- /.card-heading -->
                    <div class="card-info">
                        <div class="ingredients">${description}
                        </div>
                    </div>
                    <div class="card-buttons">
                        <button class="button button-add-cart">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>            
            `;

            $divCard.querySelector('.button-card-text').addEventListener('click', () => {
                addToCart({ name, price, id, count: 1 });
            })            

            place.append($divCard);

        });
    }

    async function changeTitle (restaurant) {
        document.title = `${restaurant.name} — доставка еды на дом`;
        $restaurantTitle.textContent = restaurant.name;
        $rating.textContent = restaurant.stars;
        $price.textContent = `От ${restaurant.price} ₽`;
        $category.textContent = restaurant.kitchen;
    }

    async function appendFromFetch (fet, place) {
        try {
            let response = await fet;
            let data = await response.json();
            renderItems(data, place);
        }
        catch (error) {
            console.error(error);
        }
    }

    if (localStorage.getItem('restaurant')) {
        const restaurant = JSON.parse(localStorage.getItem('restaurant'));
        changeTitle(restaurant);
        const menuFetch = fetch(`https://delivery-service-da3cc-default-rtdb.firebaseio.com/db/${restaurant.products}`);
        appendFromFetch(menuFetch, $cardsMenu);
    } else {
        window.location.href = 'index.html';
    }
}

export default menu