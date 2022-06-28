import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function TestPage() { // javascript 안에서 html 바로 쓸수 있음. 
                    // 다른점 className 으로 씀/ {class:~~} 이런거 못씀
  return (
    <main> 
      <title>테스트</title>
      <h1>테스트 페이지 입니다.</h1>
      <p>이미지 테스트</p>
      <div>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/byebye.jpg"
      />
      </div>

    </main>
  );
}

export default TestPage;