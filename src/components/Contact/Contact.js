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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici le code pour envoyer le message
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-me">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
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
  
  
          <div class="loader">
            <div class="check">
              <span class="check-one"></span>
              <span class="check-two"></span>
            </div>
           </div>
  
      </form>
    </section>
  );
}

export default Contact;