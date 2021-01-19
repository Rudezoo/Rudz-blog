import React,{useEffect} from 'react'
import MyLayout from '../components/MyLayOut'
import '../design/css/Blog.scss'

const BlogPost=({post})=>{

    return(
        <>
            <MyLayout banner={<div className="BlogBanner"></div>}>
            </MyLayout>
        </>
    )
}

export default BlogPost;