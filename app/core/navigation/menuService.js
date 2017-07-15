(function(){
  'use strict';

  angular.module("app.menuService",[])
  .factory("menuService",menuService);

  menuService.$inject=['$http', '$log', '$q'];

  function menuService($http,$log,$q){
    return {
      getMenuOption:getMenuOption
  };

  function getMenuOption(){

    return $http.get('assets/data/menuOption.json')
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
