(function () {
    'use strict';

    angular
        .module('app')
        .controller('ComposeController', ComposeController);

    ComposeController.$inject = ['$http', 'PostsService'];
    function ComposeController($http, postsService) {
        var vm = this;
        
        vm.post = {
            heading: "",
            content: ""
        }

        vm.createPost = function() {
            if(compose.heading.$valid) {
                alert("Posted successfully");
                postsService.createPost(vm.post).then(function(){
                   alert("Posted Successfully");
                }, function(error) {
                    console.log("Error Message" + error);
                    vm.errorMessage = "Error while creating new post" + error;
                });
            } 
            
        };
    }

})();