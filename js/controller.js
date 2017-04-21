angular.module('app')
.controller('Controller', function($scope, Factory){
    $scope.x= Factory.x;
    $scope.test= function(){
        Factory.test;
    }
    
})