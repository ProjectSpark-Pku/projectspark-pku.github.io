import React from 'react';
import { Link } from 'react-router-dom';

function CommunityCleanUp() {
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
                <div>Simple Event, Big Dreams</div>
                <img src="/projectspark-pku/Images/Events/cleanup_hero.jpg" alt="Community Clean Up" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  A simple event driven by big dreams. Weather couldn't stop our determination to make a difference.
                </div>
                <div className="HeadingStatementText-Text">
                  Despite the pouring rain, SPARK members were determined to clean up a local park for the public to enjoy. Armed with trash bags, raincoats, and unwavering enthusiasm, our team worked together to clear litter, restore green spaces, and create a welcoming environment for everyone in the community.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">18 May 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Target</span>
                    <span className="event-detail-value">Public Park & Community</span>
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
                <img src="/projectspark-pku/Images/Icons/Events/energy-conservator.png" alt="Park Restoration" />
              </div>
              <div className="item-heading">Park Restoration</div>
              <div className="item-text">
                Clearing waste and maintaining public pathways so families and children can enjoy a clean, safe green space.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/rain.png" alt="Rain or Shine" />
              </div>
              <div className="item-heading">Rain or Shine</div>
              <div className="item-text">
                Heavy rain couldn't dampen our team's spirit — proving that commitment to our community comes before comfort.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/save-the-world.png" alt="Environmental Care" />
              </div>
              <div className="item-heading">Environmental Care</div>
              <div className="item-text">
                Promoting civic responsibility and environmental stewardship through direct, hands-on community action.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Cleaning Our Shared Spaces</h2>
          <p>Parks are where communities gather, play, and connect. For our Community Clean-Up event, Project SPARK volunteers rallied together to restore a public park in Pekanbaru.</p>
          <p>We collected plastic waste, cleared littered areas, and ensured the park returned to a pristine state for neighbors and visitors to enjoy safely.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Why Rain Couldn't Stop Us</h3>
            <p>True community service isn't just for sunny days. When downpours started on the day of the clean-up, our volunteers put on raincoats and pushed forward. The experience bonded our team and demonstrated to the local community that youth initiative can overcome any obstacle when driven by a shared dream.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default CommunityCleanUp;
