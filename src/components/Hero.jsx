import React from 'react';
import Typed from 'react-typed';
import BG from '../assets/bgrock.mp4'



const Hero = () => {
    return (
        <div className='text-black pt-h-14 main font-mono bg'>
            <video src={BG} autoPlay loop muted className="fixed w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen top-[0px]"/>
            <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center content'>
                {/* <p className='text-[#000000] font-bold p-2'>Design, Develop, Deliver. </p> */}
              
                <h1 className='md:text-4xl sm:text-4xl text-3xl font bold md:py-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg text-[white] -z-[1] font-mono'> Not All Websites Are Created Equal.  </h1>
                <br />
                <div>
                    <p className='md:text-2xl sm:text-1xl text-l font-bold bg-[white] backdrop-blur-lg rounded-md drop-shadow-lg p-3 text-[black] bg-opacity-20 font-mono'> We Design & Build Websites For &nbsp;

                
                        <Typed strings={['Disruptors.', 'Dreamers.', 'Do-ers.', 'Innovators.', 'Inventors.', 'Startups.', 'Small Businesses.', "Entrepreneurs.", "You."]} typeSpeed={100} backSpeed={50} loop className='text-l text-[white] font-bold md:text-2xl sm:text-1xl hover:bg-white hover:animate-bounce hover:text-[#ffde59]' /></p>


                </div>
                <p className='text-black'>
                   Web Design || Web Development || Logo Design & Branding ||Website Maintenance
                </p>
                <a href='https://forms.gle/qar7N5mxAwJeYUrc8'><button className='text-black  bg-[white] w-[300px] rounded-md font-medium my-6 mx-auto py-3  backdrop-blur-xl drop-shadow-xl hover:bg-[black] hover:text-white
                '> Get Started </button></a>
                
                
                
            </div>

        </div>
    )
}

export default Hero