import { headerComponent } from "./components/header.js";
import { sidebarComponent } from "./components/sidebar.js";
import { footerComponent } from "./components/footer.js";

window.onload = function() {
    const appHeader = document.getElementById("appHeader").innerHTML =  headerComponent;
    const appSidebar = document.getElementById("appSidebar");
    appSidebar.appendChild(sidebarComponent());
    const appFooter = document.getElementById("appFooter").innerHTML = footerComponent
}