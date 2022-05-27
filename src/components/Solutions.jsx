import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';
import SolutionsPic1 from "../assets/picture2.png";
import SolutionsPic2 from "../assets/picture3.png";
import SolutionsPic3 from "../assets/picture4.png";
import SolutionsPic5 from "../assets/picture5.png";

const Solutions = () => {
    return (
      <div name="solutions" className='px-auto lg:pt-16 flex-col justify-center w-full h-full'>
       
          <div className="grid lg:grid-cols-2 gap-2" id="solutions-main">
          {/* <ul className='align-middle font-bold'> */}
          <span id="resource-id" className='lg:pl-16 pt-8 align-middle p-2 w-full'>
          <div id="home_main" className="lg:flex-1 lg:my-auto px-2  mx-auto lg:pl-6 sm:mx-8">
       <h3 id="home_h4" className="lg:text-2xl font-bold text-[#000000] mx-auto">What solutions do we offer?</h3>
         <p id="home_p" className="text-[#000000] lg:pr-4 pb-2 lg:my-2 max-w[600px]">We can help with any of your home purchasing needs:</p>
         <ul class="solution-list"> 
            <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Pre-Approvals</p>
             </li>
            <li>
                <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">First-Time Homebuyers</p>
            </li>
             <li>
                 <p id="home_p-bottom" className="text-[#000000]  pr-4 lg:my-2 max-w[500px] items-center">New to Canada</p>
             </li>
            <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Growing Your Investment Portfolio</p>
            </li>
             <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Cottages & Second Home</p>
             </li>
         </ul>
     <div className="btn-container pt-8">
     <a id="consult_btn" href="https://velocityapp.newton.ca/public/#/clientJourney/slides/home?shortCode=1ljh3pwduz0d4&lang=en-ca" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
           Apply Now
             <span className="group-hover:rotate-90 duration-300">
             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
            </span>
            
             </a>
        </div>
    </div>
              </span>
  
              <span id="resource-id" className='my-0 sm:my-2 align-middle lg:pt-4 rounded '>
              <span className="lg:flex-1 pl-8">
           <img id="home_pic-1" className="rounded-bl-[150px] lg:w-[780px] lg:-mt-9 pb-18 mx-auto" src={SolutionsPic3} alt="logo"/>
              </span>
              </span>
              
              <span id="resource-id" className='my-2 lg:-ml-2 mt-20 pt-1 align-middle p-2'>

          <span className="className=lg:flex-1 mx-12">
     <img id="home_pic-2" className="rounded-br-[150px] lg:w-[780px] mx-auto" src={SolutionsPic2} alt="logo"/>
     </span>
              </span>
  
              <div id="home_main" className="lg:flex-1 lg:pt-12 lg:my-auto mx-auto lg:pl-64 sm:mx-8">
        <h3 id="home_h4" className="lg:text-2xl font-bold text-[#000000] mx-auto lg:pt-10">Refinancing your Mortgage?</h3>
         <p id="home_p2" className="text-[#000000] lg:pr-4 pb-2 lg:my-2 max-w[600px]">Let's review your options:</p>
         <ul class="solution-list"> 
            <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Exploring lower rates</p>
             </li>
             <li>
                <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Financing a home renovation</p>
             </li>
             <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Building better credit and improving monthly cashflow</p>
             </li>
            <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Leveraging home equity to grow your investment portfolio</p>
            </li>
            <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Cottages & Second Home</p>
             </li>
         </ul>
     <div className="btn-container pt-8 pb-8">
    <a id="consult_btn" href="https://go.oncehub.com/AnastasiiaFedorova" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
             Book a Meeting
             <span className="group-hover:rotate-90 duration-300">
             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
            </span>
            
            </a>
    </div>
  

              </div>

              <span id="resource-id" className='my-2 lg:ml-2 lg:pt-14 lg:align-middle p-2'>
          <div id="home_main" className="lg:flex-1 lg:my-auto px-2  mx-auto lg:pl-6 sm:mx-8 ">
       <h3 id="home_h4" className="lg:text-2xl font-bold text-[#000000] mx-auto">Need an alternative solution
not available at the bank?</h3>
         <p id="home_p" className="text-[#000000] pr-4 pb-2 lg:my-2 max-w[600px]">
We have access to
products for:
</p>
         <ul class="solution-list"> 
            <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Self-Employed professionals</p>
             </li>
            <li>
                <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center"> Clients with challenged credit</p>
            </li>
             <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Access to alternative and private
lenders</p>
             </li>
            <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center"> Equity-based lending</p>
            </li>
             <li>
                 <p id="home_p-bottom" className="text-[#000000] pr-4 lg:my-2 max-w[500px] items-center">Reverse Mortgage solutions</p>
             </li>
         </ul>
     <div className="btn-container pt-8 lg:mb-12">
     <Link to="contact" smooth={true} duration={500} Contactclass="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
           Contact us Today
             <span className="group-hover:rotate-90 duration-300">
             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
            </span>
            
          </Link>
        </div>
    </div>
              </span>
  
              <span id="resource-id" className='my-2 align-middle lg:pt-20 lg:pl-6 rounded hover:border-blue-600 duration-300'>
              <span className="lg:flex-1 lg:mx-8">
           <img id="home_pic-1" className="rounded-bl-[150px] lg:w-[780px] lg:-mt-12 lg:pb-18 mx-auto" src={SolutionsPic1} alt="logo"/>
              </span>
              </span>

              <span id="resource-id" className='my-2 lg:-ml-2 lg:mt-20 pt-1 align-middle p-2'>

<span className="className=lg:flex-1 lg:mx-12">
<img id="home_pic-2" className="rounded-br-[150px] lg:w-[780px] mx-auto" src={SolutionsPic5} alt="logo"/>
</span>
    </span>

    <div id="solutions_main" className="lg:flex-1 lg:pt-2 lg:my-auto mx-auto lg:pl-36">
<h3 id="home_h4-r" className="lg:text-2xl font-bold text-[#000000] mx-auto">Mortgage coming up for 
renewal?</h3>
<p id="home_p" className="text-[#000000] pr-4 pb-2 lg:my-2 max-w[600px]">Now is the perfect time to start your 
application</p>
<ul class="solution-list"> 
  <li>
       <p id="home_p-bottom" className="text-[#000000]pr-4 lg:my-2 max-w[500px] items-center">You have up to 120 days prior to 
your maturity date to shop around 
and secure a better rate without 
paying any heavy penalties.</p>
   </li>
   <li>
      <p id="home_p-bottom" className="text-[#000000]pr-4 lg:my-2 max-w[500px] items-center">Reach out to me so we can look for 
a better product and rate out there 
at the time of your renewal. This 
could put more money into your 
pocket and not the banks.</p>
   </li>
   
</ul>
<div className="btn-container pt-8 pb-8">
<a id="consult_btn" href="ttps://velocityapp.newton.ca/public/#/clientJourney/slides/home?shortCode=1ljh3pwduz0d4&lang=en-ca" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-2 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
   Start Your Application Today
   <span className="group-hover:rotate-90 duration-300">
   <HiArrowNarrowRight className="ml-3 display: inline-block" />
  
  </span>
  
  </a>
</div>


    </div>

        <div name="solutions" className="lg:mx-auto lg:px-8 sm: px-8 lg:flex lg:text-left lg:w-[800px]">
 
     <div div id="solutions_main" className="lg:flex-1 lg:my-auto mx-auto lg:pl-12 sm:mx-8">
     <h1 id="home_h4" className="lg:text-2xl font-bold text-[#000000] pb-2 mx-auto" >Any Questions?</h1>    <p id="home_p-bottom">I'm here to help answer any questions you may have. Learn more about mortgages by checking the Frequently asked Questions section</p>
  
     <div className="btn-container pt-8 pb-20">
     <Link to="faq" smooth={true} duration={500} class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-4 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
            Visit FAQ
             <span className="group-hover:rotate-90 duration-300">
             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
             </span>
            
             </Link>
             </div>
     </div>
    </div>
      </div>
      </div>
    )
  }
  
  export default Solutions

