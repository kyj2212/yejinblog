import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import {
  postname,
  postbox,
} from "../../components/Layout.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <div className={postbox}>
          <h2 className={postname}>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          </div>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;