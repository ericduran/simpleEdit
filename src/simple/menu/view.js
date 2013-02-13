
define(['simple/app'], function (Simple) {

  var view = new Simple.gui.Menu(),
      sidebar = true;

  var sidebarItem = new Simple.gui.MenuItem({
    label: "Hide Side Bar",
    click: function() {
      console.log(Simple);
      // Simple.services.menuService.sidebarHide();
    }
  });

  view.append(sidebarItem);


  // Helper Functions.
  view.toggleSideBar = function() {
    if (sidebar === true) {
      sidebarItem.label = 'Show Side Bar'
      sidebar = false
    }
    else {
      sidebarItem.label = 'Hide Side Bar'
      sidebar = true
    }

    return sidebar;
  }

  return view;
})