// const Solutions = () => {
//   return (
//     <div id="solutions_body" name="solutions" className="w-full pt-16 mt-16 h-4/6 bg-[#f0ebe1]">
//     {/* container */}
//     <div className="lg:mx-auto lg:px-8 lg:flex">
//     <div id="solutions_main" className="lg:flex-1 lg:my-auto mx-auto lg:pl-64 sm:mx-8">
//         <h3 id="home_h4" className="lg:text-2xl font-bold text-[#000000] mx-auto">What solutions do we offer?</h3>
//         <p id="home_p" className="text-[#000000] pr-4 pb-2 lg:my-2 max-w[600px]">We can help with any of your purchasing needs:</p>
//         <ul class="solution-list"> 
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Pre-Approvals</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">First-Time Homebuyers</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">New to Canada</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Growing Your Investment Portfolio</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Cottages & Second Home</p>
//             </li>
//         </ul>
//     <div className="btn-container pt-8">
//     <a id="consult_btn" href="https://velocity-app.newton.ca/public/#/clientJourn" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
//             Apply Now
//             <span className="group-hover:rotate-90 duration-300">
//             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
//             </span>
            
//             </a>
//     </div>
        
     
//     </div>
//     <span className="className=lg:flex-1 lg:my-20 -mx-8">
//     <img id="home_pic" className="rounded-l-full lg:w-[680px] mx-auto" src={SolutionsPic1} alt="logo"/>
//     </span>
    
//     </div>

