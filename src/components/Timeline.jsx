import React from 'react'
import BG from '../assets/bg18.mp4'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Timeline = () => {
    return (

 

        <VerticalTimeline>

            {/* Heading */}
            <div className='mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px]'>
            <h1 className='md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[white] flex justify-center align-center bg-[]  max-h-full max-w-[50%] object-cover h-[100px] mb-0 bg-gradient-to-r items-center -mt-[-44px] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'> Our Process <div className='flex justify-between'>  </div>
            </h1>
            <p className='ml-5 text-[#ffde59] text-[30px] pt-4 italic bg-gradient-to-r items-center bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'> A High-Level Roadmap Of How We Turn Your Idea Into Reality</p>
            </div>

            <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full" />

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
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Needs Assessment</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">Submit A Brief Description Of Website Needs </h3>

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
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Site-Map and Low-Fidelity Wireframe In Figma</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">The first draft of your website design  </h3>

                <p className='text-[#ffde59] italic'>
                This will be your chance to visualize your website functionality, this is less about visual design and more about functionality & usability. You'll have a chance to share feedback and we can make adjustments accordingly!
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
                <h4 className="vertical-timeline-element-subtitle text-[white] font-extrabold mb-1">Needs Assessment</h4>
                <h3 className="vertical-timeline-element-title font-bold text-gray-400">Submit A Brief Description Of Website Needs </h3>

                <p className='text-[#ffde59] italic'>
                    Using our description template, you are able to easily explain your vision and your business needs. If you're unsure & need guidance on this step, we're here for you and can offer support in terms of what is necessary and impactful for your website. This will be followed up with conversation surrounding brainstorming, project scope and budget requirements. 
                </p>
            </VerticalTimelineElement>


            {/* 8th FINISHED! */}
            <VerticalTimelineElement
                className="horizontal-timeline-element--work text-lg"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.45)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 245)' }}
                date="Full Circle Design Team"
                iconStyle={{ background: 'green', color: '#fff' }}

            />
             <h4 className="text-[white] font-extrabold mb-1 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px] text-6xl">
                Done!
             </h4>

                <p className='italic text-[white] font-extrabold mb-1 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px] text-sm'>
                You're now the proud owner of a modern, responsive website. We offer a free 30-day website maintenance. Depending on the specifics of your contract, you may have a content management system to keep your site updated as things change. Otherwise we do offer paid website maintenance as a seperate package. 
                </p>
        </VerticalTimeline>
    )
}

export default Timeline