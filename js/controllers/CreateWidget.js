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
        vm.stepTwo = stepTwo;
        var widgetModal = {widget:0, nombre:""};
        getEntitites()
        function getEntitites(){
            vm.widgetsType = EntitiesService.getWidgets();
        }
        function stepTwo(){
            $state.go('widgetEntity');
        }
        
    }
    
})();