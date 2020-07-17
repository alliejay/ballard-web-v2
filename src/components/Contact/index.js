import React from 'react';
import Demo from '../Form/index.js';
import './styles.scss';

const Contact = () => {
  return (
    <div>
    <div className="contact">
      <h1>Contact Us</h1>
      <h3>We'd love to hear from you.</h3>
    </div>
      <br />< br/>
      <div className="contact-form">
        <Demo />
      </div>
      <br />< br/>
      <h5 className="contact">tel: 866.424.0500</h5>
      <h5 className="contact">fax: 775.248.5155</h5>
      <h5 className="contact">email: service@motiontrendz.com</h5>
    </div>
  )
};

export default Contact;