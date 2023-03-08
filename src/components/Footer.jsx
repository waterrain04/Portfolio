import React from 'react'
import SocialMediaIcons from '../pages/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className='h-[auto] bg-transparent'>
      <div className='w-5/6 mx-auto flex items-center justify-between gap-4'>
        <SocialMediaIcons/>
        <p className='font-playfair font-semibold text-2xl'>JOSHUA GEMENTIZA</p>
        <p className='font-playfair font-semibold text-1xl'>&copy;2022. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
