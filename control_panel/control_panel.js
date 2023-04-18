document.addEventListener("DOMContentLoaded", () => {
  loadHTMLComponents();

  // Outras funções que você deseja executar quando o DOM estiver totalmente carregado
});

function loadHTMLComponents() {
  fetchComponent("../control_panel/header/header.html", "header");
  fetchComponent("../control_panel/sidebar/sidebar.html", "sidebar");
  fetchComponent("../control_panel/footer/footer.html", "footer");
}

function fetchComponent(path, elementId) {
  fetch(path)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch((error) => {
      console.warn(`Erro ao carregar o componente ${elementId}:`, error);
    });
}


