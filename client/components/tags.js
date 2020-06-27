import React, { useState, useEffect } from 'react';
import { getTags, editTag, deleteTag } from '../api/index.js';


const Tags = ({                    
 }) => {
  const [tags, setTags] = useState([]);
  useEffect(()=>{
    getTags()
    .then((tags)=>{
      setTags(tags)
    })
  }, []);

  let tagCount = tags.length

  return (
    <div id="App">
      <h3>Amount of tags: ({ tagCount } )</h3>
      
      {tags.map(({ id, name, count }) => (
        <p key={ id }>
          
          <span>                                
            ({ count }x) { name }
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
  );
}

export default Tags