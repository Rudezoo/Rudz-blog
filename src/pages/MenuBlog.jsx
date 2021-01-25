import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyLayout from "../components/MyLayout"
import '../design/css/Blog.scss'

const MenuBlog = () => {


  return (
    <>
      <MyLayout banner={<div className="AboutBanner"></div>}>
        Blog
      </MyLayout>
    </>

  )
}

export default MenuBlog

