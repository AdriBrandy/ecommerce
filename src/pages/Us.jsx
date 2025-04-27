import React from 'react'
import Navigation from '../components/Navigation'
import OurWork from '../components/us/OurWork'
import Incentives from '../components/incentives/Incentives'
import Newsletter from '../components/us/Newsletter'
import Footer from '../components/Footer'
import Testimonials from '../components/us/Testimonials'
const Us = () => {
  return (
    <>
        <Navigation/>
        <Incentives/>
        <OurWork/>
        <Testimonials/>
        <Newsletter />
        <Footer/>
    </>
  )
}

export default Us