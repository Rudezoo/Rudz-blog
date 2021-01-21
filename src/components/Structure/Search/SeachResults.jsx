import React, { useEffect } from 'react'
import ResultBox from './ResultBox'

const SearchResults = ({ posts, location, query, results }) => {

    return (
        <>
             {!!results.length && query &&
                <h2 aria-live="assertive">Found {results.length} posts on "{query}"</h2>
            }
            {!!results.length &&
                results.map(({v,i,
                    title,
                    url,
                    date,
                    description,
                    tags
                  }
              ) => (
                <ResultBox key={title+date} title={title} url={url} date={date} description={description} tags={tags}/>
                  ))
                  } 
                

{/*             <div>
                {posts.map(post => {
                    return (<div key={post.fields.slug}><ResultBox post={post} /></div>);
                }
                )}
            </div> */}
        </>
    )
}

export default SearchResults;

