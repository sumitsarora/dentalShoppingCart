(function(){
  angular.module('app.mod.contact',[])
  .controller('ContactController',ContactController);

  ContactController.$inject=['$scope','$rootScope','$log','$stateParams'];

  function ContactController($scope,$rootScope,$log,$stateParams){
    var vm =this;
    vm.breadCrumbArray=[];
    vm.breadCrumbArray.push('Contact & Order');
    $rootScope.$emit('contact',vm.breadCrumbArray);
  }
})();
