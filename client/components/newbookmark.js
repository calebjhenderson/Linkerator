import React,{ useState, useEffect } from 'react'
import { postLink } from '../api/index.js'


const NewBookmark = ({

})=>{

  const [bookmarks, setBookmarks] = useState([]);
  

    return (
        <div id="newBookmark">
          <h3>Create New Bookmark</h3>
          
          {/* <input type = 'text'> add a link here </input> */}
          
          <button onClick= {()=>{postLink()}
        }>Post</button> 
          </div>

    )}
export default NewBookmark;

