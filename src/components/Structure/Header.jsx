import React,{useEffect} from 'react';
import '../../design/css/Header.scss'
import Header_Banner from './Header_Banner';
import Header_Menu from './Header_Menu';

const Header = ({ banner ,menucolor}) => {


    return (
        <>
            <div className="Header">
                <Header_Menu color={menucolor}/>
                    {banner}
            </div>
        </>
    )
}

export default Header