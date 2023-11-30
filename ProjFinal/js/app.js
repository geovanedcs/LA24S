import { carrosselComponent } from "../js/component/carrossel.js";
import { navbarComponent } from "../js/component/navbar.js";
import { cardComponent } from "../js/component/card.js";
import { footerComponent } from "../js/component/footer.js";

window.onload = function(){
    const data = getProducts();
    const appHome = document.getElementById("appBody");
    const navbar = document.createElement('div');
    appHome.appendChild(navbarComponent());
    const sectionCar = document.createElement('section');
    sectionCar.classList.add('container', 'mt-5');
    sectionCar.appendChild(carrosselComponent());
    appHome.appendChild(sectionCar);

    const cards = document.createElement('section');
    cards.classList.add('container', 'mt-5');
    cards.appendChild(cardComponent(data[0].images[0], data[0].name, data[0].name));
    appHome.appendChild(cards);

    const footer = document.createElement('footer');
    footer.appendChild(footerComponent());
    appHome.appendChild(footer);

    console.log(getProducts());
}

async function getProducts(){
    const response = await fetch('./data/products.json');
    const data = await response.json();
    return data;
}