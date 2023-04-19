// Carrega o conteúdo de um arquivo HTML usando fetch() e insere na seção correspondente
function loadHTML(url, elementId) {
  return fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(error => {
      console.error('Erro ao carregar ' + url, error);
    });
}

// Carrega o conteúdo do header.html e insere na seção com o ID "header"
loadHTML('./header/header.html', 'header');

// Carrega o conteúdo do sidebar.html e insere na seção com o ID "sidebar"
loadHTML('./sidebar/sidebar.html', 'sidebar')
  .then(() => {
    // Inicializa a sidebar após carregar o conteúdo
    initializeSidebar();
  });

// Carrega o conteúdo do footer.html e insere na seção com o ID "footer"
loadHTML('./footer/footer.html', 'footer');

// Função para resetar a sidebar quando o usuário clicar no link "Painel de Controle"
function resetSidebar() {
  const submenus = document.querySelectorAll('.sidebar-container ul ul');
  submenus.forEach((submenu) => {
    submenu.classList.add('hidden');
  });
}

// Função para fechar o conteúdo que está no "main" quando o usuário clicar no link "Painel de Controle"
function closeMainContent() {
  document.getElementById('main').innerHTML = '';
}

// Função para inicializar a sidebar quando ela for carregada
function initializeSidebar() {
  const menuItems = document.querySelectorAll('.sidebar-container li');

  menuItems.forEach((item) => {
    const anchor = item.querySelector('a');
    if (!anchor) return;

    anchor.addEventListener('click', (event) => {
      event.preventDefault();

      const submenu = item.querySelector('ul');
      if (!submenu) return;

      submenu.classList.toggle('hidden');
    });
  });

  // Para ocultar submenus quando a sidebar for carregada
  const submenus = document.querySelectorAll('.sidebar-container ul ul');
  submenus.forEach((submenu) => {
    submenu.classList.add('hidden');
  });

  // Para resetar a sidebar quando o usuário clicar no link "Painel de Controle"
  const controlPanelLink = document.getElementById('control-panel-link');
  controlPanelLink.addEventListener('click', (event) => {
    event.preventDefault();
    resetSidebar();
    closeMainContent();
  });

  // Para fazer logout do usuário
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', (event) => {
      event.preventDefault();
      logout();
    });
  }

  // Para ocultar a sidebar automaticamente após clicar em um link em dispositivos menores
  const menuLinks = document.querySelectorAll('.sidebar a');
  const sidebar = document.querySelector('.sidebar');
  const toggleSidebarBtn = document.getElementById('toggle-sidebar');

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('visible');
        toggleSidebarBtn.classList.remove('active');
      }
    });
  });
}

function logout() {
  // Lógica necessária para efetuar o logout do usuário (limpar o localStorage, etc.)

  // Redireciona o usuário para a página index.html
  window.location.href = '../index.html';
}
