import React from 'react'
import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import OurServicesSection from './components/OurServicesSection'
import ExclusivePartnersSection from './components/ExclusivePartnersSection'
import ClientTestimonialsSection from './components/ClientTestimonialsSection'
import BlogAndArticlesSection from './components/BlogAndArticlesSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <ExclusivePartnersSection />
      <ClientTestimonialsSection />
      <BlogAndArticlesSection />
    </>
  )
}

export default Home