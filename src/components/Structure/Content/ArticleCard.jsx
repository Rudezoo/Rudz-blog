import { formatCountdown } from "antd/lib/statistic/utils"

import React from 'react'
import '../../../design/css/ArticleCard.scss'
import Img from "gatsby-image"
import { Card } from 'antd'

const ArticleCard = (props) => {

    const { title, description, date, tags, image } = props


    let imagefluid;
    if (image !== null) {
        imagefluid = image.childImageSharp.fluid
    }

    return (
        <>
            <div>
                <Card hoverable className="ArticleCard">
                    <div>
                        <Img fluid={imagefluid} className="ArticleImage"></Img>
                    </div>
                    <div className='ArticleTag'>
                        {tags}
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

            </div>
        </>
    )
}

export default ArticleCard