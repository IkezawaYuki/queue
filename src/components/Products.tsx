import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Products = () => {
  return (
    <>
      <Header />
        <div><a href="/">ホーム</a>＞商品一覧</div>
        <div className="w-44 my-12 text-center mx-auto justify-center">
          <img className="mx-auto w-14" src="ico_paw02.svg" alt="" />  
          <div className="text-4xl font-bold my-2">商品一覧</div>
          <div className="text-xl my-2">PRODUCTS</div>
        </div>

        <div className="w-10/12 mx-auto border-b ">
          <ul className="pt-6 flex justify-center">
            <li><a className="bg-orange-700 text-white mx-1 rounded py-2 px-4 text-xl" href="#">すべて</a></li>  
            <li><a className="bg-orange-100 mx-1 rounded py-2 px-4 text-xl" href="#">レジンブローチ</a></li>  
            <li><a className="bg-orange-100 mx-1 rounded py-2 px-4 text-xl" href="#">猫用首輪</a></li>  
            <li><a className="bg-orange-100 mx-1 rounded py-2 px-4 text-xl" href="#">けりぐるみ</a></li>  
            <li><a className="bg-orange-100 mx-1 rounded py-2 px-4 text-xl" href="#">アクセサリー</a></li>  
            <li><a className="bg-orange-100 mx-1 rounded py-2 px-4 text-xl" href="#">その他の雑貨</a></li>  
          </ul>
        </div>
        
        <div className="flex justify-center">
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd001.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">【焼印付】爪とぎ型キーホルダー</h4>
              <p className="h-12 text-sm mt-4">可愛らしいミニチュアサイズの「猫の爪とぎ」型キーホルダー。木製ケースの裏面には猫シルエットの焼印付きでオシャレ！</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd002.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">肉球ブローチ（7個セット）</h4>
              <p className="h-12 text-sm mt-4">定番の肉球型のレジンブローチ（7個セット）です。</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd003.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">レース猫首輪（鈴付き）</h4>
              <p className="h-12 text-sm mt-4">アースカラーのレース＋アンティーク調の金具でシックな印象の猫首輪です。</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd004.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">【焼印付】爪とぎ型キーホルダー</h4>
              <p className="h-12 text-sm mt-4">可愛らしいミニチュアサイズの「猫の爪とぎ」型キーホルダー。木製ケースの裏面には猫シルエットの焼印付きでオシャレ！</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd005.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">肉球ブローチ（7個セット）</h4>
              <p className="h-12 text-sm mt-4">定番の肉球型のレジンブローチ（7個セット）です。</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd006.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">レース猫首輪（鈴付き）</h4>
              <p className="h-12 text-sm mt-4">アースカラーのレース＋アンティーク調の金具でシックな印象の猫首輪です。</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd007.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">【焼印付】爪とぎ型キーホルダー</h4>
              <p className="h-12 text-sm mt-4">可愛らしいミニチュアサイズの「猫の爪とぎ」型キーホルダー。木製ケースの裏面には猫シルエットの焼印付きでオシャレ！</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd008.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">肉球ブローチ（7個セット）</h4>
              <p className="h-12 text-sm mt-4">定番の肉球型のレジンブローチ（7個セット）です。</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
          <div className="mt-12 mx-3 border-2 border-solid border-orange-300">
            <div className="mx-6 mt-6 w-80">
              <img src="/dmy_pd009.jpg" alt="" />
              <h4 className="border-dotted mt-4 border-gray-300 border-b text-lg font-bold">レース猫首輪（鈴付き）</h4>
              <p className="h-12 text-sm mt-4">アースカラーのレース＋アンティーク調の金具でシックな印象の猫首輪です。</p>
              <div className="mt-8 ml-auto w-24 font-bold">1000円<span className="text-xs font-normal">(税込)</span></div>
              <div className="text-center py-2 border boader-solid border-green-600 rounded-md my-2"><a className="block" href="#">詳細を見る</a></div>
            </div>
          </div>
        </div>

        <div className="my-24 justify-center flex">
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">＜ 前へ</a>
          <a className="px-3 py-1 m-1 bg-orange-200 rounded" href="#">1</a>
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">2</a>
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">3</a>
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">4</a>
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">5</a>
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">6</a>
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">7</a>
          <a className="px-3 py-1 m-1 bg-orange-100 rounded" href="#">次へ ＞</a>
        </div>

      <Footer />
    </>
  )
}

export default Products;