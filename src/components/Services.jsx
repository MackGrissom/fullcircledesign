import React from 'react'
import Design from '../assets/design.png'
import Development from '../assets/development.png'
import SEO from '../assets/seo.png'
import BG from '../assets/bg18.mp4'


const Services = () => {
    return (
        <div className='w-full bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
            <video src={BG} autoPlay loop muted className="absolute w-full max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-full" />
            <div className='max-w-full  w-full mx-auto text-center flex flex-col justify-center '>
                <h1 className='md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[white] flex justify-center align-center bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg  max-h-full max-w-full object-cover mt-4 h-[200px] bg-gradient-to-r items-center'> Our Services<div className='flex justify-between'> <p className='ml-5 text-[#ffde59] text-[30px] pt-4 italic'> What We Do & Why We're The Best Solution For your Business</p> </div>  </h1>
                
               
            </div>

 
            {/* Web Design */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg mt-3  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-4'>

                <img src={Design} alt='laptop' className='w-[500px] mx-auto my-4 ' />

                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold md:text-4x1 sm:text-3x1 ml-4 '> Web Design  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 ml-4 text-white'> We're UI/UX Experts For Websites & Web Apps </h1>
                    <p className='ml-4 text-white'> Whether you're seeking a web-re-design, a make-over of your existing website, a mobile-friendly  version of your site, or a brand new site designed and developed from scratch; you can be confident that you are in good hands with our web design specialists. </p>
                    <p className='ml-4 text-[#ffde59]'>UX research, UI design, Wireframing & Prototyping  </p>

                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'> Get Started </button>
                </div>



                {/* Wen Development */}
            </div>

            {/* Web Development */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg mt-3  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-4'>
                <img src={Development} alt='laptop' className='w-[500px] mx-auto my-4 ' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold md:text-4x1 sm:text-3x1 ml-4'> Full-Stack Web Development  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 ml-4 text-white'> We Build Modern & Fully Responsive Solutions </h1>
                    <p className='text-white ml-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet, vel amet nihil placeat minima quisquam nam nemo hic. Accusamus voluptatum mollitia eligendi molestias optio debitis nulla neque eveniet alias. </p>
                    <p className='ml-4 text-[#ffde59]'> Front-end Development, Back-end Development, Responsive Development, E-commerce & Marketplace Development </p>
                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'> Get Started </button>
                </div>
            </div>

            {/* SEO /Optimization  */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
                <img src={SEO} alt='laptop' className='w-[500px] mx-auto my-4 ' />
                <div className='flex flex-col justify-center  b'>
                    <p className='text-[#ffde59] uppercase font-bold3'> SEO Optimization  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'> Optimize </h1>
                    <p className='text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet, vel amet nihil placeat minima quisquam nam nemo hic. Accusamus voluptatum mollitia eligendi molestias optio debitis nulla neque eveniet alias. </p>

                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'> Get Started </button>

                </div>
            </div>
        </div>
    )
}

export default Services