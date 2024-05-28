import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence} from "framer-motion";
import AboutSection from "./components/Content/About me/AboutSection.jsx";
import ContactSection from "./components/Content/Contact me/ContactSection.jsx";
import PortfolioSection from "./components/Content/Portfolio/PortfolioSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import HeroArea from "./components/Hero area/HeroArea.jsx";
import CardInfo from "./components/Content/Portfolio/Project Overlay/CardInfo.jsx"




function App() {

  const overlay = useSelector(state => state.overlay.overlay);


  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden"; // Вимкнути скролінг
    } else {
      document.body.style.overflow = "auto"; // Увімкнути скролінг
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  return (
    <Fragment>
      <AnimatePresence>
        {overlay && <CardInfo />}
      </AnimatePresence>
      <Header />
      <HeroArea />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
}

export default App;
