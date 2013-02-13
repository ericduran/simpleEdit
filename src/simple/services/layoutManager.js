define(function() {
  angular.module('simpleEdit.layoutManager', []).factory('layoutManager', function () {
    var layouts = [
      'left','right'
    ];

    return {
      getFiles: function(layout) {
        return layouts[layout];
      },
      addFile: function(layout, uri) {
        layouts[layout].push(uri);
      }
    }
  });
});
