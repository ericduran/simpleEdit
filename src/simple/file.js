(function () {

  function file (el) {

    // Load up dependencies
    this.path = require('path');

    this.uri = el.value;
    this.fileName = nodePath.basename(this.uri),


    this.modified = false;
    this.currentSource = false;
    this.originalSource = false;

    
  
    return this;
  }

  file.prototype = {
    getOriginal: function () {

    },


  }


})();
