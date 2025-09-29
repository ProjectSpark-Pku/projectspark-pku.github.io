console.log("MEMBERS JS LOADED");

async function loadMembers() {
  const res = await fetch("../data/members.json"); // adjust path if needed
  const data = await res.json();

  const container = document.getElementById("members-container");

  function render(year) {
    container.innerHTML = ""; // clear old content

    // If "all", show every year
    const years = year === "all" ? Object.keys(data) : [year];

    years.forEach(y => {
      const yearGroup = document.createElement("div");
      yearGroup.className = "year-group";

      const yearTitle = document.createElement("h2");
      yearTitle.textContent = y === "founders" ? "Founders" : `Team of ${y}`;
      yearGroup.appendChild(yearTitle);

      // Divisions
      Object.keys(data[y]).forEach(division => {
        const members = data[y][division].filter(m => m.name); // skip empty objects

        if (members.length === 0) return; // skip empty divisions

        const divTitle = document.createElement("h3");
        if (division.trim() !== "") divTitle.textContent = division;
        yearGroup.appendChild(divTitle);

        const grid = document.createElement("div");
        grid.className = "member-grid";

        members.forEach(member => {
          const card = document.createElement("div");
          card.className = "member-card";

          const role = member.role ? member.role.toLowerCase() : "";

          if (role.includes("vice leader")) {
            card.classList.add("vice-leader");
          } else if (role.includes("leader")) {
            card.classList.add("leader");
          } else if (role.includes("head")) {
            card.classList.add("leader");
          }

          card.innerHTML = `
            <div class="card-inner">
              <img src="${member.image || "/Images/placeholder.jpg"}" alt="${member.name}">
              <h4>${member.name}</h4>
              ${member.role ? `<p>${member.role}</p>` : ""}
            </div>
          `;

          grid.appendChild(card);
        });

        yearGroup.appendChild(grid);
      });

      container.appendChild(yearGroup);
    });
  }

  // Default: show all
  render("2025");

  // Filter buttons
  document.querySelectorAll(".year-filter button").forEach(btn => {
    btn.addEventListener("click", () => render(btn.dataset.year));
  });
}

loadMembers();
