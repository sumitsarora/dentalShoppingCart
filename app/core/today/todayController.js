(function(){
  angular.module('core.mod.today',['app.dealService'])
  .controller('TodayController',TodayController);

  TodayController.$inject=['$scope','$rootScope','$log','$stateParams','dealService'];

  function TodayController($scope,$rootScope,$log,$stateParams,dealService){
    var vm=this;
    vm.showList=true;

    retrieveDeal();

    function retrieveDeal(){
      return getDeals().then(function(){
        $log.info("getDeals received");
      });
    }
    function getDeals(){
      return dealService.getDeals().then(function(data){
        console.log('data '+data);
        return vm.deals=data;
      });
    }

    vm.breadCrumbArray=[];
    vm.breadCrumbArray.push('Today\'s Deals');
    $rootScope.$emit('today',vm.breadCrumbArray);
  }
})();
