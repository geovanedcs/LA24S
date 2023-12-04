export function cardComponent(){
    const prods = JSON.parse(localStorage.getItem('products'));
    const divCards = document.createElement('div');
    divCards.classList.add('row', 'text-center', 'justify-content-center')
    prods.products.forEach(prod => {
        const divCard = document.createElement('div');
        divCard.classList.add('card', 'mb-3', 'col-lg-4', 'me-2');
        const divCardBody = document.createElement('div');
        divCardBody.classList.add('row', 'g-0');
        const inDivImg = document.createElement('div');
        inDivImg.classList.add('col-md-4');
        const img = document.createElement('img');
        img.src = prod.images[0];
        img.classList.add('img-fluid', 'rounded-start');
        img.alt = prod.name;
        inDivImg.appendChild(img);
        divCardBody.appendChild(inDivImg);
        const divDesc = document.createElement('div');
        divDesc.classList.add('col-md-8');
        if(prod.amout > 0){
            divDesc.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">R$ ${prod.price}</p>
            <button class="btn btn-primary btAdicionar">Mais detalhes</button>
            </div>`;
            divDesc.querySelector('.btAdicionar').addEventListener('click', () => {
                localStorage.setItem('id', prod.id);
                window.location.href = 'produto.html';
            });
        }else{
            divDesc.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Produto indisponível</p>
            <button class="btn btn-primary btAdicionar" disabled="true">Mais detalhes</button>
            </div>`;
        }
        divCardBody.appendChild(divDesc);
        divCard.appendChild(divCardBody);
        divCards.appendChild(divCard);
    });
    console.log(divCards);
    return divCards;    
}
