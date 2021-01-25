import React, { useState, useEffect } from 'react'
import MyLayout from '../components/MyLayout'
import { Input } from 'antd';
import ResultBox from '../components/Structure/Search/ResultBox'

import SearchForm from '../components/Structure/Search/SeachForm';
import SearchResults from '../components/Structure/Search/SeachResults';

import '../design/css/Search.scss'

const Search = (props) => {

    const [results, setresults] = useState([]);
    const { data, location } = props;

    const [query, setquery] = useState('');
    const [filterdData, setfilterdData] = useState([]);
    const posts = data.allMarkdownRemark.edges
    /* const searchQuery = new URLSearchParams(location.search).get('keywords') || ''; */

    /*     useEffect(() => {
            if (query && window.__LUNR__) {
                window.__LUNR__.__loaded.then(lunr => {
                    const refs = lunr.en.index.search(query);
                    const Resultposts = refs.map(({ ref }) => lunr.en.store[ref]);
                    setresults(Resultposts);
                }
                )
            }
    
        }, [query]) */

    useEffect(() => {
        setresults(filterdData ? filterdData : []);
    }, [filterdData])

    useEffect(()=>{
        setfilterdData(posts.filter((post) => {
            const { description, title, tags } = post.node.frontmatter;
            const { excerpt } = post.node;
            return (
                (description &&
                    description.toLowerCase().includes(query.toLowerCase())) ||
                (title && title.toLowerCase().includes(query.toLowerCase())) ||
                (tags && tags.join("").toLowerCase().includes(query.toLowerCase())) ||
                (excerpt && excerpt.toLowerCase().includes(query.toLowerCase()))
            );
        }))
    },[query])

    const OnHandleInput = (e) => {
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if(korean.test(e.target.value)){           
            setquery(e.target.value);
            console.log(query)
        }else{
            setquery(e.target.value);
        }
        
    }


    return (
        <>
            <MyLayout menucolor="white" banner={<div className="AboutBanner"></div>}>
                <div className="Search">
                    <form role="search" method="GET">
                        <label htmlFor="search-input"><h1>Search posts</h1></label>
                        <Input
                            type="search"
                            id="search-input"
                            name="keywords"
                            onChange={OnHandleInput}
                            placeholder="검색어를 입력하세요" >
                        </Input>
                        {/* <button type="submit">Submit</button> */}
                    </form>
                    {

                    }
                    {!!results.length && query &&
                        <h2 aria-live="assertive">Found {results.length} posts on "{query}"</h2>
                    }
                    {!!results.length &&
                        results.map((v, i
                        ) => (
                            <ResultBox key={v + i} title={v.node.frontmatter.title} url={v.node.fields.slug} date={v.node.frontmatter.date} description={v.node.frontmatter.description} tags={v.node.frontmatter.tags} />
                        ))
                    }
                    {/*<SearchForm query={searchQuery}></SearchForm>
                    <SearchResults className="Search_Results" query={searchQuery} results={results} posts={posts}></SearchResults> */}
                </div>
            </MyLayout>
        </>
    )
}

export default Search;

export const query = graphql`
query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
