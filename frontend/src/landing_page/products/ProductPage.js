import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imgURL="media/img/kite.png"
        productName="Kite"
        productDescription="Our ultra-fas flagship trading platform with steaming with market data, advanced charts, an elegant UI, and more. Enjoy the Kite Experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""/>

        <RightSection imgURL="media/img/console.png"
        productName="Console"
        productDescription="The central dashboard for your Delphi account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        />

         <LeftSection imgURL="media/img/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free delivered direclty to your Demat account. Enjoy the investment expressions on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""/>

        <RightSection imgURL="media/img/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experience with our super simple HTTP/JSON APIs. if you are a startup, build your investment app and showcase it to our clientbase"
        learnMore=""
        />

         <LeftSection imgURL="media/img/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage andd illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""/>

        <p className='text-center'>
        Want to know more about our Technology stack? Check out the Delphi.tech blog
        </p>

        <Universe/>
        </>
     );
}

export default ProductPage;