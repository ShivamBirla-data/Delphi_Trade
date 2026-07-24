import React from 'react'

function hero() {
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
               <img src='media/img/homeHero.png' alt='Hero Image' className='mb-5' />  
               <h1 className='mt-5'>Invert in Everthing</h1>
               <p>Online platform to invert in stocks, derivatives, mutual funds and more  </p>
               <div>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 atuo"}}>Signup Now</button>
                </div>
            </div>

        </div>
    );
}

export default hero;