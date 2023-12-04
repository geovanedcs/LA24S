import { carrosselComponent } from "../js/component/carrossel.js";
import { navbarComponent } from "../js/component/navbar.js";
import { cardComponent } from "../js/component/card.js";
import { footerComponent } from "../js/component/footer.js";

window.onload = async function(){
    const prods = await getProducts();
    localStorage.setItem('products', JSON.stringify(prods));
    const appHome = document.getElementById("appBody");
    appHome.style.backgroundColor = "#FF8C42";
    appHome.appendChild(navbarComponent());
    const sectionCar = document.createElement('section');
    sectionCar.classList.add('container', 'mt-5');
    sectionCar.appendChild(carrosselComponent(prods));
    appHome.appendChild(sectionCar);
    
    const cards = document.createElement('section');
    cards.classList.add('container', 'mt-5');
    cards.appendChild(cardComponent());
    appHome.appendChild(cards);
    
    const footer = document.createElement('footer');
    footer.appendChild(footerComponent());
    appHome.appendChild(footer);

}


async function getProducts(){
    const response = await fetch('./data/products.json');
    const arrayProducts = await response.json();
    return arrayProducts;
}
