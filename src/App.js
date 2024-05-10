import { Fragment, useEffect } from "react";
import AboutMe from "./components/Content/About me/AboutSection.jsx";
import ContactSection from "./components/Content/Contact me/ContactSection.jsx";
import PortfolioSection from "./components/Content/Portfolio/PortfolioSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import HeroArea from "./components/Hero area/HeroArea.jsx";
import CardInfo from "./components/Content/Portfolio/CardInfo.jsx"
import { useSelector } from "react-redux";



function App() {
  const overlay = useSelector(state => state.overlay.overlay)
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
      {overlay && <CardInfo/>}
      <Header/>
      <HeroArea/>
      <AboutMe/>
      <PortfolioSection/>
      <ContactSection/>
      <Footer/>
    </Fragment>
  );
}

export default App;
