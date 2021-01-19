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
                <Link to='/' className="MenuItem">Home</Link>
                <Link to='/About' className="MenuItem">About</Link>
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