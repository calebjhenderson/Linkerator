import React from 'react'

//how will these forms that get added take input values??
const newLinkTag = ({postLinkTag})=>{
    return (
        <div id="newLinkTag">
          <h3>Create New LinkTag</h3>
          <input></input>
          <button onclick= {()=>{postLinkTag()}
        }>Post</button> 
          </div>

    )}
export default newLinkTag;