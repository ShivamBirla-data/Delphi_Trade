import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1>The Delphi Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          parther platforms
        </p>
      
      <div className="col-4 p-3 mt-5">
        <img src="media/img/smallcaseLogo.png" />
        <p className="text-muted">Thematic investment platform</p>
      </div>

      <div className="col-4 p-3 mt-5">
        <img style={{width:"80% "}} src="media/img/streakLogo.png" />
         <p className="text-muted">Aigo & strategy platform</p>
      </div>

      <div className="col-4 p-3 mt-5">
        <img style={{width:"80% "}} src="media/img/sensibullLogo.svg" />
         <p className="text-muted">Options trading platform</p>
      </div>
            <div className="col-4 p-3 mt-5" >
        <img style={{width:"80% "}} src="media/img/zerodhaFundhouse.png" />
        <p className="text-muted">Asset management</p>
      </div>

      <div className="col-4 p-3 mt-5" >
        <img src="media/img/goldenpiLogo.png"  />
        <p className="text-muted">Bonds trading platform</p>
        
      </div>

      <div className="col-4 p-3 mt-5">
        <img style={{width:"80% "}} src="media/img/dittoLogo.png" />
        <p className="text-muted">insurance platform</p>
      </div>
       <div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 atuo"}}>Signup Now</button>
        </div>
    </div>
    </div>
  );
}

export default Universe;
