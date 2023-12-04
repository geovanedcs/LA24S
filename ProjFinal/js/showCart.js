import { navbarComponent } from "./component/navbar.js";
import { footerComponent } from "./component/footer.js";
import { renderCart } from "./component/cart.js";

window.onload = function () {
    var appHome = document.getElementById("appBody");
    appHome.style.backgroundColor = "#f49f0a";
    appHome.appendChild(navbarComponent());
    appHome.appendChild(renderCart());
    appHome.appendChild(footerComponent());
}