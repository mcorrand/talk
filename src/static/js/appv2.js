angular.module('appv2', [])
    .controller('appv2controller', function($scope, $http) {
        $http.jsonp('http://rate-exchange.appspot.com/currency?from=EUR&to=USD&callback=JSON_CALLBACK').success(function(data){
            $scope.rate = data.rate;
        });
        $scope.$watch('euros', function(value){
        	$scope.dollars = parseFloat(value) * $scope.rate;
        });
    });
