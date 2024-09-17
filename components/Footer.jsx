import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid footer-content">
        <div className="footer-paragraph">
          <p>&copy; Lucas Franco 2023</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/lucas.franco12" data-tooltip="lucasfranco12" target="_blank"><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/lucas--franco" data-tooltip="Lucas Franco" target="_blank"><i className="bi bi-linkedin"></i></a>
          <a href="tel:+3522741713" data-tooltip="+352-274-1713"><i className="bi bi-telephone"></i></a>
          <a href="mailto:fhl@usf.edu" data-tooltip="fhl@usf.edu"><i className="bi bi-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
}