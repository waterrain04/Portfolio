import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import {motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from '../pages/SocialMediaIcons'
import profile from '../images/myprofile2.jpg'
import * as FileSaver from 'file-saver';
import myPDF from '../file/joshua_cvf.pdf';

function handleDownloadClick() {
  FileSaver.saveAs(myPDF, 'myPDF.pdf');
}


const Landing = ({setSelectedPage}) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="home" className='md:flex md:justify-between md:items-center md:h-screen gap-16 py-10'>
      
      {/*IMAGE SECTION */}
      <motion.div          initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition ={{duration: 0.5}}
            variants={{
              hidden:{
                opacity:0,
                x:100
              },
              visible:{opacity:1, x:0}
            }} className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
        {isAboveMediumScreens?(
          <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[600px] before:h-full before:border-2 before:border-yellow before:z-[-1]'>
          <img className='hover:filter saturate-50 hover:saturate-100 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]' src={profile} alt="profile" />
          </div>
        ) : 
        (   
        <img className='rounded-t-[400px] saturation-50 hover:saturation-100 hover:filter hover:scale-105 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]' src={profile} alt="profile" />)}
      </motion.div>

        {/*MAIN SECTION */}

        <div className='z-30 basis-2/5 mt-12 md:mt-32 text-center'>
        {/*HEADING SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition ={{duration: 0.5}}
            variants={{
              hidden:{
                opacity:0,
                x:-50
              },
              visible:{opacity:1, x:0}
            }}
          >
            <p className='text-6xl font-playfair z-10 text-center '>HI, IM JOSH, A FRONTEND DEVELOPER {""}
              {/* <span className='mt-4 xs:relative xs:text-white xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
                GEMENTIZA
              </span> */}
            </p>
  
          </motion.div>

        {/*HEADING SECTION */}

        <motion.div
          className="flex mt-5 justify-center sm:justify-center md:justify-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >


          <AnchorLink
            className="rounded-r-sm py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className=" bg-yellow text-white rounded-sm py-3 px-7 font-semibold
              hover:bg-deep-blue hover:text-white transition duration-500 px-10 text-xl">
              Contact Me
            </div>
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-yellow py-0.5 pr-0.5"
            href="joshua_cv.pdf"
            download="joshua_cv.pdf"
          >
            <div onClick = {handleDownloadClick}className="bg-deep-blue hover:bg-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 text-xl font-playfair">
             <a href="joshua_cv.pdf" download="joshua_cv.pdf">Download CV</a> 
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Landing
