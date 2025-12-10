import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import HeroHeader from './components/header/HeroHeader'
import ServicesLanding from './components/servicePage/ServicesLanding'

export default function App() {
  return (
    <>
    <Navbar/>
    <HeroHeader />
    <ServicesLanding />
    
    {/* <Footer/> */}
    </>
  )
}
