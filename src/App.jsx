import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutSection from './components/sections/AboutSection'
import BlogSection from './components/sections/BlogSection'
import HeroSection from './components/sections/HeroSection'
import OfferingSection from './components/sections/OfferingSection'
import PhotoSection from './components/sections/PhotoSection'
import PopularSection from './components/sections/PopularSection'
import './styles/App.css'

function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <OfferingSection />
      <PopularSection />
      <BlogSection isMobileView={isMobileView}/>
      <PhotoSection isMobileView={isMobileView}/>
      <Footer />
    </>
  )
}

export default App
