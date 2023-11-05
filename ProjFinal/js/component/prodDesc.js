export function descricaoComponent(){
    const divDet = document.createElement('div');
    divDet.classList.add('row');

    const divH1 = document.createElement('div');
    divH1.classList.add('col-sm-12');

    const h1 = document.createElement('h1');
    h1.textContent = "Descrição";

    divH1.appendChild(h1);

    const divP = document.createElement('div');
    divP.classList.add('col-sm-12');

    const p = document.createElement('p');
    p.classList.add('text-justify', 'text-break');
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa lorem, condimentum id luctus nec, molestie sed justo. Praesent nec nisl a purus blandit viverra. Praesent ac massa at ligula laoreet iaculis eget lacus.";

    divP.appendChild(p);

    divDet.appendChild(divH1);
    divDet.appendChild(divP);

    return divDet;
}