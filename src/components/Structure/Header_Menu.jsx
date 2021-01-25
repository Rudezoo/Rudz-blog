import React,{useEffect} from 'react';
import { Menu,Divider } from 'antd';
import '../../design/css/Header.scss'

import {Link} from 'gatsby'

const Header_Menu=(props)=>{

    const {color}=props;

    useEffect(()=>{
        if(color==='black'){
            let temp = document.getElementsByClassName('MenuItem');
            for (let i = 0; i < temp.length; i++) {
                temp[i].style.color = 'black';
            }
        }

        console.log(color)
    },[]);
    
    return (
        <>
            <div className="Header_Menu">
                <Link to='/' className="MenuItem">HOME</Link>
                <Link to='/Search' className="MenuItem">SEARCH</Link>
                <Link to='/About' className="MenuItem">ABOUT</Link>
                <Link to='/Contact' className="MenuItem">CONTACT</Link>
            </div>
        </>
    )
}

export default Header_Menu