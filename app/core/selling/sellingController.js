(function(){

  angular.module('core.mod.selling',['app.sellingService'])
  .controller('SellingController',SellingController);

   SellingController.$inject=['$scope','$rootScope','$log','$stateParams','sellingService'];

   function SellingController($scope,$rootScope,$log,$stateParams,sellingService){
     var vm=this;
     vm.showList=true;

     retrieveDeal();

     function retrieveDeal(){
       return getDeals().then(function(){
         $log.info("getDeals received");
       });
     }
     function getDeals(){
       return sellingService.getSellingDeals().then(function(data){
         console.log('data '+data);
         return vm.deals=data;
       });
     }
     vm.breadCrumbArray=[];
     vm.breadCrumbArray.push('Most Selling');
     $rootScope.$emit('selling',vm.breadCrumbArray);
   }

})();
