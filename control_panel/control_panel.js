// Carrega o conteúdo de um arquivo HTML usando fetch() e insere na seção correspondente
function loadHTML(url, elementId) {
  fetch(url)
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
loadHTML('./sidebar/sidebar.html', 'sidebar');

// Carrega o conteúdo do footer.html e insere na seção com o ID "footer"
loadHTML('./footer/footer.html', 'footer');

