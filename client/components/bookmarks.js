import React, { useState, useEffect } from 'react';

import {getLinks, editLink, deleteLink, fetchBookmarks } from '../api/index.js';



const Bookmarks = ({ 
 }) => {
   const [links, setLinks] = useState([]);

  useEffect(()=>{
    fetchBookmarks()
    .then((links)=>{
      setLinks(links)
    })
  }, []);
  
  return (
    <div id="App">

    <div className="Bookmarks"> 
      <h3>Bookmark Count: ({ links.length } )</h3>

      {links.map(({ id, name, url}) => (
        <p key={ id }>
          
          <span>                                
           { id, name }<br /> 
           {url}
          </span><br /> 
          <input type="text" placeholder="enter url"/>
          <button onClick={
            () => editLink({ id, name })
          }> Edit </button>

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
