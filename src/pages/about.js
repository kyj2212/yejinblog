
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import Layout from "../components/Layout";
import {Link,useStaticQuery,graphql} from "gatsby";

const AboutPage = () => {

  return (


    <Layout pageTitle = "Welcome to yejin's blog">


        <p>안녕하세요~! 😁</p>
        <p>&nbsp;</p>
        <p>열심히 공부하는 예진이의 개발 블로그입니다.</p>
        <p>개발은 처음이지만 열심히 적어보려고 합니다~</p>
        
        <div>
        <StaticImage
        alt="ogu 이미지 입니다."
        src="../images/ogu.jpg"
        />
        </div>

    
  </Layout>


  );
};


export default AboutPage;