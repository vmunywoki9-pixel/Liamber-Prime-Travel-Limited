// IMPORTANT: Before publishing, replace this with Liamber Prime Travels Limited's official email.
const COMPANY_EMAIL = "replace-with-company-email@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

document.getElementById("inquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  if (COMPANY_EMAIL.includes("replace-with")) {
    document.getElementById("formStatus").textContent =
      "Website preview only: add the official company email in script.js to activate email enquiries.";
    return;
  }
  const subject = encodeURIComponent("Travel enquiry – " + form.get("interest"));
  const body = encodeURIComponent(
    `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\nInterested in: ${form.get("interest")}\n\nTravel plans:\n${form.get("message")}`
  );
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
});
