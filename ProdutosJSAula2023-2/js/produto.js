import { Produto } from './Produtos.js';

const btSalvar = document.getElementById('btSave');

btSalvar.addEventListener('click', function(e){
    e.preventDefault();//cancela a ação padrão do submit
    const nome = document.getElementById('name').value;
    const preco = document.getElementById('price').value;
    const quant = 1;

    /*const produto = {
        nomeProduto: nome,
        precoProduto: preco,
        quant: 1
    }*/

    if(produtoJaExiste(nome)){

        alert("O produto já está inserido!");
    }
    else{
        const produto = new Produto(nome, preco, quant); //criando o objeto por meio de uma classe
        salvarLocalStorage(produto);
        alert("Produto inserido com sucesso!");
    }

    
    limparCampos();
    //console.log(produto);
})


//const arrayProdutos = []; //array de produtos
//converte a string armazenada no localstorage para o formato original (array)
const arrayProdutos = JSON.parse(localStorage.getItem('listaProdutos')) || [];

function salvarLocalStorage(produto){ //produto é o objeto
    arrayProdutos.push(produto); //insere o produto no array
    //salvar no storage
    localStorage.setItem('listaProdutos', JSON.stringify(arrayProdutos));
}

window.onload = function(){
    //console.log(arrayProdutos);
    arrayProdutos.forEach((prod)=>
            console.log("Nome:", prod.nome, ", Preço: ", prod.preco, ", Quantidade:", prod.quant)
    )
}

function limparCampos(){
  document.getElementById('name').value='';
  document.getElementById('price').value='';
}

// function produtoJaExiste(nome){
//     return arrayProdutos.find(function(prod){
//       return prod.nome === nome;
//     })
// }

function produtoJaExiste(nome){
    return arrayProdutos.find((prod)=>prod.nome === nome);
}