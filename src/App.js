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
import NavMenu from "./components/Header/NavMenu.jsx";



function App() {

  const overlayProject = useSelector(state => state.overlay.projectOverlay);
  const overlayNavMenu = useSelector(state => state.overlay.navMenuOverlay);


  useEffect(() => {
    if (overlayProject || overlayNavMenu) {
      document.body.style.overflow = "hidden"; // Вимкнути скролінг
    } else {
      document.body.style.overflow = "auto"; // Увімкнути скролінг
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlayProject, overlayNavMenu]);

  return (
    <Fragment>
      <AnimatePresence>
        {overlayNavMenu && <NavMenu/> }
        {overlayProject && <CardInfo />}
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
