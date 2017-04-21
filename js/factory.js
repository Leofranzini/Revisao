angular.module('app')
.factory('Factory', function(){
        var Factory= {
            x: "test",
            test: test
        }
        return Factory;
    function test(){
        console.log(Factory.x);
        alert(Factory.x);
    }
})