import React from 'react'

function Hero() {
    return ( 
        <div className='container '>
        

        <div className='row text-center p-5 mt-5 border-bottom '>
            <h1>Pricing</h1>
            <h3 className='text-muted'>Free equity investment and flat 20 traday and F&O traders</h3>
            
        </div>
        <div className='row p-5 mt-5 text-center '>
     
        <div className='col-4 p-4 '>     
              <img src='media/img/pricingEquity.svg' /> 
              <h1 className='fs-4'>Free equity delivery</h1>
              <p>All equity delivery investments (NSE,BSE) are absolutely free - ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 p-4 '>
             <img src='media/img/intradayTrades.svg' /> 
              <h1 className='fs-4'>Intraday and F&O traders</h1>
              <p>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency and commodity trades.</p>
        </div>
         <div className='col-4 p-4 '>
                <img src='media/img/pricingEquity.svg' /> 
                <h1 className='fs-4'>Free direct MF</h1>
                <p>All direct mutual fund investment are absolutely free - ₹ 0 commissions & Dp charges. </p>
        </div>
        </div>

       </div>
     );
}

export default Hero;