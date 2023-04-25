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
    restoreSidebarState(); // Restaurar o estado da sidebar
  });


// Carrega o conteúdo do footer.html e insere na seção com o ID "footer"
loadHTML('./footer/footer.html', 'footer');



// Função para carregar o conteúdo de uma subpágina	na seção com o ID "main" do control_panel.html
function loadSubpage(url) {
  // Armazenar a URL da subpágina no localStorage
  localStorage.setItem('currentSubpageUrl', url);

  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const mainElement = document.querySelector("#main");
      mainElement.innerHTML = html;
      
      // Exibe a div #main e oculta o título "Grupo GPS"
      mainElement.style.display = "flex";
      document.getElementById("company-title").style.display = "none";
    })
    .catch((error) => {
      console.warn(error);
    });
}

// Função para salvar para o localStorage o estado da sidebar (se os submenus estão ocultos ou não)
function saveSidebarState() {
  const submenus = document.querySelectorAll('.sidebar-container ul ul');
  const sidebarState = Array.from(submenus).map(submenu => {
    return !submenu.classList.contains('hidden');
  });
  localStorage.setItem('sidebarState', JSON.stringify(sidebarState));
}

// Função para restaurar o estado da sidebar (se os submenus estão ocultos ou não) a partir do localStorage
function restoreSidebarState() {
  const sidebarState = JSON.parse(localStorage.getItem('sidebarState'));
  if (!sidebarState) return;

  const submenus = document.querySelectorAll('.sidebar-container ul ul');
  submenus.forEach((submenu, index) => {
    if (sidebarState[index]) {
      submenu.classList.remove('hidden');
    } else {
      submenu.classList.add('hidden');
    }
  });
}

// Função para fechar o conteúdo que está no "main" quando o usuário clicar no link "Painel de Controle"
function closeMainContent() {
  // Limpar a URL da subpágina do localStorage
  localStorage.removeItem('currentSubpageUrl');

  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";

  // Oculta a div #main e exibe o título "Grupo GPS"
  mainElement.style.display = "none";
  document.getElementById("company-title").style.display = "flex";
}


// Função para resetar a sidebar quando o usuário clicar no link "Painel de Controle"
function resetSidebar() {
  const submenus = document.querySelectorAll('.sidebar-container ul ul');
  submenus.forEach((submenu) => {
    submenu.classList.add('hidden');
  });
  saveSidebarState(); // Salvar o estado da sidebar
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
      saveSidebarState(); // Salvar o estado da sidebar
    });
  });

  // Para carregar o conteúdo de uma subpágina quando o usuário clicar em um link da sidebar
  const subpageLinks = document.querySelectorAll('.sidebar a[data-url]');
  subpageLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const subpageUrl = event.target.getAttribute('data-url');
      loadSubpage(subpageUrl);
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

  // Efeito giratório no botão de ocultar/mostrar a sidebar
  toggleSidebarBtn.addEventListener('click', () => {
    toggleSidebarBtn.classList.toggle('active');
  });

}

function logout() {
  // Lógica necessária para efetuar o logout do usuário (limpar o localStorage, etc.)

  // Redireciona o usuário para a página index.html
  window.location.href = '../index.html';
}

// Carregar a subpágina armazenada no localStorage (se houver) quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
  const currentSubpageUrl = localStorage.getItem('currentSubpageUrl');
  if (currentSubpageUrl) {
    loadSubpage(currentSubpageUrl);
  }
});