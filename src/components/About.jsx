import React from 'react'

import Aboutpic from '../assets/about.webp'
import Typed from 'react-typed';

const About = () => {
  return (

    <div className=' '>
      <div className='mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px] mt-4'>


        <div className='mx-auto text-center flex flex-col justify-center  items-center max-w-[1240px] '>
          <h1 className=' lg:text-8xl md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[white] flex justify-center align-center   max-h-full  object-cover h-[50px] bg-gradient-to-r items-center -mt-[-44px] font-mono bg-white  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-20'> About Us<div className='flex justify-between'>
          </div>  </h1>

          {/* <video src={BG} autoPlay loop muted className="fixed w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen top-[0px]" /> */}
         
        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg mt-3  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-4 font-mono -z-[1]'>

          <img src={Aboutpic} alt='laptop' className='w-[500px] mx-auto my-4 ' />

          <div className='flex flex-col justify-center w-full'>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 ml-8 text-[black] hover:text-white'> We are a team of &nbsp;

              <Typed strings={['Developers.', 'Designers.', 'Hackers.', 'Innovators.', 'Inventors.', 'Founders', 'Freelancers', "Future Thinkers"]} typeSpeed={100} backSpeed={50} loop className='text-l text-[white] font-bold  sm:text-1xl hover:bg-white hover:animate-bounce hover:text-[black] md:text-3xl sm:text-2xl  text-xl ' /> </h1>

            <p className='ml-12 text-white'> We're mutually obsessed software engineering and design nerds. We believe deeply that technology, combined with user friendly design has unlimited potential. Both in business applications and life in general. For us it's more than just websites, it's about the user experience.  < br /> < br />
              We are passionate about providing clients with the best modern websites available. Our service delivery model demands writing high quality code, building user friendly applications, and leaving our clients better than when we found them.  </p>
            <br />

            {/* <p className='ml-8 text-[black] mb-8 text-[15px] italic w-full'>
             
              Our Core Values: &nbsp;
              <Typed strings={['Relentless Resourcefulness.', 'User Obsessed.', 'No Assumptions, Ever.', 'Hyper-accountability.', 'Do better than yesterday.', 'Work Smarter & Harder', 'Openess & Honesty', " Enjoy The Process"]} typeSpeed={100} backSpeed={30} loop className='text-l text-[white] font-bold md:text-2xl sm:text-1xl hover:bg-white hover:animate-bounce hover:text-[black]' /></p> */}

            <br />
          </div>
        </div>
            {/* <p className='bg-white bg-opacity-20 drop-shadow-lg backdrop-blur-lg rounded text-[black] p-4 italic font-bold mt-4'> Do you have skills in development, design or sales? <br />
              Come join the best team in the industry and help us build the future. </p> */}
            <a href='/contact'>  <button className='text-white  bg-[black] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0  hover:bg-white hover:text-black font-mono z-0'> Contact Us </button> </a>


      </div>
    </div>

  )
}

export default About