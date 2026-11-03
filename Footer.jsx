import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <a href="#" className="footer-logo">
              TRIPZAP<span>.</span>
            </a>

            <p>
              Discover the beauty of the ocean and experience unforgettable
              journeys with our luxury yacht rental services.
            </p>

            <div className="footer-social">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#contact">Destinations</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#fleet">Yacht Rental</a></li>
              <li><a href="#fleet">Private Tours</a></li>
              <li><a href="#fleet">Sea Adventure</a></li>
              <li><a href="#fleet">Luxury Trips</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt"></i>
                Jakarta, Indonesia
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                info@tripzap.com
              </li>
              <li>
                <i className="bi bi-telephone"></i>
                +62 812 3456 7890
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Tripzap. All Rights Reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}