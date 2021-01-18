import React from 'react';
import { Menu,Divider } from 'antd';
import '../../design/css/Header.scss'

const Header_Menu=()=>{
    
    return (
        <>
            <div className="Header_Menu">
                <div className="MenuItem">
                    Home
                </div>
                <div className="MenuItem">
                    About
                </div>
                <div className="MenuItem">
                    Blog
                </div>
                <div className="MenuItem">
                    Contact
                </div>
            </div>
        </>
    )
}

export default Header_Menu