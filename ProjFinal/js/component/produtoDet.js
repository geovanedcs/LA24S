export function produtoDetComponent(){
    const divDet = document.createElement('div');
    divDet.classList.add('row','mt-5');

    const divCard = document.createElement('div');
    divCard.classList.add('col-sm-6');

    const divCardPrincipal = document.createElement('div');
    divCardPrincipal.classList.add('card');

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    const h5CardTitle = document.createElement('h5');
    h5CardTitle.classList.add('card-title');
    h5CardTitle.textContent = "Special title treatment";

    const pCardText = document.createElement('p');
    pCardText.classList.add('card-text');
    pCardText.textContent = "With supporting text below as a natural lead-in to additional content.";

    const aCardLink = document.createElement('a');
    aCardLink.classList.add('btn', 'btn-primary');
    aCardLink.setAttribute('href', '#');
    aCardLink.textContent = "Go somewhere";

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

    const gerarImagens = function(src, alt, primeiro){

        const divItem = document.createElement('div');
        if(primeiro){
            divItem.classList.add('carousel-item', 'active');
        }else {
            divItem.classList.add('carousel-item');
        }

        const img = document.createElement('img');
        img.classList.add('d-block', 'w-100');
        img.src = src;
        img.alt = alt;
        
        divItem.appendChild(img);
        
        return divItem;
    }

    divInner.appendChild(gerarImagens('https://mdbcdn.b-cdn.net/img/new/slides/041.webp', 'Wild Landscape', true));
    divInner.appendChild(gerarImagens('https://mdbcdn.b-cdn.net/img/new/slides/042.webp', 'Camera', false));
    divInner.appendChild(gerarImagens('https://mdbcdn.b-cdn.net/img/new/slides/043.webp', 'Exotic Fruits', false));
    divImgCards.appendChild(divInner);

    const btnPrev = document.createElement('button');
    btnPrev.classList.add('carousel-control-prev');
    btnPrev.type = "button";
    btnPrev.dataset.mdbTarget = "#carouselExampleControls";
    btnPrev.dataset.mdbSlide = "prev";

    const spanPrev = document.createElement('span');
    spanPrev.classList.add('carousel-control-prev-icon');
    spanPrev.setAttribute('aria-hidden', 'true');

    const spanPrevVis = document.createElement('span');
    spanPrevVis.classList.add('visually-hidden');
    spanPrevVis.textContent = "Anterior";

    btnPrev.appendChild(spanPrev);
    btnPrev.appendChild(spanPrevVis);

    const btnNext = document.createElement('button');
    btnNext.classList.add('carousel-control-next');
    btnNext.type = "button";
    btnNext.dataset.mdbTarget = "#carouselExampleControls";
    btnNext.dataset.mdbSlide = "next";

    const spanNext = document.createElement('span');
    spanNext.classList.add('carousel-control-next-icon');
    spanNext.setAttribute('aria-hidden', 'true');

    const spanNextVis = document.createElement('span');
    spanNextVis.classList.add('visually-hidden');
    spanNextVis.textContent = "Próximo";

    btnNext.appendChild(spanNext);
    btnNext.appendChild(spanNextVis);

    divImgCards.appendChild(btnPrev);
    divImgCards.appendChild(btnNext);

    

    divCard.appendChild(divImgCards);
    divCardMain.appendChild(divCardPrincipal);
    divDet.appendChild(divCard);
    divDet.appendChild(divCardMain);
    
    return divDet;
}