import React from 'react'
import LineGradient from '../pages/LineGradient'
import {motion} from 'framer-motion' 
import {BiLinkAlt} from 'react-icons/bi'
import {FaGithub} from 'react-icons/fa'
import retro from '../images/retro-game.png'
import defi from '../images/mydefi.png';
import movie from '../images/movie_pic.png';
import grocery from '../images/grocerylist.png'

  const container = {
    hidden: {

    },
    visible:{
      transition: { 
      staggerChildren: 0.2
      }
    }
  }

  const projectVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale:1
    }
  }

  const Project = ({title,src,description,link1,link2}) =>{
      const overlayStyle =`absolute h-full w-full opacity-0 hover:opacity-100  bg-grey z-30 flex flex-col justify-center items-center overflow-hidden text-center p-16 text-deep-blue transition-opacity duration-300 ease-in`
      return(
        <motion.div variants={projectVariant} className="relative">
          <div className={overlayStyle}>
            <p className='text-xl font-semibold font-playfair text-black'>{title}</p>
            <p className='font-playfair text-sm'>{description}</p>
            <p></p>
            <div className='mt-4'>
            <button className='mr-4'><a href={link1}  target="_blank"><BiLinkAlt size={30}/></a></button>
            <button><a href={link2} target="_blank"><FaGithub size={30}/></a></button>
            </div>

          </div>
          <img className=""src={src} alt="" />

        </motion.div>
      )
  }

const Projects = () => {
  return (

      <section id="projects" className="my-48">
        {/* HEADINGS */}
        <motion.div
          className="md:w-2/4 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
          <LineGradient width="w-1/3 mb-4" />
          </div>
          </div>
          {/* <p className="mt-10 mb-10 font-playfair font-semibold">
          In my portfolio, you will find a collection of projects that showcase my skills as a front-end developer. Each project demonstrates my proficiency in HTML, CSS, and JavaScript, as well as my ability to work with popular front-end frameworks like React and libraries like Framer Motion. Additionally, each project highlights my attention to detail and commitment to creating beautiful, user-friendly web experiences. From single-page applications to complex web applications, my portfolio projects demonstrate my versatility and creativity as a front-end developer.
          </p> */}
        </motion.div>
        
        {/* PROJECTS */}
          
        <div className='flex justify-center'>
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/*ROW 1 */}
          <div
            className='flex justify-center text-center items-center p-10 bg-transparent border-2 border-yellow  text-2xl font-playfair font-semibold'
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="RETRO GAME" src={retro} link1="https://waterrain04.github.io/myretro-game/" link2="https://github.com/waterrain04/myretro-game" description="Welcome to a website dedicated to the world of retro gaming, where classic games from the past come back to life in a modern, web-based format! Using the power of JavaScript, this website offers a unique and immersive gaming experience that will transport you back to the days of pixelated graphics and 8-bit sound."/>
          <Project title="DEFI LANDING PAGE" src={defi} link1="https://waterrain04.github.io/landing-defi/" link2="https://github.com/waterrain04/landing-defi"description="Built using the popular frontend frameworks of Tailwind and React, our website is optimized for performance and responsiveness, ensuring that it looks great and works seamlessly across all devices, from desktops to smartphones.

" />
          {/*ROW2 */}
          <Project  title="MOVIE APP" src={movie} link1="https://chat-talk.onrender.com/" link2="https://github.com/waterrain04/mern-chat-talk" description="'Chat-Talk' is a real-time chat application built with the MERN stack and socket.io, enabling instant messaging and seamless communication between users."/>
          <Project title="GROCERY LIST" src={grocery} link1="https://waterrain04.github.io/Grocery/" link2="https://github.com/waterrain04/Grocery" description="A grocery list application that allows users to add, delete, and search for items. It was created using React and styled with Tailwind CSS."/>
          <div
            className='flex justify-center text-center items-center p-10 bg-transparent border-2 border-yellow text-2xl font-playfair font-semibold'
          >
            SMOOTH USER EXPERIENCE
          </div>

          </motion.div>
        </div>
      </section>
  )
}

export default Projects
