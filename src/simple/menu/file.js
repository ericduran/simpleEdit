
define(['simple/app', 'jquery'], function (Simple, $) {

  var file = new Simple.gui.Menu();

  // New File.
  file.append(new Simple.gui.MenuItem({
    label: "New File",
    click: function () {
      alert('Create new File');
    }
  }));

  // Open.
  file.append(new Simple.gui.MenuItem({
    label: "Open...",
    click: function () {
      $("#openFile").trigger("click");
    }
  }));

  // Save.
  file.append(new Simple.gui.MenuItem({
    label: "Save",
    click: function () {
      alert('Save current file.');
    }
  }));

  // Save As.
  file.append(new Simple.gui.MenuItem({
    label: "Save As...",
    click: function () {
      alert('Save as current File');
    }
  }));

  return file;
});
