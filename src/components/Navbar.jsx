import React from 'react'
import {useState,useEffect} from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Link = ({page,selectedPage,setSelectedPage})=>{
  const lowerCasePage = page.toLowerCase();
  return(
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : "" }
      hover:text-yellow transition duration-500
      `}
      href={`#${lowerCasePage}`}
      onClick={()=> setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}) => {
      const [isMenuToggled, setIsMenuToggled] = useState(false);
      const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
      const navbarBackground = isTopOfPage ? "" : "bg-[#2f2940] ";
      console.log(selectedPage)
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 ${isTopOfPage? "py-4": "py-0"} transition ease-in duration-500`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-3xl font-bold border border-yellow p-4'><a href="#home"> JG</a></h4>

        {/*DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

          </div>
        ): (<button className='rounded-full bg-red p-2' onClick={()=> setIsMenuToggled(!isMenuToggled)}><GiHamburgerMenu size={30}></GiHamburgerMenu></button>)}


        {/* MOBILE VIEW */}

        {!isAboveSmallScreens && isMenuToggled &&(
          <div className='fixed right-0 bottom-0 h-full bg-red w-[300px]'>
            <div className='flex justify-end p-12'>
              <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <AiOutlineClose size={30}/>
              </button>
            </div>

        {/* Menu Items */}

          <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>

          <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
                      <Link
              page="about"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
    
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

          </div>

          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
