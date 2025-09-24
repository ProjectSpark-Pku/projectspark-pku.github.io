// JavaScript/script.js
// Generic partial loader + navbar behavior

document.addEventListener("DOMContentLoaded", async () => {
  console.log("✅ script.js loaded");

  await loadPartial("#navbar-placeholder", [
    "/Partials/navbar.html",
    "Partials/navbar.html",
    "../Partials/navbar.html"
  ], "Navbar");

  await loadPartial("#footer-placeholder", [
    "/Partials/footer.html",
    "Partials/footer.html",
    "../Partials/footer.html"
  ], "Footer");

  setupNavbarBehavior(); // after navbar injection
});

/**
 * Load an HTML partial into a placeholder element.
 * @param {string} selector - CSS selector for the placeholder
 * @param {string[]} pathOptions - candidate paths
 * @param {string} label - label for logging ("Navbar"/"Footer")
 */
async function loadPartial(selector, pathOptions, label) {
  let html = null;
  let fetchedUrl = null;

  for (const path of pathOptions) {
    try {
      const resolved = new URL(path, window.location.href).href;
      console.log(`[${label}] Attempting fetch →`, resolved);

      const res = await fetch(resolved, { cache: "no-store" });
      console.log(`[${label}]   -> response`, res.status, path);

      if (res.ok) {
        const text = await res.text();
        console.log(`[${label}] Fetched text length:`, text.length);
        console.log(`[${label}] Preview:`, text.slice(0, 100));

        if (text.length > 0) {
          html = text;
          fetchedUrl = resolved;
          break;
        }
      }
    } catch (err) {
      console.warn(`[${label}] fetch error for`, path, err?.message);
    }
  }

  if (!html) {
    console.error(`❌ ${label}: failed to load any content. Tried:`, pathOptions);
    return;
  }

  const placeholder = document.querySelector(selector);
  if (!placeholder) {
    console.error(`❌ ${label}: Placeholder ${selector} not found in DOM`);
    return;
  }

  placeholder.innerHTML = html;
  console.log(`✅ ${label} injected into DOM from ${fetchedUrl}`);
}

/**
 * Attach event handlers for hamburger, dropdown, auto-close behavior.
 */
function setupNavbarBehavior() {
  const hamburger = document.querySelector(".hamburger");
  const dropdown = document.querySelector(".dropdown-menu");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger) {
    console.warn("❌ Navbar: .hamburger not found. Skipping wiring.");
    return;
  }

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

  console.log("✅ Navbar behavior wired.");
}
