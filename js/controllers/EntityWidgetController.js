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
			entity : null,
            filters : [{}],
            baseColumn : null
        };
        
        vm.stepTree = stepTree;
        vm.backStepOne = backStepOne;
        vm.getColumnsByEntity = getColumnsByEntity;
        getEntitites();
        getDefinition();
        //getColumnsByEntity();


        function getEntitites(){
            vm.entitiesType = EntitiesService.getEntities();
        }

        function getDefinition(){
            vm.definition = EntitiesService.getDefinition();
        }

        function getColumnsByEntity(){
            if(vm.definition.entity != null){
                vm.columns = EntitiesService.getColumnsByEntity(vm.definition.entity.nombre);
            }
            else{
                vm.columns = {};
            }
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