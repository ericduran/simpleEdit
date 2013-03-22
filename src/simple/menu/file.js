
define(['simple/app'], function (Simple) {

  var file = new Simple.gui.Menu();

  // New File.
  file.append(new Simple.gui.MenuItem({
    label: "New File"
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
    label: "Save"
  }));

  // Save As.
  file.append(new Simple.gui.MenuItem({
    label: "Save As..."
  }));

  // Save All.
  file.append(new Simple.gui.MenuItem({
    label: "Save All"
  }));

  file.append(new Simple.gui.MenuItem({
    type: 'separator'
  }));

  // New Window.
  file.append(new Simple.gui.MenuItem({
    label: "New Window"
  }));

  // Close Window.
  file.append(new Simple.gui.MenuItem({
    label: "Close Window"
  }));

  file.append(new Simple.gui.MenuItem({
    type: 'separator'
  }));

  // Close Window.
  file.append(new Simple.gui.MenuItem({
    label: "Close File"
  }));

  // Revert File.
  file.append(new Simple.gui.MenuItem({
    label: "Revert File"
  }));

  // Close All File.
  file.append(new Simple.gui.MenuItem({
    label: "Close All File"
  }));

  return file;
});
