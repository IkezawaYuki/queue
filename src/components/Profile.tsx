import React from "react";


const Profile = () => {
  return (
    <div className="container">
      <h4 className="pt-12 text-center">プロフィール</h4>
      <img className="mx-auto w-32" src="/img_profile.jpg" />
      <h5 className="text-center">@teleriaquque</h5>
      <p className="text-center">
        猫雑貨・猫おもちゃ、その他ハンドメイド
        時々農家になります。
      </p>
      <div className="my-12 flex items-center justify-items-center">
        <img className="mx-auto w-24" src="sns_twitter.png"/>
        <img className="mx-auto w-24" src="sns_insta.png" />
      </div>
    </div>
  );
}


export default Profile;