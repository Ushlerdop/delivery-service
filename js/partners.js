import { $modalAuth } from "./auth.js";

const $cardsRestaurants = document.querySelector('.cards-restaurants');

const partnersFetch = fetch('https://delivery-service-da3cc-default-rtdb.firebaseio.com/db/partners.json');
/* .then((response) => response.json())
.then((data) => {
    console.log(data);
}); */

async function checkLogin() {
    if (!localStorage.getItem('user')) {
        $modalAuth.style.display = 'flex';
    }
    else if (localStorage.getItem('user')) {
        window.location.href = 'restaurant.html';
    }
}

function renderItems (data, place) {
    data.forEach((item) => {
        const {image, name, time_of_delivery, stars, price, kitchen, products} = item;
        const a = document.createElement('a');
        a.dataset.products = products;
        a.setAttribute('href', 'restaurant.html');
        a.classList.add('card', 'card-restaurant');
        a.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <div class="card-info">
                    <div class="rating">
                        ${stars}
                    </div>
                    <div class="price">От ${price} ₽</div>
                    <div class="category">${kitchen}</div>
                </div>
            </div>
        `;

        a.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('restaurant', JSON.stringify(item));
            checkLogin();
        })

        place.append(a);
    }        
    );
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

appendFromFetch(partnersFetch, $cardsRestaurants);