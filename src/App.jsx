import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import HeroHeader from './components/header/HeroHeader'
import ServicesLanding from './components/servicePage/ServicesLanding'
import RecentWork from './components/recentClientWork/RecentWork'
import ContactSection from './components/contactFormHome/ContactSection'
// import PortfolioCarousel from './components/portfolioHome/PortfolioCarousel'
import PortfolioLanding from './components/portfolioHome/PortfolioLanding'

export default function App() {
  return (
    <>
    <Navbar/>
    <HeroHeader />
    <ServicesLanding />
    <RecentWork />
    {/* <PortfolioCarousel /> */}
    <PortfolioLanding />
    < ContactSection />   
    <Footer />
    
    {/* <Footer/> */}
    </>
  )
}
