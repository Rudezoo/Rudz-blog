import React from 'react';
import '../../../design/css/Main.scss'
import { Card } from 'antd'
import ArticleCard from './ArticleCard';
import { Link, graphql } from "gatsby"

const Main = ({ data, location }) => {
    const posts = data.allMarkdownRemark.nodes

    return (
        <>
            <div className="Main">
            {posts.map(post => {
                return(<ArticleCard title={post.frontmatter.title}
                    description={post.frontmatter.description} key={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} image={ post.frontmatter.featuredImage}></ArticleCard>);
            }
            )}
            
                
            </div>
        </>
    )
}

export default Main
