import React,{ useState, useEffect } from 'react'
import { postTag } from '../api/index.js'


const NewTag = ({
  
})=>{

  const [newTag, setTags] = useState([]);

  const updatedTags = postTag()
  
  
    return (
        <div id='App'>
          <h3>Create New Tag</h3>
          
          <input type = "text" placeholder="enter new tag"/> 
          
          <button onClick= {()=>{postTag();setTags(updatedTags)}
        }>Create</button> 
          </div>

    )
     
    }
export default NewTag;