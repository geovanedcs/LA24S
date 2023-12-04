import { navbarComponent } from "./component/navbar.js";
import { footerComponent } from "./component/footer.js";
import { loginComponent, registerComponent } from "./component/login.js";

window.onload = function(){

    const appHome = document.getElementById("appBody");
    appHome.style.backgroundColor = "#f49f0a";
    appHome.appendChild(navbarComponent());
    appHome.appendChild(loginComponent());
    appHome.appendChild(footerComponent());

}