(function () {
    'use strict';

    angular
        .module('app')
        .component('search', {
            templateUrl: 'search/search.html',
            controller: 'SearchController as sc'
    });
})();