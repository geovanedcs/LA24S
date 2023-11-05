import { carrosselComponent } from "../js/component/carrossel.js";
import { navbarComponent } from "../js/component/navbar.js";
import { cardComponent } from "../js/component/card.js";
import { footerComponent } from "../js/component/footer.js";

window.onload = function(){
    const appHome = document.getElementById("appBody");
    const navbar = document.createElement('div');
    appHome.appendChild(navbarComponent());
    const sectionCar = document.createElement('section');
    sectionCar.classList.add('container', 'mt-5');
    sectionCar.appendChild(carrosselComponent());
    appHome.appendChild(sectionCar);

    const cards = document.createElement('section');
    cards.classList.add('container', 'mt-5');
    cards.appendChild(cardComponent());
    appHome.appendChild(cards);

    const footer = document.createElement('footer');
    footer.appendChild(footerComponent());
    appHome.appendChild(footer);
}