import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="ra__possibility section__padding" id="possibility">
    <div className="ra__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="ra__possibility-content">
      <h4>Concept Of Artificial Intelligence:Natural Language Processing </h4>
      <h1 className="gradient__text">The possibilities in domain of NLP are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Register yourself to Get Started</h4>
    </div>
  </div>
  )
}

export default Possibility
