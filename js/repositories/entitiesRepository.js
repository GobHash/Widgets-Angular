(function(){
	'use strict';

	angular
	.module('Widgets')
    .factory('EntitiesRepository', EntitiesRepository);
    
    EntitiesService.$inject = ['$http'];

	function EntitiesRepository($http){
        var repository = {

        };

        return repository;
    }

})();