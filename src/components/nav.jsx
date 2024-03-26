import React, { useState } from 'react'
import { FaBars, FaHome, FaUser, FaBook, FaImages } from 'react-icons/fa'
import {motion} from 'framer-motion'
import logo from '../assets/logo.JPG'

function Nav() {
    const [links, setLinks] = useState(false);
    const handleLinks = ()=>{
        setLinks(!links);
    }
    const button = 'w-[150px] flex justify-center items-center gap-3'
  return (
    <div>
        <img src={logo} alt='' className='h-[12svh] absolute top-2 left-2'/>
        <div className='fixed top-8 right-8'>
            <FaBars onClick={handleLinks} className='text-[3.4svh] hover:text-[4vh] text-white'/>    
        </div>
        {
            links && (
                <div className='fixed top-[14svh] right-0 bg-black w-[100%] h-[75svh] z-10 flex flex-col gap-3'>
                    <motion.button 
                        initial={{x: 600}}
                        animate={{x: 0}}
                        exit={{x: 100}}
                    className={`${button}`}><FaHome/> ABOUT</motion.button>
                    <motion.button 
                        initial={{x: 600}}
                        animate={{x: 0}}
                        exit={{x: 100}}
                    className={`${button} ml-[20%]`}><FaBook/> BOOKING</motion.button>
                    <motion.button 
                        initial={{x: 600}}
                        animate={{x: 0}}
                        exit={{x: 100}}
                    className={`${button} ml-[40%]`}><FaImages/>GALLERY</motion.button>
                    <motion.button 
                        initial={{x: 600}}
                        animate={{x: 0}}
                        exit={{x: 100}}
                    className={`${button} ml-[60%]`}><FaUser/> CONTACT</motion.button>
                </div>
            )
        }
    </div>
  )
}

export default Nav