import React from 'react'
import LineGradient from '../pages/LineGradient'
import {useForm } from 'react-hook-form'
import {motion} from 'framer-motion'
import{ useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';


const Result = () =>{
  return(
    <p className='mt-4 text-yellow font-playfair text-xl'> Your Message has been successfully sent. I will contact you soon</p>
  )
}


const Contact = () => {
  const form = useRef();
  const [result,showResult] = useState(false)
  const [email,setEmail] = useState("");
  const [displayEmail,setDisplayEmail] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault();
    if(!displayEmail){
    emailjs.sendForm('service_1tcot4w', 'template_31jexg6', form.current, 'nwjRVc_yslYiw3Bzs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
      displayEmail(false)
    }}
    
    const check = ()=>{
      const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!regEx.test(email)){
          setDisplayEmail(true)
          showResult(false)
      }
      else{
        showResult(true)
        setDisplayEmail(false)
      }}
        


    return (

      <section id="contact" className='py-48'>

        {/*HEADINGS */}
        
        <motion.div
          className='flex justify-center lg:justify-center md:justify-center w-full'
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
          <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-yellow">LET'S GET</span> IN TOUCH
          </p>

          <div className='flex md:justify-end my-5'>
          <LineGradient width="w-full" />
          </div>
          </div>
        </motion.div>

        {/*FORM & IMAGE */}
        <div className='md:flex md:justify-center gap-16 mt-5'>


        <motion.div
          className='basis-1/2 mt-10 md:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
         
         <form 
            className='border-2 border-white p-12 text-center rounded-2xl'
            target="_blank"
            ref={form} onSubmit={sendEmail}
          >
            <input
              className="w-full bg-transparent border-2 border-white font-semibold placeholder-white p-3 rounded-2xl"
              name="fullname"
              type="text"
              placeholder="NAME"
              required

            />

            <input
              className="w-full bg-transparent border-2 border-white font-semibold placeholder-white p-3 mt-5 rounded-2xl"
              name="email"
              type="text"
              placeholder="EMAIL"
              required
              onChange = {(e)=>{
              setEmail(e.target.value)   
             
            }}
            />
            {displayEmail&& (<p className='text-[red] mt-2'>EMAIL ADDRESS INVALID</p>)}

            <textarea
              className="w-full bg-transparent border-2 border-white font-semibold placeholder-white p-3 mt-5 rounded-2xl"
              name="message"
              placeholder="MESSAGE"
              required
              rows="4"
              cols="50"

            />


            <button
              className="p-5 border-2 border-white bg-white font-semibold text-deep-blue mt-5 hover:bg-red hover:border-2 hover:border-white transition duration-500 rounded-2xl hover:bg-transparent hover:text-white"
              type="submit"
              onClick={check}
              
            >
              SEND ME A MESSAGE
            </button>
            <div>
              {result?<Result/> : null}
            </div>
          </form>

        </motion.div>
        </div>
        
      </section>
    )


  }
      
export default Contact
