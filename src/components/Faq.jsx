import React from 'react'
import { useState } from 'react';


function Faq() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const data = [
        {
            Question: 'How much can I afford to pay for a home?',
            answer: "To determine 'affordability' you will first need to know your taxable income along with the amount of any debt outstanding and the monthly payments. Assuming it is your principal residence you are purchasing, calculate 32% of your income for use toward a mortgage payment, property taxes and heating costs. If applicable, half of the estimated monthly condominium maintenance fees will also be included in this calculation. Second, calculate 40% of your taxable income and deduct all of your monthly debt payments, including car loans, credit cards, lines of credit payments. The lesser of the first or second calculation will be used to help determine how much of your income may be used towards housing related payments, including your mortgage payment. These calculations are based on lenders' usual guidelines. In addition to considering what the ratios say you can afford, make sure you calculate how much you think you can afford. If the payment amount you are comfortable with is less than 32% of your income you may want to settle for the lower amount rather than stretch yourself financially. Make sure you don't leave yourself house poor. Structure your payments so that you can still afford simple luxuries.",
        },
        {
            Question: 'What is a home inspection and should I have one done?',
            answer: "A home inspection is a visual examination of the property to determine the overall condition of the home. In the process, the inspector should be checking all major components (roofs, ceilings, walls, floors, foundations, crawl spaces, attics, retaining walls, etc.) and systems (electrical, heating, plumbing, drainage, exterior weather proofing, etc.). The results of the inspection should be provided to the purchaser in written form, in detail, generally within 24 hours of the inspection. A pre-purchase home inspection can add peace of mind and make a difficult decision much easier. It may indicate that the home needs major structural repairs which can be factored into your buying decision. A home inspection helps remove a number of unknowns and increases the likelihood of a successful purchase.",
        },
        {
            Question: 'What is the minimum down payment needed for a home?',
            answer: "A minimum down payment of 5% is required to purchase a home, subject to certain maximum price restrictions. In addition to the down payment, you must also be able to show that you can cover the applicable closing costs (i.e. legal fees and disbursements, appraisal fees and a survey certificate, where applicable). Regardless of the amount of your down payment, at least 5% of it must be from your own cash resources or a gift from a family member. It cannot be borrowed. Lenders will generally accept a gift from a family member as an acceptable down payment provided a letter stating it is a true gift, not a loan, is signed by the donor. Where the mortgage loan insurance is provided by Canada Mortgage and Housing Corporation (CMHC), the gift money must be in the your possession before the application is sent in to CMHC for approval. Mortgages with less than 20% down must have mortgage loan insurance provided by either CMHC or GE.",
        },
        {
            Question: 'What is mortgage loan insurance?',
            answer: "Mortgage loan insurance is insurance provided by Canada Mortgage and Housing Corporation (CMHC), a crown corporation, and GE Capital Mortgage Insurance Company, an approved private corporation. This insurance is required by law to insure lenders against default on mortgages with a loan to value ratio greater than 80%. The insurance premiums, ranging from .50% to 3.75%, are paid by the borrower and can be added directly onto the mortgage amount. This is not the same as mortgage life insurance.",
        },
        {
            Question: 'What is a conventional mortgage?',
            answer: "A conventional mortgage is usually one where the down payment is equal to 20% or more of the purchase price, a loan to value of or less than 80%, and does not normally require mortgage loan insurance.",
        },
        {
            Question: 'How does bankruptcy affect qualification for a mortgage',
            answer: "Depending on the circumstances surrounding your bankruptcy, generally some lenders would consider providing mortgage financing.",
        },
        {
            Question: 'How will child support affect mortgage qualification?',
            answer: "Where child support and alimony are paid by you to another person, generally the amount paid out is deducted from your total income before determining the size of mortgage you will qualify for. Where child support and alimony are received by you from another person, generally the amount paid may be added to your total income before determining the size of mortgage you will qualify for, provided proof of regular receipt is available for a period of time determined by the lender.",
        },
        {
            Question: 'Can I use gift funds as a down payment?',
            answer: "Most lenders will accept down payment funds that are a gift from family as an acceptable down payment. A gift letter signed by the donor is usually required to confirm that the funds are a true gift and not a loan. where the mortgage requires mortgage loan insurance, Canada mortgage and housing corporation requires the gift money to be in the purchaser's possession before the application is sent in to them for approval. where mortgage loan insurance is provided by GE Capital this is not a requirement. See 'what is mortgage loan insurance?' for further information.",
        },
        {
            Question: 'What is a pre-approved mortgage?',
            answer: "A pre-approved mortgage provides an interest rate guarantee from a lender for a specified period of time (usually up to 120 days) and for a set amount of money. The pre-approval is calculated based on information provided by you and is generally subject to certain conditions being met before the mortgage is finalized. Conditions would usually be things like 'written employment and income confirmation' and 'down payment from your own resources', for example. Most successful real estate professionals will want to ensure you have a pre-approved mortgage in place before they take you out looking for a home. This is to ensure that they are showing you property within your affordable price range. In summary, a pre-approved mortgage is one of the first steps a home buyer should take before beginning the buying process.",
        },
        {
            Question: 'Should I wait for my mortgage to mature?',
            answer: "Lenders will often guarantee an interest rate to you as much as 120 days before your mortgage matures. And, as long as you are not increasing your mortgage, they will cover the costs of transferring your mortgage too. This means a rate promised well in advance of your maturity date, thus eliminating any worries of higher rates. And if rates drop before the actual maturity rate, the new lender will usually adjust your interest rate lower as well. Most lenders send out their mortgage renewal notices offering existing clients their posted interest rates. The rate you are being offered is usually not the best one. Always investigate the possibility of a lower interest rate with the lender or another lender. If you don't you may end up paying a much higher interest rate on your renewing mortgage than you need to.",
        },
        {
            Question: 'What is a down payment?',
            answer: "Very few home buyers have the cash available to buy a home outright. Most of us will turn to a financial institution for a mortgage the first step in a potentially long-standing relationship. But even with a mortgage, you will need to raise the money for a down payment. The down payment is that portion of the purchase price you furnish yourself. The amount of the down payment (which represents your financial stake, or the equity in your new home) should be determined well before you start house hunting. The larger the down payment, the less your home costs in the long run. With a smaller mortgage, interest costs will be lower and over time this will add up to significant savings.",
        },
        {
            Question: 'How can you acquire a home with as little as 5% down?',
            answer: "Most lenders now offer insured mortgages for both new and resale homes with lower down payment requirements than conventional mortgages - as low as 5%. Low down payment mortgages must be insured to cover potential default of payment, and their carrying costs are therefore higher than a conventional mortgage because they include the insurance premium. With all low down payment insured mortgages, you are responsible for: :appraisal and legal fees :an application fee for the insurance :the payment of the mortgage default insurance premium (although the amount of the premium may be added to the mortgage amount).",
        },
        {
            Question: 'How can you pay off your mortgage sooner?',
            answer: "There are ways to reduce the number of years to pay down your mortgage. You'll enjoy significant savings by: Selecting a non-monthly or accelerated payment schedule Increasing your payment frequency schedule Making principal prepayments Making Double-Up Payments Selecting a shorter amortization at renewal",
        },
        {
            Question: 'How can you use your RRSP to help you buy your first home?',
            answer: "Today, about 50% of first-time home buyers use their RRSP savings to help finance a down payment. If you are a first-time home buyer, the Home Buyers Plan (HBP) allows you to withdraw money from your Registered Retirement Savings Plan (RRSP) tax-free to make your down payment. The HBP is administered by the Canada Revenue Agency (CRA). There are certain conditions you must meet to be eligible for the HBP. For more information, contact CRA at www.cra.gc.ca. How much can you withdraw? - You can withdraw up to $25,000 from your RRSP - If you buy the home together with your spouse, partner, or someone else, each of you can withdraw up to $25,000, for a total of up to $50,000. - The withdrawal from your RRSP does not need to be included in your income on your annual income tax return, and no tax is taken off the money you withdraw. What is the payback period? - You don't have to start paying back the money to your RRSP until two years after the purchase of the home. - You must pay back all withdrawals from your RRSP within 15 years by making RRSP deposits each year, starting the second year following your withdrawal. CRA will determine what your minimum yearly repayment will be and will notify you once you need to start repaying the amount. - If you do not repay the amount due in a given year, it is included in your taxable income for that year and you'll have to pay income tax on this amount. source: Financial Consumer Agency of Canada",
        },
        {
            Question: 'What should the length of my mortgage term be?',
            answer: "The length of mortgage terms varies widely - from six months right up to 10 years. As a rule of thumb, the shorter the term, the lower the interest rate the longer the term, the higher the rate. While four or five year mortgages are what most home buyers typically choose, you may consider a short-term mortgage if you have a higher tolerance for risk, if you have time to watch rates or are not prepared to make a long-term commitment right now. Before selecting your mortgage term, we suggest you answer the following questions: 1. Do you plan to sell your house in the short-term without buying another? If so, a short mortgage term may be the best option. 2. Do you believe that interest rates have bottomed out and are not likely to drop more? If that's the case, a long mortgage term may be the right choice for you. Similarly, if you think rates are currently high, you may want to opt for a short to medium length mortgage term hoping that rates drop by the time your term expires. 3. Are you looking for security as a first-time home buyer? Then you may prefer a longer mortgage term, so that you can budget for and manage your monthly expenses. 4. Are you willing to follow interest rates closely and risk their being increased mortgage payments following a renewal? If that's the case, a short mortgage term may best suit your needs.",
    
        },
        {
            Question: 'What are the monthly costs of owning a home?',
            answer: "Needless to say, you'll have financial responsibilities as a home owner. Some of them, like taxes, may not be billed monthly, so do the calculations to break them down into monthly costs. Below you will find a list of these expenses. The Mortgage Payment For most home buyers, this is the largest monthly expense. The actual amount of the mortgage payment can vary widely since it is based on a number of variables, such as mortgage term or amortization. Property Taxes Property tax can be paid in two ways - remitted directly to the municipality by you, in which case you may be required to periodically show proof of payment to your financial institution; or paid as part of your monthly mortgage payment. School Taxes In some municipalities, these taxes are integrated into the property taxes. In others, they are collected separately and are payable in a single lump sum, usually due at the end of the current school year. Utilities As a home owner, you'll be responsible for all utility bills including heating, gas, electricity, water, telephone and cable. Maintenance and Upkeep You will also have to cover the cost of painting, roof repairs, electrical and plumbing, walks and driveway, lawn care and snow removal. A well-maintained property helps to preserve your home's market value, enhances the neighbourhood and, depending on the kind of renovations you make could add to the worth of your property.",
    
        },
        {
            Question: 'Should you go with a short or long-term mortgage?',
            answer: "A longer-term mortgage is worth considering if you have a busy life and don't have time to watch mortgage rates. Our 4, 5 and 7-year mortgages let you take advantage of today's rates, while enjoying long-term security knowing the rate you sign up for is a sure thing. If you want to keep your mortgage flexible right now, you can explore a shorter-term mortgage that usually allows you to take advantage of lower rates and save.",
    
        },
        {
            Question: 'What is a fixed rate mortgage?',
            answer: "The interest rate on a fixed-rate mortgage is set for a pre-determined term - usually between 6 months to 25 years. This offers the security of knowing what you will be paying for the term selected.",
    
        },
        {
            Question: 'What is a variable rate mortgage?',
            answer: "A mortgage in which payments are fixed for a period of one to two years although interest rates may fluctuate from month to month depending on market conditions. If interest rates go down, more of the payment goes towards reducing the principal; if rates go up, a larger portion of the monthly payment goes towards covering the interest. Open variable rate mortgages allow prepayment of any amount (with certain minimums) on any payment date.",
        },
    ]

    return (
        <div name="faq" className="faq_wrapper"> 

            <div className="accordion"> 
            <h2 className='lg:text-2xl font-bold text-center lg:pt-20 py-2'>Frequently Asked Questions</h2>
        <p className='text-center pb-6'>Curious to learn more? We love that about you!</p>
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={()=> toggle(i)}>
                            <h3 className="font-bold">{item.Question}</h3>
                            <span className="text-2xl">{selected === i ? '-' : '+'}</span>
                        </div>
                        <div id="content" className={selected === i ? 'content show' : 'content' }>{item.answer}</div>
                        </div>
                ))}
            </div>

        </div>
    )
}

export default Faq