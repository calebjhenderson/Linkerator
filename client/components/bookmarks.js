import React from 'react';


const Bookmarks = ({ 
  getLinks,
  editLink,                       //axios calls i wrote to access the db at certain routes 
  deleteLink
 }) => {
  let bookmarkCount = getLinks.reduce((linkcount, link) => {
    return linkcount + link.count
  }, 0);

  return (
    <div id="App">
      <h3>Amount of bookmarks: ({ bookmarkCount } )</h3>
      
      <div className="Bookmarks"> 
      {getLinks.map(({ id, name, count }) => (
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


module.exports= {Bookmarks};
//export not found?