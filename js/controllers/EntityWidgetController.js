(function () {
    'use strict';

    angular.module("Widgets")
        .controller("EntityWidgetController", entityWidgetController)
        .component("widgetEntity", {
            templateUrl: "js/WidgetModule/views/widgetData.html",
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
        getDefinition();
        vm.valueColumn = null;
        vm.selectValueOp = null;
        
        getEntitites();
        getColumnsByEntity();
        getOperationsByType();
        getValueOperation();
        getAllColumns();
        getColumsForOperations();
        
        vm.stepTree = stepTree;
        vm.backStepOne = backStepOne;
        vm.getColumnsByEntity = getColumnsByEntity;
        vm.getOperationsByType = getOperationsByType;
        vm.getOperationsByColumnType = getOperationsByColumnType;
        
        //getColumnsByEntity();


        function getEntitites(){
            vm.entitiesType = EntitiesService.getEntities().then(function(data){
                vm.entitiesType = data
            }).catch(function(err){
                console.log(err);
            });
        }

        function getDefinition(){
            vm.definition = EntitiesService.getDefinition();
        }

        function getValueOperation(){
            vm.valueOperation = EntitiesService.getValueOperation()
        }

        function getAllColumns(){
            EntitiesService.getAllColumns().then(function(data){
                vm.allColumns = data;
            }).catch(function(err){
                console.log(err);
            }).finally(function(){
                getColumsForOperations();
            })
        }

        function getColumnsByEntity(){
            if(vm.definition.entity != null){
                vm.columns = EntitiesService.getColumnsByEntity(vm.definition.entity.id)
                    .then(function(data){
                        vm.columns = data;
                    }).catch(function(err){
                        console.log(err);
                    });
            }
        }

        function setEntityInDefinition(){
            EntitiesService.setEntity(vm.definition.entity)
        }

        function setBaseColumnInDefinition(){
            EntitiesService.setBaseColumn(vm.definition.baseColumn)
        }

        function backStepOne(){
            setEntityInDefinition();
            setBaseColumnInDefinition();
            setCategory();
            console.log(vm.columns);
            $state.go('widgetIndex');
        }
        function setCategory(){
            EntitiesService.setCategory(vm.selectValueOp, vm.valueColumn);
        }

        function stepTree(){
            if(vm.dataForm.$valid){
                setEntityInDefinition();
                setBaseColumnInDefinition();
                setCategory();
                console.log(vm.definition);
                $state.go('widgetFilter');
            }
            else{
                vm.alert = "Por favor complete los campos necesarios";
            }
            
        }
        function getOperationsByType(){
            EntitiesService.getOperationsByType(2).then(function(data){
                vm.operations = data;
            }).catch(function(err){
                console.log(err);
            });
        }

        function getOperationsByColumnType(columnType){
            vm.operationsByType = EntitiesService.getOperationsByColumnType(vm.operations, columnType)
        }

        function getColumsForOperations(){
            vm.operationColumns = EntitiesService.getColumnsForFilters();
            console.log(vm.operationColumns);
        }
        console.log(vm.definition);

    }
    
})();
