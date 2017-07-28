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
        "EntitiesService"
    ];

    function filterWidgetController($scope, $rootScope, $state, $stateParams, EntitiesService) {
        var vm = this;
        vm.definition = EntitiesService.getDefinition();

        vm.stepFour = stepFour;
        vm.stepTree = stepTree;
        function stepFour(){
            $state.go('widgetPreview');
        };
        function stepTree(){
            $state.go('widgetEntity')
        }

    }
    
})();