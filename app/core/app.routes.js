(function(){
  'use strict';
  angular.module('app')
    .config(config);

    config.$inject=['$stateProvider','$urlRouterProvider','$sceDelegateProvider'];

    function config($stateProvider,$urlRouterProvider,$sceDelegateProvider){
      //$sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
      //$sceDelegateProvider.resourceUrlWhitelist(['self', 'http://api.dentalbiz.in/**']);
      $sceDelegateProvider.resourceUrlWhitelist(['**']);
      $urlRouterProvider.when('','/product/list');
      $urlRouterProvider.when('/','/product/list');
      $urlRouterProvider.when('/detail','/detail/list');
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('root',{
        abstract:true,
        url:'/',
        views:{
              'header':{
              templateUrl: 'core/navigation/headerView.html',
              controller: 'HeaderController',
              controllerAs: 'HC'
            },
            'menu':{
              templateUrl: 'core/navigation/menuView.html',
              controller: 'MenuController',
              controllerAs: 'MVC'
            },
            'breadcrumbs': {
                templateUrl: 'core/navigation/breadcrumbsView.html',
                controller: 'BreadcrumbsController',
                controllerAs: 'BC'
            },
            'content':{
              template:'adding content here'
            },
            'footer': {
                  templateUrl: 'core/navigation/footerView.html'
            }
          } })
          .state('root.product',
            {
              url:'product'
            })
          .state('root.product.list',{

              url:'/list',
              data: {
                  title: 'Todos',
                  breadcrumb: 'List'
              },
              views:{ 'content@':{
                templateUrl: 'core/product/listView.html',
                controller: 'ProductListController',
                controllerAs: 'PLC'
                          }
                    }
            })
            .state('root.product.search',
            {
                url:'/:request',
                params: {
                  request: null
                },
                data: {
                    title: 'request',
                    breadcrumb: 'request'
                },
                views:{ 'content@':{
                  templateUrl: 'core/product/detailView.html',
                  controller: 'DetailListController',
                  controllerAs: 'DLC'
                            }
                      }
              })
              .state('root.product.level1',
              {
                  url:'/:level1',
                  params: {
                    level1: null
                  },
                  data: {
                      title: 'level1',
                      breadcrumb: 'level1'
                  },
                  views:{ 'content@':{
                    templateUrl: 'core/product/detailView.html',
                    controller: 'DetailListController',
                    controllerAs: 'DLC'
                              }
                        }
                })
                .state('root.product.level1.level2',
                {
                    url:'/:level1/:level2',
                    params: {
                      level1: null
                    },
                    data: {
                        title: 'level1',
                        breadcrumb: 'level1'
                    },
                    views:{ 'content@':{
                      templateUrl: 'core/product/detailView.html',
                      controller: 'DetailListController',
                      controllerAs: 'DLC'
                                }
                          }
                  })
                  .state('root.product.level1.level2.level3',
                  {
                      url:'/:level1/:level2/:level3',
                      params: {
                        level1: null
                      },
                      data: {
                          title: 'level1',
                          breadcrumb: 'level1'
                      },
                      views:{ 'content@':{
                        templateUrl: 'core/product/detailView.html',
                        controller: 'DetailListController',
                        controllerAs: 'DLC'
                                  }
                            }
                    })
                    .state('root.product.level1.level2.level3.level4',
                    {
                        url:'/:level1/:level2/:level3/:level4',
                        params: {
                          level1: null
                        },
                        data: {
                            title: 'level1',
                            breadcrumb: 'level1'
                        },
                        views:{ 'content@':{
                          templateUrl: 'core/product/detailView.html',
                          controller: 'DetailListController',
                          controllerAs: 'DLC'
                                    }
                              }
                      })
                    .state('root.services',
                    {
                        url:'services',
                        params: {
                          product: null
                        },
                        data: {
                            title: 'services',
                            breadcrumb: 'services'
                        },
                        views:{ 'content@':{
                          templateUrl: 'core/service/serviceView.html',
                          controller: 'ServicesViewController',
                          controllerAs: 'SVC'
                                    }
                              }
                      })
                      .state('root.dealer',
                      {
                          url:'dealer',
                          params: {
                            product: null
                          },
                          data: {
                              title: 'dealer',
                              breadcrumb: 'dealer'
                          },
                          views:{ 'content@':{
                            templateUrl: 'core/dealership/dealerView.html',
                            controller: 'DealerController',
                            controllerAs: 'DVC'
                                      }
                                }
                        })
                        .state('root.deal',
                        {
                            url:'deal',
                            params: {
                              product: null
                            },
                            data: {
                                title: 'today',
                                breadcrumb: 'today'
                            },
                            views:{ 'content@':{
                              templateUrl: 'core/today/todayView.html',
                              controller: 'TodayController',
                              controllerAs: 'TC'
                                        }
                                  }
                          })
                          .state('root.contact',
                          {
                              url:'contact',
                              params: {
                                product: null
                              },
                              data: {
                                  title: 'contact',
                                  breadcrumb: 'contact'
                              },
                              views:{ 'content@':{
                                templateUrl: 'core/contact/contactView.html',
                                controller: 'ContactController',
                                controllerAs: 'CC'
                                          }
                                    }
                            })
                            .state('root.testimonial',
                            {
                                url:'testimonial',
                                params: {
                                  product: null
                                },
                                data: {
                                    title: 'testimonial',
                                    breadcrumb: 'testimonial'
                                },
                                views:{ 'content@':{
                                  templateUrl: 'core/testimonial/testimonialView.html',
                                  controller: 'TestimonialController',
                                  controllerAs: 'TC'
                                            }
                                      }
                              })
                              .state('root.selling',
                              {
                                  url:'selling',
                                  params: {
                                    product: null
                                  },
                                  data: {
                                      title: 'selling',
                                      breadcrumb: 'selling'
                                  },
                                  views:{ 'content@':{
                                    templateUrl: 'core/selling/sellingView.html',
                                    controller: 'SellingController',
                                    controllerAs: 'SC'
                                              }
                                        }
                                });
        }
})();
