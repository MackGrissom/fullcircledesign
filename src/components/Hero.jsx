import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className='text-white pt-h-14  '>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                {/* <p className='text-[#000000] font-bold p-2'>Design, Develop, Deliver. </p> */}

                <h1 className='md:text-6xl sm:text-5xl text-4xl font bold md:py-6'> From an Idea to a Reality</h1>
                <div>
                    <p className='md:text-3xl sm:text-2xl text-xl font-bold'> We Build & Design Modern, Responsive Websites for </p>

                    <Typed strings={['Disruptors.', 'Dreamers.', 'Doers.', 'Innovators.', 'Inventors.', 'Startups.', 'Small Businesses.', "Enterprises.", "Entrepreneurs.", "You."]} typeSpeed={100} backSpeed={50} loop className='font-5xl text-[#ffde59] font-bold md:text-3xl sm:text-2xl text-xl font-bold' />
                </div>
                <p className='text-white'>
                   Web Design & Web Development transforming your business 
                </p>
            </div>
        </div>
    )
}

export default Hero