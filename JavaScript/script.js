console.log("✅ script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const dropdown = document.querySelector(".dropdown-menu");

  hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
});
