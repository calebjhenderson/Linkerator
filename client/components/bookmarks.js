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
  let state = {
    count: 0
  };

  // handleClick = () => {

  //   this.setState(prev => ({ count: prev.count + 1 }));
  // };
  return (
    <div id="App">

    <div className="Bookmarks"> 
      <h3>Bookmark Count: ({ bookmarkCount } )</h3>

      {/* <button className="block" onClick={this.handleClick()}>
        <div className="counter">{this.state.count}</div>
      </button> */}

      

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
