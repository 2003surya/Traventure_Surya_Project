import React from 'react';
import { FaQuestionCircle, FaEnvelope, FaPhone, FaComments, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/SupportPage.css"

const SupportPage = () => {
  const faqs = [
    {
      question: "How do I create an adventure?",
      answer: "Navigate to the 'Create Adventure' page, fill in the details, and submit. Your adventure will be reviewed and published within 24 hours."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, bookings can be cancelled up to 48 hours before the adventure date. Please check the specific adventure's cancellation policy."
    },
    {
      question: "How do payments work?",
      answer: "We use secure payment processing. You'll be charged when you book, and the guide receives payment after the adventure is completed."
    },
    {
      question: "What safety measures are in place?",
      answer: "All guides are vetted and adventures are reviewed for safety. We recommend reviewing the safety information for each adventure."
    }
  ];

  const navigate = useNavigate();
  return (


    <div className="support-page">
      
      <div className="backBtn">
        <button onClick={()=>{navigate("/")}}>Go Back</button>
      </div>
      <header className="support-header">
        <h1><FaQuestionCircle /> Traventure Support</h1>
        <p>We're here to help you with any questions or issues you may have.</p>
      </header>

      <div className="support-container">
        <section className="support-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <Link to="/faq" className="btn btn-primary">View Full FAQ</Link>
        </section>

        <section className="support-section contact-section">
          <h2>Contact Us</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <FaEnvelope className="contact-icon" />
              <h3>Email Support</h3>
              <p>support@outtraventure.com</p>
              <p>Typically responds within 12 hours</p>
              <a href="mailto:sp5437029@gmail.com" className="btn btn-outline">Send Email</a>
            </div>

            <div className="contact-method">
              <FaPhone className="contact-icon" />
              <h3>Phone Support</h3>
              <p>+91 6379227084</p>
              <p>Monday-Friday, 9AM-5PM EST</p>
              <a href="tel:+91 6379227084" className="btn btn-outline">Call Now</a>
            </div>

            <div className="contact-method">
              <FaComments className="contact-icon" />
              <h3>Live Chat</h3>
              <p>Available 24/7 for urgent inquiries</p>
              <p>Look for the chat icon in the bottom right</p>
              <button className="btn btn-outline" onClick={() => window.$crisp.push(['do', 'chat:show'])}>Start Chat</button>
            </div>
          </div>
        </section>

        <section className="support-section">
          <h2>Visit Our Office</h2>
          <div className="office-info">
            <div className="office-details">
              <p><FaMapMarkerAlt /> 4A Surya House, MNC Road, Madurai</p>
              <p><FaClock /> Monday-Friday: 9:00 AM - 6:00 PM</p>
              <p><FaClock /> Saturday: 10:00 AM - 4:00 PM</p>
              <p><FaClock /> Sunday: Closed</p>
              <a 
                href="https://maps.google.com/?q=123+Adventure+Lane+Boulder+CO+80301" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </div>
            <div className="office-map">
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2153.620736566509!2d78.129901331108!3d9.920223636770555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749566365257!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="support-section">
          <h2>Helpful Resources</h2>
          <div className="resources-grid">
            <Link to="/guides/how-to-book" className="resource-card">
              <h3>How to Book an Adventure</h3>
              <p>Step-by-step guide to finding and booking your perfect adventure</p>
            </Link>
            <Link to="/guides/safety" className="resource-card">
              <h3>Safety Guidelines</h3>
              <p>Important safety information for all adventurers</p>
            </Link>
            <Link to="/guides/becoming-a-guide" className="resource-card">
              <h3>Become a Guide</h3>
              <p>Learn how to share your adventures with others</p>
            </Link>
            <Link to="/community" className="resource-card">
              <h3>Community Forum</h3>
              <p>Connect with other adventurers and share experiences</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;