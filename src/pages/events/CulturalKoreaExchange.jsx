import React from 'react';
import { Link } from 'react-router-dom';

function CulturalKoreaExchange() {
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
                <div>Global Cultural Exchange</div>
                <img src="/projectspark-pku/Images/Events/korea_hero.jpg" alt="Cultural Korea Exchange" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  Connecting youth across borders to share traditions, games, culinary arts, and global perspective.
                </div>
                <div className="HeadingStatementText-Text">
                  Sharing cultures from across the globe, Project SPARK teamed up with HYPERSPACE — an organization based in South Korea — to introduce primary school students to Korean culture. Children enjoyed learning traditional Korean games, making fresh Kimchi, and crafting Dalgona candy.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">4 December 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Partner</span>
                    <span className="event-detail-value">HYPERSPACE (Korea)</span>
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
                <img src="/projectspark-pku/Images/Icons/Events/dalgona-candy.png" alt="Culture & Traditional Games" />
              </div>
              <div className="item-heading">Culture & Games</div>
              <div className="item-text">
                Immersing students in rich Korean culture through traditional folk games, hands-on Kimchi making, and Dalgona crafting.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/business.png" alt="International Relations" />
              </div>
              <div className="item-heading">International Relations</div>
              <div className="item-text">
                Partnering directly with Korean organization HYPERSPACE to build meaningful cross-border connections and cross-cultural friendship.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/youth-day.png" alt="The Youth" />
              </div>
              <div className="item-heading">The Youth</div>
              <div className="item-text">
                Empowering primary school students with global curiosity, open-mindedness, and broader horizons from a young age.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Bridging Borders Through Youth</h2>
          <p>Cultural exchange opens doors to broader perspectives. Partnering with HYPERSPACE in Korea allowed Project SPARK to bring authentic international experiences directly to primary school students in Pekanbaru.</p>
          <p>By engaging all five senses — through food preparation, language basics, and interactive play — students formed unforgettable connections to a culture thousands of miles away.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Global Mindsets for Young Learners</h3>
            <p>At Project SPARK, we believe that understanding the world begins with curiosity and empathy. Collaborating with HYPERSPACE showed our students that despite geographic and language differences, children everywhere share the same joy in playing games, trying new foods, and making new friends across borders.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default CulturalKoreaExchange;
