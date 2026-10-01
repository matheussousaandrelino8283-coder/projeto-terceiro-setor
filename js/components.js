const projects = [
  {
    id: 1,
    title: "Ação Comunitária",
    category: "Assistência social",
    description:
      "Projeto voltado para apoiar famílias e fortalecer ações comunitárias.",
    details:
      "A iniciativa reúne ações de apoio, orientação e integração entre moradores, buscando ampliar o acesso a oportunidades e serviços."
  },
  {
    id: 2,
    title: "Educação para Todos",
    category: "Educação",
    description:
      "Iniciativa que promove acesso à educação e atividades de aprendizagem.",
    details:
      "O projeto oferece atividades educativas e materiais de apoio para incentivar o aprendizado e contribuir para o desenvolvimento dos participantes."
  },
  {
    id: 3,
    title: "Meio Ambiente",
    category: "Sustentabilidade",
    description:
      "Ações de conscientização e preservação do meio ambiente.",
    details:
      "São realizadas ações educativas para incentivar práticas sustentáveis, redução de resíduos e preservação dos espaços comunitários."
  }
];

export function renderHome() {
  return `
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-content">
        <span class="hero-tag">TERCEIRO SETOR</span>

        <h1 id="home-title">
          Transformando ideias em impacto social
        </h1>

        <p>
          Conheça projetos que promovem educação, sustentabilidade
          e desenvolvimento comunitário.
        </p>

        <a class="button" href="#/projects">
          Conhecer projetos
        </a>
      </div>
    </section>

    <section class="content-section" aria-labelledby="intro-title">
      <h2 id="intro-title">Nosso propósito</h2>

      <p>
        O Impacto Social apresenta iniciativas que buscam contribuir
        para uma sociedade mais participativa, inclusiva e sustentável.
      </p>
    </section>
  `;
}

export function renderAbout() {
  return `
    <section class="content-section" aria-labelledby="about-title">
      <span class="section-tag">SOBRE</span>

      <h1 id="about-title">Sobre o projeto</h1>

      <p>
        O Impacto Social é uma aplicação web desenvolvida para
        apresentar iniciativas relacionadas ao terceiro setor.
      </p>

      <div class="cards">
        <article class="card">
          <h2>Inclusão</h2>
          <p>
            Incentivar oportunidades e participação social.
          </p>
        </article>

        <article class="card">
          <h2>Educação</h2>
          <p>
            Valorizar o conhecimento como ferramenta de transformação.
          </p>
        </article>

        <article class="card">
          <h2>Sustentabilidade</h2>
          <p>
            Estimular atitudes responsáveis com o meio ambiente.
          </p>
        </article>
      </div>
    </section>
  `;
}

export function renderProjects() {
  const projectCards = projects
    .map(
      (project) => `
        <article class="card project-card">
          <span class="project-category">${project.category}</span>

          <h2>${project.title}</h2>

          <p>${project.description}</p>

          <button
            class="button project-button"
            type="button"
            data-project-id="${project.id}"
          >
            Ver detalhes
          </button>
        </article>
      `
    )
    .join("");

  return `
    <section class="content-section" aria-labelledby="projects-title">
      <span class="section-tag">PROJETOS</span>

      <h1 id="projects-title">Nossas iniciativas</h1>

      <p>
        Conheça algumas das iniciativas apresentadas pela aplicação.
      </p>

      <div id="projects-container" class="cards">
        ${projectCards}
      </div>

      <div
        id="project-modal"
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        hidden
      >
        <div class="modal-content">
          <button
            id="modal-close"
            class="modal-close"
            type="button"
            aria-label="Fechar detalhes do projeto"
          >
            ×
          </button>

          <span id="modal-category" class="project-category"></span>

          <h2 id="modal-title"></h2>

          <p id="modal-description"></p>
        </div>
      </div>
    </section>
  `;
}

export function renderContact() {
  return `
    <section class="content-section" aria-labelledby="contact-title">
      <span class="section-tag">CONTATO</span>

      <h1 id="contact-title">Entre em contato</h1>

      <p>
        Preencha o formulário abaixo para enviar uma mensagem.
      </p>

      <form id="contact-form" class="contact-form" novalidate>

        <div class="form-group">
          <label for="name">Nome</label>

          <input
            id="name"
            name="name"
            type="text"
            autocomplete="name"
            aria-describedby="name-error"
            required
          >

          <span
            id="name-error"
            class="error-message"
            role="alert"
          ></span>
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>

          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            aria-describedby="email-error"
            required
          >

          <span
            id="email-error"
            class="error-message"
            role="alert"
          ></span>
        </div>

        <div class="form-group">
          <label for="message">Mensagem</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            aria-describedby="message-error"
            required
          ></textarea>

          <span
            id="message-error"
            class="error-message"
            role="alert"
          ></span>
        </div>

        <button class="button" type="submit">
          Enviar mensagem
        </button>

        <p
          id="form-feedback"
          class="form-feedback"
          role="status"
          aria-live="polite"
        ></p>

      </form>
    </section>
  `;
}

export function getProjectById(id) {
  return projects.find((project) => project.id === Number(id));
}