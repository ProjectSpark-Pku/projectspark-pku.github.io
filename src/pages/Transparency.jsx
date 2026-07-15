import React from 'react';
import '../CSS/transparency.css'; // Make sure to import the CSS

function Transparency() {
  return (
    <main className="transparency-page">
      <section className="transparency-hero">
        <h1>Transparency</h1>
        <p>At Project SPARK, we believe in complete openness. This page will soon host our financial reports and organizational metrics.</p>
      </section>

      <div className="transparency-content">
        <section className="transparency-section">
          <h2>Financial Reports</h2>
          <p>We are currently compiling our latest financial data. Full breakdown of our fundraising and allocations will be available here soon.</p>
          <p><em>Check back soon for updates!</em></p>
        </section>

        <section className="transparency-section">
          <h2>Credits & Attributions</h2>
          <p>We are incredibly grateful for the open-source assets and resources that helped make this website possible. Below is a list of attributions for the icons, fonts, and imagery used across Project SPARK.</p>
          
          <ul className="credits-list">
            <li>
              <a href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons" target="_blank" rel="noopener noreferrer">Chemistry icons created by Freepik - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/physics" title="physics icons" target="_blank" rel="noopener noreferrer">Physics icons created by Good Ware - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/tower-pc" title="tower pc icons" target="_blank" rel="noopener noreferrer">Tower pc icons created by Smashicons - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/english" title="english icons" target="_blank" rel="noopener noreferrer">English icons created by Vectors Tank - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/stall" title="stall icons" target="_blank" rel="noopener noreferrer">Stall icons created by Freepik - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/local" title="local icons" target="_blank" rel="noopener noreferrer">Local icons created by gravisio - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/bolt" title="bolt icons" target="_blank" rel="noopener noreferrer">Bolt icons created by Roundicons Premium - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/art" title="art icons" target="_blank" rel="noopener noreferrer">Art icons created by Freepik - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/geometry" title="geometry icons" target="_blank" rel="noopener noreferrer">Geometry icons created by Freepik - Flaticon</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Transparency;
