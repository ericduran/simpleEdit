define(function () {
  var simple = {};

  simple.config = (function configClosure() {
    function config() {}

    config.getDefaultTheme = function() {
      return "ace/theme/solarized_other";
    }

    config.getSoftTabs = function() {
      return true;
    }

    config.getTabSize = function() {
      return 2;
    }

    return config;
  })();;

  return simple;
});
