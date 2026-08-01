 import React from "react";
 import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"#FFF"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src="media/img/delphi.png" style={{width:"25%"}}  alt="Logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
            <form className="d-flex" role="search">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/about"}>
                  About
                </Link>
              </li>
             
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to={"/product"}>
                  Product
                </Link>
              </li>

               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/pricing"}>
                  Pricing
                </Link>
              </li>

               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/support"}>
                  Support
                </Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/signup"}>
                  SignUp
                </Link>
              </li>
            </ul>
            </div>
            </form>
          </div>
      </nav>
   
  );
}

export default Navbar;
