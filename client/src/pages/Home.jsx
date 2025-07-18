import React from 'react'
import Header from '../components/Header';
import Step from '../components/Step';
import Description from '../components/Description';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';

const Home = () => {
  return (
    <div>
      <Header/>
      <Step/>
      <Description/>
      <Testimonials/>
      <Cta/>
    </div>
  )
}

export default Home ;