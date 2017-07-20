(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('EntitiesService', EntitiesService);

	EntitiesService.$inject = ['$http'];

	function EntitiesService($http){
		var definition = {
			name : null,
			entity : null
			
		}
		var entities = [
			{id: 1, nombre: 'Comprador'},
			{id: 2, nombre: 'Adjudicacion'},
			{id: 3, nombre: 'Proveedor'}
		];

		var widgetsType = [
			{id: 1, nombre: 'Pie Chart'},
			{id: 2, nombre: 'Grafico de Barras'},
			{id: 3, nombre: 'Grafico de Lineas'}
		];

		var entityColumns = [];

		var service = {
			getEntities: getEntities,
			getWidgets : getWidgets,
			getColumnsByEntity : getColumnsByEntity,
			entities : entities,
			widgetsType : widgetsType,
			entityColumns : entityColumns,
			definition : definition,
			getDefinition : getDefinition,
			setDefinition : setDefinition
		};
		return service;


		function getEntities() {
			return service.entities;
		}

		function getWidgets() {
			return service.widgetsType;
		}

		function getColumnsByEntity(entity) {
			
			if(entity == "Comprador"){
				service.entityColumns= [
					{id:1, name:"Nombre"},
					{id:2, name:"Tipo"},
					{id:3, name:"Origen de fondos"},
					{id:4, name:"Nit"}
				];
			}
			if(entity == "Proveedor"){
				service.entityColumns= [
					{id:1, name:"Nombre"},
					{id:2, name:"Tipo"},
					{id:3, name:"Municipio"},
					{id:4, name:"Nit"}
				];
			}
			if(entity == "Adjudicacion"){
				service.entityColumns= [
					{id:1, name:"Status"},
					{id:2, name:"Modalidad"},
					{id:3, name:"Categoria"},
					{id:4, name:"Monto"}
				];
			}

			return service.entityColumns;
			
		}

		function getDefinition(){
			return service.definition;
		}

		function setDefinition(definition){
			service.definition = definition;
		}


	}
})();