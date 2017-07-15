(function(){
  angular.module('app.mod.dealer',[])
  .controller('DealerController',DealerController);

  DealerController.$inject=['$scope','$rootScope','$log','$stateParams'];

  function DealerController($scope,$rootScope,$log,$stateParams){
    var vm =this;
    vm.breadCrumbArray=[];
    vm.breadCrumbArray.push('DealerShip');
    $rootScope.$emit('dealer',vm.breadCrumbArray);
  }
})();
