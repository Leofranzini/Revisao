angular
    .module('app', ['ngRoute']) 
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "/home.html",
            controller: "Controller"
        })
        .when("/teste", {
            templateUrl: "/teste.html",
            controller: "Controller"
        })
        .otherwise({redirectTo: "/"})
})