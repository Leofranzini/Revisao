angular
    .module('app')
    .controller('Controller', function($scope, Factory) {
    $scope.x = Factory.x;
    $scope.produto = {};
    $scope.produtos = Factory.produtos;
    $scope.compra = {};
    $scope.compras = Factory.compras;
    
    $scope.novoProduto = function() {
        Factory.novoProduto($scope.produto);
        $scope.produto = {};
        $scope.produtos = Factory.produtos;
    }
    
    $scope.editaProduto = function() {
        Factory.editaProduto();
    }
    
    $scope.excluirProduto = function(ind) {
        Factory.excluirProduto(ind);
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