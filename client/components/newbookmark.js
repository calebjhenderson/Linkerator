import React,{ useState, useEffect } from 'react'
import { postLink } from '../api/index.js'

//how will these forms that get added take input values??
const NewBookmark = ({

})=>{

  const [newBookmark, setBookmarks] = useState([]);
  useEffect(()=>{
    postLink()
    .then((links)=>{
      setBookmarks(links)
    })
  }, []);
  
    return (
        <div id="newBookmark">
          <h3>Create New Bookmark</h3>
          
          {/* <input type = 'text'> </input> */}
          
          <button onclick= {()=>{postLink()}
        }>Post</button> 
          </div>

    )}
export default NewBookmark;

