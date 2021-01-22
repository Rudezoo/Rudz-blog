import { formatCountdown } from "antd/lib/statistic/utils"

import React,{useEffect,useState} from 'react'
import '../../../design/css/ArticleCard.scss'
import Img from "gatsby-image"
import { Card } from 'antd'
import { Link,navigate } from "gatsby"

const ArticleCard = ({post}) => {

    const { title, description, date, tags, featuredImage }=post.frontmatter
    let imagefluid;
    if (featuredImage !== null) {
        imagefluid = featuredImage.childImageSharp.fluid
    }

    const OnMove=(event)=>{
        event.preventDefault();
        navigate(post.fields.slug,{state:{post}});
    }

    return (
        <>  
                <Card hoverable cover={<Img fluid={imagefluid} className="ArticleImage" style={{
                    height:"200px"
                }}></Img>} style={{
                    width:"300px",
                    marginTop:"20px"
                }} onClick={OnMove}>
                    <div className='ArticleTag'>
                        {tags.map((v,i)=>{
                            return('['+v+']')
                        })}
                    </div>
                    <div className="ArticleHeader">
                        {title}
                    </div>
                    <div className="ArticleDescription">
                        {date}
                        <br />
                        {description}
                    </div>
                </Card>

        </>
    )
}

export default ArticleCard