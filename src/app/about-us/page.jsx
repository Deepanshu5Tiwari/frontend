'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import AutoSlideshow from '../slider/page';

const About = () => {

useEffect(() => {
  AOS.init({duration:1200})
})

  return (
    <div>
      <div
      className='min-h-70 fill bg-cover' style={{ 
      backgroundImage: `url("https://cdn.wallpapersafari.com/60/47/tKyaF2.png")` 
    }}>
        <h1 className='text-white font-bold text-7xl text-center pt-25 pb-5'>About Us</h1>
        
        <p className='text-white font-bold text-xl text-center'>"Enhance your meetings with our Google Meet Brief Extension — automatically capturing key points, action items, and discussions for easy reference and follow-up."</p>
      </div>


          <div className='mt-10 '><AutoSlideshow/></div>

       


       <div className='grid grid-cols-4 mt-120'>

        <div className='col-span-2 ml-20 '>
            <div className='col-span-1 '><img className='rounded-lg  h-full ' src="https://b2729162.smushcdn.com/2729162/wp-content/uploads/2024/04/meeting-notes-1024x684.jpg?lossy=1&strip=1&webp=1" alt="" />
            </div>
            <div className=''><img className=' rounded-lg shadow-lg mx-auto w-50 h-50  -translate-18' data-aos="fade-up" src="https://st1.techlusive.in/wp-content/uploads/2024/08/Goole-Meet.jpg" alt="" /></div>
            

        </div>

        <div className='col-span-2'>
           
           <div className=' rounded-lg border-2 border-blue-300 h-33 mb-6 w-3/4 ml-5 text-4xl font-bold text-center pt-9 ' data-aos="fade-left">Attending Meeting</div>
           <div className=' rounded-lg border-2 border-blue-300 h-33 mb-6 ml-20 w-3/4 text-4xl font-bold text-center pt-9' data-aos="fade-right">Converting Speech-to-text</div>
           <div className=' rounded-lg border-2 border-blue-300 h-33 mb- w-3/4 ml-5 text-4xl font-bold text-center pt-9' data-aos="fade-left">Generating Helpful Notes</div>
        </div>
        
       </div>

    </div>
  )
}

export default About;
