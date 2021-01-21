import React,{useEffect} from "react"
import { Link } from "gatsby"
import Header from "./Structure/Header"
import Main from "./Structure/Content/Main"
import Footer from "./Structure/Footer"

import {Divider} from 'antd'


const MyLayout = ({ children,banner,menucolor,posts }) => {


/*   useEffect(()=>{
    console.log(children)
  },[]); */
 /*  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  } */

  return (
    <>
      <Header banner={banner} menucolor={menucolor}></Header>
      <Divider></Divider>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  )
}

export default MyLayout
