function novoProdutoTr(produto){
    const novaTr = document.createElement('tr');
    novaTr.innerHTML = 
    `<td>${produto.nome}</td>
    <td>${produto.preco}</td>
    <td><input class="quantity" type="number" value="${produto.quant}"></td>
    <td>${(produto.preco*produto.quant).toFixed(2)}</td>
    <td><i class="fa fa-trash"></i></td>`

    //console.log(novaTr);
    return novaTr;
}


function addProdutoTabela(produto){
    const tableBody = document.querySelector('#tbProducts tbody');
    // const tr = novoProdutoTr(produto);
    tableBody.appendChild(novoProdutoTr(produto));
}

function carregarProdutosStorage(){
    const arrayProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
    arrayProdutos.forEach(prod => {
        addProdutoTabela(prod);
    });
}

 
window.onload = ()=>{
    carregarProdutosStorage();
}

document.querySelector('#tbProducts tbody').addEventListener('input', function(event){
   const target = event.target;//elemento alvo
   //console.log(target);
   if(target.classList.contains('quantity')){
     const row = target.closest('tr'); //elemento pai do alvo
     //console.log(row);
     const nome = row.querySelector('td:first-child').textContent;
     //console.log(nome);
     const novaQuantidade = parseInt(target.value, 10);
     console.log(novaQuantidade);
     atualizaStorage(nome, novaQuantidade);
   }
})

function atualizaStorage(nome, novaQuantidade){
  const arrayProdutos = JSON.parse(localStorage.getItem('listaProdutos')) || [];
   arrayProdutos.forEach((prod)=>{
     if(prod.nome === nome){
        prod.quant = novaQuantidade;
     }
   })

   localStorage.setItem('listaProdutos', JSON.stringify(arrayProdutos));
}

function removeProdutoStorage(nome){
  const arrayProdutos = JSON.parse(localStorage.getItem('listaProdutos')) || [];
  const produtIndex = arrayProdutos.findIndex(prod => prod.nome === nome);
  if(produtIndex !== -1){
    arrayProdutos.splice(produtIndex, 1);
    localStorage.setItem('listaProdutos', JSON.stringify(arrayProdutos));
  }else{
    alert('Produto não encontrado');
  }
}