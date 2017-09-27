(function(){
	'use strict';

	angular
	.module('Widgets')
	.factory('EntitiesService', EntitiesService);

	EntitiesService.$inject = ['$http', 'EntitiesRepository', 'OperationRepository'];

	function EntitiesService($http, EntitiesRepository, OperationRepository){
		var definition = {
			name : null,
			widgetType : null,
			entity : null,
			filters : null,
			dateFilter: null,
			baseColumn : null,
			category:{
				operation:{},
				column:{}
			}
		}
		var valueOperation = [
			{
				id: 1,
				operation: 'Sumar'
			},
			{
				id: 2,
				operation: 'Contar'
			},
			{
				id: 3,
				operation: 'Sacar el Minimo' 
			},
			{
				id: 4,
				operation: 'Sacar el Maximo'
			}
		]
		var entities = [
			{id: 1, name: 'Comprador'},
			{id: 2, name: 'Adjudicacion'},
			{id: 3, name: 'Proveedor'}
		];

		var widgetsType = [
			{id: 1, name: 'Gráfico de Pie'},
			{id: 2, name: 'Gráfico de Barras'},
			{id: 3, name: 'Gráfico de Líneas'}
		];
		/*
		var entityColumns = [
	
			{id:1, name:"Nombre del Comprador", type: "string", entity:"Comprador"},
			{id:2, name:"Tipo de Comprador", type: "string", entity:"Comprador"},
			{id:3, name:"Origen de fondos", type: "string", entity:"Comprador"},
			{id:4, name:"Nit del Comprador", type: "string", entity:"Comprador"},
			{
				id: 5,
				name: "Nombre del Proveedor",
				type: "string",
				entity: "Proveedor"
			},
			{
				id: 6, 
				name:"Tipo de Proveedor",
				type: "string",
				entity: "Proveedor"
			},
			{
				id: 7, 
				name: "Municipio",
				type: "string",
				entity: "Proveedor"
			},
			{
				id: 8, 
				name: "Nit de Proveedor",
				type: "string",
				entity: "Proveedor"
			},
			{id:9, name:"Estatus", type: "string", entity: "Adjudicacion"},
			{id:10, name:"Modalidad", type: "string", entity: "Adjudicacion" },
			{id:11, name:"Categoria", type: "string", entity: "Adjudicacion"},
			{id:12, name:"Monto", type: "int", entity: "Adjudicacion"},
			{id:13, name: "Año de Adjudicacion", type: "date", entity: "Adjudicacion"},
			{id:14, name: "Mes de Adjudicacion", type: "date", entity: "Adjudicacion"}

			
		];
		*/
		var service = {
			getEntities: getEntities,
			getWidgets : getWidgets,
			getColumnsByEntity : getColumnsByEntity,
			entities : entities,
			widgetsType : widgetsType,
			definition : definition,
			getDefinition : getDefinition,
			setBasicDefinition : setBasicDefinition,
			setEntity : setEntity,
			setBaseColumn : setBaseColumn,
			valueOperation : valueOperation,
			getValueOperation : getValueOperation,
			getAllColumns : getAllColumns,
			setCategory : setCategory,
			setFilters: setFilters,
			setDateFilter: setDateFilter,
			getOperationsByType : getOperationsByType,
			setDefinition : setDefinition
		};
		return service;


		function getEntities() {
			return EntitiesRepository.getEntities().then(function(data){
				service.entities = data;
				return data
			}).catch(function(err){
				console.log(err);
			})
			
		}

		function getWidgets() {
			return service.widgetsType;
		}

		function getColumnsByEntity(entity) {
			
			/*var columns = [];
			for(var i=0; i<service.entityColumns.length; i++){
				var element = service.entityColumns[i];
				if(element.entity == entity){
					columns.push(element);
				}
				
			}*/

			return EntitiesRepository.getColumnsByEntity(entity).then(function(data){
				console.log(data)
				return data;
			}).catch(function(err){
				console.log(err);
			})
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

		function getValueOperation(){
			return service.valueOperation;
		}

		function getAllColumns(){
			return EntitiesRepository.getColumns().then(function(data){
				return data;
			}).catch(function(err){
				console.log(err);
			})
		}

		function setCategory(operation, column){
			service.definition.category.operation = operation;
			service.definition.category.column = column;
		}

		function setFilters(filter){
			service.definition.filters = filter;
		}

		function setDateFilter(dateFiler){
			service.dateFiler = dateFiler;
		}

		function getOperationsByType (type){
			return OperationRepository.getOperationsByOperationType(type)
				.then(function(data){
					console.log(data);
					return data;
				}).catch(function(err){
					console.log(err);
				});
		}

		function setDefinition(definition){
			vm.definition = definition;
		}

	}
})();