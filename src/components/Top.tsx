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
            <h4 className="text-center">委託販売先</h4>

            <h4 className="pt-12 text-center">プロフィール</h4>
            <img className="mx-auto w-32" src="/img_profile.jpg" />
            <h5 className="text-center">@teleriaquque</h5>
            <p className="w-48 mx-auto text-center">
              猫雑貨・猫おもちゃ、その他ハンドメイド
              時々農家になります。
            </p> 
            <div className="flex justify-center">
              <div><img className="my-10 mx-2 mx-auto w-16" src="sns_twitter.png"/></div>
              <div><img className="my-10 mx-2 mx-auto w-16" src="sns_insta.png" /></div>
            </div>

            <Footer />
        </>
    )
}

export default Top;