import React from 'react'
import LineGradient from "../pages/LineGradient";
import { motion } from "framer-motion";
import * as FileSaver from 'file-saver';
import myPDF from '../file/Latest_cv.pdf';
function handleDownloadClick() {
  FileSaver.saveAs(myPDF, 'myPDF.pdf');
}



const AboutMe = () => {
  return (
    <div>
      <section   id="about" className="my-32 md:py-32 lg:py-32 xl:py-32 2xl:py-32">
      {/* HEADING */}
      <motion.div
        className="md:w-2/3 md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-7xl mb-5 text-white">
          ABOUT <span className='font-playfair font-semibold text-yellow'>ME</span>
        </p>
        <LineGradient width=" w-2/5" />
          <p className="mt-10 font-sans text-xl">
            Hi, I'm Joshua Gementiza, a web developer with a passion for building innovative, user-friendly web experiences. I specialize in front-end development, with expertise in HTML, CSS, and JavaScript, as well as experience working with popular front-end frameworks and libraries like React and Framer Motion.
            <br />
            <br />
            Beyond web development, I am also active in the exciting world of Web 3 and blockchain technology. I am fascinated by the potential of decentralized, secure, and transparent systems and am always looking for ways to integrate these technologies into my work.
            <br />
            <br />
            Whether it's building a new website, creating a Web 3 application, or exploring the latest blockchain developments, I am always up for a challenge and excited to push the boundaries of what's possible in the world of web development
          </p>
      </motion.div>
        <div className='md:w-2/3 flex justify-center mt-4'>
          <button  onClick = {handleDownloadClick} className='bg-transparent py-5 px-10 border-yellow border-2 text-xl font-semibold text-yellow hover:bg-yellow hover:text-white transition duration-500'>DOWNLOAD CV</button>
        </div>


    </section>
    </div>
  )
}

export default AboutMe
