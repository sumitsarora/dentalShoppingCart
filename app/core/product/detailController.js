(function(){
  angular.module('app.product.detail', ['ngAnimate','app.prodCatService'])
    .controller('DetailListController',DetailListController);

    DetailListController.$inject = ['$scope','$rootScope','$log','$stateParams','prodCatService'];

    function DetailListController($scope,$rootScope,$log,$stateParams,prodCatService){
      var vm=this;

      // variable declaration
      vm.showList=true;
      vm.request=null;
      vm.breadCrumbArray=[];
      vm.page='Details List Controller';

      console.log('request ...'+$stateParams.request);
      console.log('level1 ...'+$stateParams.level1);
      console.log('level2 ...'+$stateParams.level2);
      console.log('level3 ...'+$stateParams.level3);
      console.log('level4 ...'+$stateParams.level4);

    if($stateParams.request!=null){
        vm.request=replaceSpecialChar($stateParams.request);
        vm.breadCrumbArray.push(angular.copy($stateParams.request));
        vm.searchText=$stateParams.request;
    }else if($stateParams.level4!=undefined){
        vm.request=replaceSpecialChar($stateParams.level1)+'$'+replaceSpecialChar($stateParams.level2)+
        '$'+replaceSpecialChar($stateParams.level3)+'$'+replaceSpecialChar($stateParams.level4);
        vm.breadCrumbArray.push(angular.copy($stateParams.level4));
        vm.searchText=$stateParams.level4;
    }else if($stateParams.level3!=undefined){
        vm.request=replaceSpecialChar($stateParams.level1)+'$'+replaceSpecialChar($stateParams.level2)+'$'+replaceSpecialChar($stateParams.level3);
        vm.breadCrumbArray.push(angular.copy($stateParams.level3));
        vm.searchText=$stateParams.level3;
    }else if($stateParams.level2!=undefined){
        vm.request=replaceSpecialChar($stateParams.level1)+'$'+replaceSpecialChar($stateParams.level2);
        vm.breadCrumbArray.push(angular.copy($stateParams.level2));
        vm.searchText=$stateParams.level2;
    }else if($stateParams.level1!=undefined){
        vm.request=replaceSpecialChar($stateParams.level1);
        vm.breadCrumbArray.push(angular.copy($stateParams.level1));
        vm.searchText=$stateParams.level1;
    }
    console.log('***************vm.request*****************'+vm.request);

      //emitting the request to pass on another controller
      $rootScope.$emit('breadcrumb',vm.breadCrumbArray);


      //start: product list for search text
      $rootScope.$on('searchInput', function (event, data) {
        console.log('inside DetailListController for '+data);
        $rootScope.searchText=data;
        console.log("trigger search"+$rootScope.searchText);
        retrieve($rootScope.searchText);
        console.log('vm.prdList for searchText '+vm.prdList);
      });
      //end:

      //start: product list for breadcrumb text search
      $rootScope.$on('breadSearch', function (event, data) {
        console.log('inside DetailListController for '+data);
        $rootScope.searchText=data;
        console.log("trigger search"+$rootScope.searchText);
        retrieve($rootScope.searchText);
        console.log('vm.prdList for searchText '+vm.prdList);
      });
      //end:

      //display the list of items
      console.log("menu option "+vm.request);
      if(vm.request!='' || vm.request!=null){
        console.log('call from menu option '+vm.request)
      retrieve(vm.request);
      }

      function retrieve(input){
        var req=input;
        console.log('retrieve call '+req);
        return getProductDetailFromAPI(req).then(function(){
          $log.info('retrieve result');
        });
      }

      function getProductCat(req){
        vm.prdList=[];
        return prodCatService.getTodos().then(function(data){
        check4Product(data,req);
        if(vm.prdList.length<1){
            console.log('if cond');
            vm.showList=false;
            }else{
            console.log('else cond');
            vm.showList=true;
            }
            return vm.prdList;
        });

        function check4Product(data,req){
              console.log('check4Product');
              var flag=true;
              for(l1 in data.products){
                var i=data.products[l1].level1.toUpperCase().indexOf(req.toUpperCase());
                if(i!=-1){/*retrieving product list for level1 */
                  if(data.products[l1].level2.length>=1){
                    for(l2 in data.products[l1].level2){
                      if(data.products[l1].level2[l2].level5.length>=1){
                        for(l5 in data.products[l1].level2[l2].level5){
                          vm.prdList.push(data.products[l1].level2[l2].level5[l5]);
                        }
                       }
                       if(data.products[l1].level2[l2].level3.length>=1){
                          for(l3 in data.products[l1].level2[l2].level3){
                            if(data.products[l1].level2[l2].level3[l3].level5.length>=1){
                              for(l5 in data.products[l1].level2[l2].level3[l3].level5){
                                vm.prdList.push(data.products[l1].level2[l2].level3[l3].level5[l5]);
                              }
                            }
                            if(data.products[l1].level2[l2].level3[l3].level4.length>=1){
                              for(l4 in data.products[l1].level2[l2].level3[l3].level4){
                                if(data.products[l1].level2[l2].level3[l3].level4[l4].level5.length>=1){
                                  for(l5 in data.products[l1].level2[l2].level3[l3].level4[l4].level5){
                                    vm.prdList.push(data.products[l1].level2[l2].level3[l3].level4[l4].level5[l5]);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                  }
                  if(data.products[l1].level5.length>=1){
                      for(l5 in data.products[l1].level5){
                        vm.prdList.push(data.products[l1].level5[l5]);
                      }
                  }
                  if(vm.prdList.length>=1){
                   flag=false;
                   }
                }/*retrieving product list for level5 in level1 */
                if(flag){
                  for(l5 in data.products[l1].level5){
                    //var i=data.products[l1].level5[l5].name.toUpperCase().indexOf(req.toUpperCase());
                    var i=req.toUpperCase().indexOf(data.products[l1].level5[l5].name.toUpperCase());
                    if(i!=-1){
                      vm.prdList.push(data.products[l1].level5[l5]);
                    }
                  }
                  if(vm.prdList.length>=1){
                   flag=false;
                   }
                }
                if(flag){/*retrieving product list for level2 .. */
                  for(l2 in data.products[l1].level2){
                    var i=data.products[l1].level2[l2].level.toUpperCase().indexOf(req.toUpperCase());
                    if(i!=-1){
                      if(data.products[l1].level2[l2].level3.length>=1){
                        for(l3 in data.products[l1].level2[l2].level3){
                          if(data.products[l1].level2[l2].level3[l3].level4.length>=1){
                            for(l4 in data.products[l1].level2[l2].level3[l3].level4){
                              if(data.products[l1].level2[l2].level3[l3].level4[l4].level5.length>=1){
                                for(l5 in data.products[l1].level2[l2].level3[l3].level4[l4].level5){
                                  vm.prdList.push(data.products[l1].level2[l2].level3[l3].level4[l4].level5[l5]);
                                }
                              }
                            }
                          }
                          if(data.products[l1].level2[l2].level3[l3].level5.length>=1){
                            for(l5 in data.products[l1].level2[l2].level3[l3].level5){
                              vm.prdList.push(data.products[l1].level2[l2].level3[l3].level5[l5]);
                            }
                          }
                        }
                      }
                      if(data.products[l1].level2[l2].level5.length>=1){
                        for(l5 in data.products[l1].level2[l2].level5){
                          vm.prdList.push(data.products[l1].level2[l2].level5[l5]);
                        }
                      }
                      if(vm.prdList.length>=1){
                       flag=false;
                     }
                    }
                  }
                }
                /*retrieving product list for level5 in level2 */
                if(flag){
                  for(l2 in data.products[l1].level2){
                    for(l5 in data.products[l1].level2[l2].level5){
                      //var i=data.products[l1].level2[l2].level5[l5].name.toUpperCase().indexOf(req.toUpperCase());
                      var i=req.toUpperCase().indexOf(data.products[l1].level2[l2].level5[l5].name.toUpperCase());
                        if(i!=-1){
                          vm.prdList.push(data.products[l1].level2[l2].level5[l5]);
                          }
                    }
                  }
                  if(vm.prdList.length>=1){
                     flag=false;
                     }
                }
                if(flag){/*retrieving product list for level3 .. */
                  for(l2 in data.products[l1].level2){
                      for(l3 in data.products[l1].level2[l2].level3){
                        var i=data.products[l1].level2[l2].level3[l3].level.toUpperCase().indexOf(req.toUpperCase());
                        if(i!=-1){
                            if(data.products[l1].level2[l2].level3[l3].level4.length>=1){
                              for(l4 in data.products[l1].level2[l2].level3[l3].level4){
                                if(data.products[l1].level2[l2].level3[l3].level4[l4].level5.length>=1){
                                  for(l5 in data.products[l1].level2[l2].level3[l3].level4[l4].level5){
                                    vm.prdList.push(data.products[l1].level2[l2].level3[l3].level4[l4].level5[l5]);
                                  }
                                }
                              }
                            }
                            if(data.products[l1].level2[l2].level3[l3].level5.length>=1){
                              for(l5 in data.products[l1].level2[l2].level3[l3].level5){
                                vm.prdList.push(data.products[l1].level2[l2].level3[l3].level5[l5]);
                              }
                            }
                        }
                      }
                    }
                    if(vm.prdList.length>=1){
                     flag=false;
                   }
                }/*retrieving product list for level5 in level3 */
                if(flag){
                  for(l2 in data.products[l1].level2){
                    for(l3 in data.products[l1].level2[l2].level3){
                      for(l5 in data.products[l1].level2[l2].level3[l3].level5){
                        //var i=data.products[l1].level2[l2].level3[l3].level5[l5].name.toUpperCase().indexOf(req.toUpperCase());
                        var i=req.toUpperCase().indexOf(data.products[l1].level2[l2].level3[l3].level5[l5].name.toUpperCase());
                          if(i!=-1){
                            vm.prdList.push(data.products[l1].level2[l2].level3[l3].level5[l5]);
                            }
                        }
                    }
                  }
                  if(vm.prdList.length>=1){
                     flag=false;
                     }
                }
                if(flag){/*retrieving product list for level4 .. */
                  for(l2 in data.products[l1].level2){
                    for(l3 in data.products[l1].level2[l2].level3){
                      for(l4 in data.products[l1].level2[l2].level3[l3].level4){
                        var i=data.products[l1].level2[l2].level3[l3].level4[l4].level.toUpperCase().indexOf(req.toUpperCase());
                          if(i!=-1){
                            if(data.products[l1].level2[l2].level3[l3].level4[l4].level5.length>=1){
                              for(l5 in data.products[l1].level2[l2].level3[l3].level4[l4].level5){
                                vm.prdList.push(data.products[l1].level2[l2].level3[l3].level4[l4].level5[l5]);
                              }
                            }
                          }
                        }
                      }
                  }
                  if(vm.prdList.length>=1){
                   flag=false;
                 }
                }/*retrieving product list for level5 in level4 */
                if(flag){
                  for(l2 in data.products[l1].level2){
                    for(l3 in data.products[l1].level2[l2].level3){
                     for(l4 in data.products[l1].level2[l2].level3[l3].level4){
                      for(l5 in data.products[l1].level2[l2].level3[l3].level4[l4].level5){
                        //var i=data.products[l1].level2[l2].level3[l3].level4[l4].level5[l5].name.toUpperCase().indexOf(req.toUpperCase());
                        var i=req.toUpperCase().indexOf(data.products[l1].level2[l2].level3[l3].level4[l4].level5[l5].name.toUpperCase());
                          if(i!=-1){
                            vm.prdList.push(data.products[l1].level2[l2].level3[l3].level4[l4].level5[l5]);
                            }
                          }
                        }
                    }
                  }
                  if(vm.prdList.length>=1){
                     flag=false;
                  }
                }
              }
            }
      }
      function getProductDetailFromAPI(req){
          vm.prdList=[];
          console.log('getProductDetailFromAPI req',req)
          return prodCatService.getProductObject(req).then(function(data){
              console.log('getProductDetailFromAPI data ',data.product)
              vm.prdList=data
              console.log('vm.prdList data ',vm.prdList)
              if(vm.prdList.length<1){
                  console.log('if cond');
                  vm.showList=false;
                  }else{
                  console.log('else cond');
                  vm.showList=true;
                  }
                  return vm.prdList;
          });
      }
      function replaceSpecialChar(req){
          if(req.indexOf('/')!=-1){
              console.log('replace**************** char is '+req)
              req=req.replace('/','~')
          }
        console.log('replace char is '+req)
        return req;
      }
    }
})();
