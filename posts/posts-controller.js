(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['$scope', '$http', '$q', 'PostsService', 'UsersService'];
    function PostsController($scope, $http, $q, postsService, usersService) {
        var vm = this;
        
        vm.getPosts = function() {
           postsService.getPosts().then(function(data){
               vm.posts = data; 
                console.log("vm.posts");
            }, function(error) {
                console.log("Error Message" + error);
                vm.errorMessage = "Error while getting users Data" + error;
            });
        };
        vm.getPosts();
        
        $scope.$on('search', function(event, data) {
            vm.filterTerm = data;
        });
    }

})();