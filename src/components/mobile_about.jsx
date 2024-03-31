import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Mobile_about({handleAbout}) {
  return (
    <motion.div 
        initial={{x: -600}}
        animate={{x: 0}}
        transition={{duration: 0.5}}
        exit={{x: -600}}
        className='h-[100%] w-[100%] absolute z-20 top-0 left-0 opacity-100 bg-[#200f0f]'>
        <div className="relative flex flex-col items-center">
            <FaArrowAltCircleLeft className='absolute top-5 left-5 text-[white] text-[4vh]' onClick={handleAbout}/>
            <div className='thumbnail mt-5 h-[18vh] w-[30%] border-2 border-white rounded-full'></div>
            <div className='p-4 text-[#aeadad] text-center'>WE ARE a group that provide trendy hair Lorem ipsum shrye uerhrey euroejr ndhryeiw jeywbehjw furhfy jeeurbf nenr
                merne jruheiww wei ejreiw weru lorem ipsum. Lorem ipsom ipsum remlom 
                theu thwqo oeru rrnie orel
            </div>
            <div className='text-[3vh] text-[white] text-center mt-6'>
                Join Thousands of People who Already Trust Us
            </div>
            <button>Get Started Now</button>
        </div>

    </motion.div>
  )
}

export default Mobile_about