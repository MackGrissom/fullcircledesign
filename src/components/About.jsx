import React from 'react'
import BG from '../assets/bg20.mp4'
import Aboutpic from '../assets/about.png'

const About = () => {
  return (

<div className=''>
      <div className= 'mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px]'>


        <div className='mx-auto text-center flex flex-col justify-center  items-center max-w-[1240px]'>
          <h1 className=' lg:text-8xl md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[white] flex justify-center align-center   max-h-full max-w-[50%] object-cover h-[100px] mb-0 bg-gradient-to-r items-center hover:text-[#ffde59]'> About Us<div className='flex justify-between'>
          </div>  </h1>

          <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen bgvid -z-[0]" />
          <p className='ml-5 text-[#ffde59] lg:text-[30px]  italic w-full text-center hidden lg:flex md:flex lg:justify-center md:justify-center'> A Quick Description Of Who We Are And What We Stand For </p>


        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg mt-3  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-4 font-mono'>

          <img src={Aboutpic} alt='laptop' className='w-[500px] mx-auto my-4 ' />

          <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 ml-8 text-[#ffde59] hover:text-white'> We are a team of dreamers, developers, designers, hackers and founders. </h1>
            <p className='ml-12 text-white'> We are all mutually obsessed software nerds and we believe that technology has an unlimited and untapped potential. Both in business applications and life in general. < br /> < br />
              We are passionate about providing clients with the best websites available. Our service delivery model demands writing high quality code, building user friendly applications, and leaving our clients better than when we found them. Check out our core values below. </p>
            <br />
            <p className='ml-8 text-[#ffde59] mb-8 text-[12px] italic'>Relentless Resourcefulness || Customer Obsessed <br />
              No Assumptions, Ever || Hyper-accountability || <br />
              Do better than yesterday || Work Smarter & Harder<br />  Openess & Honesty || Enjoy The Process  </p>

            <br />
            <p className='bg-white bg-opacity-20 drop-shadow-lg backdrop-blur-lg rounded text-[#ffde59] p-4 italic font-bold'> Do you have skills in development, design or sales? <br />
              Come join the best team in the industry and help us build the future. </p>
            <a href='contact'>  <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0  hover:bg-white font-mono '> Contact Us </button> </a>
          </div>
        </div>


        </div>
      </div>
  
  )
}

export default About