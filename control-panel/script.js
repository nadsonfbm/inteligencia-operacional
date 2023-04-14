document.addEventListener('DOMContentLoaded', function () {
  initMenuToggle();
});

// Função para inicializar o comportamento de alternância dos itens do menu
function initMenuToggle() {
  const menuItems = document.querySelectorAll('.menu-regional > a, .state > a, .client > a, .contract > a, .application > a, .general > a, .dashboards > a, .inbounds > a, .supply > a, .suplly-item > a, .outbounds > a, .crp > a, .crp-item > a, .tools > a, .user > a, .control > a, .control-access > a');

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', toggleSubmenu);
  });
}

// Função para alternar a exibição do submenu relacionado ao item do menu clicado
function toggleSubmenu(event) {
  event.preventDefault();
  const submenu = event.target.nextElementSibling;

  if (submenu) {
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
}

// Evento para alternar a visibilidade da barra lateral quando o botão for clicado

document.addEventListener("DOMContentLoaded", function () {
  const toggleSidebarBtn = document.getElementById("toggle-sidebar");
  const sidebar = document.querySelector(".sidebar");

  toggleSidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });
});

