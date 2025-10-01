// main.js
// Load navbar + footer partials and wire up behavior

document.addEventListener("DOMContentLoaded", async () => {
  console.log("✅ main.js loaded");

  await loadPartial("#navbar-placeholder", "/Partials/navbar.html", "Navbar");
  await loadPartial("#footer-placeholder", "/Partials/footer.html", "Footer");

  setupNavbarBehavior(); // after navbar is injected
});

/**
 * Load an HTML partial into a placeholder element.
 * @param {string} selector - CSS selector for the placeholder
 * @param {string} path - absolute path from project root
 * @param {string} label - "Navbar" or "Footer"
 */
async function loadPartial(selector, path, label) {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const html = await res.text();
    const placeholder = document.querySelector(selector);

    if (!placeholder) {
      console.error(`❌ ${label}: Placeholder ${selector} not found in DOM`);
      return;
    }

    placeholder.innerHTML = html;
    console.log(`✅ ${label} injected from ${path}`);
  } catch (err) {
    console.error(`❌ ${label}: Failed to load ${path}`, err);
  }
}

/**
 * Navbar behavior (hamburger toggle, dropdown, etc.)
 */
function setupNavbarBehavior() {
  const hamburger = document.querySelector(".hamburger");
  const dropdown = document.querySelector(".dropdown-menu");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger) return;

  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute(
    "aria-controls",
    dropdown ? "dropdown-menu" : navLinks ? "nav-links" : ""
  );

  hamburger.addEventListener("click", (ev) => {
    ev.stopPropagation();
    if (dropdown) {
      dropdown.classList.toggle("show");
      hamburger.setAttribute("aria-expanded", dropdown.classList.contains("show"));
    } else if (navLinks) {
      navLinks.classList.toggle("show");
      hamburger.setAttribute("aria-expanded", navLinks.classList.contains("show"));
    }
  });
}
