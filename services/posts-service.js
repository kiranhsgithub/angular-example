(function () {
    'use strict';

    angular
        .module('app')
        .service('PostsService', PostsService);
    
    PostsService.$inject = ['$http', '$q', 'UsersService'];
    function PostsService($http, $q, usersService) { 
    
        this.getPosts = function getPosts(){
            var postsData = [];
            var usersData = []; 
            var defer = $q.defer();
            
            var postsPromise = $http
              .get('https://jsonplaceholder.typicode.com/posts');
            var usersPromise = usersService.getUsers();
            
            postsPromise.then(function(data){
                postsData = data.data;
            });
            
            usersPromise.then(function(data){
                usersData = data.data;
            });
            
            var usersCache = {};
            $q.all([postsPromise, usersPromise]).then(function(data){
                
                
               postsData.forEach(function(post) {
                   if(usersCache.hasOwnProperty(post.userId)){
                       post.username = usersCache[post.userId].username;
                       post.email = usersCache[post.userId].email;
                   } else {
                       var u = {};
                       for(var i=0; i < usersData.length; i++) {
                           if(post.userId === usersData[i].id){
                               usersCache[post.userId] = {};
                               usersCache[post.userId].email = usersData[i].email;
                               usersCache[post.userId].username = usersData[i].username;
                               post.username = usersData[i].email;
                               post.email = usersData[i].username;
                           }
                       }
                   }
               }); 
                
                defer.resolve(postsData);
                
            }, function(error) {
                console.log("Error Message" + error);
                vm.errorMessage = "Error while getting users Data" + error;
            });
            
            
            return defer.promise;
        };
        
        this.createPost = function createPost(){
            return $http
              .get('https://jsonplaceholder.typicode.com/posts');
        };
    }

})();

