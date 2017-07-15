(function(){
  angular.module('app.nav.service', ['ngAnimate'])
    .controller('ServicesViewController',ServicesViewController);

    ServicesViewController.$inject = ['$scope','$rootScope','$log','$stateParams'];

    function ServicesViewController($scope,$rootScope,$log,$stateParams){
      var vm=this;

      vm.breadCrumbArray=[];
      vm.breadCrumbArray.push('Services');
      $rootScope.$emit('services',vm.breadCrumbArray);
    }
  })();
