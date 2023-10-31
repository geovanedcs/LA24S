import { carrosselComponent } from "./component/carrossel";

window.onload = function(){
    const appHome = document.getElementById("appBody");
    // const sectionCar = document.createElement("section");
    // sectionCar.appendChild(carrosselComponent());
    appHome.appendChild(carrosselComponent());
}