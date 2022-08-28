import React from 'react'
import BG from '../assets/bg15.mp4'
const Timeline = () => {
    return (

        <ol class="relative border-l border-gray-200 dark:border-gray-700  max-w-full grid">
            <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full"/>
            {/* <h1 className='md:text-6xl sm:text-5xl text-4xl font bold md:py-6 text-[#ffde59]'> Our process </h1> */}

            <h1 className='md:text-6xl sm:text-4xl text-4xl font bold md:py-4 text-[white] flex justify-center pb-4 pt-4 bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-6 mt-4 h-[200px] items-center'> Our Process: <p className='ml-5 text-[#ffde59] text-[30px] pt-4 italic'>  A step-by-step roadmap of how we help turn your idea into reality</p></h1>

            
           
           
           {/* Step 1 - YOU */}
            <li class="mb-10 ml-6 mt-10  bg-[#ffde59] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-4 pl-4">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-[#ffde59]">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-[black]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>

                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> <span className='text-[#ffde59] pl-2'> YOU </span> <br /> <br /> Submit a brief description of your website needs </h3>
                
                <p class="mb-4 text-base font-normal text-white"> Using our description template, you are able to easily explain your vision and your business needs. If you're unsure & need guidance on this step, we're here for you and can offer support in terms of what is necessary and impactful for your website. </p>

            </li>



            {/* step 2 WE */}

            <li class="mb-10 ml-6 bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-4 pl-4">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> <span className='text-blue-400 '> WE </span> <br /> <br /> Provide you with a Site-map and Low-Fidelity Wireframe in Figma </h3>

                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">This is the first draft outline of your future website</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">This will be your chance to visualize your website functionality, this is less about visual design and more about functionality & usability. You'll have a chance to share feedback and we can make adjustments accordingly! </p>
            </li>

            {/* step 3 YOU */}
            <li class="mb-10 ml-6 bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-4 pl-4">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-black rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-[#ffde59]">
                    <svg aria-hidden="true" class="w-3 h-3 text-[#ffde59] dark:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> <span className='text-[#ffde59]'> YOU </span> <br /> <br /> Review and Approve Site-map & Wireframe </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Here's where you review the wirefram to ensure you're happy with the design, based on feedback we make corrections.</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>

                {/* step 4 WE  */}
                <li class="ml-6 mb-10 bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-4 pl-4">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> <span className='text-blue-400'> WE </span> <br /> <br /> Submit High-fidelity, Final Website Design & Develop</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                
                {/* step 5 YOU */}

                <li class="ml-6 mb-10 bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-4 pl-4">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white text-[#ffde59] dark:ring-gray-900 bg-[#ffde59]">
                    <svg aria-hidden="true" class="w-3 h-3  ] dark:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> <span className='text-[#ffde59]'> YOU </span> <br /> <br /> Submit a brief description of your website needs </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>

                {/* Step 6 - finished!!  */}
                
                <li class="ml-6 mb-10 bg-[white] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-4 pl-4">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> <span className='text-[#ffde59]'> DONE!</span> <br /> <br /> You now have a full stack website ready   </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
        </ol>
    )
}

export default Timeline