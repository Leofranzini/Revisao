angular
    .module('app')
    .controller('Controller', function($scope, Factory) {
    $scope.x = Factory.x;
    $scope.produto = {};
    $scope.produtos = Factory.produtos;
    
    $scope.novoProduto = function() {
        Factory.novoProduto();
    }
    
    $scope.editaProduto = function() {
        Factory.editaProduto();
    }
    
    $scope.excluirProduto = function() {
        Factory.excluirProduto();
    }
    
    $scope.cancelarProduto = function() {
        console.log("Cancelado");
    }
    
    $scope.novoCompra = function() {
        Factory.novoCompra();
    }
    
    $scope.excluirCompra = function() {
        Factory.excluirCompra();
    }
    
    $scope.cancelarCompra = function() {
        console.log("Compra cancelada!");
    }
})