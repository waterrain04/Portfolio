import React from 'react'
import{FaLinkedin, FaFacebookSquare,FaGooglePlusSquare,FaGithubSquare} from 'react-icons/fa'

const SocialMediaIcons = () => {
  return (
    <div>
      <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a 
        href="https://www.linkedin.com/in/joshua-gementiza-699483252/" 
        className='hover:opacity-50 transition duration-500' 
        target="_blank"
        rel="noreferrer"
        >
          <FaLinkedin className='text-white' size={30}/>
        </a>
        <a 
        href="https://www.facebook.com/joshua.gementiza.14" 
        className='hover:opacity-50 transition duration-500' 
        target="_blank"
        rel="noreferrer"
        >
          <FaFacebookSquare className='text-white' size={30}/>
        </a>
        <a 
        href="https://github.com/waterrain04" 
        className='hover:opacity-50 transition duration-500' 
        target="_blank"
        rel="noreferrer"
        >
          <FaGithubSquare className='text-white' size={30}/>
        </a>
      </div>
    </div>
  )
}

export default SocialMediaIcons
