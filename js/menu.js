const partnersFetch = fetch(`https://delivery-service-da3cc-default-rtdb.firebaseio.com/db/gusi-lebedi.json`);
/* .then((response) => response.json())
.then((data) => {
    console.log(data);
}); */

function renderItems (data) {
    console.log(data);
    data.forEach(items => console.log(items));
}

async function showFetch (fet) {
    let response = await fet;
    let data = await response.json();
    renderItems(data);
}

showFetch(partnersFetch);