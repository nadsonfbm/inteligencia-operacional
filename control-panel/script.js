document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-regional > a, .state > a, .client > a, .contract > a, .application > a, .general > a, .dashboards > a, .inbounds > a, .supply > a, .suplly-item > a, .outbounds > a, .crp > a, .crp-item > a, .tools > a, .user > a, .control > a, .control-access > a');
  
    menuItems.forEach(menuItem => {
      menuItem.addEventListener('click', event => {
        event.preventDefault();
        const submenu = event.target.nextElementSibling;
  
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  });
  