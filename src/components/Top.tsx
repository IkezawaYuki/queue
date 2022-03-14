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

            <div className="flex mx-48 mt-24">
              <div className="w-8"><img src="ico_cat.svg" alt="" /></div>
              <h4 className="py-4 w-1/2 ml-3 mr-24 text-3xl font-bold">お知らせ</h4>
              <div className="">
                <div className="py-4"><button className="bg-slate-800 text-white px-4 py-1 rounded">一覧へ</button></div>
              </div>
            </div>


            <div className="bg-amber-100">
              <h4 className="text-3xl pt-24 pb-12 font-bold text-center">委託販売先</h4>
              <p className="text-center">当店は現在以下の3店舗のレンタルボックスにて委託販売をさせていただいております。
  </p>
              <p className="pb-12 text-center">商品を実際に手にとってお確かめいただけますので、お近くの方はお気軽にお立ち寄り下さい。</p>
            
              <div className="flex justify-center py-6">  
                <div className=""><img src="img_rental_kuroneko_douhua.jpg" alt="" /></div>
                <div className="w-1/2">
                  <h4 className="ml-6 py-2 pl-4 text-xl font-bold bg-gray-900 text-white">台湾スイーツ豆花専門 黒猫豆花 様</h4>
                  <div className="mt-8 ml-6">
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">住所</p>
                      <p className="w-4/5">神奈川県川崎市高津区二子2丁目7-40　フォーレスト多摩川102</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">営業時間</p>
                      <p className="w-4/5">10:00-21:00（時短営業中は20:00まで）</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">定休日</p>
                      <p className="w-4/5">水曜日</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">website</p>
                      <p className="w-4/5">https://kuroneko-douhua.com/</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="flex justify-center py-6">  
                <div className=""><img src="img_rental_mayscafe.jpg" alt="" /></div>
                <div className="w-1/2">
                  <h4 className="ml-6 py-2 pl-4 text-xl font-bold bg-gray-900 text-white">May’s Cafe -ハンドメイド雑貨＆CAFE-  様</h4>
                  <div className="mt-8 ml-6">
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">住所</p>
                      <p className="w-4/5">東京都世田谷区太子堂5-17-20-1F</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">営業時間</p>
                      <p className="w-4/5">土日祝日11:00〜19:00のみ営業中</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">定休日</p>
                      <p className="w-4/5">水曜日</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">Instagram</p>
                      <p className="w-4/5">https://www.instagram.com/mays._.cafe/</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="flex justify-center py-6">  
                <div className=""><img src="img_rental_nekoshiki.jpg" alt="" /></div>
                <div className="w-1/2">
                  <h4 className="ml-6 py-2 pl-4 text-xl font-bold bg-gray-900 text-white">台湾スイーツ豆花専門 黒猫豆花 様</h4>
                  <div className="mt-8 ml-6">
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">住所</p>
                      <p className="w-4/5">神奈川県川崎市高津区二子2丁目7-40　フォーレスト多摩川102</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">営業時間</p>
                      <p className="w-4/5">10:00-21:00（時短営業中は20:00まで）</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">定休日</p>
                      <p className="w-4/5">水曜日</p>
                    </div>
                    <div className="flex my-2">
                      <p className="w-1/5 font-bold">website</p>
                      <p className="w-4/5">https://kuroneko-douhua.com/</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            

            <h4 className="text-3xl font-bold pt-24 text-center">プロフィール</h4>
            <img className="py-4 mx-auto w-32" src="/img_profile.jpg" />
            <h5 className="text-center font-bold pb-4">@teleriaquque</h5>
            <p className="w-96 mx-auto text-center">
              猫雑貨・猫おもちゃ、その他ハンドメイド
              時々農家になります。
            </p> 
            <div className="flex justify-center mb-16">
              <div><img className="my-10 mx-4 mx-auto w-16" src="sns_twitter.png"/></div>
              <div><img className="my-10 mx-4 mx-auto w-16" src="sns_insta.png" /></div>
            </div>

            <Footer />
        </>
    )
}

export default Top;