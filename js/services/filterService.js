(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('FilterService', FilterService);

	FilterService.$inject = ['$http'];

	function FilterService($http){
        var filters = [
        ];

        var filterOperationsType = [

        ];
        var service = {
            filters : filters,
            filterOperationsType: filterOperationsType,
            getFilter: getFilter,
            setFilter: setFilter,
            getFilterOperationsType : getFilterOperationsType
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

        function getFilterOperationsType(){
            service.filterOperationsType = [
                {
                    id: 1,
                    name: "Igual a"
                },
                {
                    id: 2,
                    name: "Diferente de"
                },
                {
                    id: 3,
                    name: "Contiene"
                },
                {
                    id: 4,
                    name: "Mayor que"
                },
                {
                    id: 5,
                    name: "Menor que"
                }
            ];
            return service.filterOperationsType;
        }
    }
})();