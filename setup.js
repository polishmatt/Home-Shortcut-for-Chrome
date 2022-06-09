(function() {
"use strict";

if (!window.__HOME_SHORTCUT_SETUP) {
  window.document.addEventListener("keydown", (e) => {
    if (e.keyCode == 36 && window.pageYOffset == 0) {
      window.location = '/';
    }
  });
}
window.__HOME_SHORTCUT_SETUP = true;

})();
