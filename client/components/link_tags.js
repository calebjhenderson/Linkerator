import React, { useState, useEffect } from 'react';
import { getLinkTags, editLinkTag, deleteLinkTag } from '../api/index.js';


const Link_Tags = ({                    
 }) => {
  const [link_tags, setLinkTags] = useState([]);
  useEffect(()=>{
    getLinkTags()
    .then((link_tags)=>{
      setLinkTags(link_tags)
    })
  }, []);

  let link_tagCount = link_tags.length

  return (
    <div id="App">
      <h3>Amount of link_tags: ({ link_tagCount } )</h3>
      
      {link_tags.map(({ id, name, count }) => (
        <p key={ id }>
          
          <span>                                
            ({ count }x) { name }
          </span><br /> 

          <button onClick={
            () => editLinkTag({ id, name })
          }> Edit Tag </button>

          <button onClick={
            () => deleteLinkTag({ id })
          }> Delete Tag </button>
        </p>
      ))}
      </div>
  );
}

export default Link_Tags