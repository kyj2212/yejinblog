import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="yejin's Home Page">
      <p>예진이의 블로그~</p>
      <StaticImage
        alt="안녕히 계세요 여러분~ 전 이세상의 모든 굴레와 속박을 벗어던지고 제 행복을 찾아 떠납니다."
        src="../images/byebye.jpg"
      />
    </Layout>
  );
};

export default IndexPage;