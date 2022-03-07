import React from "react";


const Footer = () => {
   
  return (
    <div className="container h-96 bg-amber-900">
      <img src="/logo_footer.svg" className="mx-auto h-12 w-auto"/>
      <ul className="flex justify-center">
        <li><a href="#">トップページ</a></li>  
        <li><a href="#">商品一覧</a></li>  
        <li><a href="#">ねこブログ</a></li>  
        <li><a href="#">ねこ店員紹介</a></li>  
        <li><a href="#">よくあるご質問</a></li>  
        <li><a href="#">お問合せ</a></li>  
      </ul>     
    </div>
  )
}

export default Footer;