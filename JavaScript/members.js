console.log("MEMBERS JS LOADED")
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
        const divTitle = document.createElement("h3");
        divTitle.textContent = division;
        yearGroup.appendChild(divTitle);

        const grid = document.createElement("div");
        grid.className = "member-grid";

        data[y][division].forEach(member => {
          const card = document.createElement("div");
          card.className = "member-card";

          card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.role}</p>
          `;

          grid.appendChild(card);
        });

        yearGroup.appendChild(grid);
      });

      container.appendChild(yearGroup);
    });
  }

  // Default: show all
  render("all");

  // Filter buttons
  document.querySelectorAll(".year-filter button").forEach(btn => {
    btn.addEventListener("click", () => render(btn.dataset.year));
  });
}

loadMembers();

