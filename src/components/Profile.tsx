import React from "react";


const Profile = () => {
  return (
    <div className="container">
      <h4 className="text-center">プロフィール</h4>
      <img className="" src="/img_profile.jpg" />
      <h5>@teleriaquque</h5>
      <p>
        猫雑貨・猫おもちゃ、その他ハンドメイド
        時々農家になります。
      </p>
      <div className="flex">
        <img src="sns_twitter.png"/>
        <img src="sns_insta.png" />
      </div>
    </div>
  );
}


export default Profile;