export function cardComponent(){
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'mb-3');
    divCard.setAttribute('style', 'max-width: 540px;');

    const divRow = document.createElement('div');
    divRow.classList.add('row', 'g-0');
    divCard.appendChild(divRow);

    const divCol = document.createElement('div');
    divCol.classList.add('col-md-4');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', 'https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp');
    imgCard.setAttribute('alt', 'Trendy Pants and Shoes');
    imgCard.classList.add('img-fluid', 'rounded-start');
    divCol.appendChild(imgCard);
    divRow.appendChild(divCol);

    const divCol2 = document.createElement('div');
    divCol2.classList.add('col-md-8');
    divRow.appendChild(divCol2);

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    divCol2.appendChild(divCardBody);

    const h5Card = document.createElement('h5');
    h5Card.classList.add('card-title');
    h5Card.textContent = 'Card title';
    divCardBody.appendChild(h5Card);

    const pCard = document.createElement('p');
    pCard.classList.add('card-text');
    pCard.textContent = 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
    divCardBody.appendChild(pCard);

    const pCard2 = document.createElement('p');
    pCard2.classList.add('card-text');
    divCardBody.appendChild(pCard2);

    const smallCard = document.createElement('small');
    smallCard.classList.add('text-muted');
    smallCard.textContent = 'Last updated 3 mins ago';
    pCard2.appendChild(smallCard);

    return divCard;
}

