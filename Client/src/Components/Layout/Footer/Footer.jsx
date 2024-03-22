import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus rutrum mi.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Main Street, City</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
