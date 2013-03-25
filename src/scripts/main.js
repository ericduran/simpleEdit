/**
 * Main simpleEdit entry point.
 * Load dependant scripts and bootstap the app.
 */

require.config({
  baseUrl: "../src",
  paths: {
    "ace": "thirdparty/ace/lib/ace",
    "angular": "components/angular/angular",
    "angularui": "components/angular-ui/build/angular-ui.min",
    "angular-ui": "components/angular-ui",
    "font-awesome": "components/font-awesome",
    "jquery": "components/jquery/jquery.min",
    "jquery-ui": "components/jquery-ui/ui/minified/jquery-ui.custom.min",
    "jstree": "components/jstree/dist/jstree.min",
    "keymaster": "components/keymaster/keymaster.min",
    "simple": "simple"
  }
});

define(['jquery', 'angular', 'simple/simpleEdit'], function () {
  angular.bootstrap(document, ['simpleEdit']);
});
