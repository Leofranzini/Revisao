angular
    .module('app')
    .factory('Factory', function() {
    var Factory = {
        x: "teste",
        teste: teste
    }
    return Factory;
    
    function teste() {
        console.log(Factory.x);
        alert(Factory.x);
    }
})