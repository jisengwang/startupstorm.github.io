AOS.init({once: true}); // for scroll animations
window.addEventListener('load', AOS.refresh);


function expandMenu() {  // For when hamburger menu is clicked
  var nav = document.getElementById("main-navbar");
  var links = document.getElementById("link-container");
  if (nav.className === "navbar") {
    nav.className += " responsive";
    nav.className
  } else {
    nav.className = "navbar";
  }
  if (links.className.includes("align-center")){
    links.className = "align-items-right"
  } else {
    links.className += " align-center";
  }
}
