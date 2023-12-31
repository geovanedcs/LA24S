export function carrosselComponent() {
    const carrosselDiv = document.createElement('div');
    carrosselDiv.setAttribute('id', 'carouselBasicExample');
    carrosselDiv.classList.add('carousel', 'slide', 'carousel-fade');
    carrosselDiv.setAttribute('data-mdb-ride','carousel');
    console.log(carrosselDiv);

    //adiciona botoes para mover carrossel
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('carousel-indicators');
    console.log(innerDiv)

    const card_car1 = document.createElement('button');
    card_car1.setAttribute('type','button');
    card_car1.setAttribute('data-mdb-target', '#carouselBasicExample');
    card_car1.setAttribute('data-mdb-slide-to', '0');
    card_car1.classList.add('active');
    card_car1.setAttribute('aria-current', 'true')
    card_car1.setAttribute('aria-label', 'Slide 1')

    const card_car2 = document.createElement('button');
    card_car2.setAttribute('type','button');
    card_car2.setAttribute('data-mdb-target', '#carouselBasicExample');
    card_car2.setAttribute('data-mdb-slide-to', '1');
    card_car2.setAttribute('aria-label', 'Slide 2')

    const card_car3 = document.createElement('button');
    card_car3.setAttribute('type','button');
    card_car3.setAttribute('data-mdb-target', '#carouselBasicExample');
    card_car3.setAttribute('data-mdb-slide-to', '2');
    card_car3.setAttribute('aria-label', 'Slide 3')

    innerDiv.appendChild(card_car1);
    innerDiv.appendChild(card_car2);

    carrosselDiv.appendChild(innerDiv);

    //adiciona as imagens
    const divImgCar = document.createElement('div');
    divImgCar.classList.add('carousel-inner');

    const imgCar = function(imgSrc, imgAlt, txth5, txtp, primeiro){
        const divItem = document.createElement('div');
        if(primeiro){
            divItem.classList.add('carousel-item', 'active');
        }else {
            divItem.classList.add('carousel-item');
        }
        const imgItem = document.createElement('img');
        imgItem.classList.add('d-block', 'w-100');
        imgItem.setAttribute('src', imgSrc);
        imgItem.setAttribute('alt', imgAlt);

        divItem.appendChild(imgItem);

        const divTexto = document.createElement('div');
        divTexto.classList.add('carousel-caption', 'd-none', 'd-md-block');
        divTexto.innerHTML = `<h5>${txth5}</h5> <p>${txtp}</p>`;
        divTexto.style.backgroundColor = "rgba(0,0,0,0.5)";
        divItem.appendChild(divTexto);

        return divItem;

    }

    const img1 = imgCar('./img/ad1.png', 'Propaganda 1', 'Fim de ano chegou!', 'Ofertas especiais para tu presentear seu melhor amigo', true);
    const img2 = imgCar('./img/ad2.png', 'Propaganda 2', 'Bolim', 'Uma seleção de bolos especiais para seu pet!', false);

    divImgCar.appendChild(img1);
    divImgCar.appendChild(img2);

    carrosselDiv.appendChild(divImgCar);

    const prevImg = document.createElement('button');
    prevImg.classList.add('carousel-control-prev');
    prevImg.setAttribute('type','button');
    prevImg.setAttribute('data-mdb-target', '#carouselBasicExample');
    prevImg.setAttribute('data-mdb-slide', 'prev');
    prevImg.innerHTML = `<span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>`;

    const nextImg = document.createElement('button');
    nextImg.classList.add('carousel-control-next');
    nextImg.setAttribute('type','button');
    nextImg.setAttribute('data-mdb-target', '#carouselBasicExample');
    nextImg.setAttribute('data-mdb-slide', 'next');
    nextImg.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Próxima</span>`;

    carrosselDiv.appendChild(prevImg);
    carrosselDiv.appendChild(nextImg);

    return carrosselDiv;

}