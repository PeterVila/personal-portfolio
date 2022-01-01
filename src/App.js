import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from "./components/Projects/Projects";
import Technical from "./components/Technical/Technical";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Technical />
      <Tools />
      <Contact />
    </>
  );
}

export default App;
