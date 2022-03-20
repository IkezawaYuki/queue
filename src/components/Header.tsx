import React from "react";

const Header = () => {
  return (
    <>
      <img className="w-full h-52 bg-repeat" src="bg_top_header.jpg" alt="" />
      <ul className="py-6 bg-orange-100 flex justify-center">
        <li><a className="mx-4 text-xl" href="#"><img className="mb-1 mx-1 inline" src="ico_paw.svg" alt="" />トップページ</a></li>  
        <li><a className="mx-4 text-xl" href="#"><img className="mb-1 mx-1 inline" src="ico_paw.svg" alt="" />商品一覧</a></li>  
        <li><a className="mx-4 text-xl" href="#"><img className="mb-1 mx-1 inline" src="ico_paw.svg" alt="" />ねこブログ</a></li>  
        <li><a className="mx-4 text-xl" href="#"><img className="mb-1 mx-1 inline" src="ico_paw.svg" alt="" />ねこ店員紹介</a></li>  
        <li><a className="mx-4 text-xl" href="#"><img className="mb-1 mx-1 inline" src="ico_paw.svg" alt="" />よくあるご質問</a></li>  
        <li><a className="mx-4 text-xl" href="#"><img className="mb-1 mx-1 inline" src="ico_paw.svg" alt="" />お問合せ</a></li>  
      </ul>
    </>
  )
}

export default Header;