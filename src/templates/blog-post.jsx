import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyLayout from "../components/MyLayOut"
import '../design/css/Blog.scss'
import Utterances from "../components/Structure/Comment/Utterances"
import { Card, Tag,Button } from 'antd'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const Tags = post.frontmatter.tags;

  return (
    <>
      <MyLayout banner={<div className="AboutBanner"></div>}>
        <div className="postTitle">
          {post.frontmatter.title}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="section"
        />
        <nav className="postNav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              alignContent:"center",
              listStyle: `none`,
              padding: "10px",
            }}
          >
            <li>
              {previous && (
                <Button shape="round">
                  <Link to={previous.fields.slug} rel="prev">
                  <FiChevronLeft style={{
                    paddingTop:"3px"
                  }}/> 
                    {/* {previous.frontmatter.title} */}이전 포스트
                </Link>
                </Button>
                
              )}
            </li>
            <li>
              {next && (
                <Button shape="round">
                  <Link to={next.fields.slug} rel="next">
                  {/* {next.frontmatter.title}  */}다음 포스트<FiChevronRight style={{
                    paddingTop:"3px"
                  }}/>
                </Link>
                </Button>
                
              )}
            </li>
          </ul>
          <div className="Fetured">
            Fetured Tags
            <div>
              {Tags.map((v, i) => {
                return (<Tag style={{
                  marginRight: "3px"
                }} key={v}>{v}</Tag>)
              })}
            </div>
          </div>
        </nav>
        <Utterances repo='Rudezoo/Rudz' theme='github-light' />
      </MyLayout>
    </>

    /* <Layout location={location} title={siteTitle}>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
    <article
      className="blog-post"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
      </header>
       <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />
      <hr />
      <footer>
        <Bio />
      </footer>
    </article>
     <nav className="blog-post-nav">
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  </Layout>  */
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
