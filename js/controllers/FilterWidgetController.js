(function () {
    'use strict';

    angular.module("Widgets")
        .controller("FilterWidgetController", filterWidgetController)
        .component("widgetFilter", {
            templateUrl: "/views/widgetFilter.html",
            controller: "FilterWidgetController",
            controllerAs: "vmWidgetFilter"
        });

    filterWidgetController.$inject = [
        "$scope",
        "$rootScope",
        "$state",
        "$stateParams",
        "EntitiesService",
        "FilterService"
    ];

    function filterWidgetController($scope, $rootScope, $state, $stateParams, EntitiesService, FilterService) {
        var vm = this;
        vm.definition = EntitiesService.getDefinition();
        vm.filters = FilterService.getFilters();

        getFiltersOperationsType();
        getAllColumns();

        vm.stepFour = stepFour;
        vm.stepTree = stepTree;
        vm.addFilter = addFilter;

        function stepFour(){
            setFilters();
            $state.go('widgetPreview');
        };
        function stepTree(){
            setFilters();
            $state.go('widgetEntity')
        }

        function getFiltersOperationsType(){
            vm.filterOperations = FilterService.getFilterOperationsType();
        }

        function getAllColumns(){
            vm.allColumns =  EntitiesService.getAllColumns();
        }

        function addFilter(){
            vm.filters.push(
                {
                    column: null,
                    operation: null,
                    value: null  
                }
            )
        }

        function setFilters(){
            console.log(vm.filters);
            FilterService.setFilters(vm.filters);
            vm.definition.filters = vm.filters;
            EntitiesService.setFilters(vm.filters);
        }

    }
    
})();