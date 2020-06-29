import React, { useState, useEffect } from 'react';
import { getTags, editTag, deleteTag, fetchBookmarks } from '../api/index.js';


const Tags = ({                    
 }) => {
  const [tags, setTags] = useState([]);
  useEffect(()=>{
    fetchBookmarks()
    .then((tags)=>{
      setTags(tags)
    })
  }, []);

  let tagCount = tags.length

  return (
    <div id="App">
       <div className="Tags"> 
      
      <h3>Amount of Tags: ({ tagCount } )</h3>
      
      {tags.map(({ id, name, comment, imageUrl, tag, url }) => (
        <p key={ id }>
          
          <span>                                
            ({ id })# { tag }<br/>
           <br/>
            Comments: {comment}

          </span><br /> 

          <button onClick={
            () => editTag({ id, name })
          }> Edit Tag </button>

          <button onClick={
            () => deleteTag({ id })
          }> Delete Tag </button>
        </p>
      ))}
      </div>
      </div>
  );
}

export default Tags;