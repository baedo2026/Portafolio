const contactForm = document.querySelector(".contact-form");
const successMessage = document.querySelector("#form-success");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.hidden = false;
  contactForm.reset();
  successMessage.focus();
});
