const nav = {
  init: function () {
    const navToggle = document.querySelector('.nav__toggle');
    const navLinks = document.querySelector('.nav__links');
    const navItems = document.querySelectorAll('.nav__links a');
  
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
      });
    }
  
    if (navItems.length > 0) {
      navItems.forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('active');
        });
      });
    }
  },
};
  
export default nav;