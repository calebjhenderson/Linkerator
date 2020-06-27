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

const styles = {
    title:{
        backgroundColor:'pink'
    },
    neat:{
        backgroundColor:'green'

    }
}


const App = () => {
    
    return (
        <div id= "App" >
            <h1 style={styles.title}>Linkerator!</h1>
            <h2 style={styles.neat}>Neat stuff. Oh boy.</h2>
            <Bookmarks/>
            <NewBookmark/>
            <Tags/>
            <NewTag/>
            <Link_Tags/>
            <NewLinkTag/>
            
            {/* <SearchBookmarks/> */}
            {/* <SearchTags/> */}
            {/* <SearchLinkTags/>*/}

            <h3>Needs some style now!</h3>
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


