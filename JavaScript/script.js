// JavaScript/script.js
// Load navbar.html and wire hamburger/dropdown behavior.

document.addEventListener("DOMContentLoaded", async () => {
  console.log("✅ script.js loaded");

  const candidates = [
    "/Partials/navbar.html",
    "../Partials/navbar.html"
  ];

  let navbarHtml = null;
  let fetchedUrl = null;

  for (const path of candidates) {
    try {
      const resolved = new URL(path, window.location.href).href;
      console.log("Attempting fetch →", resolved);

      const res = await fetch(resolved, { cache: "no-store" });
      console.log("  -> response", res.status, path);

      if (res.ok) {
        const text = await res.text(); // ✅ only once
        console.log("Fetched text length:", text.length);
        console.log("Preview:", text.slice(0, 100));

        if (text.trim().length > 0) {
          navbarHtml = text;
          fetchedUrl = resolved;
          break;
        }
      }
    } catch (err) {
      console.warn("  fetch error for", path, err?.message);
    }
  }

  if (!navbarHtml) {
    console.error("❌ Navbar: failed to load any content. Tried:", candidates);
    return;
  }

  console.log("Fetch response status: OK from", fetchedUrl);

  let placeholder = document.querySelector("#navbar-placeholder");
  if (!placeholder) {
    placeholder = document.createElement("div");
    placeholder.id = "navbar-placeholder";
    document.body.insertBefore(placeholder, document.body.firstChild);
    console.log("Navbar: created #navbar-placeholder automatically.");
  }

  placeholder.innerHTML = navbarHtml;
  console.log("✅ Navbar injected into DOM.");

  setupNavbarBehavior();
});

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
      hamburger.setAttribute(
        "aria-expanded",
        dropdown.classList.contains("show")
      );
    } else if (navLinks) {
      navLinks.classList.toggle("show");
      hamburger.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("show")
      );
    }
  });

  console.log("✅ Navbar behavior wired.");
}
