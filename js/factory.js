angular
    .module('app')
    .factory('Factory', function() {
    var Factory = {
        x: "teste",
        teste: teste,
        produtos: [],
        compras: [],
        novoProduto: novoProduto,
        editaProduto: editaProduto,
        excluirProduto: excluirProduto,
        novoCompra: novoCompra,
        excluirCompra: excluirCompra
    }
    return Factory;
    
    function teste() {
        console.log(Factory.x);
        alert(Factory.x);
    }
    
    function novoProduto(produto) {
        Factory.produtos.push(produto);
        console.log(produto.descricao+" indesrido com sucesso!");
    }
    
    function editaProduto(ind, produto) {
        Factory.produtos[ind] = produto;
        console.log("Edição com sucesso!");
    }
    
    function excluirProduto(ind) {
        Factory.produtos.splice(ind,1);
        console.log("Exclusão com sucesso!");
    }
    
    function novoCompra(compra) {
        Factory.compras.push(compra);
        console.log("Compra inserida com sucesso!");
    }
    
    function excluirCompra(ind) {
        Factory.compras.splice(ind,1);
        console.log("Remoção com sucesso!");
    }
    
})