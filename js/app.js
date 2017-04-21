angular
    .module('app', ['ngRoute']) 
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "/home.html",
            controller: "Controller"
        })
<<<<<<< HEAD
        
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
=======
        .when("/teste", {
            templateUrl: "/teste.html",
>>>>>>> 68e407e56ad9e1a1a9fee7e625ab6499381c6e3c
            controller: "Controller"
        })
        .otherwise({redirectTo: "/"})
})