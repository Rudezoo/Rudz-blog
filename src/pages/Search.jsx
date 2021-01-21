import React, { useState, useEffect } from 'react'
import MyLayout from '../components/MyLayOut'

import SearchForm from '../components/Structure/Search/SeachForm';
import SearchResults from '../components/Structure/Search/SeachResults';

import '../design/css/Search.scss'

const Search = (props) => {

    const [results, setresults] = useState([]);
    const { data, location } = props;

    const posts = data.allMarkdownRemark.nodes
    const searchQuery = new URLSearchParams(location.search).get('keywords') || '';

    useEffect(() => {
        if (searchQuery && window.__LUNR__) {
            window.__LUNR__.__loaded.then(lunr => {
                const refs = lunr.en.index.search(searchQuery);
                const Resultposts = refs.map(({ ref }) => lunr.en.store[ref]);
                setresults(Resultposts);
            }
            )
        }

    }, [location.search])

    useEffect(() => {
        console.log(searchQuery)
    }, [])


    return (
        <>
            <MyLayout menucolor="white" banner={<div className="AboutBanner"></div>}>
                <div className="Search">
                    <SearchForm query={searchQuery}></SearchForm>
                    <SearchResults className="Search_Results" query={searchQuery} results={results} posts={posts}></SearchResults>
                </div>
                <div>

                </div>
            </MyLayout>
        </>
    )
}

export default Search;

export const query = graphql`
query MyQuery {
    allMarkdownRemark {
      nodes {
        fields {
            slug
        }
        frontmatter {
          title
          description
          date
          tags
        }
      }
    }
  }
  
  `