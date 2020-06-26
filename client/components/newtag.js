import React from 'react'

//how will these inputs values reach the string in the url for the route??
const newTag = ({postTag})=>{
    return (
        <div id="newTag">
          <h3>Create New Tag</h3>
          <input></input>
          <button onclick= {()=>{postTag()}
        }>Post</button> 
          </div>

    )}
export default newTag;