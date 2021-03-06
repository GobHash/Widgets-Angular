(function () {
    'use strict';

    angular.module("Widgets")
        .controller("IndexWidgetController", indexWidgetController)
        .component("widget", {
            templateUrl: "node_modules/widgets-angular/views/index.html",
            controller: "IndexWidgetController",
            controllerAs: "vmWidgetHome"
        });
    //Nuevos servicios y repositorios
    indexWidgetController.$inject = [
        "$scope",
        "$rootScope",
        "$state",
        "$stateParams",
        "EntitiesService"
    ];

    function indexWidgetController($scope, $rootScope, $state, $stateParams, EntitiesService) {
        var vm = this;
    }
    
})();
