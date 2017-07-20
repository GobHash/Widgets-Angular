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
        vm.definition = {
            name : null,
            widgetType : null,
			entity : null	
		}
        
        vm.stepTree = stepTree;
        vm.backStepOne = backStepOne;
        getEntitites()
        
        


        function getEntitites(){
            vm.entitiesType = EntitiesService.getEntities();
        }

        function backStepOne(){
            $state.go('widgetIndex');
        }

        function stepTree(){
            $state.go('widgetFilter');
        }
        console.log(vm.definition);

    }
    
})();