import React from 'react';
import { Link } from 'react-router-dom';

function Shine1() {
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
                <div>United in Diversity</div>
                <img src="/projectspark-pku/Images/Events/shine1_hero.jpg" alt="SHINE" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  Celebrating nationalism, national identity, and the strength of staying together despite our differences.
                </div>
                <div className="HeadingStatementText-Text">
                  SHINE is an event focused on nationalism and celebrating the independence of Indonesia. Through interactive activities, storytelling, and cultural games, we emphasized the importance of national pride, heritage, and unity — reminding everyone that our diversity is our greatest strength.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">24 August 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Children Reached</span>
                    <span className="event-detail-value">30+</span>
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
                <img src="/projectspark-pku/Images/Icons/Events/indonesia.png" alt="National Pride" />
              </div>
              <div className="item-heading">National Pride</div>
              <div className="item-text">
                Celebrating Indonesia's rich independence history and inspiring young minds to take pride in their homeland.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/banner.png" alt="Unity in Diversity" />
              </div>
              <div className="item-heading">Bhinneka Tunggal Ika</div>
              <div className="item-text">
                Teaching the core principle of unity in diversity — helping children appreciate different backgrounds and cultures.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/food.png" alt="Traditional Games" />
              </div>
              <div className="item-heading">Traditional Games</div>
              <div className="item-text">
                Engaging children in traditional Indonesian games and festive celebrations that foster teamwork and joy.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Celebrating Our Independence</h2>
          <p>Independence Day in Indonesia is a time of national celebration, reflection, and community unity. SHINE brought this celebratory spirit directly to the children.</p>
          <p>Through patriotic crafts, music, and group challenges, participants learned what it means to be part of a vibrant, interconnected nation.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Together Despite Differences</h3>
            <p>Our goal with SHINE was to show that no matter where we come from or what differences we have, we are united by a common identity. Watching children collaborate, cheer for each other, and celebrate together proved that patriotism begins with kindness, unity, and mutual respect.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default Shine1;
