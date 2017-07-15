(function(){
  angular.module('app.sellingService', [])

          .factory('sellingService', sellingService);

  sellingService.$inject = ['$http', '$log', '$q'];

  function sellingService($http,$log,$q){
    return {
        getSellingDeals: getSellingDeals
      };
  function getSellingDeals(){
    return $http.get('assets/data/selling.json')
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
