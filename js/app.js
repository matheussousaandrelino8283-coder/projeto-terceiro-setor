import { startRouter } from "./router.js";
import {
  renderHome,
  renderAbout,
  renderProjects,
  renderContact,
  getProjectById
} from "./components.js";
import { setupContactForm } from "./forms.js";

const app = document.getElementById("app");
const menuToggle = document.getElementById("menu-toggle");
const mainMenu = document.getElementById("main-menu");
const themeToggle = document.getElementById("theme-toggle");

let previousFocus = null;

function renderPage(route) {
  const pages = {
    home: renderHome,
    about: renderAbout,
    projects: renderProjects,
    contact: renderContact
  };

  const render = pages[route] || renderHome;

  app.innerHTML = render();

  setupContactForm();

  if (route === "projects") {
    setupProjectModal();
  }

  closeMobileMenu();

  app.focus();
}

function setupProjectModal() {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalDescription = document.getElementById("modal-description");
  const modalClose = document.getElementById("modal-close");

  const projectButtons =
    document.querySelectorAll(".project-button");

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const project = getProjectById(
        button.dataset.projectId
      );

      if (!project) {
        return;
      }

      previousFocus = document.activeElement;

      modalTitle.textContent = project.title;
      modalCategory.textContent = project.category;
      modalDescription.textContent = project.details;

      modal.hidden = false;

      modalClose.focus();
    });
  });

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", handleModalKeyboard);
}

function closeModal() {
  const modal = document.getElementById("project-modal");

  if (!modal) {
    return;
  }

  modal.hidden = true;

  if (previousFocus) {
    previousFocus.focus();
  }
}

function handleModalKeyboard(event) {
  const modal = document.getElementById("project-modal");

  if (!modal || modal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
  }
}

function setupMenu() {
  if (!menuToggle || !mainMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Abrir menu" : "Fechar menu"
    );

    mainMenu.classList.toggle("menu-open", !isOpen);
  });

  mainMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  if (!menuToggle || !mainMenu) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainMenu.classList.remove("menu-open");
}

function setupTheme() {
  if (!themeToggle) {
    return;
  }

  const savedTheme = localStorage.getItem(
    "impacto-social-theme"
  );

  if (savedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";

    themeToggle.textContent = "☀️";
    themeToggle.setAttribute(
      "aria-label",
      "Ativar modo claro"
    );
    themeToggle.setAttribute("aria-pressed", "true");
  }

  themeToggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.dataset.theme === "dark";

    if (isDark) {
      document.documentElement.removeAttribute("data-theme");

      localStorage.setItem(
        "impacto-social-theme",
        "light"
      );

      themeToggle.textContent = "🌙";
      themeToggle.setAttribute(
        "aria-label",
        "Ativar modo escuro"
      );
      themeToggle.setAttribute("aria-pressed", "false");
    } else {
      document.documentElement.dataset.theme = "dark";

      localStorage.setItem(
        "impacto-social-theme",
        "dark"
      );

      themeToggle.textContent = "☀️";
      themeToggle.setAttribute(
        "aria-label",
        "Ativar modo claro"
      );
      themeToggle.setAttribute("aria-pressed", "true");
    }
  });
}

setupMenu();
setupTheme();

startRouter(renderPage);