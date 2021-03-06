define([
    'require',
    'text',

    'lodash',
    'moment',

    'angular',
    'angular.ui.router',
    'angular.classy',
    'angular.ionic',
    'angular.gettext',
    'angular.local.storage',
    'angular.animate',
    'angular.santitize',
    'restangular'
], function(
    require
) {
    try {
        require(['./template']);
    } catch (e) {}
    require(['./app']);
});