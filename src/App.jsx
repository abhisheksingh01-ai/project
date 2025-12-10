import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HeroHeader from "./components/header/HeroHeader";
import ServicesLanding from "./components/servicePage/ServicesLanding";
import RecentWork from "./components/recentClientWork/RecentWork";
import ContactSection from "./components/contactFormHome/ContactSection";
import PortfolioLanding from "./components/portfolioHome/PortfolioLanding";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroHeader />
      <ServicesLanding />
      <RecentWork />
      <PortfolioLanding />
      <ContactSection />
      <Footer />
    </>
  );
}
