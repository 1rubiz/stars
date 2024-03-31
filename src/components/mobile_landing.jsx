import React, {useState} from 'react'
import landing from '../assets/collage3.JPG'
import Mobile_about from './mobile_about'

function Mobile_landing() {
  const [about, setAbout] = useState(false);
  const handleAbout = ()=>{
    setAbout(!about);
  }

  return (
    <div className='max-w-[100%] overflow-hidden relative'>
        {
          about && (<Mobile_about handleAbout={handleAbout}/>)
        }
        <div className='h-[76svh] w-[190%]'>
            <img src={landing} alt='' className='h-[100%] opacity-30'/>
        </div>
        <div className='absolute top-8 left-2 text-[8vh] text-[white] font-serif'>
          FRANK<span className='text-[red]'>STARS</span>
          <p className='text-[4vh]'>We will make you stylish!</p>
          <p className='text-[2.85vh] font-sans mt-2'>
             Lorem ipsum shrye uerhrey euroejr ndhryeiw jeywbehjw furhfy jeeurbf nenr
            merne jruheiww wei ejreiw weru lorem ipsum. Lorem ipsom ipsum remlom 
            theu thwqo oeru rrnie orel
          </p>
          <div className='w-[100%] mt-5 flex flex-col gap-5 justify-evenly'>
            <button className='w-[36%] text-[3vh] text-black' onClick={handleAbout}>About Us</button>
            <button className='w-[70%] text-[3vh] text-[red]'>Book Appointment</button>
          </div>
        </div>
    </div>
  )
}

export default Mobile_landing