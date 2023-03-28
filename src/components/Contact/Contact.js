import React, { useState } from 'react';
import './ContactElements.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };



  return (
    <section className="contact-me">
      <h1>Contact Me</h1>
      <form  action="https://getform.io/f/449af30d-b4d2-4513-8fec-337092ecf921" method="POST">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <button class="button">Send</button>
      </form>
    </section>
  );
}

export default Contact;