import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import BG from '../assets/bg19.mp4'
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
      <div className='bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
            <video src={BG} autoPlay loop muted className="absolute w-full max-w-full object-cover sm:w-full sm:h-full md:-w-full md:h-full h-full opacity-40" />
            <div className='mx-auto text-center flex flex-col justify-center pt-[1%] items-center max-w-[1240px]'>
                <h1 className=' lg:text-8xl md:text-5xl sm:text-4xl text-4xl font bold md:py-0 text-[#ffde59] flex justify-center align-center   max-h-full max-w-[50%] object-cover h-[100px] mb-0 bg-gradient-to-r items-center'> Contact Us<div className='flex justify-between'>  </div>  </h1>
                <p className='ml-5 text-[white] lg:text-[20px]  italic w-full text-center lg:flex md:flex lg:justify-center md:justify-center text-sm '> If you're interesting in working with us, or have questions surrounding pricing or timelines, please reach out. <br/>
            <br/>
            We're looking forward to connecting with you and helping take your idea from a day-dream, written down on a napkin, to a tangible MVP that you can pitch to investors. </p>
            <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
        




          <form ref={form}
            className='space-y-2 w-full max-w-full  flex flex-wrap form bg-white bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg text-[white] mt-4 mb-4 p-3' onSubmit={sendEmail}
          >
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
        
      </div>


    </section>





  );
};

export default Contact;