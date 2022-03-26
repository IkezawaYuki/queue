import React from "react";
import Footer from "./Footer";
import Header from "./Header";


const Details = () => {
  return (
    <>
      <Header/>
        <div className="flex">
          <div>
            <div><img src="dmy_pd001.jpg" alt="" /></div>
            <div className="flex">
              <img className="w-24 h-24" src="dmy_pd001.jpg" alt="" />
              <img src="dmy_pd001_02.jpg" alt="" />
              <img src="dmy_pd001_03.jpg" alt="" />
            </div>
          </div>
          <div></div>
        </div>
      <Footer/>
    </>
  );
}


export default Details;