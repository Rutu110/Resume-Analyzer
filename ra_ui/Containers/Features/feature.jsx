import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';


const featuresData = [
  {
    title: '1.Login OR Signup:',
    text: 'To use any features or function of this webapp first of all we have to register and login.',
  },
  {
    title: '2.Create Resume:',
    text: 'If user is jobseeker then they can make resume using this webapp and download it in pdf format.',
  },
  {
    title: '3.Get Suggestions:',
    text: 'If user is jobseeker then they can get suggestions on which skills, courses or certificate they can mention in their resumes to make it better.',
  },
  {
    title: '4.Get Analysis:',
    text: 'If user is hiring team of the company then they can use this webapp as a tool of scanner which can give best output from input set of resume.',
  },
];

const features = () => {
  return (
    <div className="ra__features section__padding" id="features">
    <div className="ra__features-heading">
      <h1 className="gradient__text">These are the steps for users to get guidance according to their usecase.</h1>
      <p>Register yourself to Get Started...</p>
    </div>
    <div className="ra__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default features
