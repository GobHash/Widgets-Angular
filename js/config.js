(function() {
	'use strict';

	angular.module('Widgets')
	.config(config);


	function config($stateProvider, $urlRouterProvider) {
		var registerStatefulModal = function (stateName, component, parent, params, size, resolves) {
			params = params || {};
			resolves = resolves || angular.extend({}, resolves, { stateParams: ['$stateParams', function ($stateParams) { return $stateParams; }] });
			size = size || 'md';
			var modal;
			$stateProvider.state(stateName, {
																					url: '/'+ stateName,// I only use this for debugging
																					modal: true,
																					parent: parent || 'home',
																					params: params,
																					onEnter: [
																					'$stateParams',
																					/*'$previousState',*/
																					'$uibModal',
																					function ($stateParams, $uibModal, $previousState) {
																													//log('stateful modal enter', stateName, resolves);
																													/*$previousState.memo('modalInvoker');*/
																													modal = $uibModal.open({
																														animation: true,
																														component: component,
																														backdrop: 'static',
																														keyboard: false,
																														size: size,
																														resolve: resolves
																													});
																													// $scope.cancel functions should use modal.dismiss('cancel') or modal.dismiss('success') etc. to close the modal 
																													// so we can restore the previous state
																													modal.result.catch(function (reason) {
																															// log('modal dismiss', reason);
																															/*if (reason)
																															$previousState.go('modalInvoker');*/
																														});
																													modal.result.then(function (result) {
																															//log('modal close', result);
																														});
																													modal.result.finally(function () {
																														modal.$destroy(); 
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
			url: 'createWidget',
			component: 'Widget'
		}

		$stateProvider.state(WidgetState);

		registerStatefulModal(
			'widgetIndex',
			'widgetIndex',
			'createWidget',
			{}
			);
        registerStatefulModal(
			'widgetEntity',//Nombre del estado
			'widgetEntity',//Componente
			'widgetIndex',//Papa
			{}
			);

		$urlRouterProvider.otherwise('/createWidget');

        
	}
})();