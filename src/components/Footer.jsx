import React from 'react'
import BG from '../assets/bg.mp4'
const Footer = () => {
  return (
    <footer class="p-4 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#ffde59]">
        
    <span class="text-sm text-[#ffde59] sm:text-center ">© 2022 <a href="https://flowbite.com" class="hover:underline" target="_blank">Full Circle Web Design</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 sm:mt-0 text-[#ffde59]">
        <li>
            <a href="#" class="mr-4 text-sm text-[#ffde59] hover:underline md:mr-6 400">About</a>
        </li>
        
        <li>
            <a href="#" class="mr-4 text-sm text-[#ffde59] hover:underline md:mr-6 ">Licensing</a>
        </li>
        <li>
            <a href="#" class="text-sm text-[#ffde59]hover:underline">Contact</a>
        </li>
    </ul>
</footer>
  )
}

export default Footer