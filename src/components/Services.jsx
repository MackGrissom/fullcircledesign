import React from 'react'
import Design from '../assets/design.png'
import Development from '../assets/development.png'
import SEO from '../assets/seo.png'


const Services = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
<h1 className='md:text-6xl sm:text-5xl text-4xl font bold md:py-6 text-[black] flex justify-center pb-6'> Our Services </h1>
<div className='max-w-[800px] mt-[-96px] w-full pt-5 mx-auto text-center flex flex-col justify-center'>
<h1 className='md:text-6xl sm:text-5xl text-4xl font bold md:py-6 font font-bold text-black '>  </h1>
</div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg'>
                <img src={Design} alt='laptop' className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold md:text-4x1 sm:text-3x1'> Web Design  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Design </h1>
                    <p> Whether you're seeking a web-re-design, a make-over of your existing website, a mobile-friendly  version of your site, or a brand new site designed and developed from scratch; you can be confident that you are in good hands with our web design specialists. </p>

                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'> Get Started </button>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg'>
                <img src={Development} alt='laptop' className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold'> Web Development  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Build</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet, vel amet nihil placeat minima quisquam nam nemo hic. Accusamus voluptatum mollitia eligendi molestias optio debitis nulla neque eveniet alias. </p>

                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'> Get Started </button>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg'>
                <img src={SEO} alt='laptop' className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold3'> SEO Optimization  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Optimize </h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet, vel amet nihil placeat minima quisquam nam nemo hic. Accusamus voluptatum mollitia eligendi molestias optio debitis nulla neque eveniet alias. </p>

                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'> Get Started </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Services