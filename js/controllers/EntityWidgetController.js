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
        getValueOperation();
        //getColumnsByEntity();


        function getEntitites(){
            vm.entitiesType = EntitiesService.getEntities();
        }

        function getDefinition(){
            vm.definition = EntitiesService.getDefinition();
        }

        function getValueOperation(){
            vm.valueOperation = EntitiesService.getValueOperation()
        }

        function getColumnsByEntity(){
            if(vm.definition.entity != null){
                vm.columns = EntitiesService.getColumnsByEntity(vm.definition.entity.name);
            }
            else{
                vm.columns = {};
            }
        }

        function setEntityInDefinition(){
            EntitiesService.setEntity(vm.definition.entity)
        }

        function setBaseColumnInDefinition(){
            EntitiesService.setBaseColumn(vm.definition.baseColumn)
        }

        function backStepOne(){
            $state.go('widgetIndex');
        }

        function stepTree(){
            setEntityInDefinition();
            setBaseColumnInDefinition();
            $state.go('widgetFilter');
        }
        console.log(vm.definition);

    }
    
})();