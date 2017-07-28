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
			baseColumn : null,
			value:{}
		}
		var valueOperation = {
			add : 'suma',
			count : 'contar',
			min : 'minimo',
			max : 'maximo' 
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
			setBasicDefinition : setBasicDefinition,
			setEntity : setEntity,
			setBaseColumn : setBaseColumn
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
					{id:1, name:"Nombre", type: "string"},
					{id:2, name:"Tipo", type: "string"},
					{id:3, name:"Origen de fondos", type: "string"},
					{id:4, name:"Nit", type: "string"}
				];
			}
			if(entity == "Proveedor"){
				service.entityColumns= [
					{
						id: 1,
						name: "Nombre",
						type: "string"
					},
					{
						id: 2, 
						name:"Tipo",
						type: "string"
					},
					{
						id: 3, 
						name: "Municipio",
						type: "string"
					},
					{
						id: 4, 
						name: "Nit",
						type: "string"
					}
				];
			}
			if(entity == "Adjudicacion"){
				service.entityColumns= [
					{id:1, name:"Status", type: "string"},
					{id:2, name:"Modalidad", type: "string"},
					{id:3, name:"Categoria", type: "string"},
					{id:4, name:"Monto", type: "int"},
					{id:5, name: "Año de Adjudicacion", type: "date"},
					{id:5, name: "Mes de Adjudicacion", type: "date"}
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