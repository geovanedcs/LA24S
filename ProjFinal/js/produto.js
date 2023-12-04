import { navbarComponent } from "../js/component/navbar.js";
import { produtoDetComponent } from "../js/component/produtoDet.js";
import { descricaoComponent } from "../js/component/prodDesc.js";
import { footerComponent } from "../js/component/footer.js";


window.onload = function(){
    const id = JSON.parse(localStorage.getItem('id'));
    const prods = JSON.parse(localStorage.getItem('products'));
    const prod = prods.products.find(e => e.id === id);
    const homeProduto = document.getElementById("appBodyProduto");
    homeProduto.style.backgroundColor = "#EBAB3B";
    homeProduto.appendChild(navbarComponent());
    const mainProduto = document.createElement('main');
    mainProduto.appendChild(produtoDetComponent(prod));
    homeProduto.appendChild(mainProduto);
    const descProd = document.createElement('section');
    descProd.classList.add('mt-5');
    descProd.appendChild(descricaoComponent(prod));
    homeProduto.appendChild(descProd);
    homeProduto.appendChild(footerComponent());
}

