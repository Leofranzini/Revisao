angular
    .module('app')
    .controller('Controller', function($scope, Factory) {
    $scope.x = Factory.x;
    $scope.teste = function() {
        Factory.teste();
    }
})