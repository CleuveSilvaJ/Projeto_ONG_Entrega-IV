// Objeto que armazena os templates HTML de cada "página" da SPA
const Templates = {
  // Página inicial (home)
  home: `
    <!-- Banner institucional -->
    <figure>
      <img src="assets/imagens/banner-raizes.jpg" alt="Banner institucional da ONG Raízes do Amanhã" class="banner">
      <figcaption>Transformando vidas com educação, saúde e cidadania.</figcaption>
    </figure>

    <!-- Seção com descrição dos projetos -->
    <section>
      <article>
        <h2>Nossos Projetos</h2>
        <p>Conheça as iniciativas que estão transformando vidas em comunidades vulneráveis. Cada projeto é desenvolvido com foco em educação, saúde, meio ambiente e cidadania.</p>
        <ul>
          <li><strong>Educar para Transformar:</strong> Aulas de reforço escolar e oficinas culturais para crianças e adolescentes.</li>
          <li><strong>Saúde em Movimento:</strong> Ações de prevenção e atendimento básico em regiões carentes.</li>
          <li><strong>Verde Esperança:</strong> Mutirões de limpeza, plantio de árvores e educação ambiental.</li>
        </ul>
      </article>
    </section>

    <!-- Chamada para voluntariado -->
    <section>
      <article>
        <h2>Seja Voluntário</h2>
        <p>Você pode fazer parte dessa transformação! Ofereça seu tempo, talento e energia para apoiar nossos projetos. Toda ajuda é bem-vinda e faz a diferença.</p>
        <p><a href="#" onclick="navigateTo('cadastro')">Clique aqui para se cadastrar como voluntário</a>.</p>
      </article>
    </section>

    <!-- Informações sobre doações -->
    <section>
      <article>
        <h2>Como Doar</h2>
        <p>Ajude-nos a ampliar nosso impacto. Aceitamos doações financeiras, materiais escolares, alimentos e equipamentos. Sua contribuição fortalece nossas ações e chega diretamente a quem mais precisa.</p>
        <p>Para mais informações sobre como doar, entre em contato conosco.</p>
      </article>
    </section>
  `,

  // Página de projetos
  projetos: `
    <!-- Galeria de cartões com os projetos -->
    <section class="grid-projetos">
      <div class="cartao">
        <img src="assets/imagens/projeto1.jpg" alt="Crianças em atividade educativa">
        <h3>Educar para Transformar</h3>
        <p>Oficinas e reforço escolar para crianças e adolescentes.</p>
        <span class="tag tag-educacao">Educação</span>
      </div>

      <div class="cartao">
        <img src="assets/imagens/projeto2.jpg" alt="Equipe de voluntários em ação">
        <h3>Saúde em Movimento</h3>
        <p>Ações de prevenção e atendimento básico em comunidades carentes.</p>
        <span class="tag tag-saude">Saúde</span>
      </div>

      <div class="cartao">
        <img src="assets/imagens/projeto3.jpg" alt="Mutirão de limpeza comunitária">
        <h3>Verde Esperança</h3>
        <p>Mutirões de limpeza, plantio de árvores e educação ambiental.</p>
        <span class="tag tag-meio-ambiente">Meio Ambiente</span>
      </div>
    </section>

    <!-- Chamada para voluntariado -->
    <section>
      <article>
        <h2>Voluntariado</h2>
        <p>Participe dos nossos projetos como voluntário. Sua ajuda faz a diferença!</p>
        <p><a href="#" onclick="navigateTo('cadastro')">Clique aqui para se cadastrar</a>.</p>
      </article>
    </section>

    <!-- Informações sobre doações -->
    <section>
      <article>
        <h2>Como Doar</h2>
        <p>Contribua com doações financeiras, alimentos ou materiais escolares. Toda ajuda fortalece nossas ações.</p>
        <p>Para mais informações, entre em contato conosco.</p>
      </article>
    </section>
  `,

  // Página de cadastro
  cadastro: `
    <!-- Banner da página de cadastro -->
    <figure>
      <img src="assets/imagens/cadastro-banner.jpg" alt="Voluntário preenchendo formulário de cadastro na ONG Raízes do Amanhã" class="banner">
      <figcaption>Junte-se à transformação social com a Raízes do Amanhã.</figcaption>
    </figure>

    <!-- Formulário de cadastro -->
    <section>
      <article>
        <h2>Cadastro de Voluntário</h2>
        <p>Preencha o formulário para se inscrever.</p>

        <form id="cadastroForm">
          <!-- Dados pessoais -->
          <fieldset>
            <legend>Dados Pessoais</legend>

            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required maxlength="11" inputmode="numeric" pattern="\\d{11}">

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required maxlength="11" inputmode="numeric" pattern="\\d{11}">

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required maxlength="8" inputmode="numeric" pattern="\\d{8}">

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="nascimento">Data de nascimento:</label>
            <input type="date" id="nascimento" name="nascimento" required>

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required>

            <label for="estado">Estado:</label>
            <select id="estado" name="estado" required>
              <option value="">Selecione</option>
              <!-- Lista de estados brasileiros -->
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </fieldset>

          <!-- Informações complementares -->
          <fieldset>
            <legend>Informações Complementares</legend>

            <label for="habilidades">Habilidades:</label>
            <textarea id="habilidades" name="habilidades" required></textarea>

            <label for="interesse">Áreas de interesse:</label>
            <select id="interesse" name="interesse" required>
              <option value="">Selecione</option>
              <option value="educacao">Educação</option>
              <option value="saude">Saúde</option>
              <option value="meio-ambiente">Meio Ambiente</option>
            </select>
          </fieldset>

          <!-- Botão de envio -->
          <button type="submit">Enviar</button>
        </form>

        <!-- Área para exibir mensagens de validação -->
        <div id="formMessage"></div>
      </article>
    </section>
  `
};
