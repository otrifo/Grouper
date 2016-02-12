var app = angular.module('grouper', ['ngMaterial', 'ngRoute', 'uiGmapgoogle-maps']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'logInPage.html',
            controller: 'logInController'
        })
        .when('/searchResults', {
            templateUrl: 'searchResults.html',
            controller: 'searchResults'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.config(['uiGmapGoogleMapApiProvider', function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyASiHdhJ1UH09h35_EoJgrLoSSzl_tRRHY',
        v: '3.X',
        libraries: 'weather,geometry,visualization'
    });
}]);