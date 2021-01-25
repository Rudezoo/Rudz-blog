import React,{useState} from 'react';
import '../../design/css/Header.scss'
import {Button} from 'antd'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const Header_Banner = () => {

    const [BannerText, setBannerText] = useState('RUDZ');    

    const ChangeBackground = (event) => {
            let temp = document.getElementsByClassName('bgimage');
            for (let i = 0; i < temp.length; i++) {
                temp[i].style.backgroundImage = "url('/icons/logo.png')";
            }
            temp = document.getElementsByClassName('Bgpicture');
            temp[0].style.backgroundColor = 'rgb(78, 78, 78)';

            temp = document.getElementsByClassName('MenuItem');
            for (let i = 0; i < temp.length; i++) {
                temp[i].style.color='white';
            }
    }

    const ChangeBackgroundSMILE=()=>{
        let temp = document.getElementsByClassName('bgimage');
            for (let i = 0; i < temp.length; i++) {
                temp[i].style.backgroundImage = "url('/icons/smile.png')";
            }
            temp = document.getElementsByClassName('Bgpicture');
            temp[0].style.backgroundColor = 'Yellow';
    }

    const OnChangeText=()=>{
        setBannerText('WELCOME TO RUDZ!');
    }

    const OnBackText=()=>{
        setBannerText('RUDZ');
    }

    return (
        <>
            <div className="Header_Banner">
                <div className="Bgpicture">
                    {
                        arr.map((v, i) => (
                            <span className="bgimage" key={i}></span>
                        ))
                    }
                </div>
                <div className="Mention" onMouseEnter={OnChangeText} onMouseLeave={OnBackText}>
                    <div>
                        {/* <img src={image} className="logo2"></img>  */}
                        {BannerText}
                    </div>
                </div>
                <div className="ChangeButton">
                    <Button onClick={ChangeBackground} ghost className="changebutton">RUDZ</Button>
                    <Button onClick={ChangeBackgroundSMILE} ghost className="changebutton">SMILE</Button>
                </div>
            </div>
        </>
    )
}

export default Header_Banner