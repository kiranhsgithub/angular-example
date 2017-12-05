(function () {
    'use strict'; 
    
    angular
        .module('app', ['ngRoute'])
        .config(config)
        .run(run);
    
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        console.log("Config Called");
        $routeProvider
            .when('/', {
                controller: 'PostsController',
                templateUrl: 'posts/posts.html',
                controllerAs: 'vm'
            })
            .when('/users', {
                controller: 'UsersController',
                templateUrl: 'users/users.html',
                controllerAs: 'vm'
            })
            .when('/compose', {
                controller: 'ComposeController',
                templateUrl: 'compose/compose.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/' });
    }
    
    function run(){
        console.log("running");
    }
    
})();