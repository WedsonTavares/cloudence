import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import About from './About/About'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <About />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default Home

