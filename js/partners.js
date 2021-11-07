const $cardsRestaraunts = document.querySelector('.cards-restaurants');

console.log($cardsRestaraunts);

const partnersFetch = fetch('https://delivery-service-da3cc-default-rtdb.firebaseio.com/db/partners.json');
/* .then((response) => response.json())
.then((data) => {
    console.log(data);
}); */

function renderItems (data) {
    console.log(data);
    data.forEach(items => console.log(items));
}

async function showFetch (fet) {
    try {
        let response = await fet;
        let data = await response.json();
        renderItems(data);
    }
    catch (error) {
        console.error(error);
    }
}

showFetch(partnersFetch);