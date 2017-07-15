(function () {
    'use strict';

    angular.module('app.nav.menu', ['ui.router','app.prodCatService'])

            .controller('MenuController', MenuController);

    MenuController.$inject = ['$state','$log','prodCatService'];

    function MenuController($state,$log,prodCatService) {
        var vm = this;

        vm.getClass = getClass;

        function getClass(path) {
            if ($state.current.name.substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }


        retrieve();

        function retrieve(){
          return getProductCat().then(function(){
            $log.info('retrieve result');
          });
        }

        function getProductCat(){
          return prodCatService.getTodos().then(function(data){
            vm.productCat=data;
            console.log('data :::  '+data);
            return vm.productCat;
          });
        }
    }
})();
