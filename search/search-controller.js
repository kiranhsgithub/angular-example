(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$rootScope'];
    function SearchController($rootScope) {
        var vm = this;
        
        vm.searchTerm = "";

        vm.triggerSearch = function() {
            console.log("Search Triggered");
            $rootScope.$broadcast('search',vm.searchTerm);
        };
    }

})();