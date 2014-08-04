angular.module('appv1', [])
    .controller('appv1controller', function($scope, $http) {
        $http.jsonp('http://rate-exchange.appspot.com/currency?from=EUR&to=USD&callback=JSON_CALLBACK').success(function(data){
            $scope.rate = data.rate;
        });
    });
