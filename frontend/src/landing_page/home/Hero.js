import React from 'react'
import { Link } from "react-router-dom";
function hero() {
    return (  
        <div className='container p-5 mb-10 bg-light'>
            <div className='row text-center m-100'>
               <img src='media/img/homeHero.png' alt='Hero Image' className='mb-5' />  
               <h1 className='mt-5'>Invert in Everthing</h1>
               <p>Online platform to invert in stocks, derivatives, mutual funds and more  </p>
               <Link to="/signup">
                    <button className='p-2 btn btn-primary fs-5 mb-5 signup-btn' style={{width:"20%",margin:"0 atuo"}} >Signup Now</button>
                </Link>
            </div>

        </div>
    );
}

export default hero;