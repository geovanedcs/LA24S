export function renderCart(){

    const cartArray = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const divCart = document.createElement('div');
    divCart.classList.add('row', 'mt-5');
    divCart.style.padding = "10px";
    const divCard = document.createElement('div');
    divCard.classList.add('col-sm-6');
    const divCardPrincipal = document.createElement('div');
    divCardPrincipal.classList.add('card');
    divCardPrincipal.style.height = "300px";
    divCardPrincipal.style.backgroundColor = "#f49f0a";
    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    const h5CardTitle = document.createElement('h5');
    h5CardTitle.classList.add('card-title');
    h5CardTitle.textContent = "Carrinho";
    const pCardText = document.createElement('p');
    pCardText.classList.add('card-text');
    const aCardLink = document.createElement('button');
    aCardLink.type = "button";
    aCardLink.classList.add('btn', 'btn-primary');
    aCardLink.textContent = "Finalizar compra";
    aCardLink.addEventListener('click', () => {
        localStorage.removeItem('shoppingCart');
        window.location.href = 'index.html';
    });
    divCardBody.appendChild(h5CardTitle);
    divCardBody.appendChild(pCardText);
    divCardBody.appendChild(aCardLink);
    divCardPrincipal.appendChild(divCardBody);
    const divCardMain = document.createElement('div');
    divCardMain.classList.add('col-sm-6');
    const divImgCards = document.createElement('div');
    divImgCards.classList.add('carousel', 'slide');
    divImgCards.id = "carouselExampleControls";
    divImgCards.dataset.mdbRide = "carousel";
    const divInner = document.createElement('div');
    divInner.classList.add('carousel-inner');
    cartArray.forEach(prod => {
        const divItem = document.createElement('div');
        divItem.classList.add('carousel-item');
        const img = document.createElement('img');
        // img.src = prod.images[0];
        img.classList.add('d-block', 'w-100');
        img.alt = prod.name;
        divItem.appendChild(img);
        divInner.appendChild(divItem);
    });
    divImgCards.appendChild(divInner);
    divCardMain.appendChild(divImgCards);
    divCard.appendChild(divCardPrincipal);
    divCard.appendChild(divCardMain);
    divCart.appendChild(divCard);
    return divCart;
}

export function addToCart(product){
    const cartArray = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    console.log(cartArray);
    const arrayProducts = JSON.parse(localStorage.getItem('products'));
    const ifExists = cartArray.find(prod => prod.id === product.id);
    if(cartArray.length === 0 || ifExists === undefined){
        const productCart = {
            id: product.id,
            name: product.name,
            price: product.price,
            amout: product.amout = 1
        };
        cartArray.push(productCart);
        console.log("passei aqui")
        localStorage.setItem('shoppingCart', JSON.stringify(cartArray));
        arrayProducts.products[product.id].amout -= 1;
        localStorage.setItem('products', JSON.stringify(arrayProducts));
        return;
    }
        console.log(ifExists);
        if(arrayProducts.products[ifExists.id].amout === 0){
            alert('Produto indisponível');
            return;
        }else if(arrayProducts.products[ifExists.id].amout > 0){
            ifExists.amout += 1;
            localStorage.setItem('shoppingCart', JSON.stringify(cartArray));
            arrayProducts.products[ifExists.id].amout -= 1;
            localStorage.setItem('products', JSON.stringify(arrayProducts));
            console.log("passei aqui")
            return;
        }
    
}