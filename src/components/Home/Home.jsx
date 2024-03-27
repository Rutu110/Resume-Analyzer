import React from 'react';
import { Footer, Possibility, Features, WhatRA, Header } from "../../containers";
import { Cta } from "../../components";
import './Home.css';

const Home = () => {
  return (
    <div>
        <div className="gradient__bg">
         <Header />
        </div>
        <WhatRA />
        <Features />
        <Possibility />
        <Cta />
        <Footer />
    </div>
  )
}

export default Home
