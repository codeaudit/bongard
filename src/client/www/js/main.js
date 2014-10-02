require.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',

        'lodash': '../bower_components/lodash/dist/lodash.min',
        'moment': '../bower_components/moment/min/moment.min',
        'angular': '../bower_components/angular/angular',
        'angular.ui.router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular.classy': './lib/classy',
        'restangular': '../bower_components/restangular/dist/restangular.min',
        // 'angular.animate': '../bower_components/angular-animate/angular-animate.min',
        'angular.gettext': '../bower_components/angular-gettext/dist/angular-gettext.min',
        'angulartics.ga': '../bower_components/angulartics/dist/angulartics-ga.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular.ui.router': ['angular'],
        'angular.classy': ['angular'],
        'restangular': ['angular', 'lodash'],
        // 'angular.animate': ['angular'],
        'angular.gettext': ['angular'],
        'angulartics.ga': ['angulartics']
    }
});

require(["bootstrap"]);