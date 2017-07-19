(function () {
    'use strict';

    angular.module("Widgets")
        .controller("PreviewWidgetController", previewWidgetController)
        .component("widgetPreview", {
            templateUrl: "/views/widgetPreview.html",
            controller: "PreviewWidgetController",
            controllerAs: "vmWidgetPreview"
        });

    previewWidgetController.$inject = [
        "$scope",
        "$rootScope",
        "$state",
        "$stateParams",
        "EntitiesService"
    ];

    function previewWidgetController($scope, $rootScope, $state, $stateParams, EntitiesService) {
        var vm = this;
        
        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];

        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        
    }
    
})();