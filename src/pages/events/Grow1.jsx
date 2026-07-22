import React from 'react';
import { Link } from 'react-router-dom';

function Grow1() {
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
                <div>Crafting With Nature</div>
                <img src="/projectspark-pku/Images/Events/grow1_hero.jpg" alt="GROW 1" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  Using nature to create art, teach entrepreneurship, and raise profits directly for the orphanage.
                </div>
                <div className="HeadingStatementText-Text">
                  GROW 1 focused on eco-friendly creativity by using fresh fallen leaves to imprint natural patterns onto canvas tote bags. These handmade bags were then sold to raise profits for the orphanage, teaching children and team members valuable lessons in design, teamwork, and practical entrepreneurship.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">4 October 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Impact</span>
                    <span className="event-detail-value">Orphanage Fundraiser</span>
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
                <img src="/projectspark-pku/Images/Icons/Events/art.png" alt="Eco-Friendly Art" />
              </div>
              <div className="item-heading">Eco-Friendly Art</div>
              <div className="item-text">
                Using botanical leaf printing to craft aesthetic, reusable tote bags without artificial synthetic dyes.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/stall.png" alt="Entrepreneurship" />
              </div>
              <div className="item-heading">Entrepreneurship</div>
              <div className="item-text">
                Teaching the principles of product creation, pricing, and sales to demonstrate how creativity yields real value.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/community.png" alt="Teamwork" />
              </div>
              <div className="item-heading">Teamwork</div>
              <div className="item-text">
                Collaborating in production teams, pairing volunteers and children to design, print, and package each bag.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Nature Meets Creativity</h2>
          <p>GROW 1 introduced a sustainable approach to art and fundraising. By collecting leaves of various shapes and textures, participants learned how natural elements can be repurposed into stylish accessories.</p>
          <p>Each leaf pattern was carefully pressed into canvas fabric, turning ordinary tote bags into one-of-a-kind handcrafted pieces.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Purpose Driven Profit</h3>
            <p>The tote bags were sold to supporters and community members, with 100% of profits donated to support the orphanage. More than just a craft session, GROW 1 gave participants hands-on experience in business basics, teamwork, and environmental awareness — showing how creative ideas can sprout into real financial support for those in need.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default Grow1;
