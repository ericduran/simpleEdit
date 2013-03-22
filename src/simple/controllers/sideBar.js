/**
 * Side bar Controller.
 * Controls Sidebar, Open Files, Folders.
 */
define(function() {
  angular.module('simpleEdit.sidebar', []).controller('sideBarController', ['$scope', 'documentService', function ($scope, documentService) {

    $scope.showOpenFiles = function() {
      return true;
    };

    $scope.showSidebar= function() {
      return true;
    };

  }]);
});
