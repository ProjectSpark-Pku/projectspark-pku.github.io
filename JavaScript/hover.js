document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ hover.js loaded");

  function setupNavHover() {
    const links = document.querySelectorAll(".nav-links a");
    const highlight = document.querySelector(".highlight");
    const nav = document.querySelector(".nav-links");

    if (!nav || !highlight) {
      console.log("⏳ Navbar not ready yet...");
      return false;
    }

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        const rect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        highlight.style.width = `${rect.width + 12}px`;
        highlight.style.left = `${rect.left - navRect.left - 6}px`;
      });
    });

    nav.addEventListener("mouseleave", () => {
      highlight.style.width = "0";
    });

    console.log("✅ Navbar hover wired.");
    return true;
  }

  // keep checking until navbar exists
  const interval = setInterval(() => {
    if (setupNavHover()) clearInterval(interval);
  }, 100);
});
