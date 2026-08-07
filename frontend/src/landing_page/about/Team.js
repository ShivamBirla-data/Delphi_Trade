import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="Media/img/ShivamBirla.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Shivam Birla</h4>
          <h6></h6>
        </div>
        <div className="col-6 p-3 text-center">
          <img
            src="Media/img/SatyamGupta.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Satyam Gupta</h4>
          <h6></h6>
        </div>
      </div>
         <div className="text-center fs-6 p-3" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
          <p>
           Satyam and Shivam bootstrapped and founded Delphi Trade with the vision of making stock market investing and trading simple, secure, and accessible for everyone. Their goal is to empower users with a modern trading platform that combines powerful technology with an intuitive user experience.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          
          <p>
            Connect on <a href="/">Home</a> 
            
          </p>
        </div>
    </div>
    
  );
}

export default Team;