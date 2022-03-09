import React from "react";

import Profile from "./Profile";
import Footer from "./Footer";

const Top = () => {
    return (
        <>
            <h1>Top画面</h1>
            <div>
              <img src="/logo_top_header.svg" />
              <p>
                "Queue(クー)"は、フランス語で「しっぽ」という意味です。
                 猫にも人にも心地よいをモットーに、猫おもちゃ、雑貨
                 を作っています。           
              </p> 
            </div>
            <section>
              <img src="/bg_top_header.jpg" />
            </section>
            
            <Profile />
            <Footer />
        </>
    )
}

export default Top;