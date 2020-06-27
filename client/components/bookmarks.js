import React, { useState, useEffect } from 'react';

import {getLinks, editLink, deleteLink } from '../api/index.js';


const Bookmarks = ({ 
 }) => {
   const [links, setLinks] = useState([]);

  useEffect(()=>{
    getLinks()
    .then((links)=>{
      setLinks(links)
    })
  }, []);
  

  let bookmarkCount = links.length

  return (
    <div id="App">

    <div className="Bookmarks"> 
      <h3>Bookmark Count: ({ bookmarkCount } )</h3>

      {/* <h3> Amount of clicks:</h3> */}

      {/* <h5> Comments: </h5> */}
      
      
      {links.map(({ id, name, count }) => (
        <p key={ id }>
          
          <span>                                
            ({ count }x) { name }
          </span><br /> 

          <button onClick={
            () => editLink({ id, name })
          }> Edit Bookmark </button>

          <button onClick={
            () => deleteLink({ id })
          }> Delete Bookmark </button>
        </p>
      ))}
      </div>
    </div>
  );
}


export default Bookmarks;
