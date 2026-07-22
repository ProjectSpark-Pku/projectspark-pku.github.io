import React from 'react';
import { Link } from 'react-router-dom';

function Pintar3() {
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
                <div>Expanding The Spark</div>
                <img src="/projectspark-pku/Images/Events/pintar3_hero.jpg" alt="PINTAR 3" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  Building upon an already successful foundation, PINTAR 3 brought elevated science and art modules to new orphanages.
                </div>
                <div className="HeadingStatementText-Text">
                  PINTAR 3 continued Project SPARK's mission of bringing interactive education to children in need. Refining our previous curricula, we introduced fascinating new hands-on subjects including bubble geometry, color-changing liquid chemistry, and precision origami.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">22 November 2025</span>
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
                <img src="/projectspark-pku/Images/Icons/Events/shapes.png" alt="Bubble Geometry" />
              </div>
              <div className="item-heading">Bubble Geometry</div>
              <div className="item-text">
                Exploring spatial mathematics, surface tension, and geometric shapes using interactive soap bubble frames.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/flask.png" alt="Chemistry" />
              </div>
              <div className="item-heading">Liquid Chemistry</div>
              <div className="item-text">
                Demonstrating pH indicators and chemical reactions with vibrant color-changing liquids that captivated students.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/art.png" alt="Origami" />
              </div>
              <div className="item-heading">Origami Art</div>
              <div className="item-text">
                Cultivating patience, fine motor skills, and spatial geometry through paper folding projects children could keep.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Refining The Experience</h2>
          <p>Each iteration of the PINTAR program builds on feedback from earlier visits. PINTAR 3 incorporated more visual and tactile experiments designed to instantly engage children regardless of background knowledge.</p>
          <p>By bringing these interactive workshops to new orphanages, we expanded our reach while deepening the quality of learning for every child involved.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Moments That Matter</h3>
            <p>Watching a child's eyes light up as clear liquid turns purple or as soap bubbles form 3D cubes is why PINTAR exists. PINTAR 3 proved that when science and art are taught through wonder and experiment, learning becomes a joy that stays with children long after our visit ends.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default Pintar3;
