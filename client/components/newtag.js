import React,{ useState, useEffect } from 'react'
import { postTag } from '../api/index.js'

//how will these inputs that get added take input values??

const NewTag = ({
  
})=>{

  const [newTag, setTags] = useState([]);
  useEffect(()=>{
    postTag()
    .then((tags)=>{
      setTags(tags)
    })
  }, []);
  
    return (
        <div id="newTag">
          <h3>Create New Tag</h3>
          
          {/* <input type = 'text'> </input> */}
          
          <button onclick= {()=>{postTag()}
        }>Create</button> 
          </div>

    )}
export default NewTag;