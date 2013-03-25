(function(win) {
  // Prevent anything from stealing our screen.
  win.ondrop = function(e) {
    // This is a temporary hacks because remeber we are running in chrome.
    // So if you drag a json file or anything, it'll render the json.
    // Eventually we'll pass the item to the actual editor.
    e.preventDefault();
    return false;
  };
})(window);
