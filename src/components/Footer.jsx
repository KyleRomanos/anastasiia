import React from "react";
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillFacebook } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { ImLocation2} from 'react-icons/im';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fb]  text-black w-full">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#f1f0ef] py-4 w-full">
        <h1
          className="lg:text-1xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5 text-black">
          <span className="text-blue-600 lg:pl-12">Join</span> Anastasiia's Newsletter
          <p className="text-[12px] text-black lg:pl-12">to receive industry news and updates in your mailbox</p>
        </h1>
        
        <div>
         <form action="https://mortgageingenuity.us8.list-manage.com/subscribe/post?u=3b1478d29b509c5bc432532bd&amp;id=e4a9b1e7e3" method="post" id="mc-embedded-subscribe-form">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          required/>
          <button type="submit"
            className="bg-blue-600 hover:bg-blue-500 duration-300 px-5 py-2.5 
           rounded-full text-white md:w-auto w-full lg:mr-2">
           Subscribe
          </button>
          </form>
        </div>
      </div>

      <div className="md:flex md:justify-between md:items-center sm:px-12 py-6 px-4">
          <div className="lg:pl-12">
      <h1 className="font-bold text-1xl text-blue-600">Mortgages With Anastasiia </h1>
      <a href="mailto:anastasiia@mortgageingenuity.ca" className="py-2 lg:my-2 max-w[600px] w-[380px]  text-black hover:text-blue-600 duration-300">
        <MdEmail className="fill-current display: inline mr-1 text-blue-600"/>
            anastasiia@mortgageingenuity.ca</a> <br/>
         <a href="tel:16475755714" className="py-2 lg:my-2 max-w[600px] w-[380px]text-black hover:text-blue-600 duration-300">
        <BsFillTelephoneFill className="fill-current display: inline mr-1 text-blue-600"/>
        647-575-5714</a><br/>
      <div className="inline-flex justify-flex-end">
        <a href='https://www.instagram.com/mortgages.with.anastasiia/'>
        <RiInstagramFill 
            className='text-blue-600 text-2xl hover:text-blue-500 duration-300 ease cursor-pointer'/>
        </a>
        <a href='https://www.facebook.com/mortgageswithanastasiia/'>
        <AiFillFacebook className='text-blue-600 text-2xl hover:text-blue-500 duration-300 ease cursor-pointer'/>
        </a>
      </div>
      </div>
      <div>
      <h1 className="font-bold">Resources</h1>
      <p className="hover:text-blue-600 duration-300">
      <Link to="calculators" smooth={true} duration={500}>
        Mortgage Calculators</Link></p>
<p className="hover:text-blue-600 duration-300">
<Link to="faq" smooth={true} duration={500}>
    Frequently Asked Questions
    </Link></p>
<p className="hover:text-blue-600 duration-300">
<Link to="links" smooth={true} duration={500}>
    Useful Links</Link></p>

</div>
<div className="lg:pr-2">
      <h1 className="font-bold hover:text-blue-600 duration-300">
      <a href='https://www.mortgageingenuity.ca/'>
          Mortgage InGenuity Inc.</a></h1>
      <p className="hover:text-blue-600 duration-300">
          <a href="https://www.mortgagearchitects.ca/Anastasiia-Fedorova-Mortgage-Agent-Ontario">
          Mortgage Architects Brokerage: 12468</a></p>
      <a href="https://www.google.ca/maps/place/Anastasiia+Fedorova+-+Mortgage+Agent+at+Mortgage+InGenuity+Inc./@43.4481952,-80.5053419,17z/data=!3m1!4b1!4m5!3m4!1s0x882bf52cf4660445:0xb5ceff7336a5e3e0!8m2!3d43.4481952!4d-80.5031532" className="py-2 lg:my-2 max-w[600px] w-[380px] text-black hover:text-blue-600 duration-300">
<ImLocation2 className="fill-current display: inline mr-1 text-blue-600"/>
    178 Victoria St. S, Kitchener, ON N2G 2B9</a>
</div> 
    </div>

    
    </footer>
  );
};

export default Footer;