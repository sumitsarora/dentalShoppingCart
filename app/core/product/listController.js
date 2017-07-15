(function(){
  angular.module('app.product.list', ['ngAnimate','app.prodCatService','app.panelService'])
    .controller('ProductListController',ProductListController);

    ProductListController.$inject = ['$scope','$rootScope','$log','prodCatService','panelService'];

    function ProductListController($scope,$rootScope,$log,prodCatService,panelService){
      var vm=this;
      vm.page='list of items';

      //clear the breadcrumbs
      $scope.breadCrumbArray=[];
      $rootScope.$emit('home',$scope.breadCrumbArray);

      retrieveImages();
      retrieveVideos();
      retrieveAdvertisement();
      retrievePanel();

      function retrieveImages(){
        return getFamilyImages().then(function(){
          $log.info("images received");
        });
      }
      function getFamilyImages(){
        return prodCatService.getImages().then(function(data){
          return vm.images=data;
        });
      }

      function retrieveVideos(){
        return getVideos().then(function(){
          $log.info("videos received");
        });
      }
      function getVideos(){
        return prodCatService.getVideos().then(function(data){
          return vm.videos=data;
        });
      }

      function retrieveAdvertisement(){
        return getAdvertisement().then(function(){
          $log.info("Advertisement received");
        });
      }
      function getAdvertisement(){
        return prodCatService.getAdvertisement().then(function(data){
          return vm.advertisement=data;
        });
      }

      function retrievePanel(){
        return getPanel().then(function(){
          $log.info("getPanel received");
        });
      }
      function getPanel(){
        return panelService.getPanel().then(function(data){
          return vm.panel=data;
        });
      }
    }
})();
