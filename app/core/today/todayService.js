(function(){
  angular.module('app.dealService', [])

          .factory('dealService', dealService);

  dealService.$inject = ['$http', '$log', '$q'];

  function dealService($http,$log,$q){
    return {
        getDeals: getDeals
      };
  function getDeals(){
    return $http.get('assets/data/dealList.json')
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
