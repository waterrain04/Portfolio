
import { useState, useEffect} from 'react';
import {motion } from 'framer-motion'
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Landing from './components/Landing';
import LineGradient from './pages/LineGradient'
import  MySkills from './components/MySkills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Preloader from './preloader/Preloader'
import { AnimatePresence } from 'framer-motion';
import AboutMe from './components/AboutMe';
function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage,setIsTopOfPage] = useState(true)
  const [loading,setLoading] = useState(false)

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const variants = {
    active: { opacity: 1, y: 0 },
    inactive: { opacity: 0, y: 50 }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect (()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])


  return (
    <div className="App bg-deep-bl">  
    {  

      loading? 
        (
            <Preloader/>
        )
      :
        <>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
          <div className="w-5/6 mx-auto md:h-screen">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
          <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>
                
        {/* <LineGradient /> */}
        <div className="w-5/6 mx-auto md:h-full ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("about")}
          >
          <AboutMe />
          </motion.div> 
        </div>
        {/* <LineGradient /> */}
        <div className="w-5/6 mx-auto md:h-full ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
          <MySkills />
          </motion.div>
        </div>
        {/* <LineGradient /> */}
        <div className="w-5/6 mx-auto">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
          >
            <Projects />
          </motion.div>
        </div>
        {/* <LineGradient /> */}
        <div className="w-5/6 mx-auto md:h-full">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div>
        </div>
        <Footer />
        </>
        
}
    </div>
);
}

export default App;
