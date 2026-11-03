
import React from "react";

const yachts = [
  {
    name: "Luxury Yacht",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800",
    price: "$1,200",
    type: "Luxury",
  },
  {
    name: "Ocean Yacht",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    price: "$950",
    type: "Premium",
  },
  {
    name: "Sea Adventure",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    price: "$750",
    type: "Standard",
  },
];

const destinations = [
  {
    name: "Caribbean Islands",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
  },
  {
    name: "Mediterranean",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
  },
];

function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="section-title text-center">
      <span>{subtitle}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Sections() {
  return (
    <>
      {/* ABOUT */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000"
                  alt="Yacht on the ocean"
                />
                <div className="experience-box">
                  <h3>15+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="section-label">ABOUT TRIPZAP</span>
                <h2>
                  Discover the Beauty of the Ocean with Our Luxury Yachts
                </h2>
                <p>
                  Experience unforgettable moments on the water. We provide
                  premium yacht rental services designed to make every journey
                  comfortable, relaxing, and memorable.
                </p>

                <div className="about-list">
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Professional Crew
                  </div>
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Luxury Yacht Collection
                  </div>
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Personalized Experiences
                  </div>
                </div>

                <a href="#fleet" className="btn-main">
                  Discover More <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="welcome-section">
        <div className="welcome-overlay">
          <div className="container text-center">
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Explore the World Beyond the Shore</h2>
            <p>
              Create beautiful memories and discover breathtaking destinations
              with Tripzap.
            </p>
            <a href="#fleet" className="btn-light-custom">
              Explore Our Fleet
            </a>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="fleet-section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="OUR COLLECTION"
            title="Explore Our Yacht Fleet"
            description="Find the perfect yacht for your next unforgettable adventure."
          />

          <div className="row g-4">
            {yachts.map((yacht, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="yacht-card">
                  <div className="yacht-image">
                    <img src={yacht.image} alt={yacht.name} />
                    <span>{yacht.type}</span>
                  </div>

                  <div className="yacht-info">
                    <h3>{yacht.name}</h3>
                    <div className="yacht-details">
                      <span>
                        <i className="bi bi-people"></i> 8 Guests
                      </span>
                      <span>
                        <i className="bi bi-water"></i> Luxury
                      </span>
                    </div>

                    <div className="yacht-bottom">
                      <p>
                        From <strong>{yacht.price}</strong> / day
                      </p>
                      <a href="#contact">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span>EXCLUSIVE EXPERIENCE</span>
              <h2>Make Your Next Vacation Truly Special</h2>
              <p>
                Enjoy the freedom of the sea with our exclusive yacht rental
                packages.
              </p>
            </div>

            <div className="col-lg-5 text-lg-end">
              <a href="#contact" className="btn-main">
                Book Your Trip <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="destination-section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="TRAVEL WITH US"
            title="Popular Destinations"
            description="Discover some of the most beautiful places around the world."
          />

          <div className="row g-4">
            {destinations.map((destination, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="destination-card">
                  <img src={destination.image} alt={destination.name} />
                  <div className="destination-overlay">
                    <h3>{destination.name}</h3>
                    <a href="#contact">
                      Explore <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="WHY CHOOSE US"
            title="The Best Way to Experience the Sea"
          />

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-card">
                <i className="bi bi-sailboat"></i>
                <h3>Luxury Fleet</h3>
                <p>
                  Enjoy our carefully selected collection of premium yachts.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card">
                <i className="bi bi-person-check"></i>
                <h3>Expert Crew</h3>
                <p>
                  Our experienced crew makes your journey safe and enjoyable.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card">
                <i className="bi bi-compass"></i>
                <h3>Unique Routes</h3>
                <p>
                  Discover amazing destinations and hidden coastal treasures.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card">
                <i className="bi bi-headset"></i>
                <h3>24/7 Support</h3>
                <p>
                  Our team is always ready to help you plan your adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="container text-center">
          <span>TESTIMONIALS</span>
          <h2>What Our Customers Say</h2>

          <div className="testimonial-content">
            <i className="bi bi-quote"></i>
            <p>
              "An amazing experience from start to finish. The yacht was
              beautiful, the crew was professional, and the views were
              unforgettable."
            </p>
            <h4>Jessica Williams</h4>
            <small>Happy Customer</small>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="OUR TEAM"
            title="Meet Our Professionals"
          />

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="team-card">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700"
                  alt="Team member"
                />
                <div>
                  <h3>Michael Anderson</h3>
                  <p>Yacht Captain</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="team-card">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700"
                  alt="Team member"
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <p>Travel Consultant</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="team-card">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700"
                  alt="Team member"
                />
                <div>
                  <h3>David Miller</h3>
                  <p>Customer Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="LATEST NEWS"
            title="Travel Inspiration"
          />

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <img
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800"
                  alt="Travel inspiration"
                />
                <div className="blog-info">
                  <small>TRAVEL GUIDE</small>
                  <h3>Discover the Most Beautiful Coastal Destinations</h3>
                  <a href="#contact">
                    Read More <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
                  alt="Mountain landscape"
                />
                <div className="blog-info">
                  <small>TRAVEL TIPS</small>
                  <h3>How to Plan Your Perfect Summer Vacation</h3>
                  <a href="#contact">
                    Read More <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <img
                  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800"
                  alt="Ocean waves"
                />
                <div className="blog-info">
                  <small>ADVENTURE</small>
                  <h3>Experience the Freedom of Sailing Across the Ocean</h3>
                  <a href="#contact">
                    Read More <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container text-center">
          <span>READY FOR AN ADVENTURE?</span>
          <h2>Your Dream Journey Starts with Tripzap</h2>
          <p>
            Let us help you create an unforgettable experience on the water.
          </p>
          <a href="mailto:info@tripzap.com" className="btn-light-custom">
            Contact Us <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </section>
    </>
  );
}