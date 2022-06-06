import React from 'react'

const Links = () => {
  return (
    <div name="links" className='max-w-[1000px] mx-auto  p-4 flex-col justify-center w-full h-full'>
 
        <p className='pb-2 text-left'>Below you will find a wide variety of resources and information relating to the mortgage process. We're here to help and we encourage you to contact us if you have any questions.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {/* <ul className='align-middle font-bold'> */}
            <span id="resource-id" className='my-2 align-middle border p-2 pt-3 rounded hover:border-blue-600 duration-300'>
                <a href="http://www.equifax.ca/" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Equifax</a>
                <p className='px-5 mt-2'>Equifax compiles credit reporting data from many sources and creates a credit file that reflects your personal credit history including your FICO score</p>
            </span>

            <span id="resource-id" className='my-2 align-middle border p-2 pt-3 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.mpac.ca/" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>MPAC</a>
                <p className='px-5 mt-2'>Each year, the Municipal Property Assessment Corporation (MPAC) prepares an assessment roll for every Ontario municipality.</p>
            </span>

            <span id="resource-id" className='my-2 align-middle border p-2 pt-3 rounded hover:border-blue-600 duration-300'>
                <a href="http://www.cra-arc.gc.ca/menu-e.html" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Canada Revenue Agency</a>
                <p className='px-5 mt-2'>The Canada Revenue Agency (CRA) administers tax laws for the Government of Canada and for most provinces and territories.</p>
            </span>

            <span id="resource-id" className='my-2 align-middle border p-2 pt-3 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.transunion.ca/" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Trans Union</a>
                <p className='px-5 mt-2'>Trans Union Canada is another consumer credit reporting agency providing credit reporting services to Canadian consumers.</p>
            </span>
            <span id="resource-id" className='my-2 align-middle border p-2 pt-3 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.bankofcanada.ca/" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Bank of Canada</a>
                <p className='px-5 mt-2'>The Bank of Canada is the nation's central bank. It is responsible for Canada's monetary policy, bank notes, financial system and funds management.</p>
            </span>
            <span id="resource-id" className='my-2 align-middle border p-2 pt-3 rounded hover:border-blue-600 duration-300'>
                <a href="https://www.aicanada.ca/" className='bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-5 py-2 mb-4 border-transparent hover:border-transparent duration-300 rounded-full font-bold'>Appraisal Institute of Canada</a>
                <p className='px-5 mt-2'>Appraisal Institute of Canada is the premier real estate appraisal association in Canada.</p>
            </span>
            {/* </ul> */}
            </div>
    </div>
  )
}

export default Links