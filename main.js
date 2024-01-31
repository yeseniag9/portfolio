var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 111 || document.documentElement.scrollTop >= 111) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};