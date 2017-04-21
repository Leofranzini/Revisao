angular
    .module('app', ['ngRoute']) 
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "/home.html",
            controller: "Controller"
        })
        
        .when("/produto", {
            templateUrl: "/produto.html",
            controller: "Controller"
        })
        
        .when("/novoproduto", {
            templateUrl: "/novoproduto.html",
            controller: "Controller"
        })
    
        .when("/pedido", {
            templateUrl: "/pedido.html",
            controller: "Controller"
        })
    
        .when("/novopedido", {
            templateUrl: "/novopedido.html",
        })
        .when("/teste", {
            templateUrl: "/teste.html",
            controller: "Controller"
        })
        .otherwise({redirectTo: "/"})
})