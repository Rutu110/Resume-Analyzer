import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="ra__footer section__padding">
    <div className="ra__footer-heading">
      <h1 className="gradient__text">Do you want to step in to world of AI and reduce your workload.</h1>
    </div>

    <div className="ra__footer-btn">
      <p>Get Started</p>
    </div>

    <div className="ra__footer-links">
      <div className="ra__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>RAD 444 471 474 BVMIT, <br /> All Rights Reserved</p>
      </div>
      <div className="ra__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ra__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ra__footer-links_div">
        <h4>Get in touch</h4>
        <p>RAD 444 471 474 BVMIT</p>
        <p>8160611611</p>
        <p>info@project.com</p>
      </div>
    </div>

    <div className="ra__footer-copyright">
      <p>@2023 R.A. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
