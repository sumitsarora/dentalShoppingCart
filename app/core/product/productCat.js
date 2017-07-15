(function () {
    'use strict';

    angular.module('app.prodCatService', ['app'])

            .factory('prodCatService', prodCatService);

    prodCatService.$inject = ['$http', '$log', '$q','HTTP_URL','HTTP_URL_PC'];

    function prodCatService($http, $log, $q,HTTP_URL,HTTP_URL_PC) {
        return {
            getTodos: getTodos,
            getImages:getImages,
            getVideos:getVideos,
            getAdvertisement:getAdvertisement,
            getProductObject:getProductObject
        };

        function getTodos() {
            //return $http.get('assets/data/prodcat.json')
            return $http.get(HTTP_URL)
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

        function getProductObject(req) {
            //return $http.get('assets/data/prodcat.json')
            //HTTP_URL_PC+'/'+req;
            return $http.get(HTTP_URL_PC+'/'+req)
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

        function getImages() {
            return $http.get('assets/data/images.json')
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

        function getVideos() {
            return $http.get('assets/data/video.json')
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

        function getAdvertisement() {
            return $http.get('assets/data/advertisement.json')
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
