import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-4">
          <img src={imgURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
            <img src="media/img/googlePlay.svg" />
          </a>
          <a href={appStore}>
            <img src="media/img/appstore.svg" style={{marginLeft:"50px"}} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
