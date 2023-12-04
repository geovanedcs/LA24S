export function descricaoComponent(prod){
    const divDet = document.createElement('div');
    divDet.classList.add('row');

    const divH1 = document.createElement('div');
    divH1.classList.add('col-sm-12');

    const h1 = document.createElement('h1');
    h1.classList.add('text-center');
    h1.textContent = "Descrição";

    divH1.appendChild(h1);

    const divP = document.createElement('div');
    divP.classList.add('col-sm-12');

    const p = document.createElement('p');
    p.classList.add('text-justify', 'text-break');
    p.style.padding = "5%";
    p.innerText = prod.description;
    divP.appendChild(p);

    divDet.appendChild(divH1);
    divDet.appendChild(divP);

    return divDet;
}