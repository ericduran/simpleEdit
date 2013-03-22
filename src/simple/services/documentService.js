/**
 *
 */
define(function() {
  var _ = requireNode('underscore');
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
      addDocument: function (uri, name, layout) {
        layout = layout || 1;

        if (this.isDupe(uri)) {
          this.setActive(uri);
        }
        else {
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
