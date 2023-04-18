async function loadExternalContent(id, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo HTML: ${url}`);
    }
    const conteudo = await response.text();
    document.getElementById(id).innerHTML = conteudo;
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Chame a função para cada componente que deseja carregar
loadExternalContent('header', './header/header.html');
loadExternalContent('sidebar', './sidebar/sidebar.html');
loadExternalContent('footer', './footer/footer.html');