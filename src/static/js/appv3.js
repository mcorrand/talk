angular.module('appv3', [])
    .controller('appv3controller', function($scope, $http) {
    	var pound = {name: 'sterling pound', symbol: 'GBP'};
    	var dollar = {name: 'dollar', symbol: 'USD'};
    	var euro = {name: 'euro', symbol: 'EUR'};
    	$scope.currencies = [pound, dollar, euro];

    	$scope.from = euro;
    	$scope.to = pound;
    	$scope.in = 1;

    	$scope.$watchGroup(['from', 'to'], function(group){
	    	$http.jsonp('http://rate-exchange.appspot.com/currency?from='+ group[0].symbol + '&to=' + group[1].symbol + '&callback=JSON_CALLBACK').success(function(data){
	            $scope.rate = data.rate;
	        });
    	});

        $scope.$watchGroup(['in', 'rate'], function(group){
        	$scope.out = parseFloat(group[0]) * group[1];
        });

    });
