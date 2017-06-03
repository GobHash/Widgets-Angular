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
        "EntitiesRepository"
    ];

    function filterWidgetController($scope, $rootScope, $state, $stateParams, EntitiesRepository) {
        var vm = this;
        vm.stepFour = stepFour
        function stepFour(){
            $state.go('widgetPreview');
        };

    }
    
})();