
define(['simple/app', 'ace/ace'], function (simple, ace) {
  'use strict';

  simple.util = (function utilClosure() {

    function util() {}

    util.configEditor = function(editor, filename) {
      var session = editor.getSession();

      console.log("blah");

      // Editor settings.
      editor.setTheme(simple.config.getDefaultTheme());

      // Session settings.
      session.setUseSoftTabs(simple.config.getSoftTabs());
      session.setTabSize(simple.config.getTabSize());
      session.setMode(util.getModeFromExtension(filename));


    };

    util.getModeFromExtension = function(fileName) {
      // Make this is a saveable config file.
      var ext = util.getExtension(fileName);
      var modes = {
        "json": "ace/mode/javascript",
        "js": "ace/mode/javascript",
        "html": "ace/mode/html",
        "css": "ace/mode/css",
        "php": "ace/mode/php",
        "inc": "ace/mode/php"
      };

      if (modes[ext] !== undefined) {
        return modes[ext];
      }
    };

    util.getExtension = function(filename) {
      var ext = nodePath.extname(filename||'').split('.');
      return ext[ext.length - 1];
    };

    return util;

  })();

});

$(document).ready (function() {
  $(window).resize(function() {
    $('.ace-editors-divs').height($(window).height() - 35);
  });
});


var nodePath = requireNode('path');



