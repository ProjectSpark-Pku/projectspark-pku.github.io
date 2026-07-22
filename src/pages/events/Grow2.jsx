import React from 'react';
import { Link } from 'react-router-dom';

function Grow2() {
  return (
    <main>
      <div className="GradientBackground">
        <div>
          <div className="HeadingStatementText">
            <Link to="/our-work" className="HeadingStatementText-Label">
              Events
            </Link>

            <div className="HeadingStatementText-Contents">
              <div className="HeadingStatementText-Heading">
                <div>Growing Sustainable Futures</div>
                <img src="/projectspark-pku/Images/Events/grow2_hero.jpeg" alt="GROW 2" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  Donating an entire hydroponic setup to an orphanage, enabling sustainable, long-term food production.
                </div>
                <div className="HeadingStatementText-Text">
                  GROW 2 brought sustainable innovation to an orphanage in Pekanbaru by building and donating a complete hydroponic farming setup. This system allows the orphanage to cultivate fresh, organic produce on-site independently. To this day, they have already celebrated 3 successful harvests!
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">15 March 2026</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Achievement</span>
                    <span className="event-detail-value">3 Harvests & Counting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="MainTopics">
          <div className="MainTopics-inner">

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/hydroponic.png" alt="Hydroponic Setup" />
              </div>
              <div className="item-heading">Hydroponic Setup</div>
              <div className="item-text">
                Installing a complete vertical hydroponic system with pumps, pipe channels, and nutrient solutions tailored for high-yield farming.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/save-the-world.png" alt="Sustainable Agriculture" />
              </div>
              <div className="item-heading">Sustainable Farming</div>
              <div className="item-text">
                Teaching children and caretakers the principles of soil-free agriculture, water efficiency, and crop maintenance.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/creativity.png" alt="Creativity" />
              </div>
              <div className="item-heading">Creativity</div>
              <div className="item-text">
                Adding the children's own style to the hydroponic setup by letting them paint and customize the structure with colorful designs.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Empowering Self-Sufficiency</h2>
          <p>Traditional donations provide temporary relief, but GROW 2 aimed to build lasting independence. Hydroponic farming uses nutrient-rich water solutions to grow vegetables in compact spaces, making it an efficient, low-maintenance solution for the orphanage.</p>
          <p>Our team spent the day building the system, planting the first batch of seedlings, and training caretakers on daily maintenance.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>A Harvest That Keeps Giving</h3>
            <p>Seeing the setup yield fresh crops month after month proves the power of sustainable giving. Having already harvested 3 times, the orphanage now enjoys fresh, homegrown produce, reduced food expenses, and an interactive educational tool where children learn biology and responsibility firsthand.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default Grow2;
