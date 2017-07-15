(function () {
    'use strict';

    angular.module('app.index', ['app.menuService'])

            .controller('IndexController', IndexController);

    IndexController.$inject = ['$log','menuService'];

    function IndexController($log,menuService) {
        var vm = this;

        vm.todos = [];

        retrieve();

        function retrieve() {
            return getTodos().then(function () {
                $log.info('Retrieved Todos');
            });
        }

        function getTodos() {
            return menuService.getMenuOption()
                    .then(function (data) {
                        vm.todos = data;
                        return vm.todos;
                    });
        }
    }
})();
