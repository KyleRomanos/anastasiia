import React from 'react'
import { useState } from 'react';
import Faq from './Faq';
import Calculators from './Calculators';
import Links from './Links';

function Resources() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const resourceData = [
        {
            Question: 'Frequently Asked Questions',
            answer: <Faq />,
        },
        {
            Question: 'Mortgage Calculators',
            answer: <Calculators />,
        },
        {
            Question: 'Useful Mortgage Links',
            answer: <Links />,
        },
    ]

    return (
        <div name="resources" className="faq_wrapper"> 

            <div className="accordion lg:px-2"> 
            <h2 className='lg:text-4xl font-bold text-center pt-20 py-2'>Additional Resources</h2>
       
                {resourceData.map((item, i) => (
                    <div className="resourceItem">
                        <div className="title" onClick={()=> toggle(i)}>
                            <h4 className="font-bold mx-auto">{item.Question}</h4>
                            
                            {/* <span className="text-2xl pl-6 lg:pr-2">{selected === i ? '-' : '+'}</span> */}
                        </div>
                        <div id="content" className={selected === i ? 'content show' : 'content' }>{item.answer}</div>
                        </div>
                ))}
            </div>

        </div>
    )
}

export default Resources