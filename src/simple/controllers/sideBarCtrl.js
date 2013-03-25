/**
 * Side bar Controller.
 * Controls Sidebar, Open Files, Folders.
 */
define(['jquery-ui'], function() {
  angular.module('simpleEdit.sidebar', []).controller('sideBarCtrl', ['$scope', 'documentService', function ($scope, documentService) {
    // TODO:
    //  * Show/Hide Open Files
    //  * Show/Hide open Folders
    //  * Toggle slide left-right option.
    //  * Load sidebar default configs.
    //  * Do we want to have a context menu?
    //   * Create/Delete/Move/Rename/etc.. files
    //  * Move folder parsing login in here?
    //  * Open file indicator.
    //  * Unsaved file indicator.
    //   * I should write create difinition of what belongs in each services/controller. Because when it's late I messed up functionaities.

    $scope.document = {
      showOpenFiles: function () {
        return true;
      },
      showSidebar: function() {
        return false;
      }
    };
  }]);
});
