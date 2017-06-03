(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('EntitiesRepository', EntitiesRepository);

	EntitiesRepository.$inject = ['$http'];

	function EntitiesRepository($http){
		var service = {

			getEntities: getEntities,
			getWidgets: getWidgets
		};
		return service;


		function getEntities() {
			
			var entities = [
                {id: 1, nombre: 'Comprador'},
                {id: 2, nombre: 'Compra'},
                {id: 3, nombre: 'Proveedor'}
            ];
			return entities;
		}

		function getWidgets() {
			
			var widgetsType = [
                {id: 1, nombre: 'Pie Chart'},
                {id: 2, nombre: 'Grafico de Barras'},
                {id: 3, nombre: 'Grafico de Lineas'}
            ];
			return widgetsType;
		}

		function getColumns() {
			
			var widgetsType = [
                {id: 1, nombre: 'Pie Chart'},
                {id: 2, nombre: 'Grafico de Barras'},
                {id: 3, nombre: 'Grafico de Lineas'}
            ];
			return widgetsType;
		}


	}
})();