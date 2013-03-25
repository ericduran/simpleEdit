/**
 * Document Services.
 */
define(function() {
  var _ = requireNode('underscore');
  // TODO: Stop using $rootScope.
  angular.module('simpleEdit.documentService', []).factory('documentService', function ($rootScope) {

    var documents = [],
    activeURI = false;

    return {
      isDupe: function(uri) {
        // Make sure the url isn't loaded already.
        var list = _.chain(documents)
        .pluck('uri')
        .flatten()
        .value();

        return _.contains(list, uri);
      },
      // URIs
      isActive: function(uri) {
        return uri === activeURI;
      },
      setActive: function(uri) {
        if (uri !== activeURI) {
          activeURI = uri;
        }
      },
      getActive: function() {
        return activeURI;
      },
      getDocuments: function () {
        return documents;
      },
      getNextDoc: function() {
        return documents[0];
      },
      getPrevDoc: function() {
        return documents[1];
      },
      addDocument: function (uri, name, layout) {
        layout = layout || 1;

        if (this.isDupe(uri)) {
          this.setActive(uri);
        }
        else {
          // TODO: Stop using Array.push, I know angular likes
          // it because it automatically knows to update the templates
          // but it just makes it harder for us to do logic on a keyless
          // array.
          $rootScope.$apply(function() {
            documents.push({
              uri: uri,
              name: name,
              layout: layout
            });
          });
        }
      },
      deleteDocument: function (uri) {
        documents.forEach(function (doc, index) {
          if (doc.uri === uri) {
            documents.splice(index,1);
          }
        });
      }
    };
  });
});
