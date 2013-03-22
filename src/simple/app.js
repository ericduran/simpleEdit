define(function () {
  var simple = {
    controller: {},
    services: {}
  };


  // Fix for requireJS and node require
  (function() {
    // Set require back to requireNode.
    // @see https://github.com/rogerwang/node-webkit/issues/422
    var requirejs = require;
    require = requireNode;

    simple.gui = require('nw.gui');

    requireNode = require;
    require = requirejs;
  })();


  simple.gui.App.on('open', function (path) {
    console.log('Opening: ' + path);
  });

  simple.config = (function configClosure() {
    function config() {}

    config.getDefaultTheme = function() {
      return "ace/theme/solarized_dark";
    };

    config.getSoftTabs = function() {
      return true;
    };

    config.getTabSize = function() {
      return 2;
    };

    return config;
  })();

  return simple;
});
