import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import './ContactMe.css';

const ContactMe = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const EMAIL_SERVICE_ID = 'service_z65wd5e';
  const EMAIL_TEMPLATE_ID = 'template_s1tp93a';
  const EMAIL_PUBLIC_KEY = '1u4nRdguNGigzZ9Eq';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'defnemelis8@outlook.com',
        },
        EMAIL_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        onClose();
        setStatus('');
      }, 3000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

 

  return (
    <div className={`contact-popup ${isOpen ? 'open' : ''}`} onClick={handleBackgroundClick}>
      <div className="contact-content">
        <button className="close-btn" onClick={onClose}>
          <X size={24} /> </button>
        <h2>Get in Touch!</h2>

        {status === 'success' && <div className="status-message success">✅ Message sent successfully!</div>}
        {status === 'error' && <div className="status-message error">❌ Message failed to send. Please try again.</div>}

       
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
