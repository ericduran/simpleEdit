/**
 * File System Controller.
 * Controls Open/Saving New Files.
 */
// TODO: Rename to use standard Ctrl suffix.
define(['simple/app', 'ace/ace', 'ace/theme/solarized_dark', 'ace/mode/javascript', 'ace/mode/html', 'ace/mode/css', 'simple/ace-helper'], function (simple, ace) {
  var nodeFS = requireNode("fs"),
      nodePath = requireNode('path'),
      readdirp = requireNode('readdirp'),
      path = requireNode('path'),
      wrench = requireNode('wrench'),
      util = requireNode('util'),
      es = requireNode('event-stream'),
      _ = requireNode('underscore');

  var fileSystem = angular.module('simpleEdit.fileSystem', []);
  fileSystem.controller('fileController', ['$scope', 'documentService', 'menuService', 'layoutManager', function ($scope, documentService, menuService, layoutManager) {

    $scope.layout =  {
      templates: 'templates/single-layout.html',
      column: ['layout-left', 'layout-right'],
      class: 'layout-split'
    };

    var content = '';
    var filesDir = [];

    var traverseFileSystem = function (currentPath) {
      content += '<ul>';
      for (var i in files) {

        var currentFile = currentPath + '/' + files[i];
        var stats = nodeFS.statSync(currentFile);
        content += '<li>';
        if (stats.isFile()) {
          content += '<a href="#">' + files[i] + '</a>';
        }
        else if (stats.isDirectory()) {
          content += files[i];
          traverseFileSystem(currentFile);
        }
        content += '</li>';
      }
      content += '</ul>';

      $scope.$digest();
    };

    $scope.sortableOptions = {
      axis: 'x',
      stack: ".tab",
      connectWith: "ul"
    };

    $scope.prevDoc = function() {
      documentService.getPrevDoc();

    };

    $scope.nextDoc = function() {
      documentService.getNextDoc();
    };

    // Entry points for file loading/unloading
    $scope.unloadFile = function() {
    };

    $scope.getFilesDir = function() {
      return content;
    };
    $scope.openDir = function(path) {
      traverseFileSystem(path);
    };

    $scope.removeFile = function (uri) {
      documentService.deleteDocument(uri);
    };

    $scope.getClass = function(uri) {
      var cur = documentService.getActive();
      if (uri === cur) {
        return 'selected';
      }
      else {
        return '';
      }
    };

    $scope.getActive = function() {
      return documentService.getActive();
    };

    $scope.loadFile = function(uri) {
      // 1st we need to see if we already have this file loaded.
      var isLoaded = documentService.isDupe(uri);
    };

    $scope.showOpenFiles = function() {
      return true;
    };

    // If it's on the tabs
    $scope.setActive = function(uri) {
      documentService.setActive(uri);
    };

    $scope.showSidebar= function() {
      return menuService.showSidebar();
    };

    $scope.getOpenFiles = function(layout) {
      return documentService.getDocuments();
    };

    // Open File.
    $scope.openFile = function (uri) {
      var fileName = nodePath.basename(uri),
          isDupe = documentService.isDupe(uri);
      if (isDupe) {
        // We do not open the new file.
        // Instead we just set it as active.
        $scope.setActive(uri);
      }
      else {
        nodeFS.readFile(uri, function (err, data) {
          if (err) {
            // TODO: Show errors somewhere.
            console.log("Read failed: " + err);
          }
          else {
            $scope.setActive(uri);
            documentService.addDocument(uri, fileName);
            var editor = ace.edit(uri);

            // Set our default settings.
            simple.util.configEditor(editor, fileName);
            console.log('blah');
            editor.setValue(String(data));
            editor.focus();
            editor.gotoLine(0, 0);
            $('.ace-editors-divs').height($(window).height() - 20);
            editor.resize();
            editor.commands.addCommand({
              name: 'saveFile',
              bindKey: {
                win: 'Ctrl-S',
                mac: 'Command-S',
                sender: 'editor|cli'
              },
              exec: function(env, args, request) {
                $scope.saveActiveFile();
              }
            });
            editor.commands.addCommand({
              name: 'openFile',
              bindKey: {
                win: 'Ctrl-O',
                mac: 'Command-O',
                sender: 'editor|cli'
              },
              exec: function(env, args, request) {
                $("#openFile").trigger("click");
              }
            });
            editor.commands.addCommand({
              name: 'closeFile',
              bindKey: {
                win: 'Ctrl-W',
                mac: 'Command-W',
                sender: 'editor|cli'
              },
              exec: function(env, args, request) {
                $scope.removeFile(documentService.getActive());
                $scope.$digest();
              }
            });
            editor.commands.addCommand({
              name: 'switchFile',
              bindKey: {
                win: 'Ctrl-shift-]',
                mac: 'Command-Shift-]',
                sender: 'editor|cli'
              },
              exec: function(env, args, request) {
                console.log($scope.nextDoc());
              }
            });
            editor.commands.addCommand({
              name: 'switchFile',
              bindKey: {
                win: 'Ctrl-shift-]',
                mac: 'Command-Shift-[',
                sender: 'editor|cli'
              },
              exec: function(env, args, request) {
                console.log($scope.prevDoc());
              }
            });
          }
        });
      }
    };

    $scope.saveActiveFile = function() {
      var activeURI = documentService.getActive();
      var edit = ace.edit(activeURI);
      var value = edit.getSession().getValue();
      nodeFS.writeFile(activeURI, value, function (err) {
        if (err) {
          console.log("Write failed: " + err);
          return;
        }
        console.log("Write completed.");
      });
    };

    $scope.saveAsFile = function(path) {
      var activeURI = documentService.getActive();
      var edit = ace.edit(activeURI);
      var value = edit.getSession().getValue();

      nodeFS.writeFile(path, value, function (err) {
        if (err) {
          console.log("Write failed: " + err);
          return;
        }
        console.log("Write completed.");
      });
    };

    $scope.renameFile = function(item) {};
  }]);
});
