import React from 'react';
import Typed from 'react-typed';
import BG from '../assets/bg3.mp4'
import { AiOutlineInstagram} from 'react-icons/ai';

const Hero = () => {
    return (
        <div className='text-black pt-h-14 main font-mono'>
            <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen"/>
            <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center content'>
                {/* <p className='text-[#000000] font-bold p-2'>Design, Develop, Deliver. </p> */}
              
                <h1 className='md:text-5xl sm:text-4xl text-3xl font bold md:py-6 bg-black bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg text-[white] -z-[1] font-mono'> Not All Websites Are Created Equal.  </h1>
                <br />
                <div>
                    <p className='md:text-2xl sm:text-1xl text-l font-bold bg-[black] backdrop-blur-lg rounded-md drop-shadow-lg p-3 text-[#ffde59] bg-opacity-20 font-mono'> We Design, Build & Optimize Better Websites For &nbsp;

                
                        <Typed strings={['Disruptors.', 'Dreamers.', 'Do-ers.', 'Innovators.', 'Inventors.', 'Startups.', 'Small Businesses.', "Enterprises.", "Entrepreneurs.", "You."]} typeSpeed={100} backSpeed={50} loop className='text-l text-[white] font-bold md:text-2xl sm:text-1xl hover:bg-white hover:animate-bounce hover:text-[#ffde59]' /></p>


                </div>
                {/* <p className='text-white'>
                   Our websites will take you from zero to one.
                </p> */}
                <button className='text-black  bg-[#ffde59] w-[300px] rounded-md font-medium my-6 mx-auto py-3  backdrop-blur-xl drop-shadow-xl hover:bg-[white]'> Get Started</button>
                
            </div>

        </div>
    )
}

export default Hero