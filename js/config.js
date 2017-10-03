(function() {
	'use strict';

	angular.module('Widgets')
	.config(config);


	function config($stateProvider, $urlRouterProvider) {
		var registerStatefulModal = function (stateName, controller, template, parent, params, size, resolves) {
            params = params || {};
            resolves = resolves || angular.extend({}, resolves, { stateParams: ["$stateParams", function ($stateParams) { return $stateParams; }] });
            size = size || "md";
            var modal;
            $stateProvider.state(stateName, {
                modal: true,
                parent: parent || "home",
                params: params,
                onEnter: [
                "$stateParams",
                "$uibModal",
                function ($stateParams, $uibModal) {
                    //log('stateful modal enter', stateName, resolves);
                    /$previousState.memo('modalInvoker');/
                    modal = $uibModal.open({
                        animation: true,
                        controller: controller,
                        templateUrl: template,
                        backdrop: "static",
                        keyboard: false,
                        size: size,
                        resolve: resolves
                    });
                    // $scope.cancel functions should use modal.dismiss('cancel') or modal.dismiss('success') etc. to close the modal
                    // so we can restore the previous state
                    modal.result.then(
                        // modal exited via state change 
                        function (result) {
                            //log('modal close', result); 
                        },
                        // modal exited via cancel or escape
                        function (reason) {
                            //log('modal dismiss', reason);
                        });
                }
                ],
                onExit: function () {
                    if (modal) {
                        modal.close();
                    }
                }
            });
        }


		var WidgetState = {
			name: 'createWidget',
			url: '/createWidget',
			component: 'widget'
		}

		$stateProvider.state(WidgetState);

		registerStatefulModal(
			'widgetIndex',
			'CreateWidgetController',
			'js/WidgetModule/views/widgetIndex.html',
			'createWidget',
			{}
			);
   //      registerStatefulModal(
			// 'widgetEntity',//Nombre del estado
			// 'widgetEntity',//Componente
			// 'widgetIndex',//Papa
			// {}
			// );
   //      registerStatefulModal(
			// 'widgetFilter',//Nombre del estado
			// 'widgetFilter',//Componente
			// 'widgetEntity',//Papa
			// {}
			// );
   //      registerStatefulModal(
			// 'widgetPreview',//Nombre del estado
			// 'widgetPreview',//Componente
			// 'widgetFilter',//Papa
			// {}
			// );

        
	}
})();
