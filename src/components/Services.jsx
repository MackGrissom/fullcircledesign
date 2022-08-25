import React from 'react'
import Design from '../assets/design.png'
import Development from '../assets/development.png'
import SEO from '../assets/seo.png'


const Services = () => {
    return (
        <div className='w-full bg-white py-8 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>

            <h1 className='md:text-6xl sm:text-5xl text-4xl font bold md:py-4 text-[#ffde59] flex justify-center pb-4 pt-4 bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-6'> What We do.. </h1>
            <div className='max-w-[800px] mt-[-96px] w-full pt-5 mx-auto text-center flex flex-col justify-center '>
                <h1 className='md:text-6xl sm:text-5xl text-4xl font bold md:py-6 font font-bold text-white '>  </h1>
            </div>


            {/* Web Design */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg mt-3  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-4'>
                
                <img src={Design} alt='laptop' className='w-[500px] mx-auto my-4 ' />

                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold md:text-4x1 sm:text-3x1 ml-4 '> Web Design  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 ml-4 text-white'> Design </h1>
                    <p className='ml-4 text-white'> Whether you're seeking a web-re-design, a make-over of your existing website, a mobile-friendly  version of your site, or a brand new site designed and developed from scratch; you can be confident that you are in good hands with our web design specialists. </p>

                    <button className='text-white  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'> Get Started </button>
                </div>



                {/* Wen Development */}
            </div>

            {/* Web Development */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-4'>
                <img src={Development} alt='laptop' className='w-[500px] mx-auto my-4 ' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold '> Web Development  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'> Build</h1>
                    <p className='text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet, vel amet nihil placeat minima quisquam nam nemo hic. Accusamus voluptatum mollitia eligendi molestias optio debitis nulla neque eveniet alias. </p>

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