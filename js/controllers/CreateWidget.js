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
        "EntitiesRepository"
    ];

    function createWidgetController($scope, $rootScope, $state, $stateParams, EntitiesRepository) {
        var vm = this;
        vm.stepTwo = stepTwo;
        var widgetModal = {widget:0, nombre:""};
        getEntitites()
        function getEntitites(){
            vm.widgetsType = EntitiesRepository.getWidgets();
        }
        function stepTwo(){
            $state.go('widgetEntity');
        }
        
    }
    
})();