'use client'; // This line is necessary for client-side functionality

import React, { useState } from 'react';

export default function Contact() {
  // State for the form fields and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0], // Extract first name
          lastName: formData.name.split(' ').slice(1).join(' '), // Extract last name
          email: formData.email,
          number: formData.phoneNumber,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Email sent successfully!');
      } else {
        setStatus(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      setStatus(`Failed to send email: ${error.message}`);
    }
  };

  return (
    <section id="contact">
      <div className="form-container">
        <h2 data-aos="fade-down">
          Contact <span>Me</span>
        </h2>
        <form
          className="contact-form"
          onSubmit={handleSubmit} // No action or method attribute; handle submission via JavaScript
          data-aos="zoom-in-up"
        >
          <div id="contact-card" className="contact-input-group row">
            <div className="col-12">
              <div className="input-field">
                <i className="bi bi-person-fill"></i>
                <input
                  className="contact-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-field">
                <i className="bi bi-envelope-fill"></i>
                <input
                  className="contact-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-field">
                <i className="bi bi-telephone-fill"></i>
                <input
                  className="contact-input"
                  type="tel"
                  id="phone-number"
                  name="phoneNumber" // Changed to match state key
                  placeholder="Phone Number"
                  autoComplete="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div id="message-box" className="input-field">
                <i className="bi bi-chat-text-fill"></i>
                <textarea
                  className="contact-input"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Say hello!"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <input
              id="submit-button"
              type="submit"
              className="btn btn-info submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
