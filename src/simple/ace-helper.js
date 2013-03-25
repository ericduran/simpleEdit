/**
 * Create a folder for "editors".
 * We should support multiple editors, really why should we care if someone
 * likes codemirror over ace, or etc..
 * TODO: Make editors selection, configurable/plugable/etc.
 */
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

    // TODO: This has nothing to do with ace. This should be generic.
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

// TODO: Fix this. This is just a quick hack for ace.
jQuery(document).ready(function() {
  jQuery(window).resize(function() {
    jQuery('.ace-editors-divs').height(jQuery(window).height() - 55);
  });
});

// I'm tired no idea why I added this. Just look it over later.
// TODO: WTF?
var nodePath = requireNode('path');
