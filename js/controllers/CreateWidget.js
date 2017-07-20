(function () {
    'use strict';

    angular.module("Widgets")
        .controller("CreateWidgetController", createWidgetController)
        .component("widgetIndex", {
            templateUrl: "/views/widgetIndex.html",
            controller: "CreateWidgetController",
            controllerAs: "vmWidgetIndex"
        });
    //Nuevos servicios y repositorios
    createWidgetController.$inject = [
        "$scope",
        "$rootScope",
        "$state",
        "$stateParams",
        "EntitiesService"
    ];

    function createWidgetController($scope, $rootScope, $state, $stateParams, EntitiesService) {
        var vm = this;
        
        vm.definition = {
            name : null,
            widgetType : null
        }
        
        vm.stepTwo = stepTwo;
        getEntitites()
        function getEntitites(){
            vm.widgetsType = EntitiesService.getWidgets();
        }
        function stepTwo(){
            setDefinition();
            console.log(vm.definition);
            $state.go('widgetEntity');
        }

        function setDefinition(){
            EntitiesService.setBasicDefinition(vm.definition);
        }
        
    }
    
})();