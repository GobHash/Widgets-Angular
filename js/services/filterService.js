(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('FilterService', FilterService);

	FilterService.$inject = ['$http'];

	function FilterService($http){
        var filters = [
            {
                column: null,
                operation: null,
                value: null
            }
        ];

        var filterOperationsType = [

        ];
        var service = {
            filters : filters,
            filterOperationsType: filterOperationsType,
            getFilters: getFilters,
            setFilters: setFilters,
            getFilterOperationsType : getFilterOperationsType
        }
        return service;

        function getFilters(){
            return service.filters;
        }

        function setFilters(listOfFilters){
            service.filters = listOfFilters;
        }

        function getFilterOperationsType(){
            service.filterOperationsType = [
                {
                    id: 1,
                    operation: "Igual a"
                },
                {
                    id: 2,
                    operation: "Diferente de"
                },
                {
                    id: 3,
                    operation: "Contiene"
                },
                {
                    id: 4,
                    operation: "Mayor que"
                },
                {
                    id: 5,
                    operation: "Menor que"
                }
            ];
            return service.filterOperationsType;
        }
    }
})();