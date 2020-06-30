import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import Bookmarks  from './components/bookmarks'
import Tags  from './components/tags'
import Link_Tags  from './components/link_tags'

import NewBookmark from './components/newbookmark'
import NewTag from './components/newtag'
import NewLinkTag from './components/NewLinkTag'

import {fetchBookmarks} from './api/index.js'

import SearchBookmarks from './components/searchbookmarks'
import SearchTags from './components/searchtags'


const app = document.querySelector('#app')

const App = () => {
    const [results, setResults] = useState([]);
    fetchBookmarks().then(console.log);
    return (
        <div id = 'app'>
            <h1 >Linkerator!</h1>
            <h3> Bookmark Your Favorite Links</h3>
            <SearchBookmarks setResults={setResults}/>
            <Bookmarks results={results}/>
            <SearchTags/>
            <Tags/>
            
            
            
            <NewBookmark/>
            <NewTag/>
          
            {/* <Link_Tags/>
            <NewLinkTag/> */}
            


        </div>
    )
}



ReactDOM.render(
    <App></App>,
    app,
    () => {
        console.log('Rendered!')
    }
);


