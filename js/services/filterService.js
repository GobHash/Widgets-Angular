(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('FilterService', FilterService);

	FilterService.$inject = ['$http'];

	function FilterService($http){
        var filters = [
            {
                name : null,
                filterType : null,
                value : null
            }
        ];
        var service = {
            filters : filters
        }
        return service;

        function getFilter(){
            return service.filters;
        }

        function setFilter(listOfFilters){
            for(var i=0; i<listOfFilters.length; i++){
                var element = listOfFilters[i]
                service.filters.push(element);
            }
        }
    }
})();