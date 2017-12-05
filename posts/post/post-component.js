(function () {
    'use strict';

    angular
        .module('app')
        .component('post', {
            bindings: {
                item: '<'
            },
            templateUrl: 'posts/post/post.html',
            controller: 'PostController'
    });
})();