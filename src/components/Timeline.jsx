import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Assessment from '../assets/assessment.webp'
import Sitemap from '../assets/sitemap.webp'
import Review1 from '../assets/review1.webp'
import Figma from '../assets/figma.webp'
import Figma2 from '../assets/figmareview.webp'
import Development2 from '../assets/development2.webp'
import Launch from '../assets/launch.webp'
import Done from '../assets/done.webp'


const Timeline = () => {
    return (



        <VerticalTimeline className='mt-4 -z-[1]'>


            <div className='mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px]  '>
                {/* <video src={BG2} autoPlay loop muted className="fixed w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen top-[0px]" /> */}
                <h1 className=' lg:text-8xl md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[white] flex justify-center align-center   max-h-full max-w-[50%] object-cover h-[50px] bg-gradient-to-r items-center -mt-[-44px] font-mono bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-20'> Our Process<div className='flex justify-between '>  </div>  </h1>
                {/* <p className='ml-5 text-[black] lg:text-[30px]  italic w-full text-center hidden lg:flex md:flex lg:justify-center md:justify-center font-mono bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'> </p> */}


            </div>
            {/* <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-cover md:-w-full md:h-full h-cover opacity-70 h-screen cover  mt-4"/> */}
            {/* Heading */}

            {/* <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-cover md:-w-full md:h-cover h-fit-content bgvid2 -z-[0]" /> */}


            {/* 1st Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg h-[50%] hover:border-l-blue"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Define Your Vision"
                iconStyle={{ background: 'white', color: '#fff' }}

            >
                <img src={Assessment} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[White] font-extrabold mb-1">Needs Assessment</h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">Submit A Brief Description Of Website Needs </h3>

                <p className='text-[white] italic'>
                    Using our description template, you are able to easily explain your vision and your business needs. If you're unsure & need guidance on this step, we're here for you and can offer support in terms of what is necessary and impactful for your website. This will be followed up with conversation surrounding brainstorming, project scope and budget requirements.
                </p>
            </VerticalTimelineElement>
                   

            {/* 2nd Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.45)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 245)' }}
                date="Build First Prototype"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <img src={Sitemap} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Site-Map & Low-Fi Wireframe</h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">The first draft of your website design  </h3>

                <p className='text-[white] italic'>
                    This will be your chance to visualize your website functionality, this is less about visual design and more about functionality & usability. You'll have a chance to share feedback and we can make adjustments accordingly!
                </p>
            </VerticalTimelineElement>

            {/* 3rd Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Lo-fi Prototype Review & Approval"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <img src={Review1} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Review Wireframe & Site-Map</h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">Approve your low-fidelity design </h3>

                <p className='text-[white] italic'>
                    Here's where you review the wireframe to ensure you're happy with the design, based on feedback we'll make necessary changes.
                </p>
            </VerticalTimelineElement>

            {/* 4th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.45)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 245)' }}
                date="High-Fidelity Prototype"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <img src={Figma} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">High-Fidelity Design In Figma</h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">See your website design in full color </h3>

                <p className='text-[white] italic'>
                    Based On Previous Discussions, We Build Your Website Design In Figma, In Full Color For You To Review Prior To Us Building The Website Itself.
                </p>
            </VerticalTimelineElement>

            {/* 5th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Final Review"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <img src={Figma2} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Final Review Of Figma Design</h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">Finalizing Every Detail </h3>

                <p className='text-[white] italic'>
                    Using our description template, you are able to easily explain your vision and your business needs. If you're unsure & need guidance on this step, we're here for you and can offer support in terms of what is necessary and impactful for your website. This will be followed up with conversation surrounding brainstorming, project scope and budget requirements.
                </p>
            </VerticalTimelineElement>

            {/* 6th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.45)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 245)' }}
                date="Website or App Development"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <img src={Development2} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Full-Stack Development of Website</h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">Now Comes The Magic  </h3>

                <p className='text-[white] italic'>
                    Our Team Of Worldclass Developers Will Now Begin To Turn That Figma Design, Which Was Previously Just An Idea, Into A One of A Kind Full-Stack Website That Works On All Devices.
                </p>
            </VerticalTimelineElement>

            {/* 7th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Deploy Your Website / App "
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <img src={Launch} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Launch </h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">The Best Part, Deployment </h3>

                <p className='text-[white] italic'>
                    Your Final Approval, After Our Developers Have Finished The Front and Back End Development Of The Website - It's Time To Deploy Your New Tech Solution. Here's Where We Connect Your Site With Your Selected Domain Name and Host It Online. Your Idea Is No Longer Just An Idea.
                </p>
            </VerticalTimelineElement>


            {/* 8th FINISHED! */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.17)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Completed - time to engage users, test, and grow your business"
                iconStyle={{ background: 'green', color: '#fff' }}

            >
                <img src={Done} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Congratulations, You're Now The Proud Owner Of A Worldclass Website.</h4>
                <h3 className="vertical-timeline-element-title font-bold text-black">So..what now? </h3>

                <p className='text-[black] italic'>
                    The next step varies greatly depending on the goal of your website, however we're more than happy to help provide you with the next best steps in our summary and website launch call.
                </p>
            </VerticalTimelineElement>
            <div className='x-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px] bg-white bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg '> 

                <h1 className='text-black'> Ready to turn your idea into a website? </h1>

                <a href='https://docs.google.com/forms/d/e/1FAIpQLSf3yPxxGK0GUIxF4_df5rn3hme1qhVjpuKKozfLGH0lRYBidw/viewform'>  <button className='text-black  bg-[white] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0  hover:bg-black hover:text-white  font-mono '> Get A Quote </button> </a>
            </div>


        </VerticalTimeline>

    )
}

export default Timeline