import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import About from './About/About'
import WhyChoose from './WhyChoose/WhyChoose'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default Home

