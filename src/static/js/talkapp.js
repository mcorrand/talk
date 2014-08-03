/*global angular: false, moment: false */
'use strict';

var talkapp = angular.module('talkapp', 
    ['ngRoute', 'talkapp.controllers']);

talkapp.config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $routeProvider.when('/', { templateUrl: '/static/partials/home.html' });
    $routeProvider.when('/1', { templateUrl: '/static/partials/slide-1.html' });
});
