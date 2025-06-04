// File: app/page.js
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState([
    '/cricket.jpg',
    '/game.jpg',
    '/sport.jpg',
    '/visiotech.jpg',
    '/visi2.jpg',
    '/hack.jpg',
    '/jhankaar.jpg',
  ]);

  const openFullscreen = (index) => {
    setFullscreenImageIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenImageIndex(null);
  };

  const goToPrevious = () => {
    setFullscreenImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setFullscreenImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/MGM_Institute_of_Health_Sciences_Logo.png"
            alt="MGM Logo"
            className="logo"
          />
          <h1>Welcome to the College Event Management System</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="signin-container"><a href="/signin" className="signin-btn">Student Sign In</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>Home</h2>
          <p>Manage and participate in college events seamlessly.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form id="registration-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="event">Select Event:</label>
            <select id="event" name="event">
              <option value="VISIOTECH">Visiotech</option>
              <option value="JHANKAAR">Jhankaar 2025</option>
              <option value="sports">Sports</option>
            </select>

            <button type="submit">Register</button>
          </form>
        </section>

        <section id="dashboard" className="dashboard-section">
          <h2>Student Dashboard</h2>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Registered Events</h3>
              <div className="card-content">
                <span className="stat-number">3</span>
                <p>Active Registrations</p>
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Upcoming Events</h3>
              <div className="card-content">
                <span className="stat-number">2</span>
                <p>Events This Week</p>
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Past Events</h3>
              <div className="card-content">
                <span className="stat-number">5</span>
                <p>Completed Events</p>
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Points Earned</h3>
              <div className="card-content">
                <span className="stat-number">250</span>
                <p>Total Points</p>
              </div>
            </div>
          </div>

          <div className="activity-list">
            <h3>Recent Activity</h3>
            <div className="activity-item">
              <div className="activity-icon">🎓</div>
              <div className="activity-details">
                <h4>Registered for VISIOTECH 2025</h4>
                <p>2 days ago</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🏆</div>
              <div className="activity-details">
                <h4>Completed Sports Event</h4>
                <p>1 week ago</p>
              </div>
            </div>
          </div>
        </section>

        <section id="events">
          <h2>Events</h2>
          <div className="carousel">
            <div className="carousel-item">
              <h3>VISIOTECH 2025</h3>
              <p>Join us for a day of innovation and technology.</p>
            </div>
            <div className="carousel-item">
              <h3>JHANKAAR 2025</h3>
              <p>Experience the vibrant culture of our college.</p>
            </div>
            <div className="carousel-item">
              <h3>MGM Sports 2025</h3>
              <p>Showcase your athletic skills and team spirit.</p>
            </div>
          </div>
        </section>

        <section id="gallery">
          <h2>Gallery</h2>
          <div className="gallery">
            {galleryImages.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => openFullscreen(index)}
              />
            ))}
          </div>
        </section>

        <section id="faq">
          <h2>FAQ</h2>
          <div className="faq-item">
            <h3>How do I register for an event?</h3>
            <p>You can register for an event by filling out the registration form in the Contact section.</p>
          </div>
          <div className="faq-item">
            <h3>Are there any fees for participation?</h3>
            <p>Most events are free, but some may have a nominal fee. Check the event details for more information.</p>
          </div>
        </section>

        <section id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>"The event management system made it so easy to participate in events!"</p>
            <p>- Sumukh Phulari</p>
          </div>
          <div className="testimonial">
            <p>"I loved how organized everything was. Great experience!"</p>
            <p>- Omkar Solanke</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="social-media">
          <a href="https://www.instagram.com/jhankaar_official_2025?igsh=MXA3MTYwamkzdG01Nw==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
            <span>Follow Jhankaar 2025</span>
          </a>
          <a href="https://chat.whatsapp.com/KTkkRI8TS1o7G3gIiijCbu" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp fa-2x"></i>
            <span>Join Jhankaar Sports 2025</span>
          </a>
        </div>
        <p>&copy; 2025 MGM's College Of Engineering, Nanded. All rights reserved.</p>
      </footer>

      {/* Fullscreen Modal */}
      {fullscreenImageIndex !== null && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <span className="close-button">×</span>
          <button className="nav-button prev-button" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>←</button>
          <img src={galleryImages[fullscreenImageIndex]} alt="Fullscreen" className="fullscreen-image" onClick={(e) => e.stopPropagation()} />
          <button className="nav-button next-button" onClick={(e) => { e.stopPropagation(); goToNext(); }}>→</button>
        </div>
      )}
    </>
  );
}
