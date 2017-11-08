(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('FilterService', FilterService);

	FilterService.$inject = ['$http', 'OperationRepository'];

	function FilterService($http, OperationRepository){
        var filters = [
            {
                column: null,
                operation: null,
                value: null
            }
        ];

        var dateFilters = [
            {
                column: null,
                operation: null,
                date1: null,
                date2: null
            }
        ];

        var months = [
            {
                name: "Enero",
                value: 1
            },
            {
                name: "Febrero",
                value: 2
            },
            {
                name: "Marzo",
                value: 3
            },
            {
                name: "Abril",
                value: 4
            }, 
            {
                name: "Mayo",
                value: 5
            },
            {
                name: "Junio",
                value: 6
            },
            {
                name: "Julio",
                value: 7
            },
            {
                name: "Agosto",
                value: 8
            },
            {
                name: "Septiembre",
                value: 9
            },
            {
                name: "Octubre",
                value: 10
            },
            {
                name: "Noviembre",
                value: 11
            },
            {
                name: "Diciembre",
                value: 12
            }
        ];
        var years = [2016]

        var dateFilter = null;
        var dateOperationsFilters = null;

        var filterOperationsType = [

        ];
        var service = {
            filters : filters,
            dateFilters : dateFilters,
            filterOperationsType: filterOperationsType,
            getFilters: getFilters,
            getDateFilters: getDateFilters,
            setFilters: setFilters,
            setDateFilters : setDateFilters,
            getFilterOperationsType : getFilterOperationsType,
            dateFilter: dateFilter,
            getDateOperationFilters: getDateOperationFilters,
            dateOperationsFilters: dateOperationsFilters,
            getFilterOperationsByType : getFilterOperationsByType,
            months : months,
            years : years,
            getMonths : getMonths,
            getYears : getYears

        }
        return service;

        function getFilters(){
            return service.filters;
        }

        function getDateFilters(){
            return service.dateFilters;
        }

        function setFilters(listOfFilters){
            service.filters = listOfFilters;
        }

        function setDateFilters(listFilters){
            service.dateFilters = listFilters;
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
                },
                {
                    id: 5,
                    operation: 'Entre'
                }
            ]
            return service.dateOperationsFilters;
        }

        function getFilterOperationsByType(type){
            return OperationRepository.getOperationsByOperationType(type)
            .then(function(data){
                return data;
            }).catch(function(err){
                return err;
            });
        }

        function getMonths(){
            return service.months;
        }

        function getYears(){
            return service.years;
        }
    }
})();