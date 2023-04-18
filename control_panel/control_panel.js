document.addEventListener("DOMContentLoaded", () => {
  loadHTMLComponents();

  // Outras funções que você deseja executar quando o DOM estiver totalmente carregado
});

function loadHTMLComponents() {
  fetchComponent("../control_panel/header/header.html", "header");
  fetchComponent("../control_panel/sidebar/sidebar.html", "sidebar");
  fetchComponent("../control_panel/footer/footer.html", "footer");
    // Adicione esta linha após carregar os componentes
    initializeMenuItems();
}

function fetchComponent(path, elementId) {
  fetch(path)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
      if (elementId === "sidebar") {
        addSidebarClickEvents(); // Adicione essa linha
      }
    })
    .catch((error) => {
      console.warn(`Erro ao carregar o componente ${elementId}:`, error);
    });
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
}

function addSidebarClickEvents() {
  const sidebarLinks = document.querySelectorAll(".sidebar a");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const parentLi = event.target.parentElement;

      if (parentLi.querySelector("ul")) {
        toggleSubMenu(parentLi);
      } else {
        loadContentInMain(event.target.href);
        event.preventDefault();
        closeAllSubMenusExcept(parentLi);
      }
    });
  });
}

function toggleSubMenu(parentLi) {
  const submenu = parentLi.querySelector("ul");
  submenu.classList.toggle("open");
}

function loadContentInMain(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("main").innerHTML = html;
    })
    .catch((error) => {
      console.warn("Erro ao carregar o conteúdo:", error);
    });
}

function closeAllSubMenusExcept(parentLi) {
  const allSubMenus = document.querySelectorAll(".sidebar ul ul");
  allSubMenus.forEach((submenu) => {
    if (!parentLi.contains(submenu)) {
      submenu.classList.remove("open");
    }
  });
}

document.getElementById("toggle-sidebar").addEventListener("click", toggleSidebar);
