(function(){
  'use strict';

  angular.module("app.panelService",[])
  .factory("panelService",panelService);

  panelService.$inject=['$http', '$log', '$q'];

  function panelService($http,$log,$q){
    return {
      getPanel:getPanel
  };

  function getPanel(){

    return $http.get('assets/data/panel.json')
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
