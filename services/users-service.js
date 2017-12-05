(function () {
    'use strict';

    angular
        .module('app')
        .service('UsersService', UsersService);
    
    UsersService.$inject = ['$http'];
    function UsersService($http) { 
    
        this.getUsers = function getPosts(){
            return $http
              .get('https://jsonplaceholder.typicode.com/users');
        };
    }
})();