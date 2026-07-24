import React from 'react'

function Sats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>


                    <h2 className='fs-4 '>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore Customer trust Delphi with 3.5+ lakh crore worth of equity investments.</p>

                   
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification ", or annoying push notifications. High quality apps that you use at your pacce, the way you like.</p>


                    
                    <h2 className='fs-4'>The Delphi universe</h2>
                    <p className='text-muted'>Not just an app, nut a whole ecosystem. Our investments in 30+ fintech startup offer you tailored services specific to your needs.</p>


                   
                    <h2 className='fs-4 '>Do better with money</h2>
                    <p>With initiatives like Nudge and kill Switch, we don't just facilitate, nut actively help you do better with your money.</p>


                </div>
                <div className='col-6'>
                    <img src='media/img/ecosystem.png' style={{width:"90%"}}/>


                    <div className='text-center' >
                        <a className='mx-5' style={{textDecoration:"none"}} href=''>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Sats;