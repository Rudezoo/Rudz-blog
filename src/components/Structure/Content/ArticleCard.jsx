import { formatCountdown } from "antd/lib/statistic/utils"

import React, { useEffect, useState } from 'react'
import '../../../design/css/ArticleCard.scss'
import Img from "gatsby-image"
import { Card, Tag, Badge } from 'antd'
import { Link, navigate } from "gatsby"

const ArticleCard = ({ post }) => {

    const { title, description, date, tags, featuredImage } = post.frontmatter
    let imagefluid;
    if (featuredImage !== null) {
        imagefluid = featuredImage.childImageSharp.fluid
    }

    const OnMove = (event) => {
        event.preventDefault();
        navigate(post.fields.slug, { state: { post } });
    }

    return (
        <>
            <Card hoverable cover={<Img fluid={imagefluid} className="ArticleImage" style={{
                height: "200px"
            }}></Img>} style={{
                width: "300px",
                marginTop: "20px"
            }} onClick={OnMove}>

                <div className='ArticleTag'>
                    {tags.map((v, i) => {
                        return (<Tag style={{
                            marginRight: "3px"
                        }}>{v}</Tag>)
                    })}
                </div>
                <div className="ArticleHeader">
                    <h5 style={{
                        marginTop: "20px",
                        fontWeight: "bold"
                    }}>{title}</h5>
                </div>
                <div className="ArticleDescription">
                    <Badge color="blue" text={date}></Badge>
                    <div style={{
                        marginTop: "10px",
                        fontSize: "15px"
                    }}>
                        <Badge.Ribbon text="Description" style={{
                            backgroundColor:"black"
                        }}>
                            <Card style={{
                                padding:"1%"
                            }}>{description}</Card>
                        </Badge.Ribbon>
                    </div>
                </div>
            </Card>

        </>
    )
}

export default ArticleCard