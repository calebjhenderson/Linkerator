import React from 'react'

//how will these forms that get added take input values??
const newBookmark = ({postLink})=>{
    return (
        <div id="newBookmark">
          <h3>Create New Bookmark</h3>
          <input></input>
          <button onclick= {()=>{postLink()}
        }>Post</button> 
          </div>

    )}
export default newBookmark;