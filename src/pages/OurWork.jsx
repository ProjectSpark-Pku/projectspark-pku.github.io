import React from 'react';
import { Link } from 'react-router-dom';

function OurWork() {
  return (
    <main>
      <section className="timeline-section">
        <h2 className="timeline-title">Our Journey</h2>

        <div className="timeline">

          <div className="timeline-item left">
            <div className="timeline-content">
              <p className="event-date">21 February 2025</p>
              <h3 className="event-title">Founding of the Organization</h3>
              <img src="/projectspark-pku/Images/SVG/`project_spark_logo.svg" alt="Founding" className="event-image" />
            </div>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item right">
            <Link to="/events/pintar-1" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">28 March 2025</p>
                <h3 className="event-title">PINTAR 1</h3>
                <img src="/projectspark-pku/Images/Events/pintar1_cover.jpeg" alt="PINTAR 1" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/stella-bazaar" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">12 April 2025</p>
                <h3 className="event-title">STELLA BAZAAR</h3>
                <img src="/projectspark-pku/Images/Events/stella_cover.JPG" alt="Stella Bazaar" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item right">
            <Link to="/events/community-clean-up" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">18 May 2025</p>
                <h3 className="event-title">COMMUNITY CLEAN-UP</h3>
                <img src="/projectspark-pku/Images/Events/cleanup_cover.jpg" alt="Clean-up" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/pintar-2" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">22 June 2025</p>
                <h3 className="event-title">PINTAR 2</h3>
                <img src="/projectspark-pku/Images/Events/pintar2_cover.jpg" alt="PINTAR 2" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item right">
            <Link to="/events/shine-1" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">24 August 2025</p>
                <h3 className="event-title">SHINE 1</h3>
                <img src="/projectspark-pku/Images/Events/shine1_cover.jpg" alt="SHINE 1" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/grow-1" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">4 October 2025</p>
                <h3 className="event-title">GROW 1</h3>
                <img src="/projectspark-pku/Images/Events/grow1_cover.jpg" alt="GROW 1" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          {/* Newly added events below */}
          <div className="timeline-item right">
            <Link to="/events/pintar-3" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">22 November 2025</p>
                <h3 className="event-title">PINTAR 3</h3>
                <img src="/projectspark-pku/Images/Events/pintar3_hero.jpg" alt="PINTAR 3" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/cultural-korea-exchange" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">4 December 2025</p>
                <h3 className="event-title">CULTURAL KOREA EXCHANGE</h3>
                <img src="/projectspark-pku/Images/Events/korea_cover.jpg" alt="Cultural Korea Exchange" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item right">
            <Link to="/events/grow-2" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">15 March 2026</p>
                <h3 className="event-title">GROW 2</h3>
                <img src="/projectspark-pku/Images/Events/grow2_cover.jpg" alt="GROW 2" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/pintar-4" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">10 May 2026</p>
                <h3 className="event-title">PINTAR 4</h3>
                <img src="/projectspark-pku/Images/Events/pintar4_cover.jpeg" alt="PINTAR 4" className="event-image" />
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default OurWork;
