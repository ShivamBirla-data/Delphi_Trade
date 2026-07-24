import React from 'react'

function Footer() {
    return (
        <footer style={{backgroundColor:"rgb(250 250 250)"}}>
     <div className="container border-top mt-5" >
        <div className='row mt-5'>
            <div className='col'>
                <img src='media/img/delphi.png' style={{width:"30%"}}/>
                    <p>&copy; 2010-2026, Not Delphi Broking Ltd. <br/> All rights reserved.</p>
            </div>
            <div className='col'>
                <h3>Company</h3>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>About</a>   <br/>
                    <a href='' className='text-muted mb-5' style={{textDecoration:"none"}}>Product</a> <br/>
                    <a href='' className='text-muted mb-5' style={{textDecoration:"none"}}>Pricing</a> <br/>
                    <a href='' className='text-muted mb-5' style={{textDecoration:"none"}}>Referral programme</a> <br/>
                    <a href='' className='text-muted mb-5' style={{textDecoration:"none"}}>Carrer</a> <br/>
                    <a href='' className='text-muted mb-5' style={{textDecoration:"none"}}>Delphi.tech</a> <br/>
                    <a href='' className='text-muted mb-5' style={{textDecoration:"none"}}>Press & media</a> <br/>
                    <a href='' className='text-muted mb-5' style={{textDecoration:"none"}}>Delphi cares</a>

            </div>
            <div className='col'>
                <h3>Support</h3>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>Contact</a>   <br/>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>Support portal</a> <br/>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>Z-Connect blog</a> <br/>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>List of charges</a> <br/>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>Download & resources</a> 
            </div>
            <div className='col'>
                <h3>Account</h3>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>Open an account</a>   <br/>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>Fund transfer</a> <br/>
                    <a href='' className='text-muted mb-5'  style={{textDecoration:"none"}}>60 day chanllenge</a>     
            </div>

        </div>
        <div className='mt-5 fs-6 text-small ' style={{fontSize:"16px"}}>
        <p>Delphi Broking Ltd.: Member of NSE&BSE- SEBI Registration no.: CDSL:Depository services through delphi securities Pvt. Ltd. - SEBI Registration no.:  Commodity Trading through Delphi Commodities Pvt. Ltd. </p>
        <p>Investment in securities market are subject to market risks; read all the related documents carefully before investing. </p>
        </div>
     </div>
    </footer>
    );
}

export default Footer;