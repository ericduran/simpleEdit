/**
 * File System Controller.
 * Controls Open/Saving New Files.
 */

define(['simple/app', 'ace/ace', 'ace/theme/solarized_other', 'ace/mode/javascript', 'ace/mode/html', 'ace/mode/css', 'simple/ace-helper'], function (simple, ace) {
  var nodeFS = requireNode("fs"),
      nodePath = requireNode('path'),
      readdirp = requireNode('readdirp'),
      path = requireNode('path'),
      es = requireNode('event-stream'),
      _ = requireNode('underscore');

  var fileSystem = angular.module('simpleEdit.fileSystem', []);

  fileSystem.controller('fileController', ['$scope', 'documentService', 'menuService', 'layoutManager', function ($scope, documentService, menuService, layoutManager) {

    $scope.layout =  {
      templates: 'templates/split-layout.html',
      column: ['templates/single-layout.html', 'layout-right'],
      class: 'layout-split',
    };

    var content = '';
    var filesDir = [];

    var traverseFileSystem = function (currentPath) {
      var files = nodeFS.readdirSync(currentPath);
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
    // Entry points for file loading/unloading
    $scope.unloadFile = function() {
    }

    $scope.getFilesDir = function() {
      return content;
    }
    $scope.openDir = function(path) {
      traverseFileSystem(path);
    }
    
    $scope.removeFile = function (uri) {
     documentService.deleteDocument(uri);
    }

    $scope.getClass = function(uri) {
      var cur = documentService.getActive();
      if (uri === cur) {
        return 'selected';
      }
      else {
        return '';
      }
    }

    $scope.getActive = function() {
      return documentService.getActive();
    }
  
    $scope.loadFile = function(uri) {
      // 1st we need to see if we already have this file loaded.
      var isLoaded = documentService.isDupe(uri);
    }
  
    $scope.showOpenFiles = function() {
      return true;
    }
  
    // If it's on the tabs
    $scope.setActive = function(uri) {
      documentService.setActive(uri);
    }
  
    $scope.showSidebar= function() {
      return menuService.showSidebar();
    }
  
    $scope.getOpenFiles = function(layout) {
      console.log(layout);
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
  
              editor.setValue(String(data));
              editor.focus()
              editor.gotoLine(0, 0);
              $('.ace-editors-divs').height($(window).height() - 20);
              editor.resize();
          }
        });
      }
    }
  
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
    }
  
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
    }

    $scope.renameFile = function(item) { 
  }
}]);

});
