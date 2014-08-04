angular.module('appv4', ['appv4.directives'])
    .controller('appv4controller', function($scope, $http) {
    	var pound = {name: 'sterling pound', acronym: 'GBP', symbol: '£'};
    	var dollar = {name: 'dollar', acronym: 'USD', symbol: '$'};
    	var euro = {name: 'euro', acronym: 'EUR', symbol: '€'};
    	$scope.currencies = [pound, dollar, euro];

    	$scope.from = euro;
    	$scope.to = pound;
    	$scope.in = 1;

    	$scope.$watchGroup(['from', 'to'], function(group){
	    	$http.jsonp('http://rate-exchange.appspot.com/currency?from='+ group[0].acronym + '&to=' + group[1].acronym + '&callback=JSON_CALLBACK').success(function(data){
	            $scope.rate = data.rate;
	        });
    	});

        $scope.$watchGroup(['in', 'rate'], function(group){
        	$scope.out = parseFloat(group[0]) * group[1];
        });
    });
