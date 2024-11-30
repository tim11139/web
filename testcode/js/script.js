(function() {

var collapseNavbar = function() {

    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (scrollTop > 100) {
      mainNav.classList.add("navbar-shrink");
    } else {
      mainNav.classList.remove("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  collapseNavbar();
  // Collapse the navbar when page is scrolled
  document.addEventListener("scroll", collapseNavbar);
}
})(); // End of use strict