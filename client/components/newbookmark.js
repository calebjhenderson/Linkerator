import React,{ useState, useEffect } from 'react'
import { postLink } from '../api/index.js'


const NewBookmark = ({

})=>{

  const [bookmarks, setBookmarks] = useState([]);
  const updatedBookmarks =  postLink()
  
    return (
        <div id= "App">
          <h3>Create New Bookmark</h3>
          <input type="text" placeholder='enter url to bookmark'/>
          
          <button onClick= {()=>{postLink(); setBookmarks(updatedBookmarks)}
          }>Create</button> 
      
          </div>
          

          )};

export default NewBookmark;

