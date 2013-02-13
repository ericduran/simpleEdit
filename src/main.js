/**
 * Main simpleEdit entry point.
 * Load dependant scripts and bootstap the app.
 */

"use strict";

require.config({
  paths: {
    ace: "thirdparty/ace/lib/ace",
    angular: "components/angular/angular.min",
    angularui: "components/angular-ui/build/angular-ui.min",
    jstree: "components/jstree/dist/jstree.min",
    keymaster: "components/keymaster/keymaster.min",
    simple: "simple"
  }
});

define(['angular', 'simple/simpleEdit'], function () {
  angular.bootstrap(document, ['simpleEdit']);
});
