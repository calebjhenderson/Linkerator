import React,{ useState, useEffect } from 'react'
import { postTag } from '../api/index.js'

//how will these inputs that get added take input values??

const NewTag = ({
  
})=>{

  const [newTag, setTags] = useState([]);

  
    return (
        <div id="newTag">
          <h3>Create New Tag</h3>
          
          {/* <input type = 'text'> </input> */}
          
          <button onClick= {()=>{postTag()}
        }>Create</button> 
          </div>

    )}
export default NewTag;