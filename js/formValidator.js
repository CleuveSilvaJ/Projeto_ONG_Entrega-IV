// Função que configura a validação do formulário de cadastro
function setupFormValidation() {
  // Seleciona o formulário pelo ID
  const form = document.getElementById('cadastroForm');

  // Seleciona o elemento onde será exibida a mensagem de feedback
  const message = document.getElementById('formMessage');

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function (e) {
    // Impede o envio padrão do formulário (recarregar a página)
    e.preventDefault();

    // Obtém e limpa os valores dos campos nome e email
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();

    // Verifica se os campos estão preenchidos corretamente
    if (!nome || !email.includes('@')) {
      // Exibe mensagem de erro se os dados estiverem inválidos
      message.textContent = 'Preencha corretamente todos os campos.';
      message.style.color = 'red';
    } else {
      // Exibe mensagem de sucesso se os dados estiverem válidos
      message.textContent = 'Cadastro realizado com sucesso!';
      message.style.color = 'green';

      // Salva os dados no armazenamento local do navegador
      localStorage.setItem('cadastroData', JSON.stringify({ nome, email }));
    }
  });
}
