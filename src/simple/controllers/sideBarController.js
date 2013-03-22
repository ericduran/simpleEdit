/**
 * Side bar Controller.
 * Controls Sidebar, Open Files, Folders.
 */
var sideBar = angular.module('simpleEdit.sideBar', []);
sideBar.controller('fileController', ['$scope', 'documentService', 'menuService', function ($scope, documentService, menuService) {


  $scope.showOpenFiles = function() {
    return menuService.showOpenFiles();
  };

  $scope.showSidebar= function() {
    return menuService.showSidebar();
  };

}]);
