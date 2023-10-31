import { carrosselComponent } from "../js/component/carrossel.js";

window.onload = function(){
    const appHome = document.getElementById("appBody");
    const sectionCar = document.createElement('section');
    sectionCar.appendChild(carrosselComponent());
    appHome.appendChild(sectionCar);
}