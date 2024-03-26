import React from 'react'
import { FaHome, FaUser, FaBook, FaImages } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Mobile_nav() {
  const icons = 'text-white text-[3.4vh] hover:text-[4vh]'
  return (
    <div className='h-[11vh] rounded-bl-[45px] p-1 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[45px] border-black w-[100%] flex fixed bottom-0'>
      <div className='grid grid-flow-col items-center justify-around w-[100%] h-[100%] bg-[#282828] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[45px] rounded-bl-[45px]'>
        <Link to='/'><FaHome className={icons}/></Link>
        <Link to='/booking'><FaBook className={icons}/></Link>
        <Link to='/gallery'><FaImages className={icons}/></Link>
        <Link to='/contact'><FaUser className={icons}/></Link>
      </div>
    </div>
  )
}

export default Mobile_nav