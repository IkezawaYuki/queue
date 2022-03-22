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

        <div className="w-10/12 mx-auto">
          <ul className="py-6 flex justify-center">
            <li><a className="bg-orange-100 mx-1 text-xl" href="#">トップページ</a></li>  
            <li><a className="mx-1 text-xl" href="#">商品一覧</a></li>  
            <li><a className="mx-1 text-xl" href="#">ねこブログ</a></li>  
            <li><a className="mx-1 text-xl" href="#">ねこ店員紹介</a></li>  
            <li><a className="mx-1 text-xl" href="#">よくあるご質問</a></li>  
            <li><a className="mx-1 text-xl" href="#">お問合せ</a></li>  
          </ul>
        </div>
        
      <Footer />
    </>
  )
}

export default Products;