import React,{ useState, useEffect } from 'react'
import { postLinkTag } from '../api/index.js'

//how will these inputs that get added take input values??

const NewLinkTag = ({
  
})=>{

  const [newLinkTag, setLinkTags] = useState([]);
 
  
    return (
        <div id="newLinkTag">
          <h3>Create New Link-Tag</h3>
          
          {/* <input type = 'text'> </input> */}
          
          <button onClick= {()=>{postLinkTag()}
        }>Create</button> 
          </div>

    )}
export default NewLinkTag;