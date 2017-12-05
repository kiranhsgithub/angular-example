(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['$scope', 'UsersService'];
    function UsersController($scope, usersService) {
    
        var vm = this;
        
        vm.getUsers = function() {
            usersService.getUsers().then(function(data){
               vm.users = data.data; 
            }, function(error) {
                console.log("Error Message" + error);
                vm.errorMessage = "Error while getting users Data" + error;
            });
        };
        
        vm.getUsers();
        
        $scope.$on('search', function(event, data) {
            vm.filterTerm = data;
        });
    }

})();