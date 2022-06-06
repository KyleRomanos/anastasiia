import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { BsFilePersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail, MdBusiness } from 'react-icons/md'

import { RiInstagramFill } from 'react-icons/ri'
import { AiFillFacebook } from 'react-icons/ai'



// import {Link} from 'react-scroll';

const Contact = () => {
    return (
  
      <div name="contact" className='max-w-[800px] mx-auto lg:pt-10 p-2 flex-col justify-center w-full h-full'>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:gap-2">
          {/* <ul className='align-middle font-bold'> */}
            <span id="contact-id" className='my-2 align-middle p-2 lg:pt-4 rounded hover:border-blue-600 duration-300'>
              <div id="contact-top">
                <h3 id="contact-h3" className="lg:text-2xl font-bold text-black my-4 mx-auto" >Contact Us
                </h3>
            </div>
        <div id='contact-container' className='grid sm:grid-cols-1 md:grid-cols-1'>
            <p id="contact-p"><a href="https://www.google.ca/maps/place/Anastasiia+Fedorova+-+Mortgage+Agent+at+Mortgage+InGenuity+Inc./@43.4481952,-80.5053419,17z/data=!3m1!4b1!4m5!3m4!1s0x882bf52cf4660445:0xb5ceff7336a5e3e0!8m2!3d43.4481952!4d-80.5031532" className=" text-black hover:text-blue-600 duration-300" name="contact">
                <BsFilePersonFill className="fill-current display: inline mr-1 lg:font-bold text-blue-600"/>
                    Anastasiia Fedorova | Mortgage Agent
            </a></p><br/>
            <p id="contact-p"><a href="https://www.google.ca/maps/place/Anastasiia+Fedorova+-+Mortgage+Agent+at+Mortgage+InGenuity+Inc./@43.4481952,-80.5053419,17z/data=!3m1!4b1!4m5!3m4!1s0x882bf52cf4660445:0xb5ceff7336a5e3e0!8m2!3d43.4481952!4d-80.5031532" className="text-black hover:text-blue-600 duration-300">
                <ImLocation2 className="fill-current display: inline mr-1 text-blue-600"/>
                178 Victoria St. S, Kitchener, ON N2G 2B9
            </a></p><br/>
            <p id="contact-p"><a href="mailto:anastasiia@mortgageingenuity.ca"  className="text-black hover:text-blue-600 duration-300">
                <MdEmail className="fill-current display: inline mr-1 text-blue-600"/>
                anastasiia@mortgageingenuity.ca
            </a></p><br></br>

            <p id="contact-p"><a href="tel:16475755714" className="text-black hover:text-blue-600 duration-300">
                <BsFillTelephoneFill className="fill-current display: inline mr-1 text-blue-600"/>
                647-575-5714</a>  </p><br></br>
            <p id="contact-p"><a href='https://www.mortgageingenuity.ca/'  className="sm:text-12px text-black hover:text-blue-600 duration-300">
                <MdBusiness className="fill-current display: inline mr-1 text-blue-600"/>Mortgage InGenuity Inc.</a></p><br></br> 
        </div>

        <div id="contact-mid">
                    <a href='https://www.instagram.com/mortgages.with.anastasiia/'>
                        <RiInstagramFill className='text-blue-600 hover:text-blue-500 duration-300 ease cursor-pointer mr-1 text-2xl'/>
                    </a>
                    <a href='https://www.facebook.com/mortgageswithanastasiia/'>
                        <AiFillFacebook className='text-blue-600 hover:text-blue-500 duration-300 ease cursor-pointer text-2xl'/>
                    </a>
                </div>
    </span>
  
    <span id="resource-id" className='my-2 align-middle p-2 lg:pt-4 rounded hover:border-blue-600 duration-300'>
        <form action="https://getform.io/f/ee47f051-0b57-4aa5-9dfa-31d357f73e42" method="POST"  className="flex flex-col max-w-[400px] w-full">
            <div className="pb-2">
            </div>
            <input className="border hover:border-blue-600 outline-0 outline-blue-600 duration-300 my-2 mx-2 py-2 px-2 rounded text-gray-600 text-left" type="text" placeholder="Name" name="name" required />
           <input className="border hover:border-blue-600 outline-0 outline-blue-600 duration-300 my-2 mx-2 py-2 px-2  rounded text-gray-600 text-left" type="email" placeholder="Email" name="email" required/>
           <input className="border hover:border-blue-600 outline-0 outline-blue-600 duration-300 my-2 mx-2 py-2 px-2 rounded text-gray-600 text-left" type="phone" placeholder="Phone" name="phone" required/>
            <textarea name="message" rows="6"  placeholder='Type your message here' className="border hover:border-blue-600 outline-blue-600 outline-0 duration-300 px-2 mx-2 text-left rounded text-black" required />

            <button id="consult_btn" type="submit" class="button" className="bg-transparent mx-4 hover:bg-blue-600 text-blue-600 hover:text-white lg:px-32 py-2 mb-2 mt-2 text-center text-bold border border-blue-600 hover:border-transparent duration-300 rounded-full">
          Send
           <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
           </span>
            
           </button>
        </form>
              </span>

              {/* </ul> */}
              </div>
      </div>
   
    )
  }
  


export default Contact