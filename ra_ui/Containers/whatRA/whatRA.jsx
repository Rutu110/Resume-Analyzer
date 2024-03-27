import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatRA.css'

const WhatRA = () => {
  return (
    <div className="ra__whatra section__margin" id="wra">
    <div className="ra__whatra-feature">
      <Feature title="What is RA" text="Resume Analyzer is made using natural language processing which is concept of artificial intelligence it will find or suggest keyword according to your usecase.Means it will provide suggestions to jobseeker and also finds best match for the hiring team." />
    </div>
    <div className="ra__whatra-heading">
      <h1 className="gradient__text">This tool is useful beyond our imagination.</h1>
      <p>Explore the Features.</p>
    </div>
    <div className="ra__whatra-container">
      <Feature title="Create" text="We have one functionality which can make user's resume by providing input." />
      <Feature title="Get Suggestions" text="This suggestions can be given to jobseeker who wnat to get better their resumes for increase probability to get hire." />
      <Feature title="Get Analysis" text="The hiring team of any company can use this feature to reduce their workloads and find best match by only few clicks." />
    </div>
  </div>
  )
}

export default WhatRA
