(function(){
  angular.module('core.mod.testimonial',[])
  .controller('TestimonialController',TestimonialController);

  TestimonialController.$inject=['$scope','$rootScope','$log','$stateParams'];

  function TestimonialController($scope,$rootScope,$log,$stateParams){
    var vm=this;

    vm.breadCrumbArray=[];
    vm.breadCrumbArray.push('Testimonials');
    $rootScope.$emit('testimonial',vm.breadCrumbArray);

  }
})();