//     <div className="lg:mx-auto lg:px-8 lg:flex">
//     <span className="className=lg:flex-1 lg:my-20 -mx-8">
//     <img id="home_pic" className="rounded-r-full lg:w-[680px] mx-auto" src={SolutionsPic2} alt="logo"/>
//     </span>
//     <div id="solutions_main" className="lg:flex-1 lg:my-auto mx-auto lg:pl-64 sm:mx-8">
//         <h3 id="home_h4" className="lg:text-2xl font-bold text-[#000000] mx-auto">Refinancing your Mortgage?</h3>
//         <p id="home_p" className="text-[#000000] pr-4 pb-2 lg:my-2 max-w[600px]">Let's review your options:</p>
//         <ul class="solution-list"> 
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Exploring lower rates</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Financing a home renovation</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Building better credit and improving monthly cashflow</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Leveraging home equity to grow your investment portfolio</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Cottages & Second Home</p>
//             </li>
//         </ul>
//     <div className="btn-container pt-8 pb-8">
//     <a id="consult_btn" href="https://go.oncehub.com/Anastasiia" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
//             Book a Meeting
//             <span className="group-hover:rotate-90 duration-300">
//             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
//             </span>
            
//             </a>
//     </div>
        
     
//     </div>

    
//     </div>

//     <div className="lg:mx-auto lg:px-8 lg:flex">
//     <div id="solutions_main" className="lg:flex-1 lg:my-auto mx-auto lg:pl-36 sm:mx-8">
//         <h3 id="home_h4" className="lg:text-2xl font-bold text-[#000000] mx-auto">Need an alternative solution that 
// can’t be found at the bank?</h3>
//         <p id="home_p" className="text-[#000000] pr-4 pb-2 lg:my-2 max-w[600px]">You 
// are in the right place. We have access to numerous 
// products for:</p>
// {/* <p id="home_p" className="text-[#000000] pr-4 pb-2 lg:my-2 max-w[600px]">We have access to numerous 
// products for:</p> */}
//         <ul class="solution-list"> 
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center"> Self-Employed professionals</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center"> Clients with challenged credit</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center"> Access to alternative and private
// lenders for any type of life situation</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center"> Equity-based lending</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center"> Reverse Mortgage solutions</p>
//             </li>
//         </ul>
//     <div className="btn-container pt-8">
//     <a id="consult_btn" href="https://go.oncehub.com/Anastasiia" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
//             Contact us today
//             <span className="group-hover:rotate-90 duration-300">
//             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
//             </span>
            
//             </a>
//     </div>
        
     
//     </div>
//     <span className="className=lg:flex-1 lg:my-20 -mx-8">
//     <img id="home_pic" className="rounded-l-full lg:w-[580px] mx-auto" src={SolutionsPic3} alt="logo"/>
//     </span>
    
//     </div>

//     <div className="lg:mx-auto lg:px-8 lg:flex">
//     <span className="className=lg:flex-1 lg:my-20 -mx-8">
//     <img id="home_pic" className="rounded-r-full lg:w-[680px] mx-auto" src={SolutionsPic4} alt="logo"/>
//     </span>
//     <div id="solutions_main" className="lg:flex-1 lg:my-auto mx-auto lg:pl-24 sm:mx-8">
//         <h3 id="home_h4" className="lg:text-2xl font-bold text-[#000000] mx-auto">Mortgage coming up for 
// renewal?</h3>
//         <p id="home_p" className="text-[#000000] pr-4 pb-2 lg:my-2 max-w[600px]">Now is the perfect time to start your 
// application!</p>
//         <ul class="solution-list"> 
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">You have up to 120 days prior to 
// your maturity date to shop around 
// and secure a better rate without 
// paying any heavy penalties.</p>
//             </li>
//             <li>
//                 <p id="home_p-bottom" className="text-[#000000] py-2 pr-4 lg:my-2 max-w[500px] items-center">Reach out to me so we can look for 
// a better product and rate out there 
// at the time of your renewal. This 
// could put more money into your 
// pocket and not the banks.</p>
//             </li>
//         </ul>
//     <div className="btn-container pt-8 pb-8">
//     <a id="consult_btn" href="https://velocityapp.newton.ca/public/#/clientJour
// ney/slides/home?shortCode=1ljh3
// pwduz0d4&lang=en-ca" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
//             Start your application today
//             <span className="group-hover:rotate-90 duration-300">
//             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
//             </span>
            
//             </a>
//     </div>
        
     
//     </div>

    
//     </div>
//     <div name="solutions" className="lg:mx-auto lg:px-8 lg:flex">
 
//     <div div id="solutions_main" className="lg:flex-1 lg:my-auto mx-auto lg:pl-36 sm:mx-8">
//     <h1 id="home_h4" className="lg:text-2xl font-bold text-[#000000] pb-2 mx-auto" >Any Questions?</h1>
//     <p id="home_p-bottom">I'm here to help answer any questions you may have. Learn more about mortgages by checking the Frequently asked Questions section</p>
  
//     <div className="btn-container pt-8 pb-20">
//     <a id="consult_btn" href="https://velocityapp.newton.ca/public/#/clientJour
// ney/slides/home?shortCode=1ljh3
// pwduz0d4&lang=en-ca" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-5 mb-2  border border-blue-600 hover:border-transparent duration-300 rounded-full">
//             Visit FAQ
//             <span className="group-hover:rotate-90 duration-300">
//             <HiArrowNarrowRight className="ml-3 display: inline-block" />
            
//             </span>
            
//             </a>
//             </div>
//     </div>
//     </div>

// </div>
//   )
// }

// export default Solutions