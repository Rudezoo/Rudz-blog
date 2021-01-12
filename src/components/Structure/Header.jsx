import React from 'react';
import '../../design/css/Header.scss'
import Header_Banner from './Header_Banner';
import Header_Menu from './Header_Menu';

const Header=()=>{
    return (
        <>
            <div className="Header">
                <Header_Menu/>
                <Header_Banner/>
            </div>
        </>
    )
}

export default Header