import React from "react";


const Footer = () => {
  return (
    <div className="bg-yellow-900 text-white">
      <img src="/logo_footer.svg" className="mx-auto pt-8 h-28 w-auto"/>
      <ul className="m-2 flex justify-center divide-x divide-solid">
        <li><a className="mx-4 text-xs" href="#">トップページ</a></li>  
        <li><a className="mx-4 text-xs" href="#">商品一覧</a></li>  
        <li><a className="mx-4 text-xs" href="#">ねこブログ</a></li>  
        <li><a className="mx-4 text-xs" href="#">ねこ店員紹介</a></li>  
        <li><a className="mx-4 text-xs" href="#">よくあるご質問</a></li>  
        <li><a className="mx-4 text-xs" href="#">お問合せ</a></li>  
      </ul>
      <ul className="flex justify-center pt-4 divide-x divide-solid">
        <li><a className="mx-4 text-xs" href="#">特定商取引法に関する表記</a></li>  
        <li><a className="mx-4 text-xs" href="#">プライバシーポリシー</a></li>  
      </ul>
      <div className="flex justify-center pt-12 text-xs pb-12">©️2022 yi quque</div>
    </div>
  )
}

export default Footer;