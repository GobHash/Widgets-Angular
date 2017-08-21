(function(){
	'use strict';

	angular
	.module('Widgets')
    .factory('EntitiesRepository', EntitiesRepository);
    
    EntitiesRepository.$inject = ['$http'];

	function EntitiesRepository($http){
        var repository = {
            getEntities: getEntities,
            getColumnsByEntity: getColumnsByEntity,
            getColumns: getColumns
        };

        return repository;

        function getEntities(){
            return $http({

                "method": "GET", 
                "url": "http://localhost:3000/v1/entity/getEntities",
                "data" : {},
                "params" : {
                },
                "headers": {
                }
            }).then(function (response) {
                return response.data;
            })
            .catch(function (err) {
                console.log(err);
                return err;
            });
        }

        function getColumnsByEntity(id){
            return $http({

                "method": "GET", 
                "url": "http://localhost:3000/v1/column/getColumnByEntity/" + id,
                "data" : {
                },
                "params" : {
                },
                "headers": {
                }
            }).then(function (response) {
                return response.data;
            })
            .catch(function (err) {
                console.log(err);
                return err;
            });
        }

        function getColumns(){
            return $http({

                "method": "GET", 
                "url": "http://localhost:3000/v1/column/getColumns",
                "data" : {},
                "params" : {},
                "headers": {
                }
            }).then(function (response) {
                return response.data;
            })
            .catch(function (err) {
                console.log(err);
                return err;
            });
        }
    }

})();