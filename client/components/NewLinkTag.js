import React,{ useState, useEffect } from 'react'
import { postLinkTag } from '../api/index.js'


const NewLinkTag = ({
  
})=>{

  const [newLinkTag, setLinkTags] = useState([]);
  const updatedLinkTags =  postLinkTag()
 
  
    return (
        <div id= "App">
          <h3>Create New Link-Tag</h3>
          
          {/* <input type = 'text'> </input> */}
          
          <button onClick= {()=>{postLinkTag();setLinkTags(updatedLinkTags)}
        }>Create</button> 
          </div>

    )}
export default NewLinkTag;