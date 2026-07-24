import React from 'react'

function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
            
            <div className='p-5' id='supportWrapper'>
               <h5>Support Portal</h5>
               <a href='' style={{textDecoration:"none"}}>Track Tickets</a>
            </div>

            <div className='row p-5 m-3'>
                <div className='col-6 p-5 '>
                     <h1 className='fs-3'>Search for an answer or browser help topics to create a Tickets</h1>
                     <input placeholder='Eg. how do I activte F&O' /><br/>
                       <a href='' >Track Account Opening</a>
                         <a href='' >Track Segment activation</a>
                           <a href='' >Intraday margin</a>
                             <a href='' >Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                     <h1 className='fs-3'>Featured</h1>
                     <ol>
                        <li><a href='' >Current Takeovers and Delisting - July 2026</a></li>
                        <li> <a href=''>Latest Intraday leverages - MIS & CO</a></li>
                     </ol>   
                </div>
              
              
            </div>
            
       </section>
     );
}

export default Hero;