// Função responsável por navegar entre as "páginas" da aplicação SPA
function navigateTo(page) {
  // Seleciona o elemento <main id="app"> onde o conteúdo será exibido
  const app = document.getElementById('app');

  // Insere o conteúdo HTML correspondente à página selecionada
  // O conteúdo vem do objeto Templates (home, projetos, cadastro)
  app.innerHTML = Templates[page];

  // Se a página for "cadastro", ativa a função de validação do formulário
  // Isso garante que o formulário funcione corretamente ao ser exibido
  if (page === 'cadastro') {
    setupFormValidation();
  }
}
