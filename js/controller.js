angular
    .module('app')
    .controller('Controller', function($scope, Factory) {
    $scope.x = Factory.x;
    
    $scope.novo = function() {
        Factory.novo();
    }
    
    $scope.editar = function() {
        Factory.editar();
    }
    
    $scope.excluir = function() {
        Factory.excluir();
    }
    
    $scope.salvar = function() {
        Factory.salvar();
    }
    
    $scope.cancelar = function() {
        Factory.cancelar();
    }
    
    $scope.novo = function() {
        Factory.novo();
    }
    
    $scope.excluir = function() {
        Factory.excluir();
    }
    
    $scope.incluir = function() {
        Factory.incluir();
    }
    
     $scope.remover = function() {
        Factory.remover();
    }
    
    $scope.salvar = function() {
        Factory.salvar();
    }
    
    $scope.cancelar = function() {
        Factory.cancelar();
    }
})