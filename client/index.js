import React from 'react'
import ReactDOM from 'react-dom'
import { Bookmarks } from './components/bookmarks.js'


const app = document.querySelector('#app')
const styles = {
    container:{
        backgroundColor:'pink'
    }
}

// const SearchTagsForm = () => {
//     return (
//         <div style={styles.container}>
        
//             <input type="text" label="search"/> 
//             <button >Search Tags</button>
//              </div>
//     )
// }





// const SearchLinksForm = () => {
//     return (
//         <div style={styles.container}>
//             <input type="text" label="search"/> 
//             <button >Search Links</button>
//              </div>
//     )
// }




// const SearchLinksResults = () => {
//     return (
//         <div id="App" style={styles.container}>
// {/* THIS NEEDS TO RE RENDER BASED ON STATE CHANGING, WITH THE DATA FROM THE BUTTON CLICK */}
//         </div>
//     )
// }

// const SearchTagsResults = () => {
//     return (
//         <div id="App" style={styles.container}>
//             {/* SAME HERE */}
//             <button>Edit</button>
//             <button>Delete</button>
//         </div>
//     )
// }




const App = () => {
    const [links, setLinks] = useState([]);
    const [tags, setTags] = useState([]);
    
    return (
        <div id= "App" style={styles.container}>
            <h1>Linkerator!</h1>
            <h2>Neat stuff. Oh boy.</h2>
            <SearchBookmarks/>
            <Bookmarks 
            getLinks = { links }
            patchLink = { patchLink }
            postLink = { postLink }
            deleteLink = { deleteLink }/>
            <SearchTags/>
            <Tags/>
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


