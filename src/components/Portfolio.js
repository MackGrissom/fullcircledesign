import React from 'react';
// import BG from '../assets/bg20.mp4'
// import components
import Projects from './Projects';

const Portfolio = () => {
    return (
        <div>
        <div className='mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px]  '>
            <h1 className=' lg:text-8xl md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[white] flex justify-center align-center   max-h-full max-w-[50%] object-cover h-[50px] mb-12 bg-gradient-to-r items-center -mt-[-44px] font-mono bg-white  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'> Latest Work <div className='flex justify-between'> </div></h1>

            {/* <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen bgvid2" /> */}

            <p className='ml-5 text-[#ffde59] lg:text-[30px]  italic w-full text-center hidden lg:flex md:flex lg:justify-center md:justify-center font-mono bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mt-5 mb-10'> Recent projects we've been given permission to share</p>
                    </div>
        <section id='portfolio' className='section bg-primary min-h-[1400px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    
                    {/* <p className='subtitle'>
                        Here are some recent projects
                    </p> */}
                </div>
                <Projects />
            </div>
        </section>
        </div>
    );
};

export default Portfolio;