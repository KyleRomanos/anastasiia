import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';
import { FaQuestionCircle, FaCalendarAlt } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { MdContactMail } from 'react-icons/md'
import SolutionsPic1 from "../assets/picture2.png";
import SolutionsPic2 from "../assets/picture3.png";
import SolutionsPic3 from "../assets/picture4.png";
import SolutionsPic5 from "../assets/picture5.png";

const Solutions = () => {
    return (
      <div name="solutions" className='lg:pl-20 pr-auto pt-4 lg:pt-16 flex-col justify-center w-full h-full'>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-2">
 
        <span id="resource-id" className='lg:pt-16 align-middle w-full'>
          <div id="solutions_main" className="lg:flex-1 lg:my-auto mx-auto">
       <h3 id="home_h4" className="lg:text-4xl font-bold text-[#000000] mx-auto">What solutions do we offer?</h3>
         <p id="home_p" className="text-[#000000] lg:text-2xl pb-2 lg:my-2">We can help with all home purchasing needs for first-time homebuyers to cottages and second homes</p>
      
     <div className="btn-container pt-8 pb-4">
     <a id="consult_btn" href="https://velocity.newton.ca/sso/public.php?sc=1ljh3pwduz0d4" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
           Apply Now
             <span className="group-hover:rotate-90 duration-300">
             <HiArrowNarrowRight className="ml-2 display: inline-block" />
            
            </span>
            
             </a>
        </div>
    </div>
              </span>
  

            <span id="resource-id" className='my-2 align-middle lg:pt-4'>
            <span className="lg:flex-1">
              <img id="home_pic" className="rounded rounded-br-[10px] rounded-bl-[100px] lg:w-[580px] pb-2 mx-auto" src={SolutionsPic3} alt="logo"/>
            </span>
            </span>
            <span id="resource-id" className='my-2 lg:mt-20 pt-1 align-middle'>

          <span className="className=lg:flex-1">
     <img id="home_pic-2" className="rounded rounded-br-[100px] lg:w-[800px] mx-auto" src={SolutionsPic2} alt="logo"/>
     </span>
              </span>
  
        <div id="solutions_main" className="lg:flex-1 lg:pt-12 sm:pt-4 lg:my-auto mx-auto">
        <h3 id="home_h4" className="lg:text-4xl font-bold text-[#000000] mx-auto md:pt-10">Refinancing your Mortgage?</h3>
         <p id="home_p2" className="text-[#000000] lg:text-2xl pb-2 lg:my-2 max-w[600px]">Let's review your options</p>
       
     <div className="btn-container pt-8 pb-4">
    <a id="consult_btn" href="https://go.oncehub.com/AnastasiiaFedorova" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
             Book a Meeting
             <span className="group-hover:rotate-90 duration-300">
             <FaCalendarAlt className="ml-2 display: inline-block" />
            
            </span>
            
            </a>
    </div>
  

              </div>

              <span id="resource-id" className='my-2 md:pt-14 lg:align-middle'>
              <div id="solutions_main" className="lg:flex-1 lg:my-auto">
       <h3 id="home_h4" className="lg:text-4xl font-bold text-[#000000] mx-auto">Need an alternative solution?</h3>
         <p id="home_p2" className="text-[#000000] lg:text-2xl pb-2 lg:my-2 max-w[600px]">
We have access to
products for self employed professionals and clients with challenged credit
</p>
      
     <div className="btn-container pt-8 pb-1 lg:mb-12">
     <Link to="contact" smooth={true} duration={500} Contactclass="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
           Contact us Today
             <span className="group-hover:rotate-90 duration-300">
             <MdContactMail className="ml-2 display: inline-block" />
            
            </span>
            
          </Link>
        </div>
    </div>
              </span>
  
              <span id="resource-id" className='align-middle lg:pt-20 lg:pl-6 rounded hover:border-blue-600 duration-300'>
              <span className="lg:flex-1">
           <img id="home_pic-1" className="rounded rounded-bl-[100px] lg:w-[580px] lg:-mt-12 lg:pb-18" src={SolutionsPic1} alt="logo"/>
              </span>
              </span>

              <span id="resource-id" className='my-2 pt-1 align-middle'>

<span className="className=lg:flex-1">
<img id="home_pic-2" className="rounded rounded-br-[100px] lg:w-[580px]" src={SolutionsPic5} alt="logo"/>
</span>
    </span>

    <div id="solutions_main" className="lg:flex-1 lg:pt-2 md:pt-8 pb-4 lg:my-auto">
<h3 id="home_h4-r" className="lg:text-4xl font-bold text-[#000000] mx-auto">Mortgage coming up for 
renewal?</h3>
<p id="home_p2" className="text-[#000000] lg:text-2xl pb-2 lg:my-2 max-w[600px]">Now is the perfect time to apply!</p>
<div className="btn-container pt-8 pb-8">
<a id="consult_btn" href="https://velocity.newton.ca/sso/public.php?sc=1ljh3pwduz0d4" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-4 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
   Start Your Application Today
   <span className="group-hover:rotate-90 duration-300">
   <HiDocumentText className="ml-2 display: inline-block" />
  
  </span>
  
  </a>
</div>


    </div>
  
      </div> 

      <div div id="solutions_bottom" className="lg:flex-1 lg:my-auto mx-auto text-center align-middle">
     <h1 className="lg:text-4xl font-bold text-[#000000] pb-2 mx-auto lg:pt-28" >Any Questions?</h1>    <p className='lg:text-2xl'>Learn more about mortgages by checking the Frequently Asked Questions section</p>
  
     <div className="btn-container pt-8 pb-20">
     <Link to="resources" smooth={true} duration={500} class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-4 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
            Visit FAQ
             <span className="group-hover:rotate-90 duration-300">
             <FaQuestionCircle className="ml-2 display: inline-block" />
            
             </span>
            
             </Link>
             </div>
     </div>
            </div>

  
    )
  }
  
  export default Solutions
