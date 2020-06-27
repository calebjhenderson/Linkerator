import React from 'react'
import ReactDOM from 'react-dom'
import Bookmarks  from './components/Bookmarks'
import Tags  from './components/tags'
import Link_Tags  from './components/link_tags'

import NewBookmark from './components/NewBookmark'
import NewTag from './components/NewTag'
import NewLinkTag from './components/NewLinkTag'

import SearchBookmarks from './components/SearchBookmarks'
import SearchTags from './components/SearchTags'



const app = document.querySelector('#app')




const App = () => {
    
    return (
        <div id = 'app'>
            <h1 >Linkerator!</h1>
            <h3 >Bookmark Your Favorite Links</h3>
            <Bookmarks/>
            <NewBookmark/>
            <Tags/>
            <NewTag/>
            <Link_Tags/>
            <NewLinkTag/>
            
            {/* <SearchBookmarks/>
            <SearchTags/>
            <SearchLinkTags/> */}

        </div>
    )
}



ReactDOM.render(
    <App></App>,
    app,
    () => {
        console.log('Rendered!!!')
    }
)


