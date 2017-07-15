(function(){
  'use strict';

  angular.module('app',[
    'ui.router',
    'app.index',
    'app.directives.about',
    'app.nav.menu',
    'app.product.detail',
    'app.product.list',
    'app.nav.breadcrumbs',
    'app.nav.header',
    'app.nav.service',
    'app.mod.dealer',
    'core.mod.today',
    'app.mod.contact',
    'core.mod.testimonial',
    'core.mod.selling'
  ]);
})();
