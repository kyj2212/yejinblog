import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../../components/CodeBlock";

const BlogPost = ({ data }) => {

  const image =
  data.mdx.frontmatter.hero_image &&
  getImage(data.mdx.frontmatter.hero_image);

  
    return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.date}</p>

        {image && (
          <>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
          </>

        )}
        <hr />
        <MDXProvider
        components={{
          pre: CodeBlock,
        }}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
        <hr />

      </Layout>
    );
  };
  export const query = graphql`
    query ($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          hero_image_alt
          hero_image {
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        body
      }
    }
  `;
  export default BlogPost;