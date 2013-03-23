/**
 * Main simpleEdit entry point.
 * Load dependant scripts and bootstap the app.
 */

require.config({
  "paths": {
    "ace": "../thirdparty/ace/lib/ace",
    "angular": "../components/angular/angular",
    "angularui": "../components/angular-ui/build/angular-ui.min",
    "jstree": "../components/jstree",
    "keymaster": "../components/keymaster",
    "simple": "../simple",
    "angular-ui": "../components/angular-ui",
    "font-awesome": "../components/font-awesome",
    "jquery": "../components/jquery/jquery",
    "jquery-ui": "../components/jquery-ui/ui/jquery-ui"
  }
});

define(['angular', 'simple/simpleEdit'], function () {
  angular.bootstrap(document, ['simpleEdit']);
});
