import AboutMe from "./components/Content/About me/About.jsx";
import ContactSection from "./components/Content/Contact me/ContactSection.jsx";
import PortfolioSection from "./components/Content/Portfolio/Portfolio.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import HeroArea from "./components/Hero area/HeroArea.jsx";
import Light from "./UI/Light.jsx";



import {motion, useScroll, useTransform} from 'framer-motion';

function App() {
  const {scrollY} = useScroll();
  const yLine = useTransform(scrollY, [0, 100], [0, 200]);
  const opacityLine = useTransform(scrollY, [0, 50, 70, 100], [1, 0.8,  0.5, 0]);

  return (
    <div>
      <motion.div className='line blue' style={{y: yLine, opacity: opacityLine}}/>
      <Header/>
      <Light color="blue"/>
      <HeroArea/>
      <hr className='line purple'/>
      <Light color="purple"/>
      <AboutMe/>
      <hr className='line yellow'/>
      <Light color="yellow"/>
      <PortfolioSection/>
      <hr className='line turquoise'/>
      <Light color="turquoise"/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
