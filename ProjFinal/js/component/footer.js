export function footerComponent(){
    const footer = document.createElement('footer');
    footer.classList.add('bg-light', 'text-center', 'text-lg-start');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container', 'p-4');
    footer.appendChild(divContainer);

    const divCopyrigth = document.createElement('div');
    divCopyrigth.classList.add('text-center', 'p-3');
    divCopyrigth.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.2);');
    divCopyrigth.textContent = '© 2023 Copyright: ';
    divContainer.appendChild(divCopyrigth);

    const aCopyrigth = document.createElement('a');
    aCopyrigth.classList.add('text-dark');
    aCopyrigth.setAttribute('href', 'https://github.com/geovanedcs/LA24S/tree/main/ProjFinal');
    aCopyrigth.textContent = 'Geovane Soares.';
    divCopyrigth.appendChild(aCopyrigth);

    return footer;

}
