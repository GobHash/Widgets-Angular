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
        vm.numberOfFilters = [1];
        vm.filter = {
            column: null,
            operation: null,
            value: null
        }

        getFiltersOperationsType();
        getAllColumns();
        getDateOperationFilters();

        vm.dpOpen = false;
        vm.dpFormat = 'dd/MM/yy';
        vm.dpOptions = {
            datepickerMode: 'day',
            minMode: 'day'
        }
        var today = new Date();
        vm.cardExpires = new Date(today.getFullYear(), today.getMonth(), today.getDay(), null, null, null, null);

        vm.stepFour = stepFour;
        vm.stepTree = stepTree;
        vm.addFilter = addFilter;
        vm.deleteFilter = deleteFilter;

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

        function deleteFilter(filter){
            var i = vm.filters.indexOf(filter);
            if(i != -1) {
                vm.filters.splice(i, 1);
            }
        }

        function setFilters(){
            console.log(vm.filters);
            FilterService.setFilters(vm.filters);
            vm.definition.filters = vm.filters;
            EntitiesService.setFilters(vm.filters);
        }

        function getDateOperationFilters(){
            vm.dateOperationFilter = FilterService.getDateOperationFilters();
        }

    }
    
})();