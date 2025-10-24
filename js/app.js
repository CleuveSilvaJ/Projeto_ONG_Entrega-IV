// Aguarda o carregamento completo do DOM antes de executar o código
window.addEventListener('DOMContentLoaded', () => {
  // Exibe a página inicial assim que o site é aberto
  navigateTo('home');

  // Seleciona o botão do menu hambúrguer
  const toggle = document.querySelector('.menu-toggle');

  // Seleciona o menu de navegação
  const menu = document.querySelector('.menu');

  // Verifica se os elementos existem antes de aplicar o comportamento
  if (toggle && menu) {
    // Adiciona um evento de clique para abrir ou fechar o menu
    toggle.addEventListener('click', () => {
      // Alterna a classe 'active' no menu para mostrar ou esconder os links
      menu.classList.toggle('active');
    });
  }
});
