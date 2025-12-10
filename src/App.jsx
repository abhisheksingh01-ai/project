import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HeroHeader from "./components/header/HeroHeader";
import ServicesLanding from "./components/services/ServicesLanding";
import RecentWork from "./components/works/RecentWork"
import ContactSection from "./components/contact/ContactSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroHeader />
      <ServicesLanding />
      <RecentWork />
      <ContactSection />
      <Footer />
    </>
  );
}
