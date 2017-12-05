(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);

    PostController.$inject = ['$http', 'PostsService'];
    function PostController($http, postsService) {
        var vm = this;
        
        this.$onInit = function(){
          console.log("Inside On init")
          console.log(vm.item);
        };

        vm.deletePost = function() {
            
            postsService.deletePost(vm.item).then(function(data){
               
            }, function(error) {
                console.log("Error Message" + error);
                vm.errorMessage = "Error while getting users Data" + error;
            });
        };
    }

})();