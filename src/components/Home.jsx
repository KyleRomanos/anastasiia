import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

import HomePic from "../assets/picture1.png";

const Home = () => {
  return (
    <div name="home" className='mx-auto pt-20 flex-col justify-center w-full h-full'>
     
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-2">
        {/* <ul className='align-middle font-bold'> */}
            <span id="resource-id" className='my-2 align-middle p-2'>
            <div id="home_main" className="lg:flex-1 lg:my-auto px-2 mx-auto lg:pl-8 sm:mx-8 ">
                <h3 id="home_h4" className="lg:text-4xl sm:text-2xl font-bold text-[#000000] mx-auto md:pt-36">Get a Better Mortgage</h3>
                <p id="home_p" className="text-[#000000] lg:text-2xl lg:font-semibold lg:pb-1 lg:my-2 max-w-[1400px]">Are you looking to purchase, renew, refinance, or consolidate debt?</p>
                <p id="home_p-chat" className="text-[#000000] pb-8 lg:text-2xl lg:my-2 max-w-[600px]">Let’s have a chat today!</p>
              <div className="btn-container">
                <a id="consult_btn" href="https://go.oncehub.com/AnastasiiaFedorova" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-6 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
                     Schedule Consultation
                  <span className="group-hover:rotate-90 duration-300">
                     <HiArrowNarrowRight className="ml-3 display: inline-block" />  
                  </span>
              </a>
              </div>
            </div>
          </span>

            <span id="resource-id" className='my-2 align-middle lg:pt-4 lg:pl-6'>
            <span className="lg:flex-1 lg:mx-12">
              <img id="home_pic" className="rounded-bl-[200px] lg:w-[580px] lg:-mt-12 pb-2 mx-auto" src={HomePic} alt="logo"/>
            </span>
            </span>

            

            {/* </ul> */}
            </div>

    </div>
  )
}

export default Home
