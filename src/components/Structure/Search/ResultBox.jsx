import React from 'react'
import { navigate } from 'gatsby'
import { Card, Tag, Badge } from 'antd'

const ResultBox = (props) => {

    const { title, description, date, tags, url } = props;

    const OnMovePost = () => {
        navigate(url);
    }

    return (
        <>
            <div className="ResultBox" onClick={OnMovePost}>
                <div >
                    <h5 style={{
                        fontWeight:"bold"
                    }}>
                        {title}
                    </h5>
                        {tags.map((v, i) => {
                            return (<Tag style={{
                                marginRight: "3px"
                            }} key={v}>{v}</Tag>)
                        })}
                    </div>
                    <div style={{
                        marginTop:"2px"
                    }}>
                        <Badge color="cyan" text={date}></Badge>
                    </div>
                    <div style={{
                        paddingLeft:"10px"
                    }}>
                        {description}
                    </div>
                </div>

        </>
    );
}

export default ResultBox;