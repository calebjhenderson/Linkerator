import React,{ useState, useEffect } from 'react'
import { postLinkTag } from '../api/index.js'

//how will these inputs that get added take input values??

const NewLinkTag = ({
  
})=>{

  const [newLinkTag, setLinkTags] = useState([]);
  useEffect(()=>{
    postLinkTag()
    .then((link_tags)=>{
      setLinkTags(link_tags)
    })
  }, []);
  
    return (
        <div id="newLinkTag">
          <h3>Create New Link-Tag</h3>
          
          {/* <input type = 'text'> </input> */}
          
          <button onclick= {()=>{postLinkTag()}
        }>Create</button> 
          </div>

    )}
export default NewLinkTag;