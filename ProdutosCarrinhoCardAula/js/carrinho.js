async function carregarProdutos(){
    try {
        const response = await fetch('./data/produtos.json');
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.log("Erro ao carregar os produtos", error);
    }
}

window.onload = async () => {
    try {
        const produtos = await carregarProdutos();
        renderizarProdutos(produtos);
    } catch (error) {
        alert("Erro ao carregar os produtos");
    }
}

async function renderizarProdutos(produtos){
    const produtosContainer = document.getElementById('produtosContainer');
    const arrayProdutos = await carregarProdutos();
    arrayProdutos.forEach(prod => {
        const produtoCard = document.createElement('div');
        produtoCard.classList.add('card', 'col-lg-4', 'me-2', 'mb-2');
        produtoCard.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${prod.nome}</h2>
                <p class="card-text">${prod.marca}</p>
                <p class="card-text">R$ ${prod.preco}</p>
                <button class="btn btn-primary btAdicionar" >Adicionar</button>
            </div>`;
            produtoCard.querySelector('.btAdicionar').addEventListener('click', () => {
                adicionarCarrinho(prod);
            });
            produtosContainer.appendChild(produtoCard);
    });
}

function adicionarCarrinho(produto){
    const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = arrayProdutos.find(prod => prod.id === produto.id);
    const produtoCarrinho = {
        id: produto.id,
        marca: produto.marca,
        nome: produto.nome,
        preco: produto.preco
    };
    arrayProdutos.push(produtoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(arrayProdutos));
}