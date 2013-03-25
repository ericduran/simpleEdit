/**
 * Menu Service
 *
 * Manages the actual Native Menu aka File, Edit, etc..
 */
define (['simple/app', 'simple/menu/file', 'simple/menu/view'], function(simple, file, view) {
  // TODO: Stop using $rootScope.
  angular.module('simpleEdit.menuService', []).service('menuService', function ($rootScope) {

    var gui = simple.gui;
    var menubar = new gui.Menu({type: 'menubar'});
    var showSideBar = true,
        showOpenFiles = true,
        showFolders = true,
        showTabs = true,
        showStatusBar = true,
        showCLI = false,
        sideBarVisible = true,
        openFilesVisible = true,
        folderVisible = true;

    menubar.append(new gui.MenuItem({
        label: 'File',
        submenu: file
      })
    );
    menubar.append(new gui.MenuItem({
        label: 'View',
        submenu: view
      })
    );
    var win = gui.Window.get();
    win.menu = menubar;

    // DAMN HACK!!!
    // TODO: REMOVE THIS! Also find a better way to do this.
    requireNode = require;
    require = requirejs;

    return {
      updateMenuLabel: function (key, label) {
      },
      showOpenFiles: function() {
        return openFilesVisible;
      },
      sidebarHide: function() {
        // TODO: Fix.
        showSidebar = false;
      },
      sidebarShow: function() {
        // TODO: fix.
        showSidebar = true;
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
});
