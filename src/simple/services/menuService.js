/**
 * Menu Service
 *
 * Manages the actual Native Menu aka File, Edit, etc..
 */

var menuService = angular.module('simpleEdit.menuService', []).service('menuService', function ($rootScope) {

  // Node webkit vars
  requirejs = require;
  require = requireNode;
  var gui = require('nw.gui');
  var menubar = new gui.Menu({type: 'menubar'});
  console.log(gui.App.argv);
  // // Menus

  var file = new gui.Menu();

  // // Vars
  var showSideBar = true,
      showOpenFiles = true,
      showFolders = true,
      showTabs = true,
      showStatusBar = true,
      showCLI = false
      sideBarVisible = true,
      openFilesVisible = true,
      folderVisible = true;


  file.append(new gui.MenuItem({
    label: "New File"
  }));
  file.append(new gui.MenuItem({
    label: "Open...",
    click: function () {
      $("#openFile").trigger("click");
    }
  }));

  // View
  var view = new gui.Menu();
  var sidebarItem = new gui.MenuItem({
    label: "Hide Side Bar",
    click: function() {
      // TODO: Quick hack just to see if it works.
      $rootScope.$apply(function() {
          if (sideBarVisible) {
          sidebarItem.label = 'Show Side Bar'
          sideBarVisible = false
        }
        else {
          sidebarItem.label = 'Hide Side Bar'
          sideBarVisible = true
        }        
      });
    }
  });
  view.append(sidebarItem);
  menubar.append(new gui.MenuItem({
      label: 'File',
      submenu: file
  }));
  menubar.append(new gui.MenuItem({
      label: 'View',
      submenu: view
  }));
  var win = gui.Window.get();
  win.menu = menubar;


  requireNode = require;
  require = requirejs;
  
  return {
    updateMenuLabel: function (key, label) {
    },
    showOpenFiles: function() {
      return openFilesVisible;
    },
    showSidebar: function() {
      return sideBarVisible;
    },
    getMenuLabel: function () {

    },
    toggleMenuState: function() {

    }
  };
});
