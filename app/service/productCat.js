(function () {
    'use strict';

    angular.module('app.prodCatService', [])

            .factory('prodCatService', prodCatService);

    prodCatService.$inject = ['$http', '$log', '$q'];

    function prodCatService($http, $log, $q) {
        return {
            getTodos: getTodos
        };

        function getTodos() {
            return $http.get('assets/data/prodcat.json')
                    .then(getTodosComplete)
                    .catch(getTodosFailed);

            function getTodosComplete(response) {
                return response.data;
            }

            function getTodosFailed(e) {
                var newMessage = 'XHR Failed for getTodos.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();
