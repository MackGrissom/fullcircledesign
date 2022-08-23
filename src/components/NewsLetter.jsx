import React from 'react'

const Technology = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='font-4xl text-[#ffde59] font-bold md:text-3xl sm:text-2xl text-xl p-5'> Want to stay up to date about the latest and greatest web design trends? </h1>
                <p className='ml-5'> Subscribe to our monthly newsletter and stay informed on the most modern trends in web development. </p>
            </div>
            <div className='my-4'>
               <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input  className='p-3 w-full rounded-md text-black'type='email' placeholder='Enter Email..' /> 
                <button className='text-black  bg-[#ffde59] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 mx-auto'> Notify Me </button>
            </div>
                
            </div>

        </div>

    </div>
  )
}

export default Technology