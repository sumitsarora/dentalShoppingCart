(function () {
    'use strict';

    angular.module('app.nav.header', ['ngAnimate'])

            .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$rootScope','$scope','$location'];

    function HeaderController($rootScope,$scope,$location) {
      var vm=this;
      vm.searchText='';
      vm.searchCall=function(){

        console.log('text '+vm.searchText);
        //emitting the search request to pass on DetailListController
        if(vm.searchText!=undefined){
          console.log('enter '+vm.searchText);
          if(vm.searchText!=''){
          $rootScope.$emit('searchInput',vm.searchText);
          $location.path('/product/'+vm.searchText);
          vm.searchText='';
          }
        }
      };
}
})();
