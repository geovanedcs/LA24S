import { navbarComponent } from "../js/component/navbar.js";
import { produtoDetComponent } from "../js/component/produtoDet.js";
import { descricaoComponent } from "../js/component/prodDesc.js";
import { footerComponent } from "../js/component/footer.js";

window.onload = function(){
    const homeProduto = document.getElementById("appBodyProduto");
    homeProduto.appendChild(navbarComponent());
    const mainProduto = document.createElement('main');
    mainProduto.appendChild(produtoDetComponent());
    homeProduto.appendChild(mainProduto);
    console.log(mainProduto);
    const descProd = document.createElement('section');
    descProd.classList.add('mt-5');
    descProd.appendChild(descricaoComponent());
    homeProduto.appendChild(descProd);
    homeProduto.appendChild(footerComponent());
}

