import { getData, saveData } from "./storage.js";

function setFieldError(field, message) {
  const errorElement = document.getElementById(`${field.id}-error`);

  field.setAttribute("aria-invalid", "true");
  errorElement.textContent = message;
}

function clearFieldError(field) {
  const errorElement = document.getElementById(`${field.id}-error`);

  field.removeAttribute("aria-invalid");
  errorElement.textContent = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function setupContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) {
    return;
  }

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const feedback = document.getElementById("form-feedback");

  [name, email, message].forEach((field) => {
    field.addEventListener("input", () => {
      clearFieldError(field);
      feedback.textContent = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    clearFieldError(name);
    clearFieldError(email);
    clearFieldError(message);

    if (name.value.trim().length < 3) {
      setFieldError(
        name,
        "Digite seu nome completo."
      );
      isValid = false;
    }

    if (!validateEmail(email.value.trim())) {
      setFieldError(
        email,
        "Digite um e-mail válido."
      );
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      setFieldError(
        message,
        "A mensagem precisa ter pelo menos 10 caracteres."
      );
      isValid = false;
    }

    if (!isValid) {
      feedback.textContent =
        "Verifique os campos destacados e tente novamente.";

      feedback.className = "form-feedback error";

      return;
    }

    const messages = getData("contact-messages", []);

    const newMessage = {
      id: Date.now(),
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
      date: new Date().toISOString()
    };

    messages.push(newMessage);

    saveData("contact-messages", messages);

    form.reset();

    [name, email, message].forEach(clearFieldError);

    feedback.textContent =
      "Mensagem enviada com sucesso!";

    feedback.className = "form-feedback success";
  });
}