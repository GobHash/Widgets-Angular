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

        var dateFilter = null;
        var dateOperationsFilters = null;

        var filterOperationsType = [

        ];
        var service = {
            filters : filters,
            filterOperationsType: filterOperationsType,
            getFilters: getFilters,
            setFilters: setFilters,
            getFilterOperationsType : getFilterOperationsType,
            dateFilter: dateFilter
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

        function getDateOperationFilters(){
            service.dateOperationsFilters = [
                
                {
                    id: 1,
                    operation: 'Ultima Semana'
                },
                {
                    id: 2,
                    operation: 'Ultimo Mes'
                },
                {
                    id: 3,
                    operation: 'Ultimos 6 Meses'
                },
                {
                    id: 4,
                    operation: 'Ultimo año'
                }
            ]
            return service.filterOperationsType;
        }
    }
})();