import React from "react";

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
            <section>
              <h4>プロフィール</h4>
              <img src="/img_profile.jpg" />
              <h5>@teleriaquque</h5>
              <p>
                猫雑貨・猫おもちゃ、その他ハンドメイド
                時々農家になります。
              </p>
              <div>
                <img src="sns_twitter.png"/>
                <img src="sns_insta.png" />
              </div>
            </section>

            <Footer />
        </>
    )
}

export default Top;