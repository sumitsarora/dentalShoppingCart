(function () {
    'use strict';

    angular.module('app.nav.breadcrumbs', ['app'])

            .controller('BreadcrumbsController', BreadcrumbsController);

    BreadcrumbsController.$inject = ['$rootScope','$scope','$location','MOST_SELLING','TODAY_DEALS','SERVICES','DEALER_SHIP','CONTACT','TESTIMONIAL'];

    function BreadcrumbsController($rootScope,$scope,$location,MOST_SELLING,TODAY_DEALS,SERVICES,DEALER_SHIP,CONTACT,TESTIMONIAL) {
      var vm=this;
      $scope.breadCrumbArray=[];
      vm.selectedItem='';
      $rootScope.$on('breadcrumb', function (event, data) {
        if(vm.checkDuplicate(String(data),$scope.breadCrumbArray)){
        var pieces = String(data).split(",");
        $scope.breadCrumbArray.push(String(pieces[pieces.length-1]));
        vm.selectedItem=String(pieces[pieces.length-1]);
        console.log("trigger product"+$scope.breadCrumbArray);
      }
      });
      $rootScope.$on('services', function (event, data) {
        if(vm.checkDuplicate(String(data),$scope.breadCrumbArray))
        $scope.breadCrumbArray.push(String(data));
        vm.selectedItem=String(data);
        console.log("trigger services"+$scope.breadCrumbArray);
      });
      $rootScope.$on('dealer', function (event, data) {
        if(vm.checkDuplicate(String(data),$scope.breadCrumbArray))
        $scope.breadCrumbArray.push(String(data));
        vm.selectedItem=String(data);
        console.log("trigger dealer"+$scope.breadCrumbArray);
      });
      $rootScope.$on('today', function (event, data) {
        if(vm.checkDuplicate(String(data),$scope.breadCrumbArray))
        $scope.breadCrumbArray.push(String(data));
        vm.selectedItem=String(data);
        console.log("trigger today"+$scope.breadCrumbArray);
      });
      $rootScope.$on('contact', function (event, data) {
        if(vm.checkDuplicate(String(data),$scope.breadCrumbArray))
        $scope.breadCrumbArray.push(String(data));
        vm.selectedItem=String(data);
        console.log("trigger contact"+$scope.breadCrumbArray);
      });
      $rootScope.$on('testimonial', function (event, data) {
        if(vm.checkDuplicate(String(data),$scope.breadCrumbArray))
        $scope.breadCrumbArray.push(String(data));
        vm.selectedItem=String(data);
        console.log("trigger testimonial"+$scope.breadCrumbArray);
      });
      $rootScope.$on('selling', function (event, data) {
        if(vm.checkDuplicate(String(data),$scope.breadCrumbArray))
        $scope.breadCrumbArray.push(String(data));
        vm.selectedItem=String(data);
        console.log("trigger selling"+$scope.breadCrumbArray);
      });

      $rootScope.$on('home', function (event, data) {
        $scope.breadCrumbArray=[];
        vm.selectedItem=String(data);
        console.log("trigger home"+$scope.breadCrumbArray);
      });

      vm.searchItem=function(input){
        if(input!=''){
          console.log('size of breadcrumb '+$scope.breadCrumbArray.length);
          var tempArr=[];

          for(var i in $scope.breadCrumbArray){
            tempArr.push($scope.breadCrumbArray[i]);
            if($scope.breadCrumbArray[i]===input){
            console.log('item '+$scope.breadCrumbArray[i]);
            $scope.breadCrumbArray=[];
            $scope.breadCrumbArray=tempArr;
            vm.selectedItem=input;
            break;
          }
          }
          console.log('input '+input);
          if(input.localeCompare(MOST_SELLING)==0)
          $location.path('/selling');

          else if(input.localeCompare(TODAY_DEALS)==0)
          $location.path('/deal');

          else if(input.localeCompare(SERVICES)==0)
          $location.path('/services');

          else if(input.localeCompare(DEALER_SHIP)==0)
          $location.path('/dealer');

          else if(input.localeCompare(CONTACT)==0)
          $location.path('/contact');

          else if(input.localeCompare(TESTIMONIAL)==0)
          $location.path('/testimonial');

          else
          {
           $rootScope.$emit('breadSearch',input);
           console.log('breadSearch input  '+input);
           $location.path('/product/'+input);
         }
        }
      }

      vm.checkDuplicate=function(input,array){
        var i=array.indexOf(input);
        var flag=false;
        if(i==-1)
        flag=true;
        return flag;
      }
    }
})();
