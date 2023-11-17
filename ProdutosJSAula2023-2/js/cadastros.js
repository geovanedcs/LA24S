function linhaProduto(produto){
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.preco}</td>
        <td>${produto.qtde}</td>
        <td>${(produto.preco*produto.qtde.toFixed(2))}</td>
        <td>
            <i class="fa fa-trash"> Excluir</i>
        </td>
    `;

    return tr;
}

function addProduto(produto){
    const tbody = document.querySelector('tbody');
    tbody.appendChild(linhaProduto(produto));
}

window.onload = function () {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach(function(prod){
        addProduto(prod);
    });
}