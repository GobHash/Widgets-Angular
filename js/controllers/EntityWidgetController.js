(function () {
    'use strict';

    angular.module("Widgets")
        .controller("EntityWidgetController", entityWidgetController)
        .component("widgetEntity", {
            templateUrl: "/views/widgetData.html",
            controller: "EntityWidgetController",
            controllerAs: "vmWidgetData"
        });

    entityWidgetController.$inject = [
        "$scope",
        "$rootScope",
        "$state",
        "$stateParams",
        "EntitiesService"
    ];

    function entityWidgetController($scope, $rootScope, $state, $stateParams, EntitiesService) {
        var vm = this;
        vm.stepTree = stepTree;
        var entityModal = {entity:0, datos:""};
        getEntitites()
        function getEntitites(){
            vm.entitiesType = EntitiesService.getEntities();
        }
        function stepTree(){
            $state.go('widgetFilter');
        }

    }
    
})();