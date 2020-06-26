import React from 'react';
import { deleteTag } from './axios';


const Tags = ({ 
  getTags,
  editTags,                       //axios calls i wrote to access the db at certain routes 
  deleteTags
 }) => {
  let tagCount= getTags.reduce((tagcount, tag) => {
    return tagcount + tag.count
  }, 0);

  return (
    <div id="App">
      <h3>Amount of tags: ({ tagCount } )</h3>
      
      {getTags.map(({ id, name, count }) => (
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


module.exports= {Bookmarks};