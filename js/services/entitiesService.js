(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('EntitiesService', EntitiesService);

	EntitiesService.$inject = ['$http'];

	function EntitiesService($http){
		var definition = {
			name : null,
			widgetType : null,
			entity : null,
			filters : [{}],
			baseColumn : null
		}
		var entities = [
			{id: 1, name: 'Comprador'},
			{id: 2, name: 'Adjudicacion'},
			{id: 3, name: 'Proveedor'}
		];

		var widgetsType = [
			{id: 1, name: 'Pie Chart'},
			{id: 2, name: 'Grafico de Barras'},
			{id: 3, name: 'Grafico de Lineas'}
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
			setBasicDefinition : setBasicDefinition
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

		function setBasicDefinition(definition){
			service.definition.name = definition.name;
			service.definition.widgetType = definition.widgetType;
		}

		function setEntity(entity){
			service.definition.entity = entity;
		}

		function setBaseColumn(column){
			service.definition.baseColumn = column;
		}


	}
})();