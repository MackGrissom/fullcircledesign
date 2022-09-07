import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import BG from '../assets/bg20.mp4'
import Contactpic from '../assets/contact.png'
// import contact data
// import { contact } from '../Data.js';
// import { social } from '../data';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pna9z3b', 'template_r2m31m3', form.current, 'cZgU7Xwas7_vdIpqd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };





  return (
    <section className='section  ' id='contact'>
       <div className='mx-auto text-center flex flex-col justify-center items-center max-w-[1240px] '> 
            {/* <video src={BG2} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full opacity-70 h-screen bgvid -z-[0]" /> */}
            
                <h1 className=' lg:text-8xl md:text-sm sm:text-m text-2xl font bold md:py-0 text-[white] flex justify-center align-center   max-h-full max-w-[50%] object-cover h-[50px] mb-0 bg-gradient-to-r items-center  font-mono bg-white  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg '> Contact Us<div className='flex justify-between '>  </div>  </h1>
            <video src={BG} autoPlay loop muted className="absolute w-auto max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-fit-content opacity-70 h-screen bgvid -z-[0]" />
                <p className='ml-5 text-[#ffde59] lg:text-[25px]  italic w-full text-center hidden lg:flex md:flex lg:justify-center md:justify-center font-mono bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mt-5'> If you're interesting in working with us, have questions surrounding pricing or timelines, or are looking to upgrade your career please reach out</p>

               
            </div>
      <div className='bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex'>
                
            {/* <video src={BG} autoPlay loop muted className="absolute w-full max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-full opacity-40" /> */}
       
            <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
        




          <form ref={form}
            className='space-y-2 w-full max-w-full  flex flex-wrap form bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg text-[white] mt-2 mb-2 p-4 align-middle items-center justify-center bg-white ' onSubmit={sendEmail} 
          >
            <img src={Contactpic} alt='laptop' className='w-[200px] mx-auto my-4 ' />
                <p className='ml-5 text-[white] lg:-text-[10px] font-mono w-[50%]'> We're looking forward to connecting with you and helping take your idea from a day-dream, written down on a napkin, to a tangible MVP that you can pitch to investors.</p>
            <div className='flex gap-2 p-2'>
              <input className='input  block
            w-full
            mt-1
            h-[50px]
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50' type='text' name='name' placeholder=' &nbsp; Your name' />


            
              <input className='input  block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50' type='email' name='email' placeholder=' &nbsp; Your email' />
            </div>
            <div className='flex '>
           
            <textarea
              className='textarea  block
              w-full
              
              
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              placeholder:p-2'
              placeholder=' &nbsp;Your message'
              name='message'
            ></textarea>
            </div>
            <br/>
            <button className='text-black  bg-[#ffde59] w-[300px] rounded-md font-medium my-6 mx-auto py-3  backdrop-blur-xl drop-shadow-xl hover:bg-[white] flex-wrap' type="submit" value="Send">
              Send message
            </button>
          </form>
        </div>
        </div>
        
      


    </section>





  );
};

export default Contact;