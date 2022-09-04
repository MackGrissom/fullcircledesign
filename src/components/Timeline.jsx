import React from 'react'
import BG from '../assets/bg17.mp4'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Timeline = () => {
    return (



        <VerticalTimeline>
 <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen object-fit"/>
            {/* Heading */}
            <div className='mx-auto text-center flex flex-col justify-center items-center max-w-[1240px] mt-8'>
                
           

                <h1 className='md:text-5xl sm:text-4xl text-4xl font bold text-[white] flex justify-center align-center bg-[]  max-h-full max-w-[50%] object-cover mb-0 bg-gradient-to-r items-center backdrop-blur-lg rounded drop-shadow-lg'>
                    Our Process <div className='flex justify-between'>  </div>
                </h1>
                <p className='ml-5 text-[#ffde59] lg:text-[30px]  italic w-full text-center hidden lg:flex md:flex lg:justify-center md:justify-center backdrop-blur-lg rounded drop-shadow-lg max-w-[50%]'> A High-Level Roadmap Of How We Turn Your Idea Into Reality</p>

            </div>




            {/* 1st Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="YOU"
                iconStyle={{ background: '#ffde59', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Needs Assessment</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">Submit A Brief Description Of Website Needs </h3>

                <p className='text-[#ffde59] italic'>
                    Using our description template, you are able to easily explain your vision and your business needs. If you're unsure & need guidance on this step, we're here for you and can offer support in terms of what is necessary and impactful for your website. This will be followed up with conversation surrounding brainstorming, project scope and budget requirements.
                </p>
            </VerticalTimelineElement>


            {/* 2nd Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.45)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 245)' }}
                date="Full Circle Design Team"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Site-Map and Low-Fidelity Wireframe In Figma</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">The first draft of your website design  </h3>

                <p className='text-[#ffde59] italic'>
                    This will be your chance to visualize your website functionality, this is less about visual design and more about functionality & usability. You'll have a chance to share feedback and we can make adjustments accordingly!
                </p>
            </VerticalTimelineElement>

            {/* 3rd Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="YOU"
                iconStyle={{ background: '#ffde59', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Review Wireframe & Site-Map</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">Approve your low-fidelity design </h3>

                <p className='text-[#ffde59] italic'>
                    Here's where you review the wireframe to ensure you're happy with the design, based on feedback we'll make necessary changes.
                </p>
            </VerticalTimelineElement>

            {/* 4th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.45)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 245)' }}
                date="Full Circle Design Team"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">High-Fidelity Design In Figma</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">See your website design in full color </h3>

                <p className='text-[#ffde59] italic'>
                    Based On Previous Discussions, We Build Your Website Design In Figma, In Full Color For You To Review Prior To Us Building The Website Itself.
                </p>
            </VerticalTimelineElement>

            {/* 5th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="YOU"
                iconStyle={{ background: '#ffde59', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Final Review Of Figma Design</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">Finalizing Every Detail </h3>

                <p className='text-[#ffde59] italic'>
                    Using our description template, you are able to easily explain your vision and your business needs. If you're unsure & need guidance on this step, we're here for you and can offer support in terms of what is necessary and impactful for your website. This will be followed up with conversation surrounding brainstorming, project scope and budget requirements.
                </p>
            </VerticalTimelineElement>

            {/* 6th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.45)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 245)' }}
                date="Full Circle Design Team"
                iconStyle={{ background: 'black', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Full-Stack Development of Website</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">Now Comes The Magic  </h3>

                <p className='text-[#ffde59] italic'>
                    Our Team Of Worldclass Developers Will Now Begin To Turn That Figma Design, Which Was Previously Just An Idea, Into A One of A Kind Full-Stack Website That Works On All Devices.
                </p>
            </VerticalTimelineElement>

            {/* 7th Step */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="YOU"
                iconStyle={{ background: '#ffde59', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Launch </h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">The Best Part, Deployment </h3>

                <p className='text-[#ffde59] italic'>
                    Your Final Approval, After Our Developers Have Finished The Front and Back End Development Of The Website - It's Time To Deploy Your New Tech Solution. Here's Where We Connect Your Site With Your Selected Domain Name and Host It Online. Your Idea Is No Longer Just An Idea.
                </p>
            </VerticalTimelineElement>


            {/* 8th FINISHED! */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.17)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date=""
                iconStyle={{ background: 'green', color: '#fff' }}

            >
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Congratulations, You're Now The Proud Owner Of A Worldclass Website.</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">So..what now? </h3>

                <p className='text-[white] italic'>
                    This answer varies greatly depending on the goal of your website, however we're more than happy to help provide you with the next best steps, if you need them. If you're a startup, it's time to get users & test. If you're an enterprise it's time to launch either internally/externally and drive business outcomes. Whatever your mission, we're here as your support system to either provide with you answers or connect you with our network of movers & shakers who can help. Fees for future website maintenance varies based on project scope.
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>

    )
}

export default Timeline