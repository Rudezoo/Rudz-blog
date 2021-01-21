import React from 'react'
import {navigate} from 'gatsby'

const ResultBox = (props) => {

    const { title, description, date, tags, url } = props;

    const OnMovePost=()=>{
        navigate(url);
    }

    return (
        <>
            <div className="ResultBox" onClick={OnMovePost}>
                <div >
                    <h3>
                        {title}
                    </h3>
                    {tags}
                </div>
                <div>
                    {date}
                </div>
                <div>
                    {description}
                </div>
            </div>

        </>
    );
}

export default ResultBox;