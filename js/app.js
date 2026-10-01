import { getCurrentRoute, startRouter } from "./router.js";
import {
  renderHome,
  renderAbout,
  renderProjects,
  renderContact,
  getProjectById
} from "./components.js";
import { setupContactForm } from "./forms.js";

const app = document.getElementById("app");

const pageTitles = {
  home: "Início",
  about: "Sobre",
  projects: "Projetos",
  contact: "Contato"
};

function renderPage(route) {
  const title = pageTitles[route] || "Início";

  // Atualiza o título da aba conforme a página
  document.title = `Impacto Social | ${title}`;

  switch (route) {
    case "about":
      app.innerHTML = renderAbout();
      break;

    case "projects":
      app.innerHTML = renderProjects();
      setupProjectModal();
      break;

    case "contact":
      app.innerHTML = renderContact();
      setupContactForm();
      break;

    case "home":
    default:
      app.innerHTML = renderHome();
      break;
  }

  closeMobileMenu();

  // Leva o foco para o conteúdo principal
  app.focus();
}

function setupProjectModal() {
  const modal = document.getElementById("project-modal");

  if (!modal) {
    return;
  }

  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalClose = document.getElementById("modal-close");
  const projectButtons = document.querySelectorAll(".project-button");

  let lastFocusedElement = null;

  function openModal(projectId, button) {
    const project = getProjectById(projectId);

    if (!project) {
      return;
    }

    lastFocusedElement = button;

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    modal.hidden = false;
    document.body.classList.add("modal-open");

    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.projectId, button);
    });
  });

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function setupMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");

  if (!menuToggle || !menu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Abrir menu" : "Fechar menu"
    );

    menu.classList.toggle("is-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });
}

function closeMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");

  if (!menuToggle || !menu) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  menu.classList.remove("is-open");
}

function setupTheme() {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) {
    return;
  }

  const savedTheme = localStorage.getItem("impacto-social-theme");

  if (savedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Desativar modo escuro");
    themeToggle.setAttribute("aria-pressed", "true");
  }

  themeToggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.dataset.theme === "dark";

    if (isDark) {
      delete document.documentElement.dataset.theme;

      themeToggle.textContent = "🌙";
      themeToggle.setAttribute(
        "aria-label",
        "Ativar modo escuro"
      );
      themeToggle.setAttribute("aria-pressed", "false");

      localStorage.removeItem("impacto-social-theme");
    } else {
      document.documentElement.dataset.theme = "dark";

      themeToggle.textContent = "☀️";
      themeToggle.setAttribute(
        "aria-label",
        "Desativar modo escuro"
      );
      themeToggle.setAttribute("aria-pressed", "true");

      localStorage.setItem("impacto-social-theme", "dark");
    }
  });
}

setupMenu();
setupTheme();

startRouter(renderPage);