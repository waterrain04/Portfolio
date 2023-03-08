import React from 'react'
// import './preloader.css'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useEffect,useState } from 'react'

const Preloader = () => {
  const [loading,setLoading] = useState(false)


  useEffect (()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },500)
  },[])

  return (
     <AnimatePresence>
      {loading&&(
        <motion.div 
        exit={{y:1000,duration:1}}
        className="w-full h-screen bg-yellow flex items-center justify-center overflow-hidden">
          <motion.div className='border border-black flex p-4' exit={{y:-1000, duration:.2}}>
            <div className='text-black text-5xl font-bold font-playfair'>J</div>
            <div className='text-black text-5xl font-bold font-playfair'>G</div>
            </motion.div>
        </motion.div>  
      
      
      )}
      </AnimatePresence>
  )
}

export default Preloader
     
     
    //  <div className='container'>
    //   <motion.div className="preloader w-50%" 
    //   initial={{y:-100,opacity:0}}
    //   animate={{y:0, opacity:1}}
    //   exit={{y:1000,duration:2}}
    //   > 
    //     <div className="text-container">
    //       <span>J</span>
    //     </div>
    //   </motion.div>

    //   <motion.div className="preloader w-50%" 
    //   initial={{y:-100,opacity:0}}
    //   animate={{y:0, opacity:1}}
    //   exit={{y:1000,duration:2}}
    //   > 
    //     <div className="text-container">
    //       <span>G</span>
    //     </div>
    //   </motion.div>
    //         </div>