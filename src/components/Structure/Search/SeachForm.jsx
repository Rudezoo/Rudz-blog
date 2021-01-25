import React,{useState} from 'react'
import { navigate } from 'gatsby';
import { Input } from 'antd';

const SearchForm = ({ query }) => {
    return (
        <>
            <form role="search" method="GET">
                <label htmlFor="search-input"><h1>Search</h1></label>
                <Input
                    type="text"
                    id="search-input"
                    name="keywords"
                    onChange={(e) => navigate(`/Search?keywords=${/* encodeURIComponent */(e.target.value)}`)}
                    value={query} placeholder="검색어를 입력하세요(영어로 입력해주세요)" onKeyUp={(e)=>{
                        e.target.value=e.target.value.replace(/[^a-zA-Z-_0-9]/g,'')
                    }}>
                </Input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SearchForm