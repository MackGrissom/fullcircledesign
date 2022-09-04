import React from 'react'
import Design from '../assets/design.png'
import Development from '../assets/development.png'
import SEO from '../assets/seo.png'
import BG from '../assets/bg20.mp4'
import BG2 from '../assets/bg22.mp4'
const Services = () => {
    return (
    
        <div className=''>
            <div className='mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px] '> 
            
                <h1 className=' lg:text-8xl md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[white] flex justify-center align-center   max-h-full max-w-[50%] object-cover h-[50px] mb-0 bg-gradient-to-r items-center -mt-[-44px] font-mono bg-white  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'> Services<div className='flex justify-between '>  </div>  </h1>
            <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen bgvid -z-[0]" />
                <p className='ml-5 text-[#ffde59] lg:text-[30px]  italic w-full text-center hidden lg:flex md:flex lg:justify-center md:justify-center font-mono bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mt-5'> What We Do & Why We're The Best Solution For your Business</p>
                
               
            </div>

            
            {/* Web Design */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg mt-3  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-4'>

                <img src={Design} alt='laptop' className='w-[500px] mx-auto my-4 ' />

                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold md:text-4x1 sm:text-3x1 ml-8 font-mono'> Web Design  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 ml-8 text-white font-mono'> We're UI/UX Experts For Websites & Web Apps </h1>
                    <p className='ml-8 text-white font-mono'> Whether you're seeking a web-re-design, a make-over of your existing website, a mobile-friendly  version of your site, or a brand new site designed and developed from scratch; you can be confident that you are in good hands with our web design specialists. </p>
                    <p className='ml-8 text-[#ffde59] font-mono'>UX research, UI design, Wireframing & Prototyping  </p>

                    <button className='text-black  bg-[#ffde59]  w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 hover:bg-white font-mono'> Get Started </button>
                </div>



                {/* Wen Development */}
            </div>

            {/* Web Development */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg mt-3  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-4'>
                <img src={Development} alt='laptop' className='w-[500px] mx-auto my-4 ' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#ffde59] uppercase font-bold md:text-4x1 sm:text-3x1 ml-8 font-mono'> Full-Stack Web Development  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 ml-4 text-white font-mono'> We Build Modern, Fully Responsive Solutions </h1>
                    <p className='text-white ml-4'> Our websites follow modern design trends. Depending on your vision and your industry, we will build a flawless solution. Your website will be fully responsive, meaning it will work across all devices, from mobile to a desktop. We understand UX/UI design and fully intend to utilize the decades of research put into user mentality into your website build to ensure your end users are happy.  </p>
                    <p className='ml-4 text-[#ffde59] font-mono'> Front-end Development, Back-end Development, Responsive Development, E-commerce & Marketplace Development </p>
                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 hover:bg-white font-mono'> Get Started </button>
                </div>
            </div>

            {/* SEO /Optimization  */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-lg  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
                <img src={SEO} alt='laptop' className='w-[500px] mx-auto my-4 ' />
                <div className='flex flex-col justify-center  b'>
                    <p className='text-[#ffde59] uppercase font-bold3 ml-8 font-mono'> SEO Optimization  </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white ml-8 font-mono'> We Optimize Websites to Drive Business Outcomes </h1>
                    <p className='text-white ml-8'> If you want to remain competitive in todays online world search engine optimization, which optimizes your site to be seen more often during web searches, increase its organic search visibility and traffic. This will lead to a higher conversion rates, higher sales and more users landing on your page. If you don't optimize, your site will be buried under all of your competitors and you will fail. Let us optimize your success. </p>
                    <p className='ml-4 text-[#ffde59] ml-8 font-mono'> On-page SEO, Off-page SEO, Technical SEO</p>
                    <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 hover:bg-white font-mono'> Get Started </button>

                </div>
            </div>
        </div>
    )
}

export default Services