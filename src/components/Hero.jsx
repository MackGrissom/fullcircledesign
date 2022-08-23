import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className='text-white pt-h-14 '>
            <div className='max-w-[860px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                {/* <p className='text-[#000000] font-bold p-2'>Design, Develop, Deliver. </p> */}

                <h1 className='md:text-5xl sm:text-4xl text-3xl font bold md:py-6'> Not All Websites Are Created Equal </h1>
                <div>
                    <p className='md:text-3xl sm:text-2xl text-xl font-bold'> We Design, Build & Optimize Modern, Responsive Websites for <br />
                        <Typed strings={['Disruptors.', 'Dreamers.', 'Doers.', 'Innovators.', 'Inventors.', 'Startups.', 'Small Businesses.', "Enterprises.", "Entrepreneurs.", "You."]} typeSpeed={100} backSpeed={50} loop className='font-5xl text-[#ffde59] font-bold md:text-3xl sm:text-2xl text-xl' /></p>


                </div>
                {/* <p className='text-white'>
                   Our websites will take you from zero to one.
                </p> */}
                <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 mx-auto py-3'> Get Started</button>
            </div>

        </div>
    )
}

export default Hero