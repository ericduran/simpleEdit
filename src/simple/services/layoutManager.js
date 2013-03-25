define(function() {
  angular.module('simpleEdit.layoutManager', []).factory('layoutManager', function () {
    // TODO: Add a property for 'default' layout, also current layout.
    // also lets name the layouts, so single vs multi-column, etc..
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
    };
  });
});
