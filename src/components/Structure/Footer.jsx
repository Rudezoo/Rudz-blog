import React from 'react';
import '../../design/css/Footer.scss'

import {Divider} from 'antd'
import image from '../../image/logo/logo.png'
const Footer=()=>{

    return (
        <>
            <Divider/>
            <div className="Footer">
                <img src={image} className="logo"></img>
                <Divider type="vertical"/>
                © Rude_zoo {new Date().getFullYear()}
            </div>
        </>
    )
}

export default Footer