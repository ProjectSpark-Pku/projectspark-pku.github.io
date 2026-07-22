import React from 'react';
import { Link } from 'react-router-dom';

function Pintar4() {
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
                <div>Building A Legacy Of Books</div>
                <img src="/projectspark-pku/Images/Events/pintar4_hero.jpeg" alt="PINTAR 4" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  Switching gears to focus on literacy, book reading, and donating a mini library to the orphanage.
                </div>
                <div className="HeadingStatementText-Text">
                  PINTAR 4 focused on literacy and inspiring a lifelong love for reading. Beyond interactive reading sessions and storytelling games, Project SPARK donated a small library complete with sturdy bookshelves and a rich array of books to the orphanage — ensuring children have continuous access to knowledge and stories.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">10 May 2026</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Gift</span>
                    <span className="event-detail-value">Mini Library & Books</span>
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
                <img src="/projectspark-pku/Images/Icons/Events/open-book.png" alt="Literacy First" />
              </div>
              <div className="item-heading">Literacy Focus</div>
              <div className="item-text">
                Encouraging reading comprehension, imaginative storytelling, and vocabulary building through guided reading groups.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/book.png" alt="Library Donation" />
              </div>
              <div className="item-heading">Mini Library Gift</div>
              <div className="item-text">
                Assembling and donating dedicated bookshelves and a wide selection of fiction, science, and educational books.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/projectspark-pku/Images/Icons/Events/youth-day.png" alt="Interactive Reading" />
              </div>
              <div className="item-heading">Interactive Reading</div>
              <div className="item-text">
                Pairing volunteers with children for one-on-one reading activities and lively book discussions.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Opening Doors Through Reading</h2>
          <p>Books unlock worlds of imagination and opportunity. For PINTAR 4, our team recognized that temporary visits become far more impactful when paired with long-term educational infrastructure.</p>
          <p>We organized book drives and procured durable wooden bookshelves to establish a dedicated reading corner inside the orphanage.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>A Gift That Keeps Giving</h3>
            <p>A library is not just a room filled with paper — it is a permanent haven for curiosity. By donating bookshelves and a curated collection of books, PINTAR 4 ensures that every child at the orphanage can pick up a book and explore new horizons whenever they wish, leaving a lasting legacy of literacy and inspiration.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default Pintar4;
