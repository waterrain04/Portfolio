import React from 'react'
import LineGradient from '../pages/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai'
import {SiCss3} from 'react-icons/si';
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import {TbBrandFramerMotion} from 'react-icons/tb'
import { FaGitAlt } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className=" pb-24 ">
      {/* HEADER AND IMAGE SECTION */}
      <div className="gap-16 mt-32">
        <motion.div
          className="md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-7xl mb-5 ">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        <p className='font-sans  mt-4 leading-8 text-xl'>
        As a front-end developer, I specialize in HTML, CSS, and JavaScript, with experience in React, Tailwind, Framer Motion, and Git. I possess strong problem-solving and communication skills, allowing me to effectively collaborate with cross-functional teams and clients to deliver high-quality web development work.</p>
        </motion.div>

      </div>

      {/* SKILLS */}
      <div className=" md:flex md:justify-center mt-16 gap-32 text-yellow ">
        {/* EXPERIENCE */} 
        <Marquee direction="left" gradient={false} speed={50} style={{overflow:'hidden'}}>
        <motion.div
          className="md:w-1/3 mt-10 mr-10 hover:scale-110"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <AiFillHtml5 className="mx-auto hover:scale-105" size={120}/>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 mx-auto hover:scale-110 mr-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SiCss3  className="mx-auto hover:scale-105"size={100}/>
        </motion.div>

          {/* INNOVATIVE */}
          <motion.div
          className="md:w-1/3 mt-10 hover:scale-110 mr-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SiJavascript className="mx-auto hover:scale-105" size={100}/>


        </motion.div>
          {/* INNOVATIVE */}
          <motion.div
          className="md:w-1/3 mt-10 hover:scale-110 mr-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaReact className="mx-auto text-yellow hover:scale-105" size={100}/>
        </motion.div>

          {/* INNOVATIVE */}
          <motion.div
          className="md:w-1/3 mt-10 hover:scale-110 mr-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SiTailwindcss className="mx-auto hover:scale-105" size={100}/>
        </motion.div>

          {/* INNOVATIVE */}
          <motion.div
          className="md:w-1/3 mt-10 hover:scale-110 mr-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TbBrandFramerMotion className='mx-auto hover:scale-105' size={100}/>
        </motion.div>

          {/* INNOVATIVE */}
          <motion.div
          className="md:w-1/3 mt-10 hover:scale-110 mr-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaGitAlt className='mx-auto hover:scale-105' size={100}/>
        </motion.div>

        </Marquee>
      </div>
    </section>
  );
};
export default MySkills
