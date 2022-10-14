var header = document.getElementById('primary-header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
var mobileToggle = document.getElementById('mobile-toggle');
var navList = document.getElementById('nav-list');

mobileMenu.onclick = function() {
  var isClosed = header.clientHeight === headerHeight;

  if(isClosed) {
    header.style.height = 'auto';
    navList.style.display = 'block';
    mobileToggle.src = "./assets/shared/icon-close.svg";
  } else {
    header.style.height = null;
    navList.style.display = 'none';
    mobileToggle.src = "./assets/shared/icon-hamburger.svg";
  }

  var menuItems = document.querySelectorAll('#nav-list .nav-item a[href*="#"]');
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function() {
      header.style.height = null;
      navList.style.display = 'none';
      mobileToggle.src = "./assets/shared/icon-hamburger.svg";
    }
  }
}