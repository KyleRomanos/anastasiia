import React from 'react'
import {Link} from 'react-scroll';
import {FaCalculator} from 'react-icons/fa';
const Calculators = () => {
  return (

    <div name="calculators" className='max-w-[1000px] mx-auto lg:pt-16 p-4 flex-col justify-center w-full h-full'>
        <h2 className='lg:text-2xl font-bold text-center pt-4 pb-2 align-middle'>Mortgage Calculators</h2>
        <p className='pb-2'>What is a mortgage going to cost you each month?  Give me a call and I will work out the numbers for you and email them over OR try one of the calculators below to get a quick idea.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {/* <ul className='align-middle font-bold'> */}
            <span id="resource-id" className='my-2 align-middle border p-2 pt-4 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.roarmortgage.com/calculators/maximum_mortgage.html" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Maximum Mortgage
                <FaCalculator className="fill-current display: inline ml-1"/>
                </a>
                <p className='px-5 mt-2'>Calculate the maximum mortgage amount you qualify for based on your income. A great tool for buyers.</p>
            </span>

            <span id="resource-id" className='my-2 align-middle border p-2 pt-4 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.roarmortgage.com/calculators/mortgage_analyzer.html" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Mortgage Analyzer
                <FaCalculator className="fill-current display: inline ml-1"/>
                </a>
                <p className='px-5 mt-2'>Calculate your mortgage payment. Create an amortization schedule. Discover what you will owe in 5 years.</p>
            </span>

            <span id="resource-id" className='my-2 align-middle border p-2 pt-4 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.roarmortgage.com/calculators/payment_analyzer.html" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Payment Analyzer
                <FaCalculator className="fill-current display: inline ml-1"/>
                </a>
                <p className='px-5 mt-2'>Calculate your mortgage payment for several payment frequencies (weekly, bi-weekly, semi-monthly and monthly).</p>
            </span>

            <span id="resource-id" className='my-2 align-middle border p-2 pt-4 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.roarmortgage.com/calculators/prepayment_analyzer.html" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Prepayment Analyzer
                <FaCalculator className="fill-current display: inline ml-1"/>
                </a>
                <p className='px-5 mt-2'>Calculate your mortgage payment. Discover how many years you will shorten your amortization and how much interest savings you will realize by making a prepayment (lump sum) on your mortgage.</p>
            </span>

            <span id="resource-id" className='my-2 align-middle border p-2 pt-4 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.roarmortgage.com/calculators/rentbuy.html" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Rent or Buy Analyzer
                <FaCalculator className="fill-current display: inline ml-1"/>
                </a>
                <p className='px-5 mt-2'>Rent or Buy Analyzer
Compare the financial advantage of renting and buying based on your current monthly rent, funds towards your down payment and your desired monthly payment if you purchased a home.</p>
            </span>
            {/* </ul> */}
            </div>
    </div>
 
  )
}

export default Calculators

const data = [
    {
        Question: 'Maximum Mortgage',
        answer: "Calculate the maximum mortgage amount you qualify for based on your income. A great tool for buyers.",
        url: 'https://www.roarmortgage.com/calculators/maximum_mortgage.html',
    },
    {
        Question: 'Mortgage Analyzer',
        answer: "Calculate your mortgage payment. Create an amortization schedule. Discover what you will owe in 5 years.",
        url: 'https://www.roarmortgage.com/calculators/mortgage_analyzer.html',
    },

    {
        Question: 'Payment Analyzer',
        answer: "Calculate your mortgage payment for several payment frequencies (weekly, bi-weekly, semi-monthly and monthly).",
        url: 'https://www.roarmortgage.com/calculators/payment_analyzer.html',
    },
    {
        Question: 'Prepayment Analyzer',
        answer: "Calculate your mortgage payment. Discover how many years you will shorten your amortization and how much interest savings you will realize by making a prepayment (lump sum) on your mortgage.",
        url: 'https://www.roarmortgage.com/calculators/prepayment_analyzer.html',
    },
    {
        Question: 'Rent or Buy Analyzer',
        answer: "Compare the financial advantage of renting and buying based on your current monthly rent, funds towards your down payment and your desired monthly payment if you purchased a home.",
        url: 'https://www.roarmortgage.com/calculators/rentbuy.html',
    },
   
]