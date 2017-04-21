angular.module('app', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "/home.html",
        controller: "Controller"
    })
    .otherwise({redirectTo: "/"})
})