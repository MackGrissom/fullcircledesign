import React from 'react';
import Typed from 'react-typed';
import BG from '../assets/handpan.mp4'



const Hero = () => {
    return (
        <div className='text-black mt-0 main font-mono bg'>
            <video src={BG} autoPlay loop muted className="fixed w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content  h-screen top-[0px] opacity-90"/>
            <div className='max-w-[900px] mt-[-120px] w-full h-screen mx-auto text-center flex flex-col justify-center content'>
                {/* <p className='text-[#000000] font-bold p-2'>Design, Develop, Deliver. </p> */}
              
                <h1 className='md:text-3xl sm:text-4xl text-3xl font bold md:py-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg text-[white] -z-[1] font-mono mt-40 '> We Design & Build Websites For &nbsp;

                
<Typed strings={['Disruptors.', 'Dreamers.', 'Do-ers.', 'Innovators.', 'Inventors.', 'Startups.', 'Small Businesses.', "Entrepreneurs.", "You."]} typeSpeed={100} backSpeed={50} loop className='text-l text-[black] font-bold md:text-3xl sm:text-4xl text-3xl hover:bg-white hover:animate-bounce hover:text-[#ffde59]' /> </h1>
                <br />
                <div>
                    {/* <p className='md:text-2xl sm:text-1xl text-l font-bold bg-[white] backdrop-blur-lg rounded-md drop-shadow-lg p-3 text-[black] bg-opacity-20 font-mono mt-20'> We Design & Build Websites For &nbsp;

                
                        <Typed strings={['Disruptors.', 'Dreamers.', 'Do-ers.', 'Innovators.', 'Inventors.', 'Startups.', 'Small Businesses.', "Entrepreneurs.", "You."]} typeSpeed={100} backSpeed={50} loop className='text-l text-[white] font-bold md:text-2xl sm:text-1xl hover:bg-white hover:animate-bounce hover:text-[#ffde59]' /></p> */}


                </div>
                
                

                
    <p className='text-white  mt-0'>
       Web Design | Web Development | Logo Design & Branding | Website Maintenance
    </p>
<div className="main">
                <a href='https://forms.gle/qar7N5mxAwJeYUrc8'><button className='text-black  bg-[white] w-[300px] rounded-md font-medium my-6 mx-auto py-3  backdrop-blur-xl drop-shadow-xl hover:bg-[black] hover:text-white  glow-on-hover
                '> Get A Quote </button></a>
                </div>
                
            </div>
        </div>
    )
}

export default Hero
{/* <div class="container !hidden">
        <div class="card ">
            <div class="face face1">
                <div class="content ">
                    <img alt='design-img' src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.webp?raw=true"/>
                    <h3>Design</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.webp?raw=true" />
                    <h3>Code</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.webp?raw=true"/>
                    <h3>Launch</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div> */}