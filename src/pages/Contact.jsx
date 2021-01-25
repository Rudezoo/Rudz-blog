import React from 'react'
import MyLayout from '../components/MyLayout'
import Header_Menu from '../components/Structure/Header_Menu'
import '../design/css/About.scss'

const Contact = () => {
    return (
        <>  
{/*         <div className="About">
            <Header_Menu color='black'></Header_Menu>
            <div className="About_Content">
                This is about
            </div>
        </div>
 */}
        <MyLayout menucolor="white" banner={<div className="AboutBanner"></div>}>
            <div>
                
            </div>
        </MyLayout>
        </>
    )
}

export default Contact;