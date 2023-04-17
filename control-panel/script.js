// Evento para inicializar algumas funções quando o documento for carregado

document.addEventListener('DOMContentLoaded', function () {
  initMenuToggle();
  initPageLinks();
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
    localStorage.setItem(submenu.id, submenu.style.display);
  }
}

// Evento para alternar a visibilidade da barra lateral quando o botão for clicado

document.addEventListener("DOMContentLoaded", function () {
  const toggleSidebarBtn = document.getElementById("toggle-sidebar");
  const sidebar = document.querySelector(".sidebar");

  toggleSidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
    document.getElementById("main-content").classList.toggle("sidebar-hidden");
  });
});

// Função genérica para carregar uma página HTML

function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    });
}

// Função para inicializar o evento de clique de qualquer link da barra lateral

function initPageLinks() {
  const links = [
    {
      id: 'dashboards-link',
      url: './sidebar/pr_contract/Electrolux/general/dashboards.html'
    },
    {
      id: 'buffer-link',
      url: './sidebar/pr_contract/Electrolux/inbounds/buffer.html'
    },
    {
      id: 'control-tower-link',
      url: './sidebar/pr_contract/Electrolux/inbounds/control-tower.html'
    },
    {
      id: 'historic-link',
      url: './sidebar/pr_contract/Electrolux/inbounds/historic.html'
    },
  ];

  links.forEach(link => {
    const linkElement = document.getElementById(link.id);

    if (linkElement) {
      linkElement.addEventListener('click', function (event) {
        event.preventDefault();
        loadPage(link.url);
      });
    }
  });
}