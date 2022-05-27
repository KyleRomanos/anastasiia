import React from 'react'
import {Link} from 'react-scroll';
import {FaQuestionCircle, FaCalculator, FaExternalLinkSquareAlt} from 'react-icons/fa';
const Resources = () => {
  return (
    <div name="resources" className='text-center h-5/6 lg:pb-36 w-full align-middle'>
        <h2 className='lg:text-2xl font-bold text-center lg:pt-20 pb-2 align-middle'>Additional Resources</h2>

        <ul className='align-middle font-bold'>
            <li id="resource-id" className='my-6 align-middle'>
              <Link to="calculators" smooth={true} duration={500} className='bg-transparent my-6 hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-2 duration-300 rounded-full'>
                <span className="group-hover:rotate-90 duration-300">
                <FaCalculator className="fill-current display: inline mr-1"/>
                </span>
                   Mortgage Calculators
              </Link>
            </li>
         
            <li className="">
                <span className="group-hover:rotate-90 duration-300">
                <Link to="faq" smooth={true} duration={500} className='bg-transparent my-6 hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-2 duration-300 rounded-full'>
                <FaQuestionCircle className="fill-current display: inline mr-1"/>
                    Frequently Asked Questions</Link>
                </span> 
            </li>

            <li id="resource-id" className='my-6'>
              <Link to="links" smooth={true} duration={500} className='bg-transparent my-6 hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-2 duration-300 rounded-full'>
                <span className="group-hover:rotate-90 duration-300">
                <FaExternalLinkSquareAlt className="fill-current display: inline mr-1"/>
                </span>
                   Useful Links
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Resources